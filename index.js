const fs = require('fs');

const qrcode = require('qrcode-terminal');

const { Client, Chat, PrivateChat, GroupChat, Message, MessageMedia, Contact, PrivateContact, BusinessContact, ClientInfo, Location, LocalAuth, Buttons, Label } = require('whatsapp-web.js');

const bdiade = require('/Users/feder/OneDrive/Escritorio/bot-whatsapp/bdiade.json');



const country_code = "54";
const number = "91126642674";
let button = new Buttons("Me active papi, que se hace? Mandame *Opciones*",[{body:'FINALIZA PROMO'},{body:'Activar promo'},{body: 'Activar Promo Wsp'}],'BOT ACTIVADO','(Presione una letra/opción para responder)');
const msg = button;


const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "client-one"
    })
});

client.initialize();



client.on('qr', (qr) => {
    qrcode.generate(qr, {
        small: true
    });
});

client.on('ready', () => {
    console.log('El cliente esta listo');

    let chatId = country_code + number + "@c.us";

    client.sendMessage(chatId, msg).then(
        (response) => {
            if (response.id.fromMe) {
                console.log('Me active papi, que se hace?');
            }
        }
    )
});

client.on('authenticated', (session) => {
    session = client.authStrategy;
});


client.on('auth_failure', msg => {
    console.error('Hubo un fallo en la autenticación', msg);
});


// extraer numeros 

const chatsArr = [];

client.on('ready',async()=>{
    
    
    const extractNumLabel = async (labelName)=> {
        const labels = await client.getLabels();

        const miEtiqueta = labels.find(label => label.name === labelName);
        console.log(miEtiqueta);
        if (!miEtiqueta) return;

        const chats = await client.getChatsByLabelId(miEtiqueta.id);
        console.log(chats.length);

        chats.forEach(chat => chatsArr.push(chat.id._serialized));
        

    }
    
         extractNumLabel('Sigue interesado?');

        
});




    
// id random
let idRandom = ()=>{var id = "";
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

for(var i=0; i < 6; i++)
  id += chars.charAt(Math.floor(Math.random() * chars.length));

id += "-";

for(var i=0; i < 6; i++)
  id += chars.charAt(Math.floor(Math.random() * chars.length));

return id;}

// promesa de espera mensaje
const awaitTimeout = delay => new Promise(resolve => setTimeout(resolve, delay));
let delay = 1500;



// OPCIONES DE MENSAJE
let msgA = `🎉Contamos con una promoción que no te podes perder, *inscribiéndote y abonando el día de hoy tenes un 30% + PLUS de descuento*\n*Serian $16.000 total de los $24.000 valor habitual/común* (por 2 cursos abonando el dia de hoy, si necesita màs Cursos *consulte por promoción*)\n\nA medida que van pasando los días se va bajando el descuento hasta el  final ($24.000)*🕒‼️\n\n-Se puede abonar con transferencia, depósito, Rapipago, Pagofacil, Tarjeta de Crédito/Débito, MercadoPago.\n*Dígame por aquí si tiene alguna duda en particular en cuanto a metodología, certificaciones*`;
let msgAB = `Nuestros cursos se llevan a cabo *online a través de nuestra plataforma de aprendizaje en nuestro sitio web*. Al inscribirse, tendrá acceso a *clases audiovisuales* y *manuales de estudio* para ver uno y luego leer el otro. Si surge alguna duda, *puede solicitar ayuda adicional a un tutor*. El curso es asincrónico, por lo que *usted podrá estudiar en la medida en que disponga de tiempo*. Una vez que se sienta seguro, puede realizar el *examen en la misma plataforma*. El examen es una prueba de selección múltiple y, si se obtienen un *70% de respuestas correctas, se emitirá un certificado de Escuelas IADE*. Con este certificado puede tramitar los otros que tienen validez en Estados Unidos y en los países del Mercosur.`;
let msgB = `Muchas gracias por su respuesta, ya mismo lo sacaremos de la lista de interesados. Saludos`;
let msgMenu = `Escuelas IADE *Cursos Online Certificados*\n\n *Promociones Especiales*😊 (Consulte aquí)\n\n*PRESIONE/RESPONDA CON LA OPCIÓN QUE QUIERA*:\n⭕*A* PARA SABER SOBRE LA PROMOCIÓN.\n⭕*C* SI QUIERE UN AUDIO EXPLICATIVO.\n⭕*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS.\n⭕*MENU* SI QUIERE VER EL MENU.\n⭕*MATRICULA* SI QUIERE SABER SOBRE LA MATRICULA DE REFRIGERACIÓN Y AIRE ACONDICIONADO.\n⭕*CERTIFICADOS* SI QUIERE VER LOS CERTIFICADOS.`;
let msgMenuRAA = `Escuelas IADE *Cursos Online Certificados*\n\n *Promociones Especiales*😊 (Consulte aquí)\n\n*PRESIONE/RESPONDA CON LA OPCIÓN QUE QUIERA*:\n⭕*A* PARA SABER SOBRE LA PROMOCIÓN DEL DIA.\n⭕*C* SI QUIERE UN AUDIO EXPLICATIVO DE LA PROMOCIÓN.\n⭕*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS.\n⭕*MENU* SI QUIERE VER EL MENU.\n⭕*MATRICULA* SI QUIERE SABER SOBRE LA MATRICULA DE REFRIGERACIÓN Y AIRE ACONDICIONADO.\n⭕*CERTIFICADOS* SI QUIERE VER LOS CERTIFICADOS.\n⭕*MAS INFORMACIÓN* SI QUIERE VER MAS INFO DE ESTA PROMO.\n⭕*TEMARIO COMPLETO* SI QUIERE VER EL TEMARIO COMPLETO DE REFRIGERACIÓN Y AIRE ACONDICIONADO.`;
let temarioRAA = `Temario
Te mostramos el temario de nuestro curso de Refrigeración y Aire Acondicionado.


*Con nuestro curso de Refrigeración y Aire Acondicionado Podrás tramitar la Matricula, bajo la Cámara Argentina de Refrigeración.*


17 Clases Audiovisuales + 10 Manuales De Estudio.

Módulo 1

VIDEO 1: herramientas y materiales. Medición de diámetros. Balonas. Expansión de caños. Soldadura con diferentes materiales (bronce y plata). Cañerías de cobre. Equipo Split. Descripción de compresor abierto. Despiece de compresor abierto. Detección de fallas de un compresor abierto. Armado de un compresor. Equipos condensadores (herméticos), funcionamiento, componentes, pruebas de presión con manómetro. Presostatos. MANUAL 1: manuales. La refrigeración. Temperatura. Calorías y frigorías. Calor específico y latente. Presión, vacío, presión absoluta y relativa. Manómetros. Vacuómetros. Principios de la refrigeración. Diferentes tipos. Componentes del sistema de refrigeración por compresión. Tipos de compresores. Unidad condensadora. Fluidos refrigerantes. Almacenamiento, lubricantes. Refrigerantes ecológicos.

Módulo 2

VIDEO 2: pinza amperométrica. Refrigerador familiar (cambio de compresor, detección de pérdidas, vacío del sistema, deshidratación del sistema, verificación del sistema eléctrico, detección de fallas y carga del sistema). MANUAL 2: evaporadores. Compresor. Equipos herméticos. Condensadores. Tubo recibidor. Filtro deshidratador. Cálculo de condensadores.

Módulo 3

VIDEO 3: vitrina refrigerada con unidad condensadora hermética (instalación, reparación, carga de gas, diagnóstico general). MANUAL 3: elementos de expansión. Controles automáticos. Termostatos. Presostatos. Accesorios. Válvulas.

Módulo 4

VIDEO 4: aire acondicionado de ventana (funcionamiento, verificaciones del sistema eléctrico, medición y presión, despiece y armado, carga). MANUAL 4: electricidad. Trabajo mecánico. Trabajo eléctrico. Potencia eléctrica. Corriente eléctrica. Tipos. Capacitores.

Módulo 5

VIDEO 5: aire acondicionado SPLIT frío/calor por bomba de calor (componentes, funcionamiento, vacío, des-obstrucción de válvulas de servicio, explicación de carga, detección de fugas, descripción del aparato, tablero de conexiones eléctricas, fallas posibles, resolución, controles y funciones, problemas eléctricos, instalación del equipo condensador en exteriores, pinza amperométrica, funcionamiento y uso. VIDEO 5.1: INSTALACIÓN AIRE ACONDICIONADO SPLIT NUEVO Paso a paso de la instalación. MANUAL 5: magnetismo. Electromagnetismo. Inducción electromagnética. Motores eléctricos. Corriente trifásica. Motor trifásico. Sistemas de arranque estrella-triángulo.

Módulo 6

VIDEO 6: Cámaras frigoríficas de conservación (funcionamiento, componentes, conexionado eléctrico, tableros de comando, sensores, controles automáticos, diagnóstico, medición de presiones). MANUAL 6: unidades familiares y comerciales. Conservación del producto. Calor específico. Ciclo de compresión.

Módulo 7

VIDEO 7: Cámaras frigoríficas de congelación (funcionamiento, componentes, conexionado eléctrico, tableros de comando, sensores, controles automáticos, diagnóstico, medición de presiones) MANUAL 7: acondicionamiento del aire (enfriamiento, deshumedecimiento, humedecimiento). Instrumentos. Psicrometría. Acondicionadores centrales.

Módulo 8

VIDEO 8: aire acondicionado del automóvil (funcionamiento, componentes, medición de presiones, explicación de carga, diagnósticos). Gases ecológicos, uso y consideraciones. Recuperación y reciclaje de refrigerante. Recarga de gas y vacío y carga de gas. MANUAL 8: acondicionador familiar de ventana. Instalación de A/A de ventana (en pared, ventana, travesaño). Diferencia de temperatura. Equipos con tubo capilar (averías).

Módulo 9

VIDEO 9: Moto compresor para gas ecológico 134a. Caja de conexiones eléctricas. Cambio de filtro deshidratador. Filtro de gas ecológico. Válvula de expansión termostática. Manómetros para 134a. Uso de gas nitrógeno. Válvulas de escape. Limpieza del circuito. Detector de fuga. Bomba de vacío. Lubricante ecológico. Filtro deshidratador. MANUAL 9: heladeras familiares (fallas eléctricas, mecánicas, carga de gas). Heladeras comerciales (fallas eléctricas, carga de gas). Sellos y placas de válvulas. Fallas en aire acondicionado. Funcionamiento incorrecto del compresor, árbol de fallas y soluciones. Refrigerantes R134a generalidades, cambio de R12 a R134a carga, mantenimiento de equipos con R134a.

Módulo 10

VIDEO 10: Funcionamiento y componentes. Acondicionador Indirecto. Acondicionador Split Casete. Acondicionador Split 5 toneladas. Acondicionador de tipo mochila. Unidades Exteriores Condensadoras. Chiller Marca York. Torres de enfriamiento. MANUAL 10: instalación industrial (montaje, componentes, humedad, tubería, aceite, planificación, tuberías, vacío, soplado, carga, ajuste, prueba, soldaduras). Unidad Split (instalación, cañería y drenaje, unidades interior y exterior, purgado). Aire acondicionado para automóviles.

Módulo 11

VIDEO 11: Compresores Semi herméticos. Descripción del equipo. Detección de fallas. VIDEO 11.1: Sistema de freezer con frío seco. Cambio de moto compresor. Limpieza de cañerías. Instalación de un moto compresor. Detección de fugas. Elementos interiores. Diagrama eléctrico.

Módulo 12

VIDEO 12: PLACA PRINCIPAL AIRE ACONDICIONADO (1:53) Placa principal. Búsqueda de un integrado en internet. Sensores. Fallas. Medición de moto compresor. Medición de condensador. Fallas control remoto.

Módulo 13, 14, 15

VIDEO 13: CAMBIO DE COMPRESOR EN HELADERA PARTE 1 – (1:47) VIDEO 13.1: CAMBIO DE COMPRESOR EN HELADERA PARTE 2 – (2:07)

Modulo 16

Refrigeración del Automóvil.`;
// Este menu esta despues de todos los mensajes para que puedan solicitar nuevamente el menu
const menuAzafata = new Buttons("Para ver nuevamente el Menu, presione el Botón de abajo",[{body:'MENU'}],'MENU Escuelas IADE','Federico Escuelas IADE, area Promociones');


client.on('message', async (msg) => {
        //OPCION A
    if (msg.body == "a" || msg.body == "A" || msg.body == "aa") {
        await awaitTimeout(delay);
        client.sendMessage(msg.from, msgA);
        await awaitTimeout(3000);
        client.sendMessage(msg.from, '*Metodología de Estudio:*');
        await awaitTimeout(3000);
        client.sendMessage(msg.from, msgAB);
        await awaitTimeout(3000);
        client.sendMessage(msg.from, "En resumen, inscribiéndose y abonando el dia de hoy le quedaría el *Curso a $16.000 con uno mas de regalo!*");
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
        //OPCION B
    } else if (msg.body == "b" || msg.body == "B" || msg.body == "bb" || msg.body == "*B*") {
        await awaitTimeout(5000);
        client.sendMessage(msg.from, msgB);
        //OPCION C
    } else if (msg.body == "c" || msg.body == "C" || msg.body == "cc"|| msg.body == "*C*") {
        await awaitTimeout(2000);
        //OPCION C 1 MSG
        client.sendMessage(msg.from, '*Metodología explicada en audio:*');
        await awaitTimeout(5000);
        //OPCION C 2 MSG (AUDIO 1)
        const hasil = fs.readFileSync('media/audio/metodologia-audio.ogg', {encoding: 'base64'});
        const media = new MessageMedia('audio/ogg', hasil);
        client.sendMessage(msg.from,media, { sendAudioAsVoice: true});
        await awaitTimeout(5000);
        //OPCION C 3 MSG 
        client.sendMessage(msg.from, '*Promoción explicada en audio:*');
        const hasil2 = fs.readFileSync('media/audio/promocion-audio.ogg', {encoding: 'base64'});
        const media2 = new MessageMedia('audio/ogg', hasil2);
        client.sendMessage(msg.from,media2, { sendAudioAsVoice: true});
        await awaitTimeout(5000);
        //OPCION C 4 MSG (AUDIO 2)
        const hasil3 = fs.readFileSync('media/audio/promocion-audio2.ogg', {encoding: 'base64'});
        const media3 = new MessageMedia('audio/ogg', hasil3);
        client.sendMessage(msg.from,media3, { sendAudioAsVoice: true});
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
        //OPCION MATRICULA 
    }else if (msg.body == "Matricula" || msg.body == "matricula" || msg.body == "matriculación" || msg.body == "Matriculación" || msg.body == "Matriculacion" || msg.body == "*MATRICULA*"  || msg.body == "MATRICULA" ){  
        let hasilMatri = fs.readFileSync('media/images/raa/banner-promo-2x1-2.png', {encoding: 'base64'});
        let mediaMatri = new MessageMedia('image/png', hasilMatri);
        let hasilMatri2 = fs.readFileSync('media/images/raa/banner-matricula.png', {encoding: 'base64'});
        let mediaMatri2 = new MessageMedia('image/png', hasilMatri2);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, "Aquí le dejo toda la información sobre la *Promoción* del Curso de *Refrigeración y Aire Acondicionado* y *Plaquetas Electrónicas de Aires y Heladeras*:");
        await awaitTimeout(5000);
        client.sendMessage(msg.from, mediaMatri);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, mediaMatri2);
        //MENU RAA
        let button = new Buttons(msgMenuRAA,[{body:'MAS INFORMACIÓN'},{body:'TEMARIO COMPLETO'},{body:'C'}],'MENU PROMO MUNDIAL','Federico Escuelas IADE, area Promociones');
        client.sendMessage(msg.from,button);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, "Si quiere saber mas información presione cualquier boton del menu o consúlteme por aquí.");
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
        // OPCION MAS INFORMACIÓN
    } else if (msg.body == "MAS INFORMACIÓN" || msg.body == "Mas información" || msg.body == "*MAS INFORMACIÓN*" ){
        await awaitTimeout(5000);
        let hasilMatri3 = fs.readFileSync('media/images/raa/banner-raa-0.png', {encoding: 'base64'});
        let mediaMatri3 = new MessageMedia('image/png', hasilMatri3);
        let hasilMatri4 = fs.readFileSync('media/images/raa/banner-raa-1.png', {encoding: 'base64'});
        let mediaMatri4 = new MessageMedia('image/png', hasilMatri4);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, mediaMatri3);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, mediaMatri4);
        await awaitTimeout(5000);
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
    }else if (msg.body == "TEMARIO COMPLETO" || msg.body == "TEMARIO" || msg.body == "Temario Completo" || msg.body == "*TEMARIO COMPLETO*" || msg.body == "Refrigeración y Aire Acondicionado" || msg.body == "Refrigeración" || msg.body == "RAA"){
        await awaitTimeout(5000);
        client.sendMessage(msg.from, temarioRAA);
        await awaitTimeout(5000);
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
        //OPCION Opciones
    }else if (msg.body == "Opciones" || msg.body == "OPCIONES" || msg.body == "opciones" ){
        client.sendMessage(msg.from, "*Opciones:*\n-Activar promo\n-Activar Promo Wsp\n Solo tenemos estas :(");
        //OPCION ACTIVAR PROMO
    } else if (msg.body == "Activar Promo" || msg.body == "Activar promo") {
        client.sendMessage(msg.from, "*Activando Promo Mail...*");
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*.*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . . .*");
        await awaitTimeout(1500);
        promoMail();
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*Promo Activada con éxito*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*Que tengas suerte en las ventas señor Federico 😈🐉*");
        //OPCION ACTIVAR PROMO WSP
    }else if (msg.body == "Activar Promo Wsp" || msg.body == "Activar promo wsp"|| msg.body == "activar promo wsp"){
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "Activando Promo Wsp...");
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*.*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . . .*");
        promoWsp();
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*...Promo activada con éxito!*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*Que tengas suerte en las ventas señor Federico 😈🐉*");
        await awaitTimeout(1500);
            //OPCION MENU
    } else if (msg.body == "MENU" || msg.body == "Menu" || msg.body == "menu"|| msg.body == "Menú" || msg.body == "*MENU*") {
        await awaitTimeout(2000);
        let button = new Buttons(msgMenu,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'}],'MENU ESCUELAS IADE','Federico Escuelas IADE, area Promociones');
        let button2 = new Buttons("Presione cualquier botón para seleccionar la opción correcta, enviando Menu se le enviara nuevamente el MENU de Escuelas IADE",[{body:'METODOLOGIA'},{body:'MATRICULA'},{body:'CERTIFICADOS'}],'MENU Parte 2','Federico Escuelas IADE, area Promociones');
        client.sendMessage(msg.from,button);
        await awaitTimeout(2000);
        client.sendMessage(msg.from,button2);
        await awaitTimeout(2000);
    }else if (msg.body == "Cursos Disponibles" || msg.body == "Listado de Cursos" || msg.body == "Listado de cursos"|| msg.body == "listado"|| msg.body == "Cursos"|| msg.body == "Catalogo" || msg.body == "Catalogo Cursos" || msg.body == "CURSOS"|| msg.body == "cursos" || msg.body == "*CURSOS*" || msg.body == "*cursos*" || msg.body == "*LISTADO DE CURSOS*" || msg.body == "LISTADO DE CURSOS"|| msg.body == "Listado de cursos") {
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*CURSOS DISPONIBLES*:\n\n*REFRIGERACIÓN Y AIRE ACONDICIONADO\n\n*PLAQUETAS ELECTRÓNICAS\n\n*DISEÑO Y CONFECCIÓN DE VESTIMENTA\n\n*DISEÑO DE MODA\n\n*ESTÉTICA Y MASAJE CORPORAL\n\n*MASAJE TERAPÉUTICO ORIENTAL\n\n*COSMETOLOGÍA Y MAQUILLAJE\n\n*CUIDADO DE ADULTOS MAYORES\n\n*CONSTRUCCIÓN\n\n*CONSTRUCCIÓN EN SECO\n\n*SOLDADURA ELÉCTRICA Y HERRERÍA\n\n*MECÁNICA DE MOTOS ALTA CILINDRADA\n\n*MECANICA DE MOTOS BAJA CILINDRADA\n\n*ELECTRÓNICA DIGITAL\n\n*REPARACIÓN DE CELULARES\n\n*REPARACIÓN DE ELECTRODOMÉSTICOS Y LAVARROPAS\n\n*INSTALACIONES ELÉCTRICAS\n\n*ELECTRICIDAD Y ELECTRÓNICA INDUSTRIAL\n\n*BOBINADO\n\n*MOTORES DIESEL\n\n*INYECCIÓN ELECTRÓNICA DIESEL\n\n*INYECCIÓN ELECTRÓNICA GNC\n\n*ELECTRICIDAD Y ELECTRÓNICA AUTOMOTRIZ\n\n*MECÁNICA GENERAL\n\n*FRENOS\n\n*INSTALADOR DE PANELES SOLARES\n\n*FOTOGRAFÍA Y ESTUDIO DIGITAL\n\n*CERRAJERÍA\n\n*INSTALACIONES SANITARIAS Y DE GAS\n\n*OFFICE BÁSICO\n\n*PELUQUERÍA\n\n*MANICURA\n\n*ADMINISTRACIÓN Y GESTIÓN EN SALUD \n\n*AUXILIAR EN CARDIOLOGIA \n\n*TRANSFORMACIÓN DIGITAL(Marketing Digital)\n\n*AUXILIAR DE FARMACIA");
        await awaitTimeout(1500);
        client.sendMessage(msg.from,"Si quiere el temario del curso, solicítelo por aquí y se lo estaré enviando para que pueda ver los contenidos que se ven en el Curso");
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
        // CERTIFICADOS
    }else if (msg.body == "CERTIFICADO" || msg.body == "CERTIFICADOS" || msg.body == "*CERTIFICADO*" || msg.body == "*CERTIFICADOS*" || msg.body == "certificados" || msg.body == "Certificados") {
        let hasilCert = fs.readFileSync('media/images/certificaciones/certificado-iade.png', {encoding: 'base64'});
        let mediaCert = new MessageMedia('image/png', hasilCert);
        let hasilCertStandard = fs.readFileSync('media/images/certificaciones/cert-standard-0.jpg', {encoding: 'base64'});
        let mediaCertStandard  = new MessageMedia('image/jpg', hasilCertStandard);
        let hasilCertStandard1 = fs.readFileSync('media/images/certificaciones/cert-standard-1.jpg', {encoding: 'base64'});
        let mediaCertStandard1 = new MessageMedia('image/jpg', hasilCertStandard1);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, "Certificado de Escuelas IADE generado automáticamente una ve aprueba el examen final en nuestro Campus Virtual:");
        await awaitTimeout(5000);
        client.sendMessage(msg.from, mediaCert);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, "Certificado de Standard Lift:");
        await awaitTimeout(5000);
        client.sendMessage(msg.from, mediaCertStandard);
        await awaitTimeout(1500);
        client.sendMessage(msg.from, mediaCertStandard1);
        await awaitTimeout(5000);
        client.sendMessage(msg.from, "(Este Certificado y su Matricula son opcionales, se abonan a parte una vez finalizado y aprobado el curso, con el presente Certificado de Escuelas IADE)");
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
        // METODOLOGIA
    } else if (msg.body == "Metodología" || msg.body == "Metodologia" || msg.body == "metodologia" || msg.body == "Modalidad" || msg.body == "Metodo de estudio" || msg.body == "METODOLOGÍA" || msg.body == "METODOLOGIA") {
        let hasil4 = fs.readFileSync('media/images/banner-0.png', {encoding: 'base64'});
        let media4 = new MessageMedia('image/png', hasil4);
        let hasil5 = fs.readFileSync('media/images/banner-1.png', {encoding: 'base64'});
        let media5 = new MessageMedia('image/png', hasil5);
        await awaitTimeout(2000);
        client.sendMessage(msg.from,media4);
        await awaitTimeout(1500);
        client.sendMessage(msg.from,media5);
        await awaitTimeout(5000);
        client.sendMessage(msg.from,menuAzafata);
    }else if (msg.body == "FINAL PROMO" || msg.body == "FINALIZA PROMO"){
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "Activando Recordatorio de que finaliza promo...");
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*.*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . . .*");
        finalPromo();
        client.sendMessage(msg.from, "*...Mensajes masivos activados con éxito!*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*Que tengas suerte en las ventas señor Federico 😈🐉*");
    }else if(msg.body == "ENIVAR A"){
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "Activando Recordatorio de que finaliza promo...");
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*.*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . . .*");
        sendCapA();
        client.sendMessage(msg.from, "*...Mensajes con la letra A enviados con éxito!*");
        await awaitTimeout(500);

    }else if(msg.body == "Persona Wsp"){
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "Activando Recordatorio de que finaliza promo...");
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*.*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . .*");
        await awaitTimeout(500);
        client.sendMessage(msg.from, "*. . . . .*");
        personWsp();
        client.sendMessage(msg.from, "*...Mensajes de 'Persona Wsp' enviados con éxito!*");
        await awaitTimeout(500);

    }
        
});








const noEnviados =[];

let horaLocal = new Date().toLocaleTimeString();
    horaLocal = horaLocal.slice(0, -6);
    horaLocal = parseInt(horaLocal);

// FUNCION PROMO

let promoMail =()=>{
    let msgSends = 0;
    function doLoop(i) {
        let alumno = bdiade[i];
        setTimeout(async  ()=> {
            const number = alumno.Telefono;
    
    
            const msgPromo = `Hola ${alumno.Nombre} ${horaLocal < 12 ? `buenos días`: `buenas tardes`}, me estoy comunicando desde Escuelas IADE *Cursos Online Certificados* porque usted alguna vez solicito información, queríamos contarle que tenemos\n *Promociones Especiales*😊 de hasta *30%*(dependiendo dia de pago/MÉTODO)\nque quizá le podrían interesar sobre el ${alumno.Curso}🧑‍🎓.\n\n*PRESIONE/RESPONDA CON LA LETRA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*B* SI NO ESTAS INTERESADO. \n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO🎊.\n🎊*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS🎊.\n🎊*METODOLOGÍA* SI QUIERE VER LA METODOLOGÍA EN IMÁGENES🎊.`;
            const msgCodigo = `*Se le genero el código único, utilícelo para aplicar la promoción:*`;
        
            const msgCodigo2 = `*${idRandom()}*`;
            const chatId = number.substring(1) + "@c.us";
            let hasil3 = fs.readFileSync('media/images/banner-promo-17-11.png', {encoding: 'base64'});
            let media3 = new MessageMedia('image/png', hasil3);
                client.sendMessage(chatId, media3);
                let button = new Buttons(msgPromo,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'}],'Promoción Especial Escuelas IADE','(Presione una letra/opción para responder)\nFederico Escuelas IADE, area Promociones');
                client.sendMessage(chatId, button);
                await awaitTimeout(2000);
                client.sendMessage(chatId, "Responda por este medio para aprovechar la promo!");
              //  client.sendMessage(chatId, msgPromo);
                await awaitTimeout(2000);

            
            
            msgSends++;

        if(i < bdiade.length-1){
            doLoop(i+1); 
            }
        }, 10000);
        
        }
    
    doLoop(0);
    
}

// funcion promo wsp
let promoWsp =()=>{

    function doLoop(i) {
        let alumno = bdiade[i];
        setTimeout(async  ()=> {
            const number = alumno.Telefono;
    
    
            const msgPromo = `Hola ${alumno.Nombre ? `${alumno.Nombre}, buenas tardes `: `buenas tardes`}, me estoy comunicando desde Escuelas IADE *Cursos Online Certificados* porque usted alguna vez solicito información, queríamos contarle que tenemos\n *Promociones Especiales*😊 de hasta *30%*(dependiendo dia de pago/MÉTODO)\nque quizá le podrían interesar sobre el ${alumno.Curso ? `${alumno.Curso}` : `curso del cual solicito información!`}🧑‍🎓.\n\n*PRESIONE/RESPONDA CON LA LETRA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*B* SI NO ESTAS INTERESADO. \n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO🎊.\n🎊*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS🎊.\n🎊*METODOLOGÍA* SI QUIERE VER LA METODOLOGÍA EN IMÁGENES🎊.`;
            const msgCodigo = `*Se le genero el código único, utilícelo para aplicar la promoción:*`;
        
            const msgCodigo2 = `*${idRandom()}*`;
            const chatId = number.substring(1) + "@c.us";
            let hasil3 = fs.readFileSync('media/images/banner-promo-17-11.png', {encoding: 'base64'});
            let media3 = new MessageMedia('image/png', hasil3);
                client.sendMessage(chatId, media3);
                let button = new Buttons(msgPromo,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'},{body:'METODOLOGÍA'}],'Promoción Especial Escuelas IADE','(Presione una letra/opción para responder)\nFederico Escuelas IADE, area Promociones');
                client.sendMessage(chatId, button);
                await awaitTimeout(2000);
                client.sendMessage(chatId, "Responda por este medio para aprovechar la promo!");
              //  client.sendMessage(chatId, msgPromo);
                await awaitTimeout(2000);

            

        if(i < bdiade.length-1){
            doLoop(i+1); 
            }
        }, 10000);
        
        }
    
    doLoop(0);
    
}


// HABLARLES COMO PERSONA FUNCION

let personWsp =async()=>{

    function doLoop(i) {
        let alumno = bdiade[i];
        setTimeout(async  ()=> {
            const number = alumno.Telefono;
    
    
            const msgPromo0 = `Hola ${alumno.Nombre ? `${alumno.Nombre}, buenas tardes `: `buenas tardes`}, me estoy comunicando desde Escuelas IADE *Cursos Online Certificados* porque usted alguna vez solicito información sobre ${alumno.Curso ? `el ${alumno.Curso}.` : `alguno de nuestros Cursos o sobre nuestro Catalogo de Cursos!`}. Me comunico desde el area de promociones ya que contamos con una promoción por el dia de hoy y mañana (13/12-14/12):`;
            const msgPromo = `Consistiría en *2 cursos completos por 16.000* o *un curso por 14.000 abonando el dia de hoy en un pago* (cualquier método), si tiene alguna duda sobre *Metodología de Estudio* o *Cursos Disponibles* me dice por aquí y le enviare información o le llamare. Muchas gracias`
            const msgPromoRaa = 'Ademas de todos nuestros cursos, contamos con una promoción especial en nuestro Curso de Refrigeración y Aire Acondicionado. El cual tiene posibilidad de Matricularse Online'
        
            const chatId = number.substring(1) + "@c.us";
            let hasil3 = fs.readFileSync('media/images/raa/banner-matricula.png', {encoding: 'base64'});
            let media3 = new MessageMedia('image/png', hasil3);
                await awaitTimeout(2000);
                client.sendMessage(chatId, msgPromo0); 
                await awaitTimeout(5000);
                client.sendMessage(chatId, msgPromo); 
                await awaitTimeout(5000);
                client.sendMessage(chatId, msgPromoRaa); 
                await awaitTimeout(5000);
                client.sendMessage(chatId, media3);
                await awaitTimeout(5000);

            

        if(i < bdiade.length-1){
            doLoop(i+1); 
            }
        }, 10000);
        
        }
    
    doLoop(0);
    await client.sendMessage("5491126642674@c.us", "Se han enviado todos los mensajes de Persona Wsp");
}


// FINAL PROMO LABEL
//bot
let msgPromo = 'Hola Buenas tardes❗❗\n Quería saber si quería aprovechar la promoción antes enviada ya que esta por terminarse.\n⭕Dígame por aquí si quiere que lo llame un asesor o si tiene alguna duda o si *quiere inscribirse*!! (se puede pagar en cuotas sin interés con tarjeta de crédito!!)\n⭕Puede presionar el botón de Menu para ver toda la información disponible\n⭕Actualmente tenemos una promoción de Refrigeración y Aire Acondicionado con el cual se puede tramitar la matricula';
//persona
let msgPromo2 = 'Hola buenas tardes, me estoy comunicando desde Escuelas IADE para saber si esta interesado en la promoción que termino el 10/12 pero que *sigue vigente hasta el dia de hoy 12/12.* Consistiría en 2 cursos completos por 16.000 o un curso por 14.000 abonando el dia de hoy en un pago (cualquier método), si tiene alguna duda me dice por aquí. Muchas gracias';
let msgSigueInteresado = 'Hola buenas tardes, me comunico para saber si le gustaría aprovechar la promoción que tenemos ahora vigente e inscribirse en alguno/s de nuestros cursos! Desde ya muchas gracias por su respuesta. Si quiere saber información sobre Cursos disponibles, Metodología de Estudio, Certificados, Temarios o que le hagamos una promoción que se amolde a usted dígame por este medio';
let msgPromoEnero  = 'Hola buenas tardes me estoy comunicando de Escuelas IADE Cursos Online Certificados. Estamos ofreciendo una promoción especial por el inicio de año en nuestros cursos. Si está interesado en aprovechar esta oportunidad, por favor háganos saber y le enviaremos información detallada sobre los cursos disponibles, nuestra metodología de estudio y los certificados que ofrecemos. También podemos hacerle una promoción que se amolde a sus necesidades. Si no está interesado, por favor envíe la letra B y lo excluiremos de nuestra lista de mensajes. Si desea conocer más sobre nuestros cursos y promociones, por favor envíe la palabra "menu" y le enviaremos toda la información necesaria o directamente responda este mensaje para que lo asesoremos.';

const finalPromo = async()=>{
    function doLoop(i) {
        let number = chatsArr[i];
        setTimeout(async  ()=> {
            await client.sendMessage(number, msgPromoEnero);
                //await client.sendMessage(number, msgPromo2);
                //let button = new Buttons(msgPromo,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'},{body:'METODOLOGÍA'}],'Promoción Especial Escuelas IADE','(Presione una letra/opción para responder)\nFederico Escuelas IADE, area Promociones');
                 //await client.sendMessage(number, menuAzafata);

        

     if(i < chatsArr.length-1){
        doLoop(i+1); 
         }
     }, 10000);
    
     }

    doLoop(0);
     await client.sendMessage("5491126642674@c.us", "Se han enviado todos los mensajes de FINALIZA PROMO");
}

// enviar a y menu

const sendCapA= ()=>{
    function doLoop(i) {
        let number = chatsArr[i];
        setTimeout(async  ()=> {
                await client.sendMessage(number, msgA);
                await client.sendMessage(number, menuAzafata);

        

     if(i < chatsArr.length-1){
        doLoop(i+1); 
         }
     }, 10000);
    
     }

    doLoop(0);
}


// funcion enviar a etiqueta
// const etiquetaData = {
//     name: 'Prueba 5/12'
// };
// const etiqueta = new Label(client,etiquetaData);
// async function enviarMensajes(nombreEtiqueta, texto) {
//     // Obtiene el número de teléfono de todos los contactos en la etiqueta
//     const contactos = await etiqueta.getContacts(nombreEtiqueta);
//     const numeros = contactos.map(contacto => contacto.number);

//     // Envía el mensaje a cada contacto
//     for (const numero of numeros) {
//     await client.sendMessage(numero, texto);
//     }
// }



// Obtener todos los chats para la etiqueta con ID "MY_LABEL_ID"



//enviarMensajes(Label, "Hola, esto es una prueba");

// let finalizaPromo =()=>{

//     function doLoop(i) {
//         let alumno = bdiade[i];
//         setTimeout(async  ()=> {
//             const number = alumno.Telefono;


//             const msgPromo = `Hola ${alumno.Nombre ? `${alumno.Nombre}, ${buenas tardes} `: `buenas tardes`}, me estoy comunicando desde Escuelas IADE *Cursos Online Certificados* porque usted alguna vez solicito información, queríamos contarle que tenemos\n *Promociones Especiales*😊 de hasta *30%*(dependiendo dia de pago/MÉTODO)\nque quizá le podrían interesar sobre el ${alumno.Curso ? `${alumno.Curso}` : `curso del cual solicito información!`}🧑‍🎓.\n\n*PRESIONE/RESPONDA CON LA LETRA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*B* SI NO ESTAS INTERESADO. \n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO🎊.\n🎊*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS🎊.\n🎊*METODOLOGÍA* SI QUIERE VER LA METODOLOGÍA EN IMÁGENES🎊.`;
//             const msgCodigo = `*Se le genero el código único, utilícelo para aplicar la promoción:*`;

//             const msgCodigo2 = `*${idRandom()}*`;
//             const chatId = number.substring(1) + "@c.us";
//             let hasil3 = fs.readFileSync('media/images/banner-promo-17-11.png', {encoding: 'base64'});
//             let media3 = new MessageMedia('image/png', hasil3);
//                 client.sendMessage(chatId, media3);
//                 let button = new Buttons(msgPromo,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'},{body:'METODOLOGÍA'}],'Promoción Especial Escuelas IADE','(Presione una letra/opción para responder)\nFederico Escuelas IADE, area Promociones');
//                 client.sendMessage(chatId, button);
//                 await awaitTimeout(2000);
//                 client.sendMessage(chatId, "Responda por este medio para aprovechar la promo!");
//               //  client.sendMessage(chatId, msgPromo);
//                 await awaitTimeout(2000);



//         if(i < bdiade.length-1){
//             doLoop(i+1); 
//             }
//         }, 10000);

//         }

//     doLoop(0);

// }







// cuantos se mandaron en total codigo

// let resFinal = `Se termino de enviar la promo activada.\nSe han enviado *${msgSends}* mensajes de promo.\nPor favor, limpie y rellene la base de datos.`;
//     let number = "5491126642674" + "@c.us";
//     client.sendMessage(number, resFinal);
