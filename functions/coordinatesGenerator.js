require("dotenv").config();

const fs = require("fs");
const requests = require("./requests");

async function coordinatesGenerator() {
    
    let shop = await requests.shop();

    let shopSections = (await requests.shopSections()).sectionList.sections;

    let sortedShop = []

    for(let sec of shopSections){
        for(let entrie of shop.shop){
            if(entrie.section.id===sec.sectionId) sortedShop.push(entrie);
        }
    }//bubble sort bad

    fs.writeFileSync("./out/sortedShop.json",JSON.stringify(sortedShop))

}

module.exports = coordinatesGenerator;
