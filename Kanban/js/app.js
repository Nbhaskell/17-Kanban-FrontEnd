// The Angular Module
angular.module('kanban', ['ngResource']);

angular.module('kanban').value('apiUrl', 'http://localhost:63325/api');

angular.module('kanban').controller('IndexController', function ($scope, $resource, apiUrl) {

    var ListResource = $resource(apiUrl + '/lists/:listId', { listId: '@id' });

    function activate() {
        var lists = ListResource.query();

        $scope.lists = lists;
    }

    $scope.newList = {};

    $scope.addList = function () {
        ListResource.save($scope.newList, function () {
            alert("Save Successful'");
            activate();
        });
    };

    activate();
});

