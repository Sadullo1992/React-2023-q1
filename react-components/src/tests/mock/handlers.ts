import { rest } from 'msw';
import mockFullResponse from '../../data/fullResponse.json';
import SEARCH_VALUE from '../../utils/contants';

const handlers = [
  rest.get('*', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');
    if (query === SEARCH_VALUE) return res(ctx.status(200), ctx.json(mockFullResponse));
    if (query === 'not-find-result-by-query')
      return res(
        ctx.status(200),
        ctx.json({
          total: 26,
          total_pages: 3,
          results: [],
        })
      );
    return res.once(
      ctx.status(500),
      ctx.json({
        errors: ['Something went wrong on our end'],
      })
    );
  }),
];

export default handlers;
