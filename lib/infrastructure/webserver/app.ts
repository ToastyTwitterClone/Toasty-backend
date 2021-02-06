import App from "./config";

import indexRoute from "./routes/index";

const app = new App({
  port: 3000,
  routes: [indexRoute],
});

app.listen();
