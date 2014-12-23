(function () {
  'use strict';

  angular
      .module('material.components.tabs')
      .controller('MdTabsController', MdTabsController);

  function MdTabsController () {
    var scope = null,
        queue = [];
    this.waitForScope = function (callback) {
      if (scope) callback();
      else queue.push(callback);
    };
    this.setScope = function (newScope) {
      scope = newScope;
      angular.forEach(queue, function (callback) {
        callback();
      });
    };
    this.setIndex = function (value) {
      return scope.selectedIndex = value;
    };
    this.getIndex = function () {
      return scope.selectedIndex;
    };
    this.addTab = function () {
      if (scope) {
        return scope.addTab.apply(scope, arguments);
      }
    };
    this.removeTab = function () {
      if (scope) {
        return scope.removeTab.apply(scope, arguments);
      }
    };
  }
})();