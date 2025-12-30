var overly=document.querySelector(".overly")
var popbox=document.querySelector(".popbox")
var buttons=document.getElementById("add-popup-button")


buttons.addEventListener("click",function(){

    popbox.style.display="block"
    overly.style.display="block"
})

var clos=document.getElementById("close")

clos.addEventListener("click",function(event){

    event.preventDefault()
    popbox.style.display="none"
    overly.style.display="none"
    

})


// selecting add,container,bookname,bookauthor,descript

   
    var adds=document.getElementById("addbooks")
    var books=document.querySelector(".book")
    var bookname=document.getElementById("namebook")
    var bookauthor=document.getElementById("bookauthor")
    var description=document.getElementById("description")

   adds.addEventListener("click",function(event){


    event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","container")
   div.innerHTML=`<h1>${bookname.value}</h1>
            <h5>${bookauthor.value}</h5>
            <p>${description.value}</p>
            <button onclick="deletek(event)">delete</button>`
    books.append(div)
    popbox.style.display="none"
    overly.style.display="none"

  })
 function deletek(event)
 {

    event.target.parentElement.remove() 
 }