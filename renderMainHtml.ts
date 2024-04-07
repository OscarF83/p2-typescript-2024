import { Country } from "./countries.js";

const renderCountries = (countries: Array<Country>) => {
  let html = "";
  for (const country of countries) {
    html =
      html +
      `<div class="country"><img src="${country.flags.png}" />
      <div class="info">
        <div class="name">${country.nameCountry}</div>
        <div class="capital">${country.capitalCountry}</div>
        <div> <p><a href=/${country.nameCountry.replace(
          / /g,
          ""
        )}.html> More details... </a></p></div>
      </div>
      </div>`;
  }
  return html;
};

export const renderMainHtml = (countries: Array<Country>) => {
  return `
<html>
  <head>
  <meta charset="UTF-8">
  <title>Countries List</title>
  <style>
  body{
    background-color: rgb(20,20,20);
    color: white;
  }
  .country {
    display: flex;
    flex-direction: row;
    padding: 1em;
  }
  .country img{
    border: 1px solid black;
  }
  .info{
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin-left: 1em;
    margin-top: 3em;
  }
  .name{
    font-size: large;
    font-weight: bold;
    padding-bottom: 1em;
  }
  a {
    color: pink;
  }
  </style>
</head>
  <body>
    ${renderCountries(countries)}
  </body>
</html>`;
};
