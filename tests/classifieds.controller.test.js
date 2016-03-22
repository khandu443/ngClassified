describe('Calulator App', function () {
    var $controller, $scope, controller;
    beforeEach(module('ngClassifieds'));
    
    beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        $scope =  $rootScope.$new();
        controller = $controller('CalculatorController', { $scope: $scope }); 
      }));


    describe('Addition Operation', function () {
        it('1 + 2 should equal 3', function () {
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.add();
             expect($scope.result).toBe(3);   
        });
         it('1 + 1 should not equal 3', function () {
             $scope.firstNum = 1;
             $scope.secondNum = 1;
             $scope.add();
             expect($scope.result).toBe(3);   
        });
    });
      
     describe('Subtraction Operation', function () {
        it('1 - 2 should equal (-1)', function () {
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.subtract();
             expect($scope.result).toBe(-1);
         });
    });
    
     describe('Multiplication Operation', function () {
        it('1 * 2 should equal 2', function () {
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.multiply();
             expect($scope.result).toBe(2);
         });
    });
    
     describe('Division Operation', function () {
        it('1 / 2 should equal (.5)', function () {
             $scope.firstNum = 1;
             $scope.secondNum = 2;
             $scope.divide();
             expect($scope.result).toBe(.5);
         }); 
    });

});
