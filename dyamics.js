function modalToggle(){
    console.log('toggle?')
    document.querySelectorAll(".sect").forEach(element => {
        element.classList.toggle("hide");
    });
    document.getElementById("form").classList.toggle("hide");
}