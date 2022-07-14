const playDom = document.getElementById('play');

playDom.addEventListener('click', startGame );

function startGame() {

    const difficult = parseInt(document.getElementById('difficult').value);

    let cellTotal;
    let cellPerSide;

    switch (difficult) {
        case 1:
        default:
            cellTotal = 100;
            break;
        case 2: 
            cellTotal = 81;
            break;
        case 3: 
            cellTotal = 49;
            break;
    }

    cellPerSide = Math.sqrt(cellTotal);

    generatePlayground();

    function generatePlayground() {
        // prendo l'elemento principale che rappresenta la griglia
        const gridDom = document.getElementById('grid');
        gridDom.innerHTML = '';

        for (let i = 1; i <= cellTotal; i++) {

            // creo un singolo quadrato
            const currentElement = createGridSquare(i, cellPerSide);

            // aggiungo l'evento di click e i suoi effetti
            currentElement.addEventListener('click', 
                function () {
                    console.log(i);
                    console.log(this.innerText);
                    this.classList.toggle('clicked');
                }
            );

            // infine lo aggiungo alla griglia
            gridDom.append(currentElement);
        }
    }

    function createGridSquare(numero, cellePerLato) {

        //creo un elemento del dom di tipo div con classe square
        const currentElement = document.createElement('div');
        currentElement.style.height = `calc(100% / ${cellePerLato})`;
        currentElement.style.width = `calc(100% / ${cellePerLato})`;
        currentElement.classList.add('square');
        currentElement.append(numero);
        // <div class="square">1,2,3</div>
        
        // infine ritorno il div con classe square e relativo figlio square-number
        return currentElement;
    
    }

}
