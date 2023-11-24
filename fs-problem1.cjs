const fs = require("fs");
const path = require("path");
const fsProblem1 = (absolutePathOfRandomDirectory, randomNumberOfFiles) => {
  const createFile = (dirPath) => {
    for (let i = 0; i < randomNumberOfFiles; i++) {
      const fileName = `file_${i}.json`;
      const data = { name: "mahir", nationality: "indian" };
      fs.writeFile(path.join(dirPath, fileName) , JSON.stringify(data) , (err) => {
        if(err) throw err;
        else deleteFile(path.join(dirPath, fileName));
      });
    }
  };

  const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
      if (err) throw err;
    });
  };

  const createDir = (dirPath) => {
    fs.mkdir(dirPath, (err) => {
      if (err) throw err;
      else createFile(dirPath);
    });
  };

  const isDirExist = (dirPath) => {
    fs.access(dirPath, (err) => {
      if (err) createDir(dirPath);
      else createFile(dirPath);
    });
  };

  isDirExist(absolutePathOfRandomDirectory);
};
module.exports.fsProblem1 = fsProblem1;