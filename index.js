const axios = require("axios");
const coordinatesGenerator = require("./functions/coordinatesGenerator")

async function main(){

    await coordinatesGenerator()

}


main();
