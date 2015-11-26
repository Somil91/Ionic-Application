angular.module('app.services', [])

.factory('GetData', ['$rootScope', '$http', '$q',
    function($rootScope, $http, $q) {

        var syncObject = {
            getDataItems: function(url) {
                var deferred = $q.defer();
                var config_get = {
                    headers: {},
                };
                var result;
                $http.get(url, config_get)
                    .then(function(response) {
                        console.log(" call success");
                        if (response.data.items.length > 0)
                            result = response.data.items;
                        else
                            result = ["No Records Found", "Please try Again"];
                        deferred.resolve(result);
                    }).catch(function(data, status) {
                        console.log("call error ");
                        deferred.reject(data.message);
                    });

                return deferred.promise;

            },
        }

        return syncObject;
    }
])


.service('BlankService', [function() {

}])

.constant("EPA", {
    "BASE": "https://hile.herokuapp.com/api/",
    "ALL_HOMES": "homes"
});
