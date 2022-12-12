const groceries = document.getElementsByClassName("groceries")[0];
const clearBtn = document.getElementById("clearBtn");
const addBtn = document.getElementById("addBtn");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

clearBtn.addEventListener("click", () => {
  allItems.innerHTML = "";
});

addBtn.addEventListener("click", () => {
  if(userInput.value==""){
    alert("No Data Input");
  }
  else{
    var p = document.createElement("p");
    p.innerHTML = "- " + userInput.value;
  
    p.addEventListener("click", () => {
      p.style.textDecoration = "line-through";
    });
    allItems.insertAdjacentElement("beforeend", p);
  
    userInput.value = "";
    sessionStorage.setItem("addedList", jQuery(allItems).html());
  console.log ( sessionStorage.getItem("addedList"));
  }
  
  
});
$(document).ready(function () {
if (sessionStorage.addedList){
  jQuery(allItems).html (sessionStorage.getItem("addedList"));
}
});