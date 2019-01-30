var module = angular.module("MorAnimeList", []);
// module.config(function($interpolateProvider) {
//     $interpolateProvider.startSymbol('<%');
//     $interpolateProvider.endSymbol('%>');
// });
module.controller("homeCtrl", ["$scope", "$http", function(s, h){
    s.trysd = "Emmanuel";
    s.login = function(data){
        h.post("../Account/checkaccount", data).then(function(r){
            console.log(r.data);
        })
    }
}])