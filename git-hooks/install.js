const fs = require('fs');
const { promisify } = require("util");

const copyFile = promisify(fs.copyFile);

async function main() {
  try{
    if(process.platform === "win32"){
      await copyFile('./git-hooks/windows/post-merge' , './.git/hooks/post-merge')
      await copyFile('./git-hooks/windows/pre-commit' , './.git/hooks/pre-commit')
    }
    else {
      await copyFile('./git-hooks/unix/post-merge' , './.git/hooks/post-merge')
      await copyFile('./git-hooks/unix/pre-commit' , './.git/hooks/pre-commit')
    }
  }
  catch(err){
    console.log(err)
  }
}

main()

