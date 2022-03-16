const container = document.getElementById("container");
let size = 16; 
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ('');
    container.appendChild(cell).className = "grid-item"; 
    
  };
};

makeRows(size, size); 
let gridDivs = Array.from(document.querySelectorAll('.grid-item'));  
gridDivs.forEach(gridDiv => gridDiv.addEventListener('mouseover', function() {
    gridDiv.classList.add('hovered-over'); 
}))

document.getElementById('clear-board').addEventListener('click', function() {
    gridDivs.forEach(gridDiv => gridDiv.classList.remove('hovered-over'));  
    gridDivs.forEach(gridDiv => gridDiv.remove()); 
    size = prompt('What is the size of the new grid?'); 
    makeRows(size, size); 
    gridDivs = Array.from(document.querySelectorAll('.grid-item'));  
    gridDivs.forEach(gridDiv => gridDiv.addEventListener('mouseover', function() {
        gridDiv.classList.add('hovered-over'); 
    }))
})