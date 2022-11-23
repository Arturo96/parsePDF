const fs = require("fs");
const pdf = require("pdf-parse");

const rutaInfo = "./resources/info.txt";

let dataBuffer = fs.readFileSync("Entrega.pdf");

pdf(dataBuffer).then(function (data) {
  fs.writeFileSync(rutaInfo, data.text);
});
