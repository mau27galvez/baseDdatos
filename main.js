'use strict'

console.log(localStorage);

//Funciones

function guardar() 
{
    datos=[];
    for (let i = 0; localStorage.length > i; i++) 
    {
        console.log(i);
        datos.push(localStorage[i]);
        console.log(datos);
    }
    datos.push(valor);
    localStorage.clear();
    for (let i in datos) 
    {
        localStorage[i] = datos[i];
    }
    datos = [];
}

//Compatibilidad

if (typeof (Storage != "undefined")) 
{
    console.log("localstorage disponible");
}
else 
{
    alert("Este navegador o su version no es compatible con esta aplicacion web.");
    console.error("localstorage no disponible");
}

//Variables

var datos = [];
var valor;
var form = document.getElementById("form");
var input = document.getElementById("input");
var boolean;

//Logica

form.addEventListener("submit", ()=>
{
    valor = input.value.trim();
    input.value="";
    if (valor.length > 0 && valor != null) 
    {
        if(localStorage.length>0)
        { 
            for (let i = 0; localStorage.length > i; i++) 
            {
                console.log(i);
                datos.push(localStorage[i]);
                if(valor==datos[i])
                {
                    boolean=true;
                }
            }
            if(boolean)
            {
                alert("Valor ya registrado");
            }
            else
            {
                guardar();
            }
        }    
        else
        {
            localStorage[0]=valor;
        }   
            valor="";
    }
    
});