//change color

function changeColor(obj) {
    if (obj.style.color == 'palevioletred') {
        obj.style.color = '#323232';
    } else {
        obj.style.color = 'palevioletred';
    }
}

//zoom in & out

function zoomIn(x) {
    x.style.height = "50px";
    x.style.width = "50px";
}

function zoomOut(x) {
    x.style.height = "35px";
    x.style.width = "35px";
}