//const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";
//document.querySelector("body").appendChild(h2);

//const init = function(){
  //  document.getElementById('button').addEventListener('click', submit);
//}
//document.addEventListener('DOMContentLoaded', init);
const element = document.getElementById("#name");

const checker = function(){
var test = document.getElementsByClassName("check")
let inputs = Array.from(test); // converts nodelist (returned by getElementsByClassName) into an array
for( let i =0; i < inputs.length; i++){
    // if test here in the loop, for each element. nested if for checkbox
    let x = inputs[i];
    let inputlist = x.querySelectorAll('input');
//console.log(x.querySelector("input").value);
    let arrayo = Object.values(inputlist);

    console.log(x.querySelector("input").checked);
if(x.querySelector("input").value === "check"){
    if(x.querySelector("input").checked){
    console.log("nothing to see here!");
} else{
    console.log("it's a checkbox!!!");
    const checkers = document.createElement("span");
    checkers.setAttribute("id", "checkbox")
    const text2 = document.createTextNode("* Required");
    checkers.appendChild(text2);
    x.appendChild(checkers);
}
} else if(x.querySelector("input").value === ""){
    const flag = document.createElement("span");
    const text = document.createTextNode("* Required");
    flag.appendChild(text);
    x.appendChild(flag);
}
else{
console.log('nothing!')
}
}
}

/*
if (id.hasChildNodes()) {
    let children= id.children;
    console.log(children[1]);
    for (let i=0; i < children.length; i++){
        console.log(i);
        if (children[i].hasChildren){
            console.log(`${children[i]}`+"it still has kids")
        }
        else{
            console.log("This was the last kid!")
        }
        */
        // Nest an if inside this to test if it has a child, if no, do the below.
 /*    const flag = document.createElement("span");
    const text = document.createTextNode("* Required");
        flag.appendChild(text);        
      document.getElementById("start").appendChild(reqmark);

}
else{
    console.log("errr");
*/
const submit = function(){
// if(truth){
    checker();
//    const reqmark = document.createElement("span");
 //   const text = document.createTextNode("* Required");
  //  reqmark.appendChild(text);  
  // document.getElementById("start").appendChild(reqmark);
  
  
  
  
  // Make this a loop where it goes through by each element - recursive function?
  // call the "checker" function for each element, and have it run through the above process

  //}
  


/* else{
    alert("throwing an error");
} */
}


// This has to go AFTER you've defined the function.
    const button = document.getElementById('button');
    button.addEventListener('click', submit);      




/*    const variable = True;
    if (variable === True){
}
   else{
        alert("your function says false");
    }
    */
function IsEmpty() {
  
    if (document.forms['form'].question.value === "") {
    alert("empty");
    return false;
  }
  return true;
}


/*    if(ret)
    alert("clicked!")
    //this should then redirect them to the secondary page ()
    else
    alert('there is a problem here.')
//write what you want your submission function to do
} */



//const validation = function(){}


//testing mac can commit once again

// idea - I want to create a basic form fillout website (contact info to sign for mailing list)

// Then I want to programatically send an email on each form submission.
// use a click on button button to do the thing: 
//A click on a button button does... nothing! That sounds silly, but it's amazingly useful 
// for building custom buttons — you can define their chosen functionality with JavaScript.

// Also then take the information from the form and have the person be an object / marketing item.
