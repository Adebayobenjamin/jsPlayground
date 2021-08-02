

//  QUESTION 1
function sevens(){
    for (let i = 2000; i <= 3200 ; i++) {
        if(i%7 == 0) {
            if(i%5 != 0){
                console.log(i);
            }
        }
        continue;
           
        
    }
}

//QUESTION2

function factorial(n){
    if(n < 0){
        console.log("Error: cannot find factorial of negative numbers");
    }else if(n == 0){
        console.log(`factorial of ${n} is: 1`)
    }else{
        var factorial = 1;
        for (let i = 0; i < n; i++) {
         factorial = factorial * (n-i)
        }
        console.log(`factorial of ${n} is: ${factorial}`)
    }
   
}
// factorial(4)

function ObjectMultiple(n){
    var multiple = {};
    for (let i = 1; i <= n; i++) {
        multiple[i] = i*i;
        
    }
    console.log(multiple)
}
//ObjectMultiple(10);

function createArray(){
    const rl = require("readline")
 var interface = rl.createInterface(process.stdin, process.stdout);
interface.question("enter a list of comma seperated characters\n", (answer)=>{
    let newArray = answer.split(",")
    console.log(newArray);
    interface.close()
})
}

class String {
    setString(string) {
         this.data = string;
    }
    getString(){
        console.log(this.data);
    }
}

const string = new String();
string.setString(44);
string.getString();