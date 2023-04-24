/* eslint-disable import/prefer-default-export */
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Location } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from './App';

import { setupStore } from './redux/store';

const store = setupStore({});

export function render(url: string | Partial<Location>, opts: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
