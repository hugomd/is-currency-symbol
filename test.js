const test = require('ava');

const isCurrencySymbol = require('./index');

test('should succeed with valid currency symbol', t => {
  t.is(isCurrencySymbol('$'), true);
});

test('should fail with currency symbol and space', t => {
  t.is(isCurrencySymbol('$ '), false);
});

test('should fail with invalid currency symbol #', t => {
  t.is(isCurrencySymbol('#'), false);
});

test('should fail with boolean', t => {
  t.is(isCurrencySymbol(true), false);
});

test('should fail with object', t => {
  t.is(isCurrencySymbol({}), false);
});
