const childProcess = require("child_process");
const electron = require("electron");
const webpack = require("webpack");
const config = require("./webpack.app.config");

console.log(process.env.NODE_ENV);

const env = process.env.NODE_ENV || "development";
const compiler = webpack(config(env));
let electronStarted = false;
const watching = compiler.watch({}, (err, stats) => {
  if (!err && !stats.hasErrors() && !electronStarted) {
    electronStarted = true;

    childProcess
      .spawn(electron, ["."], { stdio: "inherit" })
      .on("close", () => {
        watching.close();
      });
  }
});
