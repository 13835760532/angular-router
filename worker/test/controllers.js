/**
 * Created by Administrator on 2017/1/5.
 */
angular.module("ctrls",["sevices"])
    .controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
        indexDate.then(function(data){
            // console.log(data);
            $scope.data=data.data
        });
    }])