import { writeFile } from "fs/promises";
import { loadCountries } from "./countries.js";
import { renderMainHtml } from "./renderMainHtml.js";
import { renderCountryHtml } from "./renderCountryHtml.js";

const countries = await loadCountries(6);
const html = renderMainHtml(countries);
renderCountryHtml(countries);
await writeFile("index.html", html);
