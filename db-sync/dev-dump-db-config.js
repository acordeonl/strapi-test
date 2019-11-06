const fs = require('fs');
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

async function main() {
  await writeFile("tmp/test", "Hey there3!")
}

main()

