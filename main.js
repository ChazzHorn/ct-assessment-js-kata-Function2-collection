function add(a,b){
    return a + b
}
console.log(add(5,3))
//////////
function multipy(x,y){
    let total = 0
    for(let i=0; i<y; i++){
        total=add(x,total)
    }
return total
}
console.log(multipy(5,3))
//////////
function power(n,r){
    let total = 1
    for(let i=0; i<r; i++){
        total=multipy(n,total)
    }
    return total
}
console.log(power(5,3))
//////////
function factorial(f){
    let total=f

    for(let i=f-1; i>0; i--){

        total=multipy(total,i) 
    }
    return total
}
console.log(factorial(5))
/////////
function fibonacci(p){
    
    
    let total2=0
    let total3=1
    let sumOfPrevTwo

    if (p === 1){
        return total2
    }else if(p === 2){
        return total3
    }

    for(let i=3; i<=p;i++){
        
        sumOfPrevTwo=add(total2,total3)
        total2=total3;
        total3=sumOfPrevTwo
        // let total=[0,1]
        // total.push=sumOfPrevTwo
    }
    // console.log(total)
    return sumOfPrevTwo
}
console.log(fibonacci(1))//It works now!

