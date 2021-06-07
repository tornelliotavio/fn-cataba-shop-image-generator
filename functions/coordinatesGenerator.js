require("dotenv").config();

const fs = require("fs");
const tileSizeSettings = require("../settings/tileSizes.json");
const spacingSettings = require("../settings/spacing.json");

function coordinatesGenerator(sortedShopEntriesTileSizes) {
  //coordinates settings
  const startPosX = 10;
  const startPosY = 10;
  let currentPosX = startPosX;
  let currentPosY = startPosY;
  let currentSectionStartPosX = startPosX
  let currentSectionStartPosY = startPosY
  let currentSectionPosYLimit = currentSectionStartPosY+tileSizeSettings.baseHeight
  let lastSectionId = sortedShopEntriesTileSizes[0].section.id
  
  for (let entryIndex in sortedShopEntriesTileSizes) {

    if(lastSectionId != sortedShopEntriesTileSizes[entryIndex].section.id){
      currentPosX = startPosX;
      currentPosY = startPosY + currentSectionPosYLimit + spacingSettings.section
      currentSectionStartPosY = currentPosY
      currentSectionStartPosX = currentPosX
      currentSectionPosYLimit = currentSectionStartPosY+tileSizeSettings.baseHeight
      lastSectionId=sortedShopEntriesTileSizes[entryIndex].section.id
    }

    if(currentSectionPosYLimit<currentPosY+sortedShopEntriesTileSizes[entryIndex].size.height){
      currentPosY=currentSectionStartPosY;
      currentPosX+=sortedShopEntriesTileSizes[entryIndex-1].size.width+spacingSettings.x
    }
    sortedShopEntriesTileSizes[entryIndex].pos = {};
    sortedShopEntriesTileSizes[entryIndex].pos.x = currentPosX;
    sortedShopEntriesTileSizes[entryIndex].pos.y = currentPosY;

    currentPosY+=sortedShopEntriesTileSizes[entryIndex].size.height+spacingSettings.y

  }

  return sortedShopEntriesTileSizes;
}

module.exports = coordinatesGenerator;
