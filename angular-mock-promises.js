/* global angular:false, spyOn: false */

angular.module('mockedPromises', []).factory('mockedPromises', function($q) {
	'use strict';
	return {
		promiseSpy: function(object, method) {
			var deferred = $q.defer();
			spyOn(object, method).andCallFake(function() {
				return deferred.promise;
			});
			return {
				resolve: function(data) {
					var dataCopy = angular.copy(data);
					deferred.resolve(dataCopy);
				},
				reject: function(reason) {
					deferred.reject(reason);
				}
			};
		},
		resourceSpy: function(object, method) {
			var deferred = $q.defer();
			var mockedResource = {
				$promise: deferred.promise
			};
			spyOn(object, method).andCallFake(function() {
				return mockedResource;
			});
			return {
				resolve: function(data) {
					var dataCopy = angular.copy(data);
					angular.extend(mockedResource, dataCopy);
					mockedResource.$resolved = true;
					deferred.resolve(dataCopy);
				},
				reject: function(reason) {
					mockedResource.$resolved = true;
					deferred.reject(reason);
				}
			};
		},
	};
});
