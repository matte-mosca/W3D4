const tab = []; 

const generateCells = numbers => {
    const tabDiv = document.querySelector (".tombola")
    for ( i = 0; i < numbers; i++){
    const cellDiv = document.createElement("div")
    cellDiv.className = "Cell"
    const cellH3 = document.createElement("h3")
    cellH3.innerText = i + 1
    .container.appendChild("tab")
    
    tab.push([cellH3])


console.log(tab)
    }
}

generateCells(76)