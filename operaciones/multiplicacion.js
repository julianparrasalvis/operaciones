function Multiplicacion(){

    let numero1=parseInt(document.getElementById("num1").value)

    let numero2=parseInt(document.getElementById("num2").value)
    //aca es donde se esta haciendo la operacion en este caso Multiplicacion
    let Multiplicacion= numero1 * numero2

    document.getElementById("resultado").textContent= "la multiplicacion es " +Multiplicacion;
}