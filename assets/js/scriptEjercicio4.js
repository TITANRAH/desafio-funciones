
    // mala redaccion de este requerimiento también, esto es lo que entendi yo:
    
    // primero selecciono un div pinchando sobre el y luego al pulsar a s o d cambia de color solo del div seleccionado
    
    
    color = '';
    divSeleccionado = '';
    
    function eleccionDeDiv(id){

       divSeleccionado = id
       
    }

    document.addEventListener('keydown', function (event) {
    
       
        div = document.getElementById(divSeleccionado)
       
            if (event.key === 'a') {
                color = 'brown'
                
            } else if (event.key === 's') {
                color = 'purple'
                
            } else if(event.key === 'd'){
                color = 'aqua'
 
            }else {
                alert('Debes pulsar a s o d')
                color = div.style.backgroundColor
            }

            div.style.backgroundColor = color;
        }
    
    )
    