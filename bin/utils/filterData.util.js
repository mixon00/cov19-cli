const filterCountries = (name, country) =>
  (country.country && country.country.toLowerCase() === name.toLowerCase()) ||
  (country.country_code && country.country_code === name.toLowerCase()) ||
  (country.state && country.state.toLowerCase() === name.toLowerCase());

const filterAll = (name, report) => {
  let countries = report.regions.world.list.filter((country) => filterCountries(name, country));
  countries = [...countries, ...report.regions.unitedstates.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.canada.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.china.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.australia.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.ships.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.italy.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.italy.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.russia.list.filter((country) => filterCountries(name, country))];
  countries = [...countries, ...report.regions.ireland.list.filter((country) => filterCountries(name, country))];

  return countries;
};

module.exports = (name, report) => {
  let filteredCountries = [];

  if (Array.isArray(name)) {
    name.forEach((n) => (filteredCountries = [...filteredCountries, filterAll(n, report)[0]]));
  } else {
    filteredCountries = [...filterAll(name, report)];
  }

  return filteredCountries;
};
