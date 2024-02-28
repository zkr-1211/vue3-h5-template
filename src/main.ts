import { createApp } from 'vue';
import { store } from './store';
// normalize.css
import 'normalize.css/normalize.css';
// 全局样式
import './styles/index.less';
// tailwindcss
import './styles/tailwind.css';
// svg icon
import 'virtual:svg-icons-register';

import App from './App.vue';
import router from './router';
import * as Sentry from '@sentry/vue';
Sentry.init({
  dsn: 'https://d8b03e696c123652f375cd22336ee310@us.sentry.io/4506697347694592',
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/]
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false
    })
  ],
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');
