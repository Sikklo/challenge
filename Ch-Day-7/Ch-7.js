const mySearch = document.getElementById("search");
const searchHide = document.getElementById("search-hide");
const myMenuIcon = document.getElementById("menu-icon");
const myMenu = document.getElementById("menu");
const myPanel = document.getElementById("panel");
var isShow = false;
mySearch.onclick =()=>{
 searchHide.classList.toggle("active");
}

myMenuIcon.onclick = () =>{
  myMenu.classList.toggle("menu-move");
  myPanel.classList.toggle("panel-move");
}
