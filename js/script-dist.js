const block3 = document.querySelector(".block3")
const modal = document.querySelector(".modal")
const exit = document.querySelector(".exit")
const next = document.querySelector(".next")

block3.addEventListener("click", handleClick);

function handleClick() {
  	modal.style.display === 'none' || !modal.style.display ? 
    modal.style.display = 'block' : modal.style.display = 'none'
}

exit.addEventListener("click", changeDisplay)
next.addEventListener("click", changeDisplay)

function changeDisplay() {
  modal.style.display = 'none'
}