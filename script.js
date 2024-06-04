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
            "fotos/pumaenergy_12_11zon.webp",
            "fotos/puey_11_11zon.webp",
            "fotos/pumaflores_13_11zon.webp",
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
            "Rivadavia 5201, Olavarría, Provincia de Buenos Aires. <br> Reservas al <a href=´tel:+54 9 2284 42-5553´><b>+54 9 2284 42-5553</b></a> o mandanos <a href=´mailto:hotelisaura@gmail.com´><b>email</b></a> ",
            "Gral. Paz 3014, Olavarría, Provincia de Buenos Aires ",
            "Av. Del Valle y Av. Pringles, Olavarría, Provincia de Buenos Aires",
            "Av. Pueyrredon y 25 de Mayo, Olavarría, Provincia de Buenos Aires ",
            "RN3 80, Las Flores, Provincia de Buenos Aires. <br> Tel: <a href=´tel:+54 9 2244 45-0467´><b>+54 9 2244 45-0467</b></a>",
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
