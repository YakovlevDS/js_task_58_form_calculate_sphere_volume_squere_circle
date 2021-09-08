// ? Task: Write a JavaScript program to calculate the volume of a sphere.



// Solution 1
const buttonVolume = document.querySelector("#calcVolume");
const buttonSquere = document.querySelector("#calcSquere");
const volume = document.querySelector("#volume");
const squere = document.querySelector("#squere");
let r;

const volumeSphere = () => {
    r = Math.abs(document.querySelector("#radius").value);
        return (volume.value = ((4 / 3) * Math.PI * Math.pow(r, 3))
            .toFixed(2));
}

const squereCircle = () => {
    r = Math.abs(document.querySelector("#radius").value);
    return squere.value = (2 * Math.PI * Math.pow(r, 2))
        .toFixed(2);
}


buttonVolume.addEventListener("click", volumeSphere);
buttonSquere.addEventListener("click", squereCircle);


// ! Explanation: 
