
let gridNumberByUser=0;
let totalDivs=0;
let innerDivs=[];
function askUser(){
    let a =prompt("Please enter the number of squares");
    return a;
}
//helps make the board white when a new grid is selected
function cleanUpDivs(innerDivs){
  innerDivs.forEach(function(element){
      element.remove();
  })
}
    
function createGrid(){
cleanUpDivs(innerDivs);
innerDivs=[];
//fill up the innerDivs array with the total required divs 
for (let i=0; i<totalDivs; i++){
    innerDivs[i] = document.createElement("div");
    //innerDivs[i].appendChild(document.createTextNode('imadiv'));
    innerDivs[i].setAttribute("id", "innerDiv");
    document.getElementById('container').appendChild(innerDivs[i]);
}
let widthPercent= (100/gridNumberByUser)+"%";

//set the height and the width of each div dsynamically 
document.querySelectorAll("#innerDiv").forEach(function(element) {
    element.style.height= widthPercent;
    element.style.width= widthPercent;
});

//hover method to ensure that the div stays black 
innerDivs.forEach(function(element){
    element.addEventListener('mouseover', () =>{
        element.style.backgroundColor= 'black';
    }
)});
}

let newGridButton= document.querySelector(".newButton");
newGridButton.addEventListener('click', () =>{
    gridNumberByUser = askUser();
    totalDivs = gridNumberByUser*gridNumberByUser;
    createGrid();
});
