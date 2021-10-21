const element = document.getElementById("#name");
let y = true;
function checkInputnum(ob){
    var invalidChars = /[^0-9]/gi
            if(invalidChars.test(ob.value)) {
                    ob.value = ob.value.replace(invalidChars,"");
          }
};
function checkInputalph(ob){
    var invalidChars = /[^a-z]/gi
            if(invalidChars.test(ob.value)) {
                    ob.value = ob.value.replace(invalidChars,"");
          }
        };
const checker = function(){
    var test = document.getElementsByClassName("check")
    let inputs = Array.from(test); // converts nodelist (returned by getElementsByClassName) into an array
    for( let i =0; i < inputs.length; i++){
            let x = inputs[i];
            let inputlist = x.querySelectorAll('input');
            let arrayo = Object.values(inputlist);

            if(x.querySelector("input").value === "check"){
                if(x.querySelector("input").checked){
            } else{
                    const checkers = document.createElement("span");
                    checkers.setAttribute("class", "err")
                    checkers.setAttribute("id", "checkbox")
                    const text2 = document.createTextNode("* Required");
                    checkers.appendChild(text2);
                    x.appendChild(checkers);
                    y = false;
                }
            } else if(x.querySelector("input").value === ""){
                const flag = document.createElement("span");
                const text = document.createTextNode("* Required");
                flag.setAttribute("class", "err")
                flag.appendChild(text);
                x.appendChild(flag);
                y = false;
            }
            else{
        console.log('nothing')
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
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
const submit = function(){
// if(truth){
    //delete by err class
    console.log(y);
    removeElementsByClass("err");
    checker();
    console.log(y);
if(y=true){
    console.log(y);
}
else{
    document.getElementById("form-user").submit;

}
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
