const requests = require("./requests");

function sortShopEntries(shop, shopSections, useSortFunction = false) {
  let shopEntries;
  if (useSortFunction) {
    shopEntries = shop.shop;
    shopEntries.sort((a, b) => {
      let aEntrySection = a.section.id;
      let bEntrySection = b.section.id;

      let aEntrySectionIndex = shopSections.findIndex(
        (s) => s.sectionId === aEntrySection
      );
      let bEntrySectionIndex = shopSections.findIndex(
        (s) => s.sectionId === bEntrySection
      );

      return aEntrySectionIndex - bEntrySectionIndex;
    });
  } else {
    shopEntries = [];
    for (let sec of shopSections) {
      for (let entry of shop.shop) {
        if (entry.section.id === sec.sectionId) shopEntries.push(entry);
      }
    }
  }
  return shopEntries;
}

module.exports = sortShopEntries;
