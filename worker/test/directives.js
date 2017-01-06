/**
 * Created by Administrator on 2017/1/5.
 */
angular.module("myapp",["ngRoute","ngAnimate","ctrls","sevices"])
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"index.html",
            controller:"index"
        }).when("/list/:id",{
            templateUrl:"list.html",
            controller:"list"
        }).when("/show/:id",{
            templateUrl:"show.html",
            controller:"list"
        }).otherwise("/")
    })