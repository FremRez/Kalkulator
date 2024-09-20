const result = document.querySelector(".result")
const quantity = document.querySelector(".quantity")
const summary = document.querySelector(".summary")
const cellsCalculator = document.querySelector(".calculator")

const namesTab = ["BAND", "SEG", "EOS", "BAS", "MON", "LYM", "MBL", "PML", "MIE", "MET", "R1", "R2"];

let sum = 0

function counting() {
    if(sum % 100 == 0){
        summary.classList.add("summaryDone")
        quantity.classList.add("summaryDone")
    }else{
        summary.classList.remove("summaryDone")
        quantity.classList.remove("summaryDone")
    }
    
    quantity.textContent = ""
    let cellCounterTab = document.querySelectorAll(".cellCounter")

    cellCounterTab.forEach(counter => {
        let parentDiv = counter.closest("div");
        let cellName = parentDiv.querySelector("p").textContent;

        if (counter.textContent >= 1) {
            let quantityPlace = document.createElement("p")
            quantityPlace.textContent = cellName + ": " + ((parseInt(counter.textContent) / sum)*100).toFixed(0) + "%"
            quantity.appendChild(quantityPlace)
        }

        let buttonTab = document.querySelectorAll("button")
        buttonTab.forEach(button => {
            button.classList.remove("plusClicked", "minusClicked")
            if (event.target.textContent == "+") {
                event.target.classList.add("plusClicked")
            }else if (event.target.textContent == "-") {
                event.target.classList.add("minusClicked")
            }
        });
    });
}

namesTab.forEach(name => {
    const cells = document.createElement("div")
    cellsCalculator.appendChild(cells)

    const cellName = document.createElement("p")
    cellName.textContent = name
    cells.appendChild(cellName)

    const cellCounter = document.createElement("span")
    cellCounter.classList.add("cellCounter")
    cellCounter.textContent = 0
    cells.appendChild(cellCounter)

    plus = document.createElement("button")
    plus.textContent = "+"
    plus.classList.add("plus")
    cells.appendChild(plus)

    minus = document.createElement("button")
    minus.textContent = "-"
    minus.classList.add("minus")
    cells.appendChild(minus)

    plus.addEventListener("click", () => {
        sum++
        summary.textContent = "Suma: " + sum
        cellCounter.textContent = parseInt(cellCounter.textContent) + 1
        counting()
    })

    minus.addEventListener("click", () => {
        if (parseInt(cellCounter.textContent) > 0) {
            sum--
            summary.textContent = "Suma: " + sum
            cellCounter.textContent = parseInt(cellCounter.textContent) - 1 
        }
        counting()
    })
});