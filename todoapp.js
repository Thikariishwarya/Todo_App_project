let input=document.querySelector("input");
let btn=document.querySelector(".add");
let ul=document.querySelector("ul");
let list =document.querySelectorAll("li");
btn.addEventListener("click",function(event)
{
    let li=document.createElement("li");
        li.innerText=input.value;
    let btn1=document.createElement("button");
    btn1.classList.add("delete");
    btn1.innerText="Delete";
    if(li.innerText!=0)
    {
        ul.appendChild(li);
    }
    li.appendChild(btn1);
    input.value="";
})
ul.addEventListener("click",function(event){
    let target1=event.target;
    if(target1.nodeName=="BUTTON")
    {
        target1.parentElement.remove();
        console.log("deleted!");
    }
})

//event bubbling


// let deletebtn=document.querySelectorAll(".delete");
// for(del of deletebtn){
// del.addEventListener("click",function(event){
//     let par=this.parentElement;
//     console.log(par);
//     par.remove();
// })