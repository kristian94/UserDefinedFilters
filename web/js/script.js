
var app = angular.module("MyApp", []);
        
app.controller("MyController", [function(){
    var self = this;
    self.persons = [
        {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
        {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
        {name: 'Karen', gender: 'female', age: 31}
    ];
        
}]);

app.filter("MyFilter", function(){
    return function(input){
        var output = [];
        for (var i = 0, max = input.length; i < max; i++) {
            if(input[i].age <= 15 && input[i].age >= 6) output.push(input[i]);
        }
        return output;
    };
});




