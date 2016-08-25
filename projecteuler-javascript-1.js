function processData(input) {
    var  i = 1, total = input[0];
    while( i <= total) {
        var sum = new Set();
        var ans = 0;
        for (var j = 1; j < input[i]; j++) {
              if (3*j < input[i])  
                sum.add(3*j)
            if (5*j < input[i])  
                sum.add(5*j); 
        }
        sum.forEach(function(item){
          ans+=item;  
        });
        console.log(ans);
        i++;
    }
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
