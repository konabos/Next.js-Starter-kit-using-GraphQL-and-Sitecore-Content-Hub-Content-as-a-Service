import '../styles/index.css';
import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import localTracker from '../lib/localtracker';

export default function MyApp({ Component, pageProps }) {
  return (
    <UniformTracker trackerInstance={localTracker}>
      <Component {...pageProps} />
    </UniformTracker>
  );
}
