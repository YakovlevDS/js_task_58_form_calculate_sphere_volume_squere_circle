// ? Task: Write a JavaScript program to calculate the volume of a sphere and



// Solution 1
const btnVolume = document.querySelector("#calcVolume");
const btnSquere = document.querySelector("#calcSquere");
const volume = document.querySelector("#volume");
const squere = document.querySelector("#squere");

const r = () => Math.abs(document.querySelector("#radius").value);

const volumeSphere = () => volume.value = ((4 / 3) * Math.PI * Math.pow(r(), 3))
            .toFixed(2);

const squereCircle = () => squere.value = (2 * Math.PI * Math.pow(r(), 2))
        .toFixed(2);

btnVolume.addEventListener("click", volumeSphere);
btnSquere.addEventListener("click", squereCircle);


// ! Explanation: 
