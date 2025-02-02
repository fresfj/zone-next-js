import { CONFIG } from 'src/config-global';

import { AnimateView } from 'src/sections/_examples/animate-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Animate | Components - ${CONFIG.appName}` };

export default function Page() {
  return <AnimateView />;
}
