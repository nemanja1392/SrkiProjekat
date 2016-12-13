'use strict';

/**
 * @ngdoc function
 * @name sbeeApp.controller:NavigationcontrollerCtrl
 * @description
 * # NavigationcontrollerCtrl
 * Controller of the sbeeApp
 */
angular.module('sbeeApp')
  .controller('NavigationCtrl', function ($scope) {
    $scope.links = [
      {
        href:"#!/about",
        title:"About"
      },
      {
        href:"/",
        title:"Home"
      }
      
    ];
  });
