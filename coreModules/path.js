const path = require("path");
const mod = require("./module/mod");

/* console.log(__dirname);

console.log(__filename);

console.log(process.cwd()); */

/* const base = path.basename(__filename);

console.log(base);

const ext = path.extname(__filename);

console.log(ext);

const parse = path.parse(__filename);

console.log(parse); */

// path.join("module", "mod.js");

const { readFile } = require("fs");

readFile(path.join(__dirname, "module", "mod.js"), (err, data) => {
  console.log(data);
});
