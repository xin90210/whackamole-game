var ctx = canvas.getContext("2d")
var start = 0

requestAnimationFrame(animate)

function animate(timestamp) {
    ctx.clearRect(0, 0, 500, 500)
    const y = 500 * (timestamp - start) / 3000
    ctx.fillRect(10, y , 10, 10)
    console.log(timestamp)
    frame = requestAnimationFrame(animate)
}
document.body.onclick = () => cancelAnimationFrame(frame)

