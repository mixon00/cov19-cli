const filterCountries = (name, country) =>
  (country.country && country.country.toLowerCase() === name.toLowerCase()) ||
  (country.country_code && country.country_code === name.toLowerCase()) ||
  (country.state && country.state.toLowerCase() === name.toLowerCase());

const filterAll = (name, json) => {
  let countries = json.regions.world.list.filter((country) => filterCountries(name, country));
  countries = [...countries, ...json.regions.unitedstates.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.canada.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.china.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.australia.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.ships.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.italy.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.italy.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.russia.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...json.regions.ireland.list.filter((country) => filterCountries(name, country))];

  return countries;
};

module.exports = (name, json) => {
  let filteredCountries = [];

  if (Array.isArray(name)) {
    name.forEach((n) => (filteredCountries = [...filteredCountries, filterAll(n, json)[0]]));
  } else {
    filteredCountries = [...filterAll(name, json)];
  }

  return filteredCountries;
};
