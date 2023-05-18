// console.log("hi i am darshan kumar soni");

// console.log("darshan soni");

//  const  b=50;
//  a=5;


// if (a < 0 || b<0) {
//  let result = 'positive';
//  console.log(result,"\n",a);
// //  console.log(a);
// } else {
//   let result = 'NOT positive';
//   console.log(result);
// }

// for(let i=0;i<20;i++)

// {
//     console.log(i,"\nhi darshan soni \n");
// }
//  let arr=['darsahn','soni',25,30,50];
//  let i=0;
 
// while(i<arr.length)
// {
//     console.log(arr[i]);
//     i++;
// }
// arr.push("hi i am darshan soni");
// i=0;
// while(i<arr.length)
// {
//     console.log(arr[i]);
//     i++;
// }

// console.log(arr.length);
// arr.push("hi i am darshan soni");
// console.log(arr.length);
// object creation

// factory method to create an object
function createobject( age,Rollno)
{

    let student=

{
    rollno:Rollno,
    age:age,
    subject:"Btech",
    year: "second",
        Print: function() {
        console.log("inside print method");
        console.log("darshan");
    },
};
return student;

}
let student=

{
    rollno:11212530,
    age:38,
    subject:"Btech",
    year: "second",
        print: function() {
        console.log("inside print method");
        console.log("darshan");
    },
};
// console.log(student);
let object1=createobject(38,11212530);
let object2=createobject(39,11212531);
let object3=createobject(40,11212532);
let object4=createobject(41,11212533);
console.log(object1.rollno,object2.rollno,object3.rollno,object4.rollno);
 

// constructor method to create an  object
function Student()
{
    this.rollno=11212530;
    this.subject="English";
    this.age=30;
    this.print= function()
    {
        console.log("hi inside print");
    }
}
// object creation usin constructor

