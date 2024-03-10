let respuesta1 = prompt("La lampara funciona? (contesta si/no)")

if (respuesta1 == "no"){ 
    let respuesta2 = prompt ("Esta enchufada?")
    if (respuesta2 == "no"){
        document.write("<h1>Enchufarla</h1>")
    } else if (respuesta2 == "si"){
        let respuesta3 = prompt("Foco quemado?")
        if (respuesta3 == "si") {
            document.write("<h1>Remplazar el foco</h1>")  
        } else if (respuesta3 == "no"){
            document.write("<h1>Comprar lampara nueva</h1>")
        }
    }
} else {
    document.write("<h1>Muy Bien</h1>")
}