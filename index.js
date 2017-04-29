const app = "I don't do much."

var dodger = $('#dodger')

function moveDodgerRight(){
  var rightNumber = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumber)

  if (right > 0) {
    dodger.style.right = `${right - 1}px`
  }
}

document.addEventListener('keydown', function(e){
  if (e.which === 39) {
    moveDodgerRight()
  }
})
