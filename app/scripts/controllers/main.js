'use strict';

/**
 * @ngdoc function
 * @name sbeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbeeApp
 */
angular.module('sbeeApp')
  .controller('MainCtrl', function () {
    this.kurac="palac";
    this.links = [
      {
        href:"#!/about",
        title:"About"
      },
      {
        href:"kurac",
        title:"palac"
      }
      
    ];
  });
