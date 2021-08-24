const sub =document.getElementById("sub");
const remove =document.getElementById("remove");
const plus =document.getElementById("plus");
const closee =document.getElementById("close");
const adding =document.getElementById("adding");
const todo =document.getElementById("todo");
const result =document.getElementById("result");
function f1(){
    adding.style.display="inline";
    closee.style.display="inline";
    plus.style.display="none";
}

function f2(){
    adding.style.display="none";
    plus.style.display="inline";
    closee.style.display="none"
}

    sub.addEventListener('click',(event) => {
     event.preventDefault();
     if (todo.value.length>0){
    const activity=document.createElement("li");
    const task = document.createTextNode(todo.value);
    todo.value="";
    activity.appendChild(task);
    result.appendChild(activity);
   $("#result").sortable();
     }
     else{alert('Please write what do you do today!!')}
   });

   remove.addEventListener('click',(event) => {
    result.removeChild(result.childNodes[0]);     
   });