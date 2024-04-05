import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadUsers } from "./users.js";
import { loadCountries } from "./countries.js";

//const users = await loadUsers(100);
//const html = render(users);
//await writeFile('users.html', html);

const countries = await loadCountries("spanish");
console.log(countries);
