'use strict';

angular.module('membershipApp')
    .controller('ReservationDetailController', function ($scope, $stateParams, Reservation) {
        $scope.reservation = {};
        $scope.load = function (id) {
            Reservation.get({id: id}, function(result) {
              $scope.reservation = result;
            });
        };
        $scope.load($stateParams.id);
    });
