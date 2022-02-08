const main = document.querySelectorAll(".square")
const button = document.querySelector("#btn")

button.addEventListener("click", () => {
    for(let i = 0; i < main.length; i++){
    main[i].classList.add(`_${Math.floor(Math.random() * 9)}`)
    }
})

console.log(main[0].className)
