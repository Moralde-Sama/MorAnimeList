var module = angular.module("MorAnimeList", []);
// module.config(function($interpolateProvider) {
//     $interpolateProvider.startSymbol('<%');
//     $interpolateProvider.endSymbol('%>');
// });
module.controller("homeCtrl", ["$scope", "$http", function(s, h){
    s.loginbtn = true;
    s.fullname = "";
    s.showAccount = false;
    
    s.login = function(data){
        h.post("../Account/checkaccount", data).then(function(r){
            console.log(r.data);
            if(r.data != 0){
                alert("Login Successfull!");
                s.fullname = r.data.fname + " " + r.data.mname.substr(0, 1) + ". " + r.data.lname;
                s.showAccount = true;
                document.getElementById("scrollpataas").click();
            }
            else{
                alert("invalid credentials.");
            }
        })
    }
    s.register = function(data){
        console.log(data);
        if(s.loginbtn){
            s.loginbtn = false;
        }
        else{
            h.post("../Account/register", data).then(function(r){
                if(r.data == "Success"){
                    alert("Save Successfully!");
                    s.data = {};
                    s.loginbtn = true;
                }
            })
        }
    }
}])