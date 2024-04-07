import { writeFile } from "fs/promises";
import { loadCountries } from "./countries.js";
import { renderMainHtml } from "./renderMainHtml.js";

const countries = await loadCountries(50);
//console.log(countries);
const html = renderMainHtml(countries);
await writeFile("countries.html", html);
console.log(countries.length);
