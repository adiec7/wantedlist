var button = document.getElementById("enter");
var input = document.getElementById("user");
var ul = document.querySelector("ul");

function inputlenght(){
      return input.value.lenght;
}

function createListElement(){
    var li= document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick(){
    if (input.value.length>0){
        createListElement();
    }
}
function addListAfterKeypress(){
    if (input.value.length>0 && event.keyCode===13){
        createListElement();
    }

}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);