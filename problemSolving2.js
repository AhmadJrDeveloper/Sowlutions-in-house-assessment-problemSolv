const { parse } = require("csv-parse");
const fs = require("fs");

const path = "./prediction.csv";


fs.createReadStream(path)
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("File read successful");
  });