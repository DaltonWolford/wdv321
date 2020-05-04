// JavaScript Document

/*
--------------------------------------------------------------------
	Test Plan
--------------------------------------------------------------------
	input with anything other than an integer     ---        FAIL
		a123456789
	input with < 10 digits                        ---     	 FAIL
		123456789
	input with 10 digits that is an integer       ---    	 PASS
		1249281038
		1234567890
	input with < 10 digits                        ---     	 FAIL
		12345678909
	input with special characters				  ---		 FAIL
		%%%%%%%%%%%
*/

var validatePhoneNumber = function(inValue){
	
	if (isNaN(inValue)) {
		return false;
	}
	
	if (inValue.length < 10 || inValue.length > 10) {
		return false;
	}
	
	return true;
}

module.exports = validatePhoneNumber;
