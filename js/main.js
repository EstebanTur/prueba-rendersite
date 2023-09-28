const navbar = document.querySelector(".navbar");
const sideMenu = document.querySelector(".side-menu");
const main = document.querySelector(".main");
const socialIcons = document.querySelector(".social-icons");
const callToActionButton = document.querySelector(".action-button-container");
const whatsappContainer = document.querySelector(".whatsapp-container");
const servicesList = document.getElementById("services-dropdown-menu");

// Función para ocultar el navbar y mostrar el menú lateral en pantallas grandes
function showSideMenu() {
  navbar.classList.add("d-none"); // Oculta el navbar
  sideMenu.classList.remove("d-none");
  sideMenu.classList.add("col-lg-2"); // Muestra el menú lateral
  main.classList.remove("col-12"); // Cambia el ancho del main a 10 columnas
  main.classList.add("col-lg-10");
  //Cambio de estilos para el body
  document.body.classList.add("bodystyle");
  //cambio de estilos para el main
  main.classList.add("mainstyle");
  //No mostrar boton wassap
  whatsappContainer.classList.add("d-none");
}

// Función para restablecer el navbar y ocultar el menú lateral en pantallas pequeñas
function hideSideMenu() {
  navbar.classList.remove("d-none"); // Muestra el navbar
  sideMenu.classList.add("d-none"); // Oculta el menú lateral
  sideMenu.classList.remove("col-2");
  main.classList.remove("col-lg-10"); // Restablece el ancho del main
  main.classList.add("col-12"); // Restablece el ancho del main a 12 columnas en pantallas pequeñas
  //cambio de estilos para el main
  main.classList.remove("mainstyle");
  //cambio de estilo para el boton del call to action
}

// Función para cargar el contenido del menú lateral
function loadSideMenuContent() {
  // Define el contenido del menú lateral
  const sideMenuContent = `
  <div class=" fixed-left  d-flex flex-column   ">
    <a class="navbar-brand" href="/index.html"><img src="./img/logo menu.png" height="40px" alt="" /></a>
      <ul class="list-unstyled navbar-nav justify-content-end ">
        <li class="my-3"><a href="/index.html" class="my-2 text-decoration-none">Home</a></li>
        <li class="my-3"><a href="/work.html" class="my-2 text-decoration-none">Work</a></li>
        <li class="my-3"><a href="/services.html" class="my-2 text-decoration-none">Services</a></li>
        <li class="my-3"><a href="/contact.html" class="my-2 text-decoration-none">Contact</a></li>
      </ul>
    <div class="  social-icons-container ">
      <div class="   inner-social-icons-container " ">
        <a href="https://www.facebook.com/javiAbalosArq3d/" target="_blank" class="text-decoration-none  ">
          <img src="img/face-icon.svg" alt="Facebook" height="30px">
        </a>
        <a href="https://www.behance.net/javier_abalos" target="_blank" class="text-decoration-none  ">
          <img src="./img/bhlogo.svg" alt="Twitter" height="30px">
        </a>
        <a href="https://www.instagram.com/javi_abalos_arq3d/" target="_blank" class="text-decoration-none ">
          <img src="./img/instalogo.svg" alt="Instagram" height="30px">
        </a>
      </div>
    </div>
  </div>

  `;

  // Asigna el contenido al menú lateral
  sideMenu.innerHTML = sideMenuContent;
}

//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES
//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES

//Cambio de Servicios de mobile a desktop
function hideServicesList() {
  servicesList.classList.add("displayNone");
}
function showServicesList() {
  servicesList.classList.remove("displayNone");
}

//REPONSIVE; SEGUN EL TAMAÑO DE PANTALLA PONGO DISPLAY A ELEMENTOS, Y SACO DISPLAY DE OTROS
function handleScreenSizeChange() {
  if (window.innerWidth > 992) {
    loadSideMenuContent(); //CREO HTML DENTRO DEL DIV "SIDEMENU"
    showSideMenu(); //AGREGO EL SIDE MENU, BORRO EL NAV RESPONSIVE, CAMBIO COLUMNAS DE MAIN Y SIDE PARA QUE SE VEA MEJOR
    //Remueve el display none de texto descriptivo
    //PAGINA DE SERVICIOS //PAGINA DE SERVICIOS
    hideServicesList(); //EN PANTALLA GRANDE OCULTO EL BOTON DE SERIVICIOS Y SACO LA CLASE DROPDOWN DE LA LISTA
  } else if (window.innerWidth <= 768) {
    hideSideMenu();
    showServicesList();
    document.getElementById("container-descriptivo").classList.add("d-none");
  } else {
    // Rango intermedio (768px - 992px)
    navbar.classList.remove("d-none"); // Muestra el navbar
    sideMenu.classList.add("d-none"); // Oculta el menú lateral
    // hideServicesList();
    document.getElementById("container-descriptivo").classList.remove("d-none");
  }
}

// Agregar evento de cambio de tamaño de pantalla
window.addEventListener("resize", handleScreenSizeChange);

// Inicialmente, verifica el tamaño de la pantalla
handleScreenSizeChange();

///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA///CODIGO DE WORK GOMPA
const allOptions = document.querySelectorAll(".dropdown-item");
const allImg = document.querySelectorAll(".img-item");
const descriptionParragraph = document.querySelectorAll(".TextParragraph");

function toggleClass(elementId) {
  for (let i = 0; i <= allImg.length - 1; i++) {
    if (allImg[i].id.slice(-1) === elementId) {
      allImg[i].classList.remove("d-none");
    } else {
      allImg[i].classList.add("d-none");
    }
  }

  descriptionParragraph.forEach((DescriptionIndividual, i) => {
    if (DescriptionIndividual.id.slice(-1) === elementId) {
      DescriptionIndividual.classList.remove("d-none");
    } else {
      DescriptionIndividual.classList.add("d-none");
    }
  });
}
//Bucle para iterar los clickevents
allOptions.forEach((item) => {
  const itemId = item.id;
  const numeroIdDeItem = `${itemId.slice(-1)}`;
  item.addEventListener("click", () => {
    toggleClass(numeroIdDeItem);
  });
});
