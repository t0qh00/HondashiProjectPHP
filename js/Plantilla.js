$(document).ready(function () {
    AgregarMenu();
    AgregarFooter();
});

function AgregarMenu() {
    var menu = document.getElementById("Menu");
    menu.innerHTML =
        '<header>' +
        '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<div class="container-fluid">' +
        '<a class="navbar-brand" href="index.html"><b>Hondashi</b></a>' +

        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"' +
        'data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"' +
        'aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +

        '<div class="collapse navbar-collapse" stryle="font-bold"id="navbarSupportedContent">' +
        '<ul class="navbar-nav me-auto mb-2 mb-lg-0">' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="SanRamon.html"><b>San Ramón</b></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="Palmares.html"><b>Palmares</b></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="Menu.html"><b>Menú</b></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="MenuPromos.html"><b>Menú de ofertas</b></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="Galeria.html"><b>Galería</b></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="Contactenos.html"><b>Contáctenos</b></a>' +
        '</li>' +
        '</ul>' +

        '</div>' +
        '</div>' +
        '</nav>' +
        '</header> '
}


function AgregarFooter() {
    var footer = document.getElementById("Footer");
    footer.innerHTML = '<div class="container">' +
        '<div class="row">' +
        '<div class="col-md-4 col-sm-4 col-bg-4">' +
        '<h3 class="text-center" style="color: white;">Contactenos</h3>' +
        '<h5 style="color: white;">Palmares</h5>' +
        '<p style="color: white;">Tel: 24521474</p>' +
        '<p style="color: white;">Whatsapp: 71972701</p>' +
        '<h5 style="color: white;">San Ramón</h5>' +
        '<p style="color: white;">Tel: 40356575</p>' +
        '<p style="color: white;">Whatsapp: 71488426</p>' +
        '</div>' +
        '<div class="col-md-4 col-sm-4 col-bg-4">' +
        '<h3 class="text-center" style="color: white;">Redes sociales</h3>' +
        '<h4 style="color: white;">Facebook</h4>' +
        '<h5 style="color: white;">Palmares</h5>' +
        '<a href="https://www.facebook.com/HondashiSushiCR"><img src="css\\Img\\facebookIcon.png" style="width: 50px" alt="Hondashi Palmares"></a>' +
        '<a href="https://www.instagram.com/hondashisushicr/?hl=en"><img src="css\\Img\\instagramIcon.png" style="width: 50px" alt="Hondashi Palmares"></a>' +
        '<h5 style="color: white;">San Ramón</h5>' +
        '<a href="https://www.facebook.com/HondashiSushiCRSanRamon"><img src="css\\Img\\facebookIcon.png" style="width: 50px" alt="Hondashi San Ramón"></a>' +
        '<a href="https://www.instagram.com/hondashisushicr/?hl=en"><img src="css\\Img\\instagramIcon.png" style="width: 50px" alt="Hondashi SanRamon"></a>' +
        '</div>' +
        '<div class="col-md-4 col-sm-4 col-bg-4">' +
        '<h3 class="text-center" style="color: white;">Acerca de</h3>' +
        '<p style="color: white;">Hondashi Sushi, es un restaurante de comida japonesa.<br>' +
        'También te ofrecemos el servicio para llevar y para tus ocaciones especiales.<br>' +
        'Somos un grupo de personas dedicadas a elaborar Sushi de la mejor calidad, para llevar o para sus eventos especiales.' +
        '</p>' +
        '</div>' +
        '</div>' +
        '</div>'

}

/*$(function(){
    var name, email, message;
    $(".btn-send").on('click',function(){
        name = $(".name").val();
        email = $(".email").val();
        message = $(".message").val();
        if(name.length==0||email.length==0||message.length==0){
            alert("Existen campos vacios");
        }else{
            alert("Mensaje enviado correctamente");
        }
    });
});*/
