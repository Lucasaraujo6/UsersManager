import express from "express";
import log from "./utils/logger";
import routes from "./routes";
import config from "config";

const port = config.get<number>("port");
const host = config.get<string>("host");
const app = express();
app.use(express.json());
// app.use("/", routes)
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`[server]: listening at http://${host}:${port}`);
  routes(app);
});
