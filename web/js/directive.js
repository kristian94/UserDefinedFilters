var app = angular.module("MyApp", ['$http']);



app.controller("DirectiveController", ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()
        };
    }]);


app.directive("myDirective", function(){
    return {
        template: "<div style=\"border: 1px solid black\"  class=container>\n\
<table class=table>\n\
<tbody>\n\
<tr><td>Company:</td> <td>{{user.companyName}}</td></tr>\n\
<tr><td>URL:</td> <td><a href={{user.companyUrl}}>Visit us</a></td></tr>\n\
<tr><td>Created:</td> <td>{{user.created}}</td></tr>\n\
</tbody>\n\
</table>\n\
</div>\n\
"
    };
});