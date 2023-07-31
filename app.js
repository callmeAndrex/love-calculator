const btn = document.querySelector(".gen")
const percentage = document.querySelector(".percentage")

btn.addEventListener("click", function(){
    var number  =  Math.random() * 100
    number = Math.round(number) + 1
    console.log(number)

   percentage.innerText = number + "%"

})
