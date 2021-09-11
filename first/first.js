// menu system 

console.log(`press 1 for biryani
press 2 for curd`);

let menu = prompt("your menu");
console.log("user orderd ",menu);

if(menu==="1"){
    console.log("you have selected biryanio please pay RS.1000");
}else if(menu==="2"){
    console.log("you have selected curd please pay RS.50");
}else{
    console.log("the menu you selected does not exist yet");
}

// switch(menu){
//     case "1":
//         console.log("you have selected biryanio please pay RS.1000");
//         break;
//     case "2":
//         console.log("you have selected curd please pay RS.50");
//         break;
    
//     default: console.log("the menu you selected does not exist yet");
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//platform menu driven
  //user has to input a movie by its name
  //either use switch case or if-else to print movies name and price