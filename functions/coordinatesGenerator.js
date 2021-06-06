require("dotenv").config();

const fs = require("fs");
const requests = require("./requests");
const sortShopEntries = require("./sortShopEntries");

async function coordinatesGenerator() {
  let sortedShopEntries = await sortShopEntries();

  //coordinate generator settings
  let baseHeight = 248;

  const tileSize = {
    DoubleWide: {
      widthMultiplier: 1.2,
      heightMultiplier: 1,
    },
    Normal: {
      widthMultiplier: 0.58,
      heightMultiplier: 1,
    },
    Small: {
      widthMultiplier: 0.58,
      heightMultiplier: 0.477,
    },
  };

  for (let entryIndex in sortedShopEntries) {
      
      sortedShopEntries[entryIndex].size = {}
      sortedShopEntries[entryIndex].size.width = Math.round(tileSize[sortedShopEntries[entryIndex].tileSize].widthMultiplier*baseHeight)
      sortedShopEntries[entryIndex].size.height = Math.round(tileSize[sortedShopEntries[entryIndex].tileSize].heightMultiplier*baseHeight)

      let entry = sortedShopEntries[entryIndex]

    console.log(entry)

  }
}

module.exports = coordinatesGenerator;
