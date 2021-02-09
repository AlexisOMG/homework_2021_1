'use strict';

/**
 * Функция приводит первый символ в строке к верхнему регистру
 *
 * @param {string} str - любая строка
 * @return {string}
 */
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Функция сравнения строк для сортировки в алфавитном порядке
 *
 * @param {string} a - строка для сравнения
 * @param {string} b - строка для сравнения
 * @return {number}
 */
const compare = (a, b) => a.localeCompare(b);

/**
 * Функция сортирует символы в строке в алфавитном порядке
 *
 * @param {string} item - строка для сортировки
 * @return {string} - отсортированная строка
 */
const sortSingleItem = (item) => item.split('').sort(compare).join('');

/**
 * Функция сортирует буквы в словах и слова в предложении в алфавитном порядке.
 * В каждом слове первая буква приводится к верхнему регистру, остальные - к нижнему.
 *
 * @param {string} str - любая строка
 * @return {string}
 */
const sort = (str) => {
  if (typeof str !== 'string') {
    str = '';
  }
  return str.toLowerCase()
    .split(/\s+/)
    .map(sortSingleItem)
    .sort(compare)
    .map(capitalize)
    .join(' ');
};
