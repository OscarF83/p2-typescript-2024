import { Country } from "./countries.js";

const renderCountries = (countries: Array<Country>) => {
  let html = "";
  for (const country of countries) {
    html =
      html +
      `<div><img src="${country.flags.png}" /></div>
        <div>${country.nameCountry}</div>
    <div>${country.capitalCountry}</div>
    <div> <p><a href=/${country.nameCountry}.html> More details... </a></p></div>`;
  }
  return html;
};

export const renderMainHtml = (countries: Array<Country>) => {
  return `
<html>
  <head>
  <meta charset="UTF-8">
  <title>Countries List</title>
</head>
  <body>
    ${renderCountries(countries)}
  </body>
</html>`;
};
