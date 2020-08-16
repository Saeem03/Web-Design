const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];
var canvas = document.querySelector("canvas");
window.innerWidth = 900;
window.innerHeight = 400;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var a = canvas.getContext('2d');
class Circle {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.draw = function () {
            a.beginPath();
            a.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            a.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
            a.fill();
            a.stroke();
            // console.log(x + " SubhanAllah " + y);
        };
        this.update = function () {
            if ((this.x - this.r) < 0 || (this.x + this.r) > innerWidth)
                this.dx = -this.dx;
            if ((this.y - this.r) < 0 || (this.r + this.y) > innerHeight)
                this.dy = -this.dy;
            this.x += this.dx;
            this.y += this.dy;
            if ((Math.abs(this.x - mouse.x) < this.r) && (Math.abs(this.y - mouse.y) < this.r)) {
                if (this.r < 50)
                    this.r += 1;
            }
            else if (this.r > 10) {
                this.r -= 1;
            }
            this.draw();
        };
    }
}
var circleArray = [];
var circleNumbers = 120;
var mouse = {
    x: undefined,
    y: undefined
};
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
});
init();
function init() {
    for (var i = 0; i < circleNumbers; i++) {
        var r = 10;
        // if(r<5) r+=5;
        var x = Math.floor(Math.random() * (innerWidth - r));
        var y = Math.floor(Math.random() * (innerHeight - r));
        var dx = (Math.random() - .5) * 2;
        var dy = (Math.random() - .5) * 1;
        circleArray.push(new Circle(x, y, dx, dy, r));
    }

}
animate();
function animate() {
    requestAnimationFrame(animate);
    a.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleNumbers; i++) {
        circleArray[i].update();
    }
}
