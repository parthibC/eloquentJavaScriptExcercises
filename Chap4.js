function range(s, e, step){
    let arr=[];
    
    if (step === undefined) step=1;
    if (e<s && step>0) step=-step;
    if (e>s && step<0) step=-step;
    for (let i = s; Math.abs(s-i)+Math.abs(e-i)===Math.abs(s-e); i+=step) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}

function sum(set) {
    let t=0;
    for (let nums of set) {
        t+=nums;
    }
   	return t;
}
console.log(sum(range(1,10)))
console.log(sum(range(10,1)))
console.log(sum(range(1,10,3)))
console.log(sum(range(1,10,-3)))
console.log(sum(range(10,1,3)))
console.log(sum(range(10,1,-3)))
// hello
