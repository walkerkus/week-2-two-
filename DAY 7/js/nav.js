let isOpen = false;

function nav_button(){
    let navbutton = document.getElementById("navbutton");

    if(!isOpen){
        navbutton.style.display = "flex";
        isOpen = true;
    }else{
        navbutton.style.display = "none";
        isOpen = false;
    }
}