 var myController=function ($scope, $http,$state)
 {
   
    
    $scope.checkLogin=function()
    {
     $scope.data = [];
    
    var config = {headers:  {
        'Accept': 'application/json;odata=verbose',       
        "content-type": "application/json",
    }
};


$http({
    method: 'POST',
    url: '/data',       
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
}).then(function successCallback(response) {
    console.log(response.data)

$state.go('dashboard',{});
    
}, function errorCallback(response) {
    console.log(response)
});

    /*var request = $http.get('/data');    
    request.success(function(data) {
        $scope.data = data;
    });
    request.error(function(data, status, headers, config){
        console.log('Error: ' + data);
        console.log('Error1: ' + status);
        console.log('Error2: ' + headers);
        console.log('Error3: ' + config);
    });*/
};



     }
