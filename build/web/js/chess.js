var app = angular.module("MyApp", []);



app.controller("ChessCtrl",function($scope){
    $scope.board = ["wr","wkn","wb","wq","wk","wb","wkn","wr"];
});

app.filter("Chess", function(){
    return function(input){
        var keywords = ["wr","wkn","wb","wq","wk"];
        var pieces = ["\u2656", "\u2658", "\u2657", "\u2655", "\u2654"];
        
        for (var i = 0, max = 5; i < max; i++) {
            if(input === keywords[i]) return pieces[i];
        }
        
        return "";
    };
});

