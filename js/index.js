//Función para calcular los valores con el operador seleccionado
document.querySelector("#calculate").addEventListener('click', () => {
    const value1 = parseInt(document.querySelector("#value1").value);
    const value2 = parseInt(document.querySelector("#value2").value);
    const operation = document.querySelector("#operators").value;

    let result;

    if (operation === "+") {
        result = value1 + value2;
    } else if (operation === "-") {
        result = value1 - value2;
    } else if (operation === "/") {
        result = value1 / value2;
    } else if (operation === "*") {
        result = value1 * value2;
    }
    //console.log(result)
    document.getElementById("resultOp").innerHTML = result;

    alerts();
});


//Función para las alertas de la calculadora 2
function alerts() {
    const val1 = document.getElementById("value1").value;
    const val2 = document.getElementById("value2").value;

    if (val1 === "" && val2 === "") {
        alert("Debe ingresar los dos valores")
    } else if (val1 === "" && val2 !== "") {
        alert("Debe ingresar el primer valor")
    } else if (val1 !== "" && val2 === "") {
        alert("Debe ingresar el segundo valor")
    }
}

//Función para restablecer los datos de la calculadora 2
document.querySelector("#reset").addEventListener('click', () => {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.querySelector("#operators").value = "";
    document.getElementById("resultOp").innerHTML = "";


})

//Deshabilitar la calculadora no seleccionada
document.getElementById("calc1").addEventListener("change", function () {
    document.getElementById("value1").disabled = true;
    document.getElementById("value2").disabled = true;
    document.getElementById("operators").disabled = true;
    document.getElementById("calculate").disabled = true;
    document.getElementById("reset").disabled = true;

    document.getElementById("input1").disabled = false;
    document.getElementById("input1").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("9").disabled = false;
    document.getElementById("division").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("multiplication").disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("rest").disabled = false;
    document.getElementById("0").disabled = false;
    document.getElementById("clear").disabled = false;
    document.getElementById("resultEqual").disabled = false;
    document.getElementById("plus").disabled = false;
});

document.getElementById("calc2").addEventListener("change", function () {
    document.getElementById("input1").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("multiplication").disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("rest").disabled = true;
    document.getElementById("0").disabled = true;
    document.getElementById("clear").disabled = true;
    document.getElementById("resultEqual").disabled = true;
    document.getElementById("plus").disabled = true;

    document.getElementById("value1").disabled = false;
    document.getElementById("value2").disabled = false;
    document.getElementById("operators").disabled = false;
    document.getElementById("calculate").disabled = false;
    document.getElementById("reset").disabled = false;
});