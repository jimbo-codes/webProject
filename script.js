//const h2 = document.createElement("h2");
//h2.textContent = "This content added by JavaScript";
//document.querySelector("body").appendChild(h2);

//const init = function(){
  //  document.getElementById('button').addEventListener('click', submit);
//}
//document.addEventListener('DOMContentLoaded', init);
const element = document.getElementById("#name");

const submit = function(){
    const reqmark = document.createElement("span");
    const text = document.createTextNode("* Required");
    reqmark.appendChild(text);
  // create the *required* element, and insert them where appropriate to right of the form - append to "NAME"
  
  document.getElementById("start").appendChild(reqmark);
//  document.body.ul.append(reqmark);
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