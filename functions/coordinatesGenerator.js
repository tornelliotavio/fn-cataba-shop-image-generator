require("dotenv").config();

const fs = require("fs");
const requests = require("./requests");
const sortShopEntries = require("./sortShopEntries");

async function coordinatesGenerator() {

  let sortedShopEntries = await sortShopEntries();

    //coordinate generator settings
    const tileSize = {
        DoubleWide:{

        }
    }

    for(let entryIndex in sortedShopEntries){

        console.log(entryIndex)

    }

}

module.exports = coordinatesGenerator;
