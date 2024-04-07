import { writeFile } from "fs/promises";
import { loadCountries } from "./countries.js";
import { renderMainHtml } from "./renderMainHtml.js";

const countries = await loadCountries("spanish");
console.log(countries);
const html = renderMainHtml(countries);
await writeFile("countries.html", html);
