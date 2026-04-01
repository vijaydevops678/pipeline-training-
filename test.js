// test.js - Simple tests for our application
const assert = require('assert');

// Test 1: Check that app.js file can be loaded
console.log('Test 1: Loading app module...');
try {
  const app = require('./app.js');
  // Close the server immediately (it starts listening when required)
  if (app && app.close) {
    app.close();
  }
  console.log('Test 1: PASSED - App module loaded successfully');
} catch (error) {
  console.error('Test 1: FAILED -', error.message);
  process.exit(1);
}

// Test 2: Check that package.json has required fields
console.log('Test 2: Checking package.json...');
const pkg = require('./package.json');
try {
  assert(pkg.name, 'package.json must have a name');
  assert(pkg.version, 'package.json must have a version');
  assert(pkg.main, 'package.json must have a main entry');
  console.log('Test 2: PASSED - package.json is valid');
} catch (error) {
  console.error('Test 2: FAILED -', error.message);
  process.exit(1);
}

// Test 3: Check version format
console.log('Test 3: Checking version format...');
const versionRegex = /^\d+\.\d+\.\d+$/;
try {
  assert(versionRegex.test(pkg.version), 'Version must be in X.Y.Z format');
  console.log('Test 3: PASSED - Version format is correct:', pkg.version);
} catch (error) {
  console.error('Test 3: FAILED -', error.message);
  process.exit(1);
}

console.log('');
console.log('=========================');
console.log('All tests passed!');
console.log('=========================');
process.exit(0);
