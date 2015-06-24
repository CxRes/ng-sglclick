# ng-sglclick

Simple directive for coexist click and double click event on the same element

## Install
You can install it by :
* Downloading the minified version from this [link](https://raw.githubusercontent.com/ptiswitz/ng-sglclick/master/lib/ng-sglclick.js) and the source from this [link](https://github.com/ptiswitz/ng-sglclick/blob/master/lib/ng-sglclick.min.js)
* Using the unminified version with a [CDN](https://rawgit.com/ptiswitz/ng-sglclick/master/lib/ng-sglclick.js) for development
* Using the minified version with a [CDN](https://cdn.rawgit.com/ptiswitz/ng-sglclick/master/lib/ng-sglclick.min.js) for production

## Usage

```html
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
  <script src="https://rawgit.com/ptiswitz/ng-sglclick/master/lib/ng-sglclick.js"></script>
  <div ng-controller="SomeController">
    <h1>Examples</h1>

    <h2>Without ng-sglclick</h2>
    <button ng-init="firstStack=[]" ng-click="once(firstStack)" ng-dblclick="twice(firstStack)">Hit me !</button>
    <ul>
      <li ng-repeat="msg in firstStack track by $index">{{msg}}</li>
    </ul>

    <h2>With ng-sglclick</h2>
    <button ng-init="secondStack=[]" ng-sglclick="once(secondStack)" ng-dblclick="twice(secondStack)">Hit me !</button>
    <ul>
      <li ng-repeat="msg in secondStack track by $index">{{msg}}</li>
    </ul>
  </div>
  <script>
    angular.module('YOUR_APP', [
      'ngSglclick'
    ])
    .controller('SomeController', function ($scope) {
      $scope.once = function(msg) {
        msg.push('Hit once');
      };

      $scope.twice = function(msg) {
        msg.push('Hit twice');
      };
    });
  </script>
```
