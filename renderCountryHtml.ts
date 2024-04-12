import { Country } from "./countries.js";
import { writeFile } from "fs/promises";

export const renderCountryHtml = async (countries: Array<Country>) => {
  let html = "";
  for (const country of countries) {
    html = `<html>
  <head>
  <meta charset="UTF-8">
  <title>${country.nameCountry}</title>
  <style>
  body{
    background-color: rgb(30,30,30);
    color: white;
  }
  .country {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: sans-serif;
  }
  .country img{
    border: 1px solid grey;
  }
  div {
    padding: 1em;
  }
  </style>
</head>
  <body>
  <div class="country"><h1> ${country.nameCountry} </h1> 
  <div><img src="${country.flags.png}" /></div>
    <div>Capital: ${country.capitalCountry}</div>
    <div>Region: ${country.region}</div>
    <div>${country.area} Km2</div>
    <div>${country.population} nº of people</div>
    <div>${country.languagesCountry}</div>
  </div>
  </body>
</html>`;
    await writeFile(`${country.nameCountry.replace(/ /g, "")}.html`, html);
  }
};
