describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('The Home page successfully loads', () => {
    cy.get('h1').contains('Our Gallery');
  });

  it('The About page successfully loads', () => {
    cy.visit('/about');
    cy.get('h1').should('contain', 'About page');
  });

  it('The Not Found page successfully loads', () => {
    cy.visit('/wrong-route');
    cy.get('h1').should('contain', '404');
  });

  it('Search box to have value', () => {
    cy.getByData('search-box').type('fanta');
    cy.getByData('search-box').should('have.value', 'fanta');
    cy.get('.nav__link').eq(1).click();
    cy.get('.nav__link').eq(0).click();
    cy.getByData('search-box').should('have.value', 'fanta');
  });

  it('Test photos, pagination, sort-by, on searching photo by query', () => {
    cy.getByData('search-box').type('fanta');

    cy.getByData('search-btn').click();

    // Spinner
    cy.get('.spinner').should('be.visible');

    // Has photos
    cy.getByData('more-btn').eq(0).should('exist');

    // SortBy
    cy.getByData('sort-select').select(1);
    cy.getByData('sort-select').should('have.value', 'latest').and('not.have.value', 'relevant');

    // Pagination
    cy.getByData('pagination-btn').eq(0).should('have.class', 'disabled');
    cy.getByData('pagination-btn').eq(2).click();
    cy.getByData('pagination-btn').eq(0).should('not.have.class', 'disabled');
    cy.getByData('pagination-btn').eq(1).should('contain', 2);
    cy.getByData('pagination-btn').eq(0).click();
    cy.getByData('pagination-btn').eq(0).should('have.class', 'disabled');
    cy.getByData('pagination-btn').eq(1).should('contain', 1);
    cy.getByData('pagination-btn').eq(2).click();
    cy.getByData('pagination-btn').eq(2).click();
    cy.getByData('pagination-btn').eq(1).should('contain', 3);
    cy.getByData('pagination-btn').eq(2).should('have.class', 'disabled');
  });

  it('Photos not found, on searching photo by weird query', () => {
    cy.getByData('search-box').type('dsgfjergerjhgebgvyervweqkgjberhhqefvhvqehfrhfegvhe');
    cy.getByData('search-btn').click();

    cy.getByData('not-found-photos')
      .should('exist')
      .contains('Sorry, We could not find any photos...');
  });

  it('Modal', () => {
    cy.getByData('search-box').type('fanta');
    cy.getByData('search-btn').click();

    cy.getByData('more-btn').eq(0).click();

    cy.get('.spinner').should('be.visible');
    // has opened modal
    cy.getByData('modal').should('exist');

    // Close by click close btn
    cy.getByData('close-btn').click();
    cy.getByData('modal').should('not.exist');

    // Open again
    cy.getByData('more-btn').eq(0).click();
    cy.getByData('modal').should('exist');

    // does not close on click modal content
    cy.getByData('modal-inner').click();
    cy.getByData('modal').should('exist');

    // Close by click dark layer
    cy.getByData('modal').click('topRight');
    cy.getByData('modal').should('not.exist');
  });

  it('Form', () => {
    cy.visit('/order');
    cy.get('h1').should('contain', 'Place order');

    // Check name input error message
    cy.getByData('submit-btn').click();
    cy.contains('Name is required!').should('exist');

    cy.getByData('name-input').type('hi');
    cy.getByData('submit-btn').click();
    cy.contains('At least 3 letter').should('exist');
    cy.getByData('name-input').clear();

    cy.getByData('name-input').type('hey');
    cy.getByData('submit-btn').click();
    cy.contains('Name should start with capital letter!').should('exist');
    cy.getByData('name-input').clear();

    // Fill form & submit
    cy.getByData('name-input').type('Sadullo');
    cy.getByData('country-select').select(1);
    cy.getByData('date-input').type('2023-05-25');
    cy.fixture('shop.svg').as('photoFile');
    cy.getByData('file-input').selectFile('@photoFile');
    cy.get('[type="radio"]').first().check();
    cy.get('[type="checkbox"]').check();

    cy.getByData('submit-btn').click();

    cy.contains('Data has been saved!').should('exist');
    cy.getByData('completed-btn').should('exist');
  });
});
