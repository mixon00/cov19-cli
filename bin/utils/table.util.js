const Table = require('cli-table3');

module.exports = (data) => {
  const table = new Table({
    head: ['Name', 'Confirmed', 'Deceased', 'Critical', 'Active', 'Tests', 'Recovered'],
    style: {
      head: [],
    },
  });

  Array.isArray(data[0]) ? data.forEach((row) => table.push(row)) : table.push(data);

  return table;
};
