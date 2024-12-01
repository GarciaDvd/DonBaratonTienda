function changeApart(num) {
    var img = document.getElementById('imgAside'); //Obtenemos el elemento html para poder cambiarlo a traves de su id, en este caso la imagen del aside
    var text = document.getElementById('hApart'); //El titulo de la categoria
    var href = document.getElementById('btnPrinSM'); //El boton que redirige para poder cambiar la direccion entre categorias
    var lbls = document.getElementsByName('lbls'); //Las opciones de las categorias
    var inf = document.getElementById('infApart'); //La descripcion de la categoria
    for (let index = 0; index < lbls.length; index++) { //Tenemos diferentes opciones, las guardamos en un name para que se almacene como un arreglo y asi poder saber cual opcion es la que está marcada
        if(num===index){
            lbls[index].style.backgroundColor = '#368f5b'; //Si la opcion está marcada se cambia el color de fondo
        }else{
            lbls[index].style.backgroundColor = '#e4dddd'; //Se pone el color original del fondo a las demas opciones
        }
    }
    switch(num){
        case 0:
            img.src = './mms/deportes.png'; //Si la opcion uno es marcada, se cambiaran los elementos previamente obtenidos con su id y sus propiedades html
            text.textContent = 'DEPORTES';
            href.href = 'deportes.html';
            inf.textContent = 'En esta seccion encontraras el equipo necesario para cualquier deporte, asi como su mercancia e incluso material exclusivo de marcas.'
            //src = Ruta de la imagen     textContent = Texto que tiene contenido el elemento   href = Ruta hacia donde nos redirige 
        break;
        case 1:
            img.src = './mms/ropac.png';
            text.textContent = 'ROPA';
            href.href = 'ropa.html';
            inf.textContent = 'Podras encontrar sin fin de diferentes tipos de ropa. Limpio, seguro, rapido y optimizado para que tu vestimenta llegue justo a tiempo.';
        break;
        case 2:
            img.src = './mms/gaming.png';
            text.textContent = 'GAMING';
            href.href = 'gaming.html';
            inf.textContent = 'Equipos recientes para el mundo de los videojuegos, sirviendo tambien para trabajos de oficina, renderizado y muchos mas. Con los mejores materiales y componentes.';
        break;
    }
}