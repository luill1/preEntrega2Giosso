    const images = document.getElementsByClassName("img");
    const carrusel = document.getElementById("carrusel");
    const tamaño = 600; 
    const botonSiguiente = document.getElementById("siguiente");  
    const botonAnterior = document.getElementById("anterior"); 
    
    function carruselCreator ( images, carrusel, botonSiguiente, botonAnterior ){
        const arregloImg = Array.from(images);
        let posActual = 0;
        const posFinal = arregloImg.length-1;
    function siguiente (  ) {
        if( posActual < posFinal ){
            posActual = posActual+1;
            carrusel.style.transform = `translateX(-${posActual*tamaño}px)`;
        }    
    }
    function anterior (  ) {
        if( posActual > 0 ){
            posActual = posActual-1;
            carrusel.style.transform = `translateX(-${posActual*tamaño}px)`;
        } 
    }
    botonSiguiente.addEventListener("click", (event) => {
        siguiente (  );
    });
    botonAnterior.addEventListener("click", (event) => {
        anterior (  );
    });
    }
    const container = document.getElementById("container");
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");
    const containerChildrens = Array.from(container.children);
    const anterior1 = containerChildrens[0];
    const carrusel1 = containerChildrens[1].children[0];
    const siguiente1 = containerChildrens[2];
    const images1 = Array.from(carrusel1.children);

    const containerChildrens2 = Array.from(container2.children);
    const anterior2 = containerChildrens2[0];
    const carrusel2 = containerChildrens2[1].children[0];
    const siguiente2 = containerChildrens2[2];
    const images2 = Array.from(carrusel2.children);

    const containerChildrens3 = Array.from(container3.children);
    const anterior3 = containerChildrens3[0];
    const carrusel3 = containerChildrens3[1].children[0];
    const siguiente3 = containerChildrens3[2];
    console.log(carrusel3)
    const images3 = Array.from(carrusel3.children);

    carruselCreator(images1, carrusel1, siguiente1, anterior1);
    carruselCreator(images2, carrusel2, siguiente2, anterior2);
    carruselCreator(images3, carrusel3, siguiente3, anterior3);


