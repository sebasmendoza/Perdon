function iniciar() {
    var elementoCentro = document.querySelector(".contenedor .centro");
    elementoCentro.addEventListener("mousemove", giraGirasol);
}

const elementoPetalo1 = document.querySelector(".contenedor .petalo");
const elementoPetalo2 = document.querySelector(".contenedor .petalo2");
const elementoPetalo3 = document.querySelector(".contenedor .petalo3");
const elementoPetalo4 = document.querySelector(".contenedor .petalo4");
const elementoPetalo5 = document.querySelector(".contenedor .petalo5");
const elementoPetalo6 = document.querySelector(".contenedor .petalo6");
const elementoPetalo7 = document.querySelector(".contenedor .petalo7");
const elementoPetalo8 = document.querySelector(".contenedor .petalo8");

var duracionAnimacion = 500;

const animacionPetalo1 = [
    { transform: "rotate(0deg)", left: "20%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "47%", top: "15%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "47%", top: "30%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "20%", top: "30%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "20%", top: "15%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];
const animacionPetalo2 = [
    { transform: "rotate(0deg)", left: "47%",top:"15%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "47%", top: "30%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "20%", top: "30%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "20%", top: "15%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "47%", top: "15%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];
const animacionPetalo3 = [
    { transform: "rotate(0deg)", left: "20%",top:"30%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "20%", top: "15%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "47%", top: "15%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "47%", top: "30%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "20%", top: "30%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];
const animacionPetalo4 = [
    { transform: "rotate(0deg)", left: "47%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "20%", top: "30%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "20%", top: "15%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "47%", top: "15%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "47%", top: "30%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];
const animacionPetalo5 = [
    { transform: "rotate(0deg)", left: "32.7%",top:"12%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "52%", top: "23%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "33.4%", top: "34%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "14%", top: "23%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "32.7%", top: "12%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];
const animacionPetalo6= [
    { transform: "rotate(0deg)", left: "52%",top:"23%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "33.4%", top: "34%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "14%", top: "23%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "32.7%", top: "12%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "52%", top: "23%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];
const animacionPetalo7 = [
    { transform: "rotate(0deg)", left: "33.4%",top:"34%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "14%", top: "23%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "32.7%", top: "12%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "52%", top: "23%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "33.4%", top: "34%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];
const animacionPetalo8 = [
    { transform: "rotate(0deg)", left: "14%",top:"23%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0 },
    { transform: "rotate(90deg)", left: "32.7%", top: "12%", background: "linear-gradient(to top, #d15b01, #fdc300, #fdc300)", offset: 0.25 },
    { transform: "rotate(180deg)", left: "52%", top: "23%", background: "linear-gradient(to top, #565656, #fefdfb, #fefdfb)", offset: 0.50 },
    { transform: "rotate(270deg)", left: "33.4%", top: "34%", background: "linear-gradient(to top, #d15b01, #9673c5, #9673c5)", offset: 0.75 },
    { transform: "rotate(360deg)", left: "14%", top: "23%", background: "linear-gradient(to top, #565656, #f5fdfb, #fefdfb)", offset: 1 },
];

const propiedadAnimacionP1 = {
    duration: duracionAnimacion,
    easing: "linear",
};
const propiedadAnimacionP2 = {
    duration: duracionAnimacion,
    easing: "linear",
};
const propiedadAnimacionP3 = {
    duration: duracionAnimacion,
    easing: "linear",
};
const propiedadAnimacionP4 = {
    duration: duracionAnimacion,
    easing: "linear",
};
const propiedadAnimacionP5 = {
    duration: duracionAnimacion,
    easing: "linear",
};
const propiedadAnimacionP6 = {
    duration: duracionAnimacion,
    easing: "linear",
};
const propiedadAnimacionP7 = {
    duration: duracionAnimacion,
    easing: "linear",
};
const propiedadAnimacionP8 = {
    duration: duracionAnimacion,
    easing: "linear",
};

function giraGirasol(){
    elementoPetalo1.animate(animacionPetalo1, propiedadAnimacionP1);
    elementoPetalo2.animate(animacionPetalo2, propiedadAnimacionP2);
    elementoPetalo3.animate(animacionPetalo3, propiedadAnimacionP3);
    elementoPetalo4.animate(animacionPetalo4, propiedadAnimacionP4);
    elementoPetalo5.animate(animacionPetalo5, propiedadAnimacionP5);
    elementoPetalo6.animate(animacionPetalo6, propiedadAnimacionP6);
    elementoPetalo7.animate(animacionPetalo7, propiedadAnimacionP7);
    elementoPetalo8.animate(animacionPetalo8, propiedadAnimacionP8);
}

window.addEventListener("load",iniciar);