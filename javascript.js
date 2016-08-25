function processData(input) {
    console.log(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = [];
process.stdin.on("data", function (input) {
    var numbers = input.split('\n');
    numbers.forEach(function(number){
       _input.push(parseInt(number)); 
    });
});

process.stdin.on("end", function () {
   processData(_input);
});
