const fs = require('fs');
const { promisify } = require("util");

const copyFile = promisify(fs.copyFile);

async function main() {
  try{
    await copyFile('./git-hooks/post-merge' , './.git/hooks/post-merge')
    await copyFile('./git-hooks/pre-commit' , './.git/hooks/pre-commit')
  }
  catch(err){
    console.log(err)
  }
}

main()

