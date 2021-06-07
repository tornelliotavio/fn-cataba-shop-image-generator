const axios = require("axios");
const requests = require("./functions/requests")
const coordinatesGenerator = require("./functions/coordinatesGenerator")
const tileSizeGenerator = require("./functions/tileSizeGenerator")
const sortShopEntries = require("./functions/sortShopEntries")
const fs = require("fs")

async function main(){
    
    const shopResponse = await requests.shop()
    const shopSections = await requests.shopSections()

    console.time("all")
    
    const sortedShopEntries = sortShopEntries(shopResponse, shopSections)
    const sortedShopEntriesTileSizes = tileSizeGenerator(sortedShopEntries)
    const sortedShopEntriesTileSizesCoordenates = coordinatesGenerator(sortedShopEntriesTileSizes)

    console.timeEnd("all")

    fs.writeFileSync("./out/sortedShopEntriesTileSizesCoordenates.json", JSON.stringify(sortedShopEntriesTileSizesCoordenates))
}


main();
