document.addEventListener('DOMContentLoaded', function() {
    var menuList = document.getElementById('menu-list').innerHTML;
    document.getElementById('menu-list-hamb').innerHTML = menuList;

    var botonHamburguesa = document.getElementById('boton-hamburguesa');
    botonHamburguesa.addEventListener('click', function() {
        var menu = document.getElementById('menu-list-hamb');
        var isExpanded = botonHamburguesa.getAttribute('aria-expanded') === 'true';
        menu.classList.toggle('mostrar');
        botonHamburguesa.setAttribute('aria-expanded', !isExpanded);
    });
});

const contenedor = document.querySelector(".estaciones-cel");

        function crearLlave(nombre, modelo, direccion, imgSrc) {
            let img = `<img src="${imgSrc}">`;
            let nombreElemento = `<h2>${nombre}</h2>`;
            let modeloElemento = `<h3>${modelo}</h3>`;
            let direccionElemento = `<h4>${direccion}</h4>`;
            return [img, modeloElemento, direccionElemento];
        }

        const imagenes = [
            "fotos/shell_14_11zon.webp",
            "fotos/shell_14_11zon.webp",
            "fotos/delvalle.webp",
            "fotos/puey_11zon.webp",
            "fotos/pumaflores.webp",
            // Añade más rutas de imágenes según sea necesario
        ];

        const modelos = [
            "SHELL - HOTEL",
            "SHELL",
            "PUMA ENERGY",
            "PUMA ENERGY",
            "PUMA ENERGY",
            // Añade más modelos según sea necesario
        ];

        const direcciones = [
            `Rivadavia 5201, Olavarría, Provincia de Buenos Aires.<br> <a class="direccion" href="https://www.google.com/maps/place/Shell/@-36.8904278,-60.3325098,14z/data=!4m10!1m2!2m1!1solavarria+shell!3m6!1s0x959447b8a3950849:0x5ef08d425c1291c!8m2!3d-36.8773244!4d-60.3022764!15sCg9vbGF2YXJyaWEgc2hlbGwiA4gBAZIBC2dhc19zdGF0aW9u4AEA!16s%2Fg%2F11jh_p8rgl?entry=ttu">Ver ubicación</a> <br> Reservas al <a class="tel" href="tel:2284425553">+54 9 2284 42-5553</a> o mandanos al <a class="mail" href="mailto:hotelisaura@gmail.com">email</a> `,
            `Gral. Paz 3014, Olavarría, Provincia de Buenos Aires. <br> <a class="direccion" href="https://www.google.com/maps/place/Shell/@-36.895969,-60.3213938,14z/data=!4m10!1m2!2m1!1solavarria+shell!3m6!1s0x95944536f5dfb631:0x7e65516b63b8e85e!8m2!3d-36.8960396!4d-60.321544!15sCg9vbGF2YXJyaWEgc2hlbGwiA4gBAZIBC2dhc19zdGF0aW9u4AEA!16s%2Fg%2F11q9j8yhhr?entry=ttu">Ver Ubicación</a> `,
            `Av. Del Valle y Av. Pringles, Olavarría, Provincia de Buenos Aires. <br> <a class="direccion" href="https://www.google.com/maps/place/PUMA+ENERGY/@-36.8958968,-60.3213938,14z/data=!4m10!1m2!2m1!1spuma+av+del+valle+olavarria!3m6!1s0x959445e564d26009:0x57ec93c5ccd4e79c!8m2!3d-36.90145!4d-60.3225!15sChtwdW1hIGF2IGRlbCB2YWxsZSBvbGF2YXJyaWEiA4gBAZIBC2dhc19zdGF0aW9u4AEA!16s%2Fg%2F11h7zfwf9w?entry=ttu">Ver Ubicación</a>`,
            `Av. Pueyrredon y 25 de Mayo, Olavarría, Provincia de Buenos Aires. <br> <a class="direccion" href="https://www.google.com/maps/place/PUMA+ENERGY/@-36.8985738,-60.3419074,14z/data=!4m10!1m2!2m1!1spuma+av+del+valle+olavarria!3m6!1s0x959445a71066ce39:0xbec5f7b36330c0b8!8m2!3d-36.904297!4d-60.329131!15sChtwdW1hIGF2IGRlbCB2YWxsZSBvbGF2YXJyaWEiA4gBAZIBC2dhc19zdGF0aW9u4AEA!16s%2Fg%2F11jfct969g?entry=ttu">Ver Ubicación</a> `,
            `RN3 80, Las Flores, Provincia de Buenos Aires. <br> <a class="direccion" href="https://www.google.com/maps/place/PUMA+ENERGY/@-36.0158852,-59.0968133,14z/data=!4m10!1m2!2m1!1spuma+!3m6!1s0x9597cb5377eeeb6f:0xfee46fe05745a501!8m2!3d-36.014705!4d-59.0694333!15sCgRwdW1hIgOIAQGSAQtnYXNfc3RhdGlvbuABAA!16s%2Fg%2F11qghwrycf?entry=ttu">Ver Ubicación</a> <br> Tel: <a class="tel" href="tel:2244450467">+54 9 2244 45-0467</a>`,
            // Añade más precios según sea necesario
        ];

        let fragmento = document.createDocumentFragment();
        const numItems = imagenes.length; // Asumiendo que todas las listas tienen la misma longitud

        for (let i = 0; i < numItems; i++) {
            let llave = crearLlave(`llave ${i + 1}`, modelos[i], direcciones[i], imagenes[i]);

            let div = document.createElement("DIV");
            div.classList.add(`item-${i + 1}`, "flex-item");
            div.innerHTML = llave[0] + llave[1] + llave[2];
            fragmento.appendChild(div);
        }

        contenedor.appendChild(fragmento);
