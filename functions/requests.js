require("dotenv").config();
const axios = require("axios").default;
const fs = require("fs");

async function shop() {
  let mainRequest = await axios.get(process.env.FNAPIIOSHOPENDPOINT, {
    headers: {
      Authorization: process.env.FNAPIIOKEY,
    },
  });

  return mainRequest.data;

}

async function shopSections() {
    let mainRequest = await axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game/shop-sections");
  
    return mainRequest.data.sectionList.sections;
  
  }

const requests = {

    shop,
    shopSections

}

module.exports = requests;
