function modalToggle(){
    window.scrollTo(0,0);
    console.log('toggle?')
    document.querySelectorAll(".sect").forEach(element => {
        element.classList.toggle("hide");
    });
    document.getElementById("form").classList.toggle("hide");
    document.getElementById("footer").classList.toggle("hide");
    document.getElementById("top").classList.toggle("low");
    document.getElementById("defaultCanvas0").classList.toggle("low");
}