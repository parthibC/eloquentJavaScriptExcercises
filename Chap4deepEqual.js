function deepEqual(a,b) {
    if (a==null || b==null){console.log("An input is null"); return false}
    if (typeof a=="object" && typeof b=="object")
    {
        let na=(Object.keys(a)).length,
            nb=(Object.keys(b)).length,
            res=true;
        /*debug test: console.log("na is "+na+" and nb is "+nb) */
        
        if (nb==na)
        {
            for (let i = 0; i < na; i++)
            {
                res=(deepEqual((a[Object.keys(a)[i]]),(b[Object.keys(b)[i]]))&&res);
                /*if (typeof a[Object.keys(a)[i]]=="object"){
                    res=(deepEqual(a[Object.keys(a)[i]],b[Object.keys(b)[i]]))&&res;
                };*/
            }
            return res;
        } else {console.log("Object lengths differ, hence:"); return false};
    } else {/*debug test console.log("Inputs are not objects"); */return (a==b)}
}

let obj1 = {here: {is: "an"}, object: 2};
let obj2=[1,2,3], obj3=[1,2,3], obj4=obj2;
console.log(deepEqual(obj1, obj));
// → true
console.log(deepEqual(obj1, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj1, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual([1,2,3],obj2));
// → true
