var index=1; //indice para las imagenes, todas las imagenes tienen nombre de numero e inicial de la categoria para optimizar el codigo 
function changeProduct(opcion) {
    var cate = document.getElementById('categoria').textContent; //Esta variable tiene el nombre de la categoria en un elemento
    var img = document.getElementById('imgPro'); //Obtener el elemento del html a traves de su id
    var numMax; //Esta variable cambia conforme a la categoria, porque cada una tiene diferente numero de imagenes
    switch(cate){
        case 'deportes': 
            numMax = 33;
        break;
        case 'gaming':
            numMax = 38;
        break;
        case 'ropa':
            numMax = 34;
        break;
    }
    if(opcion==='next'){ //Tenemos dos botones, uno para retroceder y uno para avanzar imagen, cada boton manda un parametro distinto a la funcion y eso hace que se distinga lo que se quiere
        index++;
        if(index>numMax) //Si en el caso que el usuario avance mas de la ultima imagen, se regresa a la primera imagen para tener una sensacion de fluidez
        index = 1; //Reinicio de indice para tener la imagen uno
    }else{
        index--;
        if(index===0){
            index = numMax; //Si en el caso que el usuario retrodezca antes de la primera imagen, se va a la ultima imagen para tener una sensacion de fluidez
        }
    }
    switch(cate){ //Se evalua la variable con el nombre de la categoria para saber que ruta tomar en las carpetas
        case 'deportes':
            img.src = './mms/deportes/'+index+'.png'; //Este sistema se basa en el nombre de la imagen, solo lo completamos con la inicial y las carpetas, el indice hace todo el trabajo
        break;
        case 'gaming':
            img.src = './mms/gaming/g'+index+'.png';
        break;
        case 'ropa':
            img.src = './mms/ropa/r'+index+'.png';
        break;
    }
}