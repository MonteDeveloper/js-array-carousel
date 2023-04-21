const listImagesUrl = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",
];

const elMiniaturesContainer = document.getElementById("miniatures");
const elSelectedImg = document.getElementById("selectedImage");

let selectedImageId = 1;
let counter = 0;

for(imageUrl of listImagesUrl){
    counter += 1;
    let newDiv = document.createElement("div");
    newDiv.classList.add("flex-grow-1");
    newDiv.style.backgroundImage = `url("../img/${imageUrl}")`;
    newDiv.style.backgroundSize = "cover";
    newDiv.style.backgroundPosition = "center";
    if(counter == selectedImageId){
        newDiv.style.border = "3px solid white";
        elSelectedImg.style.backgroundImage = `url("../img/${imageUrl}")`;
    }else{
        newDiv.style.filter = "blur(.1rem) grayscale(100%)";
    }
    elMiniaturesContainer.append(newDiv);
}

const listElMiniatures = elMiniaturesContainer.getElementsByTagName("div");

function updateCarousel(updateDirection){
    counter = 0;

    if(updateDirection == 'top'){
        selectedImageId -= 1;
        if(selectedImageId < 1){
            selectedImageId = listImagesUrl.length;
        }
    }else{
        selectedImageId += 1;
        if(selectedImageId > listImagesUrl.length){
            selectedImageId = 1;
        }
    }
    
    for(imageUrl of listImagesUrl){
        counter += 1;
        if(counter == selectedImageId){
            listElMiniatures[counter - 1].style.border = "3px solid white";
            listElMiniatures[counter - 1].style.filter = "none";
            elSelectedImg.style.backgroundImage = `url("../img/${imageUrl}")`;
        }else{
            listElMiniatures[counter - 1].style.filter = "blur(.1rem) grayscale(100%)";
            listElMiniatures[counter - 1].style.border = "none";
        }
    }
}



