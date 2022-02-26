document.querySelector('#download').onclick = () => 
{
    let image = document.querySelector("#capture")
    html2canvas(image).then(canvas =>
        {
            const image = canvas.toDataURL('image/png')
            const link = document.createElement('a')
            link.download = 'image.png'
            link.href = image
            link.click()
        }).catch(err => console.log(err))
}
