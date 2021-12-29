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
    } else if (operation === "^") {
        result = Math.sqrt(value1);
    }
    //console.log(result)
    document.getElementById("resultOp").innerHTML = result;

    if (operation === "") {
        alert("Debe seleccionar un operador");
        document.getElementById("resultOp").innerHTML = "";
    }
});

//Función para agregar texto al seleccionar raíz cuadrada
function sq(val) {
    var val = document.getElementById("operators").value;

    if (val === "^") {
        document.getElementById('added').innerHTML = "Se obtendrá la raíz cuadrada del primer valor"
    } else {
        document.getElementById('added').innerHTML = ""
    }
}

//Función para restablecer los datos de la calculadora 2
document.querySelector("#reset").addEventListener('click', () => {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.querySelector("#operators").value = "";
    document.getElementById("resultOp").innerHTML = "";
    document.getElementById('added').innerHTML = "";
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