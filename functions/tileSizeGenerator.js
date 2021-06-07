require("dotenv").config();

const fs = require("fs");
const tileSizeSettings = require("../settings/tileSizes.json")

function tileSizeGenerator(sortedShopEntries) {

  for (let entryIndex in sortedShopEntries) {
      
      sortedShopEntries[entryIndex].size = {}
      sortedShopEntries[entryIndex].size.width = Math.round(tileSizeSettings[sortedShopEntries[entryIndex].tileSize].widthMultiplier*tileSizeSettings.baseHeight)
      sortedShopEntries[entryIndex].size.height = Math.round(tileSizeSettings[sortedShopEntries[entryIndex].tileSize].heightMultiplier*tileSizeSettings.baseHeight)

  }
  return sortedShopEntries
}

module.exports = tileSizeGenerator;
