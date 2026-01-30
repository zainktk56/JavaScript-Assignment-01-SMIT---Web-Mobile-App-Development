// CHAPTER N0 1

// // Question no 1 :
// // alert("Hello User !")


// // Question no 2 :
// // alert("Error! Please Enter a valid Password.")

// // Question no 3 :
// // alert("Welcome to JS Land...\nHappy Coding.")

// // Question no 4 :
// // alert("Welcome to JS Land...")
// // alert("Happy Coding! \nPrevent this page from creating additional dialogs. ")

// // Question no 5 :
// console.log("Hello...I can run JS through my web browser's console .")




// CHAPTER NO 2

// Question no 1 :

//  let username = "USER ZAIN"

// Question no 2 :

//  let myName =" Muhammad Zain Haroon "
//  alert("Hello!" + myName)
//  example<<
// username=prompt("Enter your name : ")
// alert("Hello!"+ username )


// Question no 3 :

// let message;
// message="Hello World"
// alert(message)




// Question no 4 :

// let usernamename;
// let age;
// let profession;

// username=prompt("Enter your name :")
// age=prompt("Enter your age : ")
// profession=prompt("Enter your Profession :")

// alert(username)
// alert(age +" years old")
// alert(profession)



//  Question no 5 :

// alert("PIZZA\nPIZZ\nPIZ\nPI\nP"); 



// Question no 6 :

// let email ;
// email =prompt("Enter Your Name For The Email : ")
// alert(email+"@gmail.com")



// Question no 7 :


// let book ;
// book="A smarter way to learn JavaScript"
// alert(book)



// Question no 8 :

// document.writeln(" <h2>Yah I Can Write HTML content through JAVASCRIPT. </h2> ")

// Question no 9 :

// alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”")

// CHAPTER NO 3

// Question no 1 :         

// let age;
// age="I am"+ 15+" years old."
// alert(age)


// Question no 2 :


// let n = localStorage.visits || 0;
// localStorage.visits = ++n;
// alert(`You have visited this site ${n} times`);


// Question no 3 :

// let birthyear= 2009;
// document.writeln("My Birth year is " +2009+ "." +"<br>")
// document.writeln("Data Type of my declared Variable is " + typeof(birthyear) +".")



// Question no 4 : 


// let username = prompt("Enter Your Name :")
// let product_title = prompt("Enter Your Product Name :")
// let product_quantity = prompt("Enter The Quantity of your Product :")
// document.writeln(username + " ordered " + product_quantity +" " + product_title +  " on XYZ Clothing store.")


                                                    //    CHAPTER NO 4

// Question no 1 :                                                    

// var var1,var2,var3 ;           


// Question no 2 :

// var legal1 , $legal2 , legal_3 , Legal4 , legAl5 ;
// var 1illegal // starts with a number
// var function // reserved keyword
// var @myName // special characters are not allowed  

// Question no 3 :


// part 3a
// document.writeln("<h1>Rules for naming JS variables </h1> ")

// part 3b

// document.writeln("Variable names can only contain" + " letter," +" underscore( _ )," + " $ sign ," + " numbers ." +"<br>")
// document.writeln("For Example " + "<b>$my_1stVariable</b>")

// part 3c
// document.writeln("Variables must begin with a" + " Dollar sign ($)" + " underscore (_)" + " letters." )
// document.writeln("For example : <b>$name</b>," + "<b>_name</b>," + "<b>name</b>." )

// part 3d

// document.writeln("Variables name case are sensitive .")

// part 3e 

// document.writeln("Variables name should not be a JS keyword .")

//                                                       CHAPTER NO 5

// Question no 1 :

// let
// a = 5 ;
// b = 6 ;
// sum = a+b;

// document.writeln("Sum of " + a + " " + " and " + b + " is " + sum +"." )

// Question no 2 :

// let
// a = 5 ;
// b = 6 ;
// sub = a-b;
// mul = a*b;
// div = a/b; 
// document.writeln("Sub of " + a + " " + " and " + b + " is " + sub +"." + "<br>" )
// document.writeln("mul of " + a + " " + " and " + b + " is " + mul +"." + "<br>" )
// document.writeln("div of " + a + " " + " and " + b + " is " + div +"." + "<br>" )


// Question no 3 :


// var a = "undefined" ;
// document.writeln("<h1>Value after Variable Declaration is : " + a + "</h1>");
// let b = 18 ;
// document.writeln("<h1> Initial Value : " +  b  + "</h1>" )
// b++;
// document.writeln("<h1> Increment Value : " +  b + "</h1>" )
// b+=7;
// document.writeln("<h1> Value after Addition of 7 is  : " +  b + "</h1>" )
// b--;
// document.writeln("<h1> Value After Decrement is : " + b + "</h1>")
// c=b/3;
// document.writeln( "<h1> The remainder after dividing by 3 is : " + c + "</h1>")



// Question no 4 :

// one_ticket=600;
// price_of_5_tickets= 5*600;
// document.writeln("Total cost to buy 5 tickets is :" + price_of_5_tickets)



// Question no 5 :

// let num =prompt("Enter the you want the Table of  :")
// document.writeln("<h1> Table of " + num +"</h1>")
// for(let i=1;i<=10;i++){
//     document.writeln(num + "x" + i + " =", num*i +"<br>")
// }

// Question no 6 :

// let celcius_temp = 35 ;
// let converted_farenhite_temp = celcius_temp * (9/5) + 32
// document.writeln( celcius_temp+"<sup>0</sup>C" + " " +"is " +" " + converted_farenhite_temp +"<br>")
// let farenhite_temp = 70
// let converted_celcius_temp = (farenhite_temp-32)*(5/9)
// document.writeln( farenhite_temp + "<sup>0</sup> F" + " " +"is " +" " + converted_celcius_temp)

// Question no 7 :

// let item_1= Number(prompt("Enter the price of first item : "));
// let item_2= Number(prompt("Enter the price of second item :"));
// let quantity_item_1=Number(prompt("Enter the quantity of first item :"));
// let quantity_item_2=Number(prompt("Enter the quantity of second item :"));
// let shiping_charges=Number(250);

// price_1=item_1*quantity_item_1
// price_2=item_2*quantity_item_2

// document.writeln("<h1>Shipping Cart</h2>" + "<br><br><br>");
// document.writeln("Price of item 1 is : " + " "+ item_1 +"<br>");
// document.writeln("Price of item 2 is : " + " "+ item_2+"<br>");
// document.writeln("Quantity of item one is : " + " "+ quantity_item_1+"<br>")
// document.writeln("Quantity of item two is : " + " "+ quantity_item_2+"<br>")
// document.writeln("Shipping Charges are : " + shiping_charges+"<br>")

// total_cost=(price_1+price_2+shiping_charges)
// document.writeln("Total Cost of your order is : " + total_cost+"<br>")


// Question no 8 :

// total_marks=Number(prompt("Enter the Total Marks :"))
// marks_obtained=Number(prompt("Enter the Marks Obtained :"))
// percentage= (marks_obtained/total_marks)*100

// document.writeln("<h1>Mark Sheet</h2>" + "<br><br><br>");
// document.writeln("Total Marks : " + total_marks+"<br>")
// document.writeln("Marks Obtained : " + marks_obtained+"<br>")
// document.writeln("Percentage :" + percentage)


// Question no 9 :

// dollar=Number(prompt("Enter The USD amount you want to convert into PKR :"));
// riyal=Number(prompt("Enter The amount of saudi riyal you want to convert into PKR : "));
// pkr_dollar= dollar*104.80
// pkr_riyal=riyal*28
// Total_pkr=pkr_dollar+pkr_riyal
// document.writeln("TOTAL PKR AMOUNT IS :" + Total_pkr)


// Question no 10 :

// let a  = 100;
// c=a+5;
// d=c*10;
// e=d/2;
// document.writeln(e)


// Question no 11 :

// current_year=Number(prompt("Enter current year : "));
// birth_year=Number(prompt("Enter your birth year :"));
// age=current_year-birth_year
// document.writeln("Your age is :" + age);


// Question no 12 :

// radius_of_circle=Number(prompt("Enter the radius of circle : "));
// circum=2*3.14*radius_of_circle
// area=3.14*(radius_of_circle)*(radius_of_circle)

// document.writeln(" THE RADIUS OF THE CIRCLE IS :" + radius_of_circle +"<br>");
// document.writeln("THE CIRCUMFERENCE OF THE CIRCLE IS : "+ circum +"<br>")
// document.writeln("THE AREA OF THE CIRCLE " + area +"<br>")


// Question no 13  :

// let snack="prince biscuit";
// let my_Age=17;
// let max_age=80;
// let snack_per_day=3;

// total_snacks=((max_age-my_Age)*365)*snack_per_day
// document.writeln(`Total ${snack} you will need for lifetime are :`+" "+total_snacks )