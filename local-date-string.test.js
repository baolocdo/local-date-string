// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { getLocalDate } = require('./local-date-string');

test('should return 2021-01-01 when month is "01", day is "01" and year is "2021"', () => {
  expect(getLocalDate('01', '01', '2021')).toEqual('2021-01-01');
});

test('should return 2020-12-31 when month is "12", day is "31" and year is "2020"', () => {
  expect(getLocalDate('12', '31', '2020')).toEqual('2020-12-31');
});

test('should return 2020-07-04 when month is "07", day is "04" and year is "2020"', () => {
  expect(getLocalDate('07', '04', '2020')).toEqual('2020-07-04');
});

test('should return 2020-11-25 when month is "11", day is "25" and year is "2020"', () => {
  expect(getLocalDate('11', '25', '2020')).toEqual('2020-11-25');
});