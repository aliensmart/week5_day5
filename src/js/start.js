
function changeGretting(){
    let greeting = "GoodBye"
    let elementByTagName = document.getElementsByTagName("h1")
    elementByTagName[0].textContent = greeting
}

setTimeout(changeGretting, 5000);