let edad = prompt("Ingrese su edad");
if (edad === "") { 
    alert("Error, por favor ingrese su edad");

} else if (edad <= 14) {
    alert("Usted no cobra un beneficio");
} else if (edad >= 15 && edad <= 17) {
    alert("Usted cobra un beneficio de u$s 200");
} else if (edad >= 18 && edad <= 25) {
    alert("Usted cobra un beneficio de u$s 600");
} else if (edad >= 26 && edad <= 40) {
    alert("Usted cobra un beneficio de u$s 1000");
} else if (edad >= 41 && edad <= 60) {
    alert("Usted cobra un beneficio de u$s 1500");
} else if (edad >= 61) {
    alert("Usted cobra un beneficio de u$s 2000");
}
