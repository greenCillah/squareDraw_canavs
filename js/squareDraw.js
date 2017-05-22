function fnStart() {
    var c_canvas = document.getElementById("c");
    var context = c_canvas.getContext("2d");

    for (var x = 0.5; x < 10501; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, 10381);
    }

    for (var y = 0.5; y < 10381; y += 10) {
        context.moveTo(0, y);
        context.lineTo(10500, y);
    }

    context.strokeStyle = "#ddd";
    context.stroke();

}
