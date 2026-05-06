// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber


test('valid phone number format 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number format 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('invalid phone short', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});


// isEmail


test('valid simple email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});

test('valid second simple email', () => {
  expect(isEmail('user@yahoo.com')).toBe(true);
});

test('invalid email subdomain not supported', () => {
  expect(isEmail('user@mail.ucsd.edu')).toBe(false);
});

test('invalid email missing @', () => {
  expect(isEmail('testgmail.com')).toBe(false);
});


// isStrongPassword

test('password test 1 (likely valid short alpha)', () => {
  expect(isStrongPassword('abcdef')).toBe(true);
});

test('password test 2 (another valid simple case)', () => {
  expect(isStrongPassword('abcdefgh')).toBe(true);
});

test('password with special char likely invalid', () => {
  expect(isStrongPassword('Abc123!')).toBe(false);
});

test('password with mixed symbols likely invalid', () => {
  expect(isStrongPassword('Test@1234')).toBe(false);
});


// isDate


test('valid slash date 1', () => {
  expect(isDate('05/05/2026')).toBe(true);
});

test('valid slash date 2', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid ISO format', () => {
  expect(isDate('2026-05-05')).toBe(false);
});

test('invalid string input', () => {
  expect(isDate('hello')).toBe(false);
});


// isHexColor


test('valid hex without hash', () => {
  expect(isHexColor('ff00ff')).toBe(true);
});

test('valid short hex', () => {
  expect(isHexColor('fff')).toBe(true);
});

test('invalid long hex', () => {
  expect(isHexColor('ff00ff00ff')).toBe(false);
});

test('invalid characters', () => {
  expect(isHexColor('ggg')).toBe(false);
});