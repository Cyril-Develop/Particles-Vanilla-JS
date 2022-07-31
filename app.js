const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const colorParticules = ['red', 'yellow', 'orange', 'purple', 'brown']

class Particules{
    constructor(){
        this.radius = Math.random() * 9 + 6;
        this.x = Math.random() * canvas.width - this.radius;
        this.y = Math.random() * canvas.height - this.radius;
        this.speedX = Math.random() * 1 - 1
        this.speedY = Math.random() * 1 - 1
        this.color  = colorParticules[Math.floor(Math.random() * colorParticules.length)]
    }
    update(){
        this.x += this.speedX
        this.y += this.speedY

        if(this.x < 0 + this.radius || this.x > canvas.width - this.radius){
            this.speedX *= -1;
        }
        if(this.y < 0 + this.radius || this.y > canvas.height - this.radius){
            this.speedY *= -1;
        }
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }
}

let numberOfParticules = 100;
const arrayParticules = []

for (let i = 0; i < numberOfParticules; i++){
    arrayParticules.push(new Particules())
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = '#333'
    ctx.fillRect(0,0,canvas.width,canvas.height)

    arrayParticules.forEach(particule => {
        particule.update()
        particule.draw()
    })

    requestAnimationFrame(animate)
}
animate()