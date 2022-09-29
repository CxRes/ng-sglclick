(function () {
  'use strict';

  angular
    .module('ngSglclick', [])
    .directive('ngSglclick', ngSglclick);

  ngSglclick.$inject = ['$timeout', '$parse'];

  function ngSglclick($timeout, $parse) {

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var singleClickDebounce;
        var callback = $parse(attrs.ngSglclick);

        /** Gestion des événements */
        element.on('click', function() {

          if(!singleClickDebounce) {

            singleClickDebounce = $timeout(function() {
              singleClickDebounce = null;

              scope.$apply(function () {
                callback(scope);
              });
            }, 600);
          }
          else {
            $timeout.cancel(singleClickDebounce);
            singleClickDebounce = null;
          }
        });
      }
    };
  }
})();
