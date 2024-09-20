const result = document.querySelector(".result")
const quantity = document.querySelector(".quantity")
const summary = document.querySelector(".summary")
const cellsCalculator = document.querySelector(".calculator")

const namesTab = ["BAND", "SEG", "EOS", "BAS", "MON", "LYM", "MBL", "PML", "MIE", "MET", "R1", "R2"];

let sum = 0

function countPercent() {
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
    cells.appendChild(plus)

    minus = document.createElement("button")
    minus.textContent = "-"
    cells.appendChild(minus)

    plus.addEventListener("click", () => {
        sum++
        summary.textContent = "Suma: " + sum
        cellCounter.textContent = parseInt(cellCounter.textContent) + 1
        countPercent()
    })

    minus.addEventListener("click", () => {
        sum--
        summary.textContent = "Suma: " + sum
        cellCounter.textContent = parseInt(cellCounter.textContent) - 1 
        countPercent()
    })
});