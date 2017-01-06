angular.module("myapp",[])
    .controller("myctrl",["$scope","$http","$filter",function($scope,$http,$filter){
        $http({url:"/ajax"}).then(function(data){
            var data=data.data;
            console.log(data)
            var arr=[];
            for(var i=0;i<data.length;i++){
                var current=[];
                for(var j=1;j<data.length;j++){
                    if((data[i].en==data[j].en)&&!data[j].flag){
                        data[j].flag=true;
                        console.log(data[i])
                        current.push(data[i]);
                        current.en=data[i].en

                    }
                }
                if(current.length>0) {
                    arr.push(current);
                    var arr=$filter("orderBy")(arr,"en")
                }
            }
            $scope.data=arr;
            console.log($scope.data);
            console.log(1)
            $scope.type="";
            $scope.filter=function(en){
                $scope.type=en;
            }
            $scope.show=function(){
                $scope.type="";
            }
            $scope.add=function () {

            }
        })
    }])

