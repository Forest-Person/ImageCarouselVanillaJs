const slideSelection = () => {

const tinyImageDiv = document.querySelector('.tinyImagePreview')


tinyImageDiv.addEventListener('click', (event)=>{
    const mainDivImage = document.querySelector('.randomImage')
    if(event.target.className === 'randomImage'){

    const imageDataSetValue = event.target.dataset.arrayNumber
    //console.log(imageDataSetValue)
        
    const mainDiv = document.querySelector('.mainImageDiv')
    mainDiv.removeChild(mainDivImage)
    const cloneSelectNode = document.querySelector(`.tinyImagePreview [data-array-number = "${imageDataSetValue}"]`).cloneNode()
    mainDiv.appendChild(cloneSelectNode)
    }
    

})




}

export { slideSelection }