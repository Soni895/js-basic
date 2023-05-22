// console.log("hi darshan soni");

const x=[1,2,3,4,5];
x.push("darshan");
// console.log(x.length);
// console.log(x);
// const a=35;
// let b=30;
// console.log(` the sum of aand{b}is${a+b}`);
// console.log();
// let slice=x.slice(2);
// console.log(slice);

function darshan(x)
{
    
    let ans=x.join(" ");
    console.log(ans+"darshan calling from function");
    x.push("soni");
    for(let i=0;i<ans.length;i++)
    {
        console.log(ans[i]);
    }


}
darshan(x);
console.log(x);
