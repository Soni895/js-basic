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
// function createobject( age,rollno)
// {

//     let student=

// {
//     rollno,
//     age:age,
//     subject:"Btech",
//     year: "second",
//         Print: function() {
//         console.log("inside print method");
//         console.log("darshan");
//     },
// };
// return student;

// }
// let student=
// {
//     rollno:11212530,
//     age:38,
//     subject:"Btech",
//     year: "second",
//         print: function() {
//         console.log("inside print method");
//         console.log("darshan");
//     }
// };
// // console.log(student);
// let object1=createobject(38,11212530);
// let object2=createobject(39,11212531);
// let object3=createobject(40,11212532);
// let object4=createobject(41,11212533);
// // console.log(object1.rollno,object2.rollno,object3.rollno,object4.rollno);
 

// // constructor method to create an  object
// function Student( rollno,age,subject)
// {
//     this.rollno=rollno;
//     this.subject=subject;
//     this.age=age;
//     this.print= function()
//     {
//         console.log("hi inside print");
//     }
// }
// // object creation usin constructor
// let obj5 = new Student(11212535,20,"Computer_Network");
// // console.log(obj5.rollno);

// // dynamic object value


// // add property
// obj5.branch="CSE";
// obj5["passing_year"]=2025;
// console.log(obj5);
// // delete
// // delete obj5.age, delete obj5.passing_year;
// console.log(obj5);
// let length=Object.keys(obj5).length;
// // console.log(obj5.constructor);
// console.log(length);

// // for in loops
// for(let key in obj5)
// {
//     console.log(key,student[key]);
// }
// console.log("object printed start")
// console.log(obj5);

function obj_creation()
{
let employee={
    salary:3500,
    experience:"5 year",
    ctc: "55 lac"
}
return employee;
}

let obj1=obj_creation();
// console.log(obj1);
// obj1["city"]="kaithal";
// for (let key in obj1)
// {
//     console.log(key,obj1[key]);
// }
// delete obj1.ctc;
// console.log(obj1);

// inbuilt object && array
// math object

// Math.PI
// console.log(Math.round(1.9));
// let min=Math.max(1,2,34,5,6);
// let max=Math.min(50,34,5,6,7,7);
// console.log(min,max);

// let Name="darshan";
// let last_Name=new String("soni");
// console.log(Name,last_Name);
// console.log(typeof(Name));
// console.log(typeof(last_name));
// console.log(Name.length);
// console.log(last_Name.length);
// console.log(Name[10]);

// console.log(Name);
// for (let i=0;i<Name.length;i++)
// {
//     console.log(Name[i]);
// }
let message="hi i am darshan soni what is your name";
let split=message.split(" ");
// console.log(message);
// console.log(split);
// console.log(typeof(split));

// for(let i=0;i<split.length;i++)
// {
//     console.log(split[i]);
// }
// console.log(split);
message.replace('soni','rawal');
message.replace('soni','rawal');
console.log(message+" \n"+split);
let a="darshan";
let b=" soni";
let c=a+b;
console.log(c.substring(2));
let str=new String("kaka kakul soni");
console.log(str,typeof(str));
console.log(a.indexOf("dar"));

// date and time in  js
// var date= new  Date();
// console.log(typeof(date));
// console.log(date)


var date= new Date(1956,10,20);
console.log(date);
date.setFullYear(1998);
console.log(date);
let year=date.getFullYear();
console.log(year);
let time=date.getTime();
console.log(time);

// array start
// craetion
let arr=[1,2,3,4,5];
console.log(arr);
// console.log(arr[3]);
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[1]);
// }

// insertion
arr.push(9);
arr.unshift(0);
console.log(arr);

arr.splice(2,0,"darsahn","soni");
console.log(arr);


// searching in arr
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==="darsahn")
    {
       if(arr[i+1]==="soni"){
        console.log(" darshan soni is present in arr");

    }
}
    
}

if(arr.includes("Soni"))
{
    console.log("present");
}
else{
    console.log("not present");
}
let input=[

{name:"Darshan", RollNo:11212530},
{Name:"Rinki",RollNo:11212535},
{Name:"Alish",RollNo:11212536}
];

console.log(input);
let result=input.includes({name:"Darshan", RollNo:11212530});
if( result)
{
    console.log("is present"+result);
}
else{
    console.log("not present");

}
console.log(result);


let ans=input.find(function(Input)
{
    return Input.RollNo==11212535;
})
console.log("ans is",ans);

 let obj= input.find(function(input)
 {
    return input.RollNo=="11212530";
 })
 
 console.log("obj is",obj);

//  short cut
let obj2=input.find((obj2)=>obj2.RollNo==11212530);
console.log(obj2);

// remove from array
 let array=[1,2,3,4,5,6,7.8,9,10];
// console.log(array.length);
// array.pop();
// console.log(array.length,array);
// array.shift();
// console.log(array.length,array);
array.splice(2,2);
console.log(array.length,array);
//  empty an array

let temp=[1,2,3,4,5,6,7.8,9,10];
console.log(temp);
let temp2=temp;
// temp=[]
// temp.length=0;
temp.splice(0,temp.length);
console.log(temp);
console.log(temp2);


// combine and slice an array

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let answer=arr1.concat(arr2);
console.log("combined array",answer);

let slice_array=answer.slice(0,5);
 slice_array=answer.slice(5);
console.log(slice_array)

// slice on objects

let temp_arr=[

{name:"darshan",RollNo:11212530},
{name:"vansh",RollNo:11212520},

];
let temp_arr1=[

    {name:"Rinki",RollNo:11212535},
{name:"Alish",RollNo:11212536},
    ];

 console.log(temp_arr,temp_arr1);
    temp_ans=temp_arr.concat(temp_arr1);
    console.log(temp_ans);




