addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector('#form');
    let res = document.querySelector("#res");
    let suma = 0, desc;
    let informacion = document.querySelector("#informacion");
    document.querySelector("#dato").readOnly = false;
    document.querySelector("#boton").disabled = false;

    let habilitar = () => {
        informacion.style.display = "inline-block";
        document.querySelector("#dato").readOnly = true;
        document.querySelector("#boton").disabled = true;
    }
    let descuento = () => {
        if(suma > 10000){
            desc = suma-(suma * 0.10);
            res.insertAdjacentHTML("beforeend", `<h3> 10% de descuento Total a pagar $${desc}<h3/>`);
        }
        else{
            res.insertAdjacentHTML("beforeend", `<h3>${suma}<h3/>`);
        }

    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let precio = parseInt(document.querySelector("#dato").value);
        form.reset();

        if(precio > 0){
            suma += precio;
        }
        else{
            alert("solo se aceptan precios positivos");
            habilitar();
            descuento();
        }
    })
    
})










/*
let dato =parseInt(document.querySelector('#dato').value);
        if(dato > 0){
            suma += dato;
        }
        else{
            alert('solo se pueden números positivos :v');
            document.querySelector('#res').insertAdjacentHTML("beforeend",suma);
        }
        form.reset();
*/


