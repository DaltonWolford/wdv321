// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validatePhoneNumber = require('../app/validatePhoneNumber');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function() {
	
	
	it("Input is required", function() {
		assert.isFalse(validatePhoneNumber(''));
	});
	it("Input must be numeric", function() {
		assert.isFalse(validatePhoneNumber('asdfasdfsd'));
		assert.isTrue(validatePhoneNumber('1231231231'));
	});
	it("Input must be integers", function() {
		assert.isFalse(validatePhoneNumber('asdf'));
		assert.isTrue(validatePhoneNumber('1231231231'));
	});
	it("Input must be 10 numbers", function() {
		assert.isFalse(validatePhoneNumber('123'));
		assert.isTrue(validatePhoneNumber('1231231231'));
	});
	
	it("Input of 1234567891 should pass", function() {
		assert.isTrue(validatePhoneNumber('1234567891'));
	});
	it("Input of 0000000000 should pass", function() {
		assert.isTrue(validatePhoneNumber('0000000000'));
	});
	it("Input of empty should fail", function() {
		assert.isFalse(validatePhoneNumber(''));
	});
	it("Input of 123456789 should fail", function() {
		assert.isFalse(validatePhoneNumber('123456789'));
	});
	it("Input of 12345678912 should fail", function() {
		assert.isFalse(validatePhoneNumber('12345678912'));
	});
	it("Input of abcdefghij should fail", function() {
		assert.isFalse(validatePhoneNumber('abcdefghij'));
	});
	it("Input of %%%%%%%%%% should fail", function() {
		assert.isFalse(validatePhoneNumber('%%%%%%%%%%'));
	});
	

	
});


/*
	
  Testing Input Required
    √ The letter a should pass
    √ The number 4 should pass
    √ Empty or '' should fail
    √ A single space should fail
    √ Two or more spaces should fail
    √ The word null should fail
    √ The word undefined should fail
    √ The value 'a 4' should pass

  Testing Valid Phone Number
    √ Input is required
    √ Input must be numeric
    √ Input must be integers
    √ Input must be 10 numbers
    √ Input of 1234567891 should pass
    √ Input of 0000000000 should pass
    √ Input of empty should fail
    √ Input of 123456789 should fail
    √ Input of 12345678912 should fail
    √ Input of abcdefghij should fail
    √ Input of %%%%%%%%%% should fail


  19 passing (32ms)

*/
