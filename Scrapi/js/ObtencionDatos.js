
/** DEBIDO A QUE LOS ENVENTOS SE DISPARÁN VARIAS VECES POR CADA EVENTO, LOS DATOS RECOLECTADOS FINALES SE DUPLICARAN O TRIPLICARAN 
 ADEMÁS, HABRÁ DATOS NO DESEADOS POR LO QUE SE REQUIERE UN FILTRADO**/


 /**LOS DATOS SE GUARDARA EN EL LOCALSTORAGE CON EL NOMBRE DE Personas */
var Personasdb = localStorage.getItem('Personas')

if(Personasdb === null || Personasdb === ''){
    Personasdb = []
}else{
    Personasdb = JSON.parse(Personasdb)
}

var Persona = []

//NOMBRE
var nombre = document.querySelector("h1").textContent

//EDUCACION
var educacionTotal = []
var section = document.querySelector("div[id=education]")
if(section != null){
    section = section.parentElement.querySelectorAll("li.artdeco-list__item")
    var CantidadDeElementosEducacion = section.length
    for(var j = 0; j < CantidadDeElementosEducacion ;j++){
        var educacion = section[j].querySelector("div a span.mr1 span[aria-hidden='true']").textContent
        educacionTotal.push(educacion)
    }
}

//EXPERIENCIA

var experienciaTotal = []
var section2 = document.querySelector("div[id=experience]")
if(section2 != null){
    section2 = section2.parentElement
    var CantidadDeexperienciaTotal = section2.querySelectorAll("li.artdeco-list__item").length
    for(var j = 0; j < CantidadDeexperienciaTotal ;j++){
        var experiencia = section2.querySelectorAll("li.artdeco-list__item")[j].querySelector("div span.t-14 span[aria-hidden='true']").textContent
        experienciaTotal.push(experiencia)
    }
}
Persona.push(nombre)
Persona.push(educacionTotal)
Persona.push(experienciaTotal)
Personasdb.push(Persona)
localStorage.setItem("Personas", JSON.stringify(Personasdb))

history.back();



