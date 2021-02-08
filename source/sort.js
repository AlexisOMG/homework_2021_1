'use strict'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const compare = (a, b) => a.localeCompare(b);

const sortSingleItem = (item) => item.split('').sort(compare).join('');

const sort = (str) => {
  if (str === undefined || str === null) {
    str = ''
  }
  return str.toLowerCase()
    .split(/\s+/)
    .map(sortSingleItem)
    .sort(compare)
    .map(capitalize)
    .join(' ');
}
