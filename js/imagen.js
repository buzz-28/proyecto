const image= document.querySelector("imga"),
input = document.querySelector ("input");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
});
