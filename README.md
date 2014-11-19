angular-mock-promises
=====================

Promise mocking for angular with jasmine.

# Install with bower

	bower install angular-mock-promises --save-dev

Add angular-mock-promises script

# Usage

	describe('my test', function() {
		beforeEach(module('mockedPromises'));
		beforeEach(inject(function(serviceToMock, mockedPromises) {
			mockedPromises.promiseSpy(serviceToMock, 'methodReturningPromise').resolve('ok');
		}));
	});








