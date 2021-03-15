import { Tracker } from '@uniformdev/optimize-tracker-common';
import { DeliveryAPIResult } from '@uniformdev/optimize-common';
import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser';
import intentManifest from './intentManifest.json';

const localTracker: Tracker = createDefaultTracker({
  intentManifest: intentManifest as DeliveryAPIResult,
});

export default localTracker;
