'use strict';

/**
 * This is a sample directive
 * Generated by ngappgen Yeomen/Angular generator.
 *
 * @author: Tapas Jena
 * @copyright: Anitech Consulting Services Pvt Ltd.
 */
angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: '<%= htmlPath %>',
		link: function(scope, element, attrs, fn) {


		}
	};
});
