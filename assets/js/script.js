const container = document.querySelector(".container");
const image = document.querySelector(".car__image");

const cursor = {
    isDragging: false,
    initialPosition: 0,
};

let currentImage = 1;

const updateImage = (direction) => {

    if(direction < 0) {
       
        if (currentImage == 12) {
            currentImage = 1
        } else {
            currentImage += 1; 
        }
    } 

    if (direction > 0) {
        
        if (currentImage == 1) {
            currentImage = 12
        } else {
            currentImage -= 1;
        }
    }

    console.log(currentImage)

    image.src = `/assets/images/${currentImage}.jpg`;
};

container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;

    console.log(cursor.initialPosition);

});

container.addEventListener("mouseup", () => {
    cursor.isDragging = false;

});

container.addEventListener("mousemove", ({clientX}) => {
  
    // cursor.initialPosition = event.clientX;

    if (!cursor.isDragging) return;

    const offset = cursor.initialPosition - clientX;

   if (Math.abs(offset) >= 50) {
    // console.log(offset)


    updateImage(offset);

    cursor.initialPosition = clientX;
   }

    

});