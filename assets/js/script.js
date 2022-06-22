    // ALCANCE IMPORTANTE
    // en este ejercicio habia un problema de redaccion en el requerimiento, dice "Modifica el código anterior para poder pasarle un color como argumento a la
    // función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
    // párrafo se debe pasar amarillo como color.", cuando habla de que el color debe ser green por defecto no especifica si al argumento debe ser verde por defecto o el elemento 
    // del dom, hice las 2 cosas solo por ese problema de redaccion, deje el argumento por defecto en green, y el dom por defecto en green que al clickear pasa a amarillo

    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'green'

    function pintar(color = 'green'){

    ele.style.backgroundColor = color
   
    }