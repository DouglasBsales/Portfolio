function menuShow(){
    let iconeMenu = document.getElementById('menuMobile');
    if(iconeMenu.src.includes('menu.svg')){
        iconeMenu.src = "public/x.svg"
    }
    else {
        iconeMenu.src = 'public/menu.svg'
    }
}