import { Country } from "./countries.js";
import { writeFile } from "fs/promises";

export const renderCountryHtml = async (countries: Array<Country>) => {
  let html = "";
  for (const country of countries) {
    html = `<html>
  <head>
  <meta charset="UTF-8">
  <title>Countries List</title>
</head>
  <body>
  <div><img src="${country.flags.png}" /></div>
        <div>${country.nameCountry}</div>
    <div>${country.capitalCountry}</div>
    <div>${country.region}</div>
    <div><p>${country.area} Km2</p></div>
    <div><p>${country.population} nº of people</p></div>
  </body>
</html>`;
    await writeFile(`${country.nameCountry.replace(/ /g, "")}.html`, html);
  }
};
