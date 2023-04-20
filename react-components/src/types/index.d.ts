import { RootState } from '../redux/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?: RootState;
  }
  let fetch: typeof import('node-fetch').default;
}
