'use strict';

angular.module('membershipApp')
    .controller('BlockDetailController', function ($scope, $stateParams, Block) {
        $scope.block = {};
        $scope.load = function (id) {
            Block.get({id: id}, function(result) {
              $scope.block = result;
            });
        };
        $scope.load($stateParams.id);
    });