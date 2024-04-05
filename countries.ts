export const loadCountries = async (language: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/lang/${language}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const countries = await response.json();
  return countries;
};
