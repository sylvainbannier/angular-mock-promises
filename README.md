angular-mock-promises
=====================

Promise and resources mocking for angular with jasmine.

# Install with bower

	bower install angular-mock-promises --save-dev

Add angular-mock-promises script

# Usage

## Mock promises

	describe('my test', function() {
		beforeEach(module('mockedPromises'));
		beforeEach(inject(function(serviceToMock, mockedPromises) {
			mockedPromises.promiseSpy(serviceToMock, 'methodReturningPromise').resolve('ok');
		}));
	});

## Mock resources

	describe('my test', function() {
		beforeEach(module('mockedPromises'));
		beforeEach(inject(function(serviceToMock, mockedPromises) {
			mockedPromises.resourceSpy(serviceToMock, 'methodReturningPromise').resolve({key:'data'});
		}));
	});









