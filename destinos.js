document.addEventListener("DOMContentLoaded",
()=>{
    let destinos = [ {  'destino': {    'ciudad': 'Buzios',
                                        'pais': 'Brasil'
                                    }, 
    'incluye': {    'aereo': 'Aereos ida y vuelta desde Bs. As.',
                    'bus': '',
                    'hotel': 'Hotel 3★ frente al mar, con piscina',
                    'comida': 'Desayuno',
                    'asistencia': 'Asistencia al viajero'
                },
    'duracion': {'dias': 11,
                'noches': 10},
    'precio': 850
    }
    ];

    let precargados = [{'destino': {    'ciudad': 'Cancun',
                                        'pais': 'Mexico'
                                    },
                    'incluye': {    'aereo': 'Aereos ida y vuelta desde Bs. As.',
                    'bus': '',
                    'hotel': 'Hotel 5★ Cancun Beach Resort',
                    'comida': 'All inclusive',
                    'asistencia': 'Asistencia al viajero'
                    },
                    'duracion': {'dias': 8,
                    'noches': 7},
                    'precio': 2100
                    },
                    {'destino': {   'ciudad': 'San Andres',
                                    'pais': 'Colombia'
                                },
                    'incluye': {    'aereo': 'Aereos ida y vuelta desde Bs. As.',
                    'bus': '',
                    'hotel': 'Hotel 4★ habitacion con vista al mar',
                    'comida': ' Pension completa, bebidas incluidase',
                    'asistencia': 'Asistencia al viajero'
                    },
                    'duracion': {'dias': 8,
                    'noches': 7},
                    'precio': 1500
                    },
                    {'destino': {   'ciudad': 'Cataratas del Iguazu',
                                    'pais': 'Argentina'
                                },
                    'incluye': {    'aereo': '',
                                    'bus': 'Traslados ida y vuelta. Bus semi-cama',
                                    'hotel': 'Hotel 4★',
                                    'comida': ' Desayuno',
                                    'asistencia': 'Excursion a Garganta del diablo'
                                },
                    'duracion': {'dias': 5,
                                'noches': 3},
                    'precio': 450
                    }
    ];

    let tabla = document.getElementById("tabla");
    let form =document.getElementById('form');

    let btnadd = document.getElementById('btnadd');
    btnadd.addEventListener('click',nuevoRegistro);

    let btncargar = document.getElementById('btncargar');
    btncargar.addEventListener('click',agregarPrecargados);

    let btnvaciar = document.getElementById('btnvaciar');
    btnvaciar.addEventListener('click',borrarTodo);

    actualizarTabla();

    function nuevoRegistro (evento) {
        evento.preventDefault();
        let aereoValor = '';
        let busValor = '';
        if(aereo.value != undefined) {
        aereoValor = aereo.value;
        }
        if(bus.value != undefined) {
        busValor = bus.value;
        }
        destinos.push({
        'destino': { 'ciudad' : ciudad.value,
                     'pais' : pais.value},
        'incluye': { 'aereo': aereoValor,
            'bus': busValor,
            'hotel': hotel.value,
            'comida': comida.value,
            'asistencia': asistencia.value
        },        
        'duracion': {   'dias': dias.value,
                'noches': noches.value},
        'precio': precio.value
        });
        form.reset();
        actualizarTabla();
    }   


    function borrarFilasTabla() {
        while(tabla.rows.length>0) {
        tabla.deleteRow(0);
        }
    }

    function agregarFila(lugar) {
        let fila = document.createElement('tr');
        let columna1 = document.createElement('td');
        let columna2 = document.createElement('td');
        let columna3 = document.createElement('td');
        let columna4 = document.createElement('td');
        let lista = document.createElement('ul');
        let hotel = document.createElement('li');
        let comida = document.createElement('li');
        let asistencia = document.createElement('li');

        columna1.innerHTML = lugar.destino.ciudad + ', ' + lugar.destino.pais;
        columna3.innerHTML = lugar.duracion.dias + ' días / '+ lugar.duracion.noches + ' noches';
        columna4.innerHTML = 'Us$ '+lugar.precio;
        columna1.classList.add('bordes', 'destacar-destino');
        columna2.classList.add('bordes');
        columna3.classList.add('bordes');
        columna4.classList.add('bordes');

        columna2.appendChild(lista);

        if (lugar.incluye.aereo != '') {
            let aereo = document.createElement('li');
            lista.appendChild(aereo);
            aereo.classList.add('icon', 'icon-avion');
            aereo.innerHTML= lugar.incluye.aereo;
        }

        if(lugar.incluye.bus !='') {
            let bus = document.createElement('li');
            lista.appendChild(bus);
            bus.classList.add('icon', 'icon-bus');
            bus.innerHTML= lugar.incluye.bus;
        }

        lista.appendChild(hotel);
        lista.appendChild(comida);
        lista.appendChild(asistencia);

        hotel.classList.add('icon', 'icon-hotel');
        comida.classList.add('icon','icon-morfi');
        asistencia.classList.add('icon','icon-asist');

        hotel.innerHTML= lugar.incluye.hotel;
        comida.innerHTML= lugar.incluye.comida;
        asistencia.innerHTML= lugar.incluye.asistencia;

        tabla.appendChild(fila);
        fila.appendChild(columna1);
        fila.appendChild(columna2);
        fila.appendChild(columna3);
        fila.appendChild(columna4);

        if(lugar.destino.pais.includes('Argentina')) {
            columna1.classList.add('argentina');
            columna1.classList.remove('destacar-destino');
            columna2.classList.add('argentina');
            columna3.classList.add('argentina');
            columna4.classList.add('argentina');
        }
    }

    function actualizarTabla() {
        borrarFilasTabla();
        for(i=0;i<destinos.length;i++) {
            let lugar = destinos[i];
            agregarFila(lugar);
        }
    }

    function agregarPrecargados() {
        for(i=0; i<precargados.length;i++) {
            destinos.push(precargados[i]);
        }
        actualizarTabla();
    }

    function borrarTodo() {
        while(destinos.length>0) {
            destinos.shift();
        }
        actualizarTabla();
    }

});
