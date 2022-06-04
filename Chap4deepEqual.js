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
                res=((Object.keys(a)[i])==(Object.keys(b)[i])&&res)
            }
            return res;
        } else {console.log("Object lengths differ, hence:"); return false};
    } else {console.log("Inputs are not objects"); return (a==b)}
}

let obj = {here: {is: "an"}, object: 2};
console.log("1: "+deepEqual(obj, obj));
// → true
console.log("2: "+deepEqual(obj, {here: 1, object: 2}));
// → false
console.log("3: "+deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
