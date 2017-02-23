/*jslint plusplus: true */
var perfiles = "",
    profiles = [ {
        nombre : "Arabela",
        apellido : "Rojas",
        rol : "T.A",
        cumpleanios : "23 de enero"
    }, {
        nombre : "Michelle",
        apellido : "Seguil",
        rol : "T.A",
        cumpleanios : "25 de noviembre"
    }, {
        nombre : "Meche",
        apellido : "Zubieta",
        rol : "T.A",
        cumpleanios : "02 de marzo"
    }, {
        nombre : "Papu",
        apellido : "Rivariola",
        rol : "Psicóloga",
        cumpleanios : "10 de octubre"
    }, {
        nombre : "Gian",
        apellido : "Corzo",
        rol : "Profesor",
        cumpleanios : "23 de enero"
    } ];

function print() {
    "use strict";
    var i;
    
    for (i = 0; i < profiles.length; i++) {
        perfiles += "<ul>" +
            "<li> Nombre: " + profiles[i].nombre + "</li>" +
            "<li> Apellido: " + profiles[i].apellido + "</li>" +
            "<li> Rol: " + profiles[i].rol + "</li>" +
            "<li> Cumpleaños: " + profiles[i].cumpleanios + "</li><br></ul>";
    }
    document.getElementById("content").innerHTML = perfiles;
}