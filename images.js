console.img = function (image) {
var i = new Image();
i.src  = image;
console.log("%c"+"+","color:transparent;background: url("+image+"); background-repeat: no-repeat;    background-size: auto;");
}
