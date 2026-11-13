// squares
const container = document.getElementById("square-list");
let htmlContent = "";
let spacing = 120;
let xoffset = 10 + window.innerWidth%spacing / 2;
let yoffset = 10 + window.innerHeight%spacing / 2;
let x = xoffset;
let y = yoffset;
let row=1;
let column=1;
let dir = 0;
let round = '0%';
let n = Math.ceil(window.innerWidth/spacing - 1)*Math.ceil(window.innerHeight/spacing - 1);
for (let i = 1; i <= n; i++) {
    round = '0%';
    dir = 'normal';
    if (row%2 == 1) {
        if (column%2 == 0) {
            dir = 'reverse';
        }
        else {

        }
    }
    else {
        if (column%2 == 0) {
            
        }
        else {
            dir = 'reverse';
        }
    }
    
    htmlContent += `
    <div
        class="square"
        style="
            position: absolute;
            left:${x}px;
            top: ${y}px;
            --direction: ${dir};
            --round: ${round};
            "
    ></div>
  `;
    x += spacing;
    column+=1;
    if (x >= window.innerWidth + 10 - spacing) {
        x=xoffset;
        y+=spacing;
        column=1;
        row+=1;
    }
}

// Inject the content into the DOM
container.innerHTML = htmlContent;