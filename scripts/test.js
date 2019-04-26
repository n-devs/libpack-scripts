const path = require("path");
const execSync = require("child_process").execSync;
const config = require("../libpack.config");

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

config.forEach(packageName => {
  process.chdir(path.resolve(__dirname, "../packages/" + packageName));
  exec("npm test");
});

process.chdir(cwd);
