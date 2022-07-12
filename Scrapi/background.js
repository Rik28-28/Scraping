/** Asegurese de limpiar los datos del localstorage con nombres: "Personas" e "iteracion" para que funcione correctamente **/
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['js/Navegacion.js']
    })

    chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab) {
      if ((changeInfo.status && tab.status) === 'complete'){
        setTimeout(function(){
          /** ANTES DE SUBIR EL PROGRAMA, ASEGURARSE DE INSERTAR EL DOMINIO  DONDE SE INICIARÁ**/
          if(tab.url === "https://www.linkedin.com/search/results/people/?keywords=fullstack&sid=-W!"){
              chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['js/Navegacion.js']})
          }
          else{
            chrome.scripting.executeScript({
              target: {tabId: tab.id},
              files: ['js/ObtencionDatos.js']})
          }
        }, 3000);
      }
    })
})

