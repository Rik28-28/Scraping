/**SOLO RECOGEREMOS LA INFORMACIÓN DE TRES PERSONAS */

var i = localStorage.getItem('iteracion')

if(i === null || i === ''){
    i = 0
}else{
    i = parseInt(JSON.parse(i))
}

switch (i) {
    case 0:
        perfiles(0);
        break;   
    case 1:
        perfiles(1);
        break;
    case 2:
        perfiles(2);
        break;   
    default:
        localStorage.setItem("iteracion", JSON.stringify("terminado"))
        console.log(parse(localStorage.getItem('Personas')))
        break; 
}

function perfiles(i){
    localStorage.setItem("iteracion", JSON.stringify(i+1))
    document.querySelectorAll("div.entity-result__item")[i].querySelector("a.app-aware-link").click()
}