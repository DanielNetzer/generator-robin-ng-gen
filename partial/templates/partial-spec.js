/**
 * This is a sample template spec
 * Generated by ngappgen Yeomen/Angular generator.
 *
 * @author: Tapas Jena
 * @copyright: Anitech Consulting Services Pvt Ltd.
 */
describe('<%= ctrlname %>', function() {

	beforeEach(module('<%= appname %>'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('<%= ctrlname %>', {$scope: scope});
    }));

	it('should ...', inject(function() {

		expect(1).toEqual(1);

	}));

});
