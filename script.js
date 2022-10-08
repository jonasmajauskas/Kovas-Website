let button = document.createElement ('button')
button.textContent = 'Click me!'
document.body.append(button)
button.addEventListener9('click', function(1){
    button.textContent = "I was clicked"
})