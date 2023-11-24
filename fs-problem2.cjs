const fs = require("fs");

const fsProblem2 = (filePath) => {
  const deleteAllFiles = (data) => {
    allFiles = data.split("\n");
    allFiles.forEach((ele) => {
      fs.unlink(ele, (err) => {
        if (err) throw err;
      });
    });
  };

  const readFileHavingAllNames = () => {
    fs.readFile("filenames.txt", "utf-8", (err, data) => {
      if (err) throw err;
      deleteAllFiles(data);
    });
  };

  const appendSortedContentFile = (fileName) => {
    fs.appendFile("filenames.txt", fileName, (err) => {
      if (err) throw err;
      readFileHavingAllNames();
    });
  };

  const sortDataAndStore = (data) => {
    const fileName = "sortedSentenceFile.txt";
    data = data.split("\n").join(" ").split(" ").sort().join(" ");
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      appendSortedContentFile(fileName);
    });
  };

  const readLowercaseSentenceFile = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) throw err;
      sortDataAndStore(data);
    });
  };

  const appendLowercaseSentenceFile = (fileName) => {
    fs.appendFile("./filenames.txt", fileName + "\n", (err) => {
      if (err) throw err;
      readLowercaseSentenceFile(fileName);
    });
  };

  const convertToSentenceAndWrite = (data) => {
    const fileName = "lowercaseSentences.txt";
    data = data
      .toLowerCase()
      .split(".")
      .filter((ele) => ele !== "")
      .join("\n");
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      appendLowercaseSentenceFile(fileName);
    });
  };

  const readUppercaseFile = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) throw err;
      convertToSentenceAndWrite(data);
    });
  };

  const appendUppercaseFile = (fileName) => {
    fs.appendFile("./filenames.txt", fileName + "\n", (err) => {
      if (err) throw err;
      readUppercaseFile(fileName);
    });
  };

  const writeFileOfUppercase = (data) => {
    const filename = "uppercaseData.txt";
    data = data.toUpperCase();
    fs.writeFile(filename, data, (err) => {
      if (err) throw err;
      appendUppercaseFile(filename);
    });
  };

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    writeFileOfUppercase(data);
  });
};
module.exports.fsProblem2 = fsProblem2;
