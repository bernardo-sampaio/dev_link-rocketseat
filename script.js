function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    
    if (html.classList.contains("light")) {
        img.setAttribute('src', './assets/bsampaio-light.png')
        img.setAttribute('alt', 'imagem de bsamapaio pegando no queixo')
    }
    else {
        img.setAttribute('src', './assets/bsampaio-dark.png')
        img.setAttribute('alt', 'imagem de bsampaio mexendo no computador')
    }
}