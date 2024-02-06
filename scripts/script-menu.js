function menuShow() {
  let exibirMenu = document.getElementById("pageMenuMobile");
  exibirMenu.style.visibility = "visible";
  exibirMenu.style.width = "330px"
  exibirMenu.style.transition = "width 0.4s ease, visibility 0.2s"

  let pageOpenBody = document.getElementById('pageSobreBody')
  pageOpenBody.style.visibility = 'visible'
  pageOpenBody.style.opacity = "1"
  pageOpenBody.style.transition = "opacity 0.3s ease"
}

function fecharPage(){
    let exibirMenu = document.getElementById("pageMenuMobile");
    exibirMenu.style.visibility = "hidden";
    exibirMenu.style.width= "88px"

    let pageOpenBody = document.getElementById('pageSobreBody')
    pageOpenBody.style.visibility = "hidden"
    pageOpenBody.style.opacity = "0"
}

let bgLink = document.getElementById('link1');
    bgLink.addEventListener('click', ()=>{
    bgLink.style.backgroundColor = "#445964"
    bgLink.style.color = "#fff";
})


