const fs = require('fs');

const qrcode = require('qrcode-terminal');

const { Client, Chat, PrivateChat, GroupChat, Message, MessageMedia, Contact, PrivateContact, BusinessContact, ClientInfo, Location, LocalAuth, Buttons, Label } = require('whatsapp-web.js');

const bdiade = require('/Users/feder/OneDrive/Escritorio/bot-whatsapp/bdiade.json');



const country_code = "54";
const number = "91126642674";
const msg = "Me active papi, que se hace? Mandame *Opciones*";


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
let msgA = `🎉Contamos con una promoción que no te podes perder, *inscribiéndote y abonando el día de hoy tenes un 40% + PLUS de descuento*\n*Serian $14.000 total de los $24.000 valor habitual/común* (por 2 cursos abonando el dia de hoy, si necesita màs Cursos *consulte por promoción*)\n\nA medida que van pasando los días se va bajando el descuento hasta el día 12/11 que tiene un *10% + PLUS final ($20.000)*🕒‼️\n\n-Se puede abonar con transferencia, depósito, Rapipago, Pagofacil, Tarjeta de Crédito/Débito, MercadoPago.\n*Dígame por aquí si tiene alguna duda en particular en cuanto a metodología, certificaciones*`;
let msgAB = `Nuestros cursos se llevan a cabo *online a través de nuestra plataforma de aprendizaje en nuestro sitio web*. Al inscribirse, tendrá acceso a *clases audiovisuales* y *manuales de estudio* para ver uno y luego leer el otro. Si surge alguna duda, *puede solicitar ayuda adicional a un tutor*. El curso es asincrónico, por lo que *usted podrá estudiar en la medida en que disponga de tiempo*. Una vez que se sienta seguro, puede realizar el *examen en la misma plataforma*. El examen es una prueba de selección múltiple y, si se obtienen un *70% de respuestas correctas, se emitirá un certificado de Escuelas IADE*. Con este certificado puede tramitar los otros que tienen validez en Estados Unidos y en los países del Mercosur.`;
let msgB = `Muchas gracias por su respuesta, ya mismo lo sacaremos de la lista de interesados. Saludos`;
let msgMenu = `Escuelas IADE *Cursos Online Certificados*\n\n *Promociones Especiales*😊 de hasta *50%*(dependiendo dia de pago, consulte aquí)\n\n*PRESIONE/RESPONDA CON LA OPCIÓN QUE QUIERA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO🎊.\n🎊*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS🎊.\n🎊*MENU* SI QUIERE VER EL MENU🎊.`;

client.on('message', async (msg) => {
        //OPCION A
    if (msg.body == "a" || msg.body == "A" || msg.body == "aa") {
        await awaitTimeout(delay);
        client.sendMessage(msg.from, msgA);
        await awaitTimeout(3000);
        client.sendMessage(msg.from, '*Metodologia de Estudio:*');
        await awaitTimeout(3000);
        client.sendMessage(msg.from, msgAB);
        //OPCION B
    } else if (msg.body == "b" || msg.body == "B" || msg.body == "bb" || msg.body == "*B*") {
        await awaitTimeout(delay);
        client.sendMessage(msg.from, msgB);
        //OPCION C
    } else if (msg.body == "c" || msg.body == "C" || msg.body == "cc") {
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
        client.sendMessage(msg.from, '*Promoción explicada en audio:*');
        const hasil3 = fs.readFileSync('media/audio/promocion-audio2.ogg', {encoding: 'base64'});
        const media3 = new MessageMedia('audio/ogg', hasil3);
        client.sendMessage(msg.from,media3, { sendAudioAsVoice: true});
        //OPCION Opciones
    }else if (msg.body == "Opciones" || msg.body == "OPCIONES" || msg.body == "opciones" ){
        client.sendMessage(msg.from, "*Opciones:*\n-Activar promo\n Solo tenemos estas :(");
        //OPCION ACTIVAR PROMO
    } else if (msg.body == "Activar Promo" || msg.body == "Activar promo") {
        promoFede();
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "Promo Activada con éxito");
        //OPCION MENU
    } else if (msg.body == "MENU" || msg.body == "Menu" || msg.body == "menu"|| msg.body == "Menú") {
        await awaitTimeout(2000);
        let button = new Buttons(msgMenu,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'}],'MENU ESCUELAS IADE','Federico Escuelas IADE, area Promociones');

        client.sendMessage(msg.from,button);
    }else if (msg.body == "Cursos Disponibles" || msg.body == "Listado de cursos"|| msg.body == "listado"|| msg.body == "Cursos"|| msg.body == "Catalogo" || msg.body == "Catalogo Cursos" || msg.body == "CURSOS"|| msg.body == "cursos" || msg.body == "*CURSOS*" || msg.body == "*cursos*" || msg.body == "*LISTADO DE CURSOS*" || msg.body == "LISTADO DE CURSOS"|| msg.body == "Listado de cursos") {
        await awaitTimeout(1500);
        client.sendMessage(msg.from, "*CURSOS DISPONIBLES*:\n\n*REFRIGERACIÓN Y AIRE ACONDICIONADO\n\n*PLAQUETAS ELECTRÓNICAS\n\n*DISEÑO Y CONFECCIÓN DE VESTIMENTA\n\n*DISEÑO DE MODA\n\n*ESTÉTICA Y MASAJE CORPORAL\n\n*MASAJE TERAPÉUTICO ORIENTAL\n\n*COSMETOLOGÍA Y MAQUILLAJE\n\n*CUIDADO DE ADULTOS MAYORES\n\n*CONSTRUCCIÓN\n\n*CONSTRUCCIÓN EN SECO\n\n*SOLDADURA ELÉCTRICA Y HERRERÍA\n\n*MECÁNICA DE MOTOS ALTA CILINDRADA\n\n*MECANICA DE MOTOS BAJA CILINDRADA\n\n*ELECTRÓNICA DIGITAL\n\n*REPARACIÓN DE CELULARES\n\n*REPARACIÓN DE ELECTRODOMÉSTICOS Y LAVARROPAS\n\n*INSTALACIONES ELÉCTRICAS\n\n*ELECTRICIDAD Y ELECTRÓNICA INDUSTRIAL\n\n*BOBINADO\n\n*MOTORES DIESEL\n\n*INYECCIÓN ELECTRÓNICA DIESEL\n\n*INYECCIÓN ELECTRÓNICA GNC\n\n*ELECTRICIDAD Y ELECTRÓNICA AUTOMOTRIZ\n\n*MECÁNICA GENERAL\n\n*FRENOS\n\n*INSTALADOR DE PANELES SOLARES\n\n*FOTOGRAFÍA Y ESTUDIO DIGITAL\n\n*CERRAJERÍA\n\n*INSTALACIONES SANITARIAS Y DE GAS\n\n*OFFICE BÁSICO\n\n*PELUQUERÍA\n\n*MANICURA\n\n*ADMINISTRACIÓN Y GESTIÓN EN SALUD \n\n*AUXILIAR EN CARDIOLOGIA \n\n*TRANSFORMACIÓN DIGITAL(Marketing Digital)\n\n*AUXILIAR DE FARMACIA");
        await awaitTimeout(1500);
        client.sendMessage(msg.from,"Si quiere el temario del curso, solicítelo por aquí y se lo estaré enviando para que pueda ver los contenidos que se ven en el Curso")
    }// }else if (msg.body == "Prueba") {
    //     msgPromo = `Hola ${alumno.Nombre} ${horaLocal < 12 ? `buenos días`: `buenas tardes`}, me estoy comunicando desde Escuelas IADE🙂 *Cursos Online Certificados* porque usted alguna vez solicito información, queriamos contarle que tenemos\n *Promociones Especiales*😊 de hasta *50%*(dependiendo dia de pago/MÉTODO)\nque quizá le podrían interesar sobre el ${alumno.Curso}🧑‍🎓.\n\n*PRESIONE/RESPONDA CON LA LETRA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*B* SI NO ESTAS INTERESADO. \n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO🎊\n🎊*MENU* SI QUIERE VER EL MENU🎊.\n🎊*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS🎊.`;
    //     client.sendMessage(msg.from, msgPromo);
    //     let hasil3 = fs.readFileSync('media/images/banner-promo.png', {encoding: 'base64'});
    //     let media3 = new MessageMedia('image/png', hasil3);
    //     let button = new Buttons(media3,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'}],'Promoción Especial Escuelas IADE','(Presione una letra/opción para responder)\nFederico Escuelas IADE, area Promociones');
    //     client.sendMessage(msg.from,button);
    // }
        
});








const noEnviados =[];

var horaLocal = new Date().toLocaleTimeString();

// FUNCION PROMO

let promoFede =()=>{
    let msgSends = 0;
    function doLoop(i) {
        let alumno = bdiade[i];
        setTimeout(async  ()=> {
            const number = alumno.Telefono;
    
    
            const msgPromo = `Hola ${alumno.Nombre} ${horaLocal < 12 ? `buenos días`: `buenas tardes`}, me estoy comunicando desde Escuelas IADE🙂 *Cursos Online Certificados* porque usted alguna vez solicito información, queriamos contarle que tenemos\n *Promociones Especiales*😊 de hasta *50%*(dependiendo dia de pago/MÉTODO)\nque quizá le podrían interesar sobre el ${alumno.Curso}🧑‍🎓.\n\n*PRESIONE/RESPONDA CON LA LETRA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*B* SI NO ESTAS INTERESADO. \n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO🎊\n🎊*MENU* SI QUIERE VER EL MENU🎊.\n🎊*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS🎊.`;
            const msgCodigo = `*Se le genero el código único, utilícelo para aplicar la promoción:*`;
        
            const msgCodigo2 = `*${idRandom()}*`;
            const chatId = number.substring(1) + "@c.us";
    
                client.sendMessage(chatId, msgPromo);
                let button = new Buttons(msgPromo,[{body:'A'},{body:'C'},{body:'LISTADO DE CURSOS'}],'Promoción Especial Escuelas IADE','(Presione una letra/opción para responder)\nFederico Escuelas IADE, area Promociones');
                client.sendMessage(chatId, button);
              //  client.sendMessage(chatId, msgPromo);
                await awaitTimeout(2000);
                client.sendMessage(chatId, msgCodigo);
                await awaitTimeout(1500);
                client.sendMessage(chatId, msgCodigo2);
            
            
            msgSends++;

           if(i < bdiade.length-1){
              doLoop(i+1);
             
            }
        }, 10000);
        
     }
    
    doLoop(0);
    
}

// let promoViejosImg =()=>{
//     let msgSends = 0;
//     function doLoop(i) {
//         let alumno = bdiade[i];
//         setTimeout(async function () {
//             const number = alumno.Telefono;
    
    
//             const msgPromo = `Hola ${alumno.Nombre} ${horaLocal < 12 ? `buenos días`: `buenas tardes`}, me estoy comunicando desde Escuelas IADE🙂 *Cursos Online Certificados* porque tenemos\n *Promociones Especiales*😊 de hasta *50%*(dependiendo dia de pago/MÉTODO)\nque quizá le podrían interesar sobre el ${alumno.Curso}🧑‍🎓.\n\n*PRESIONE/RESPONDA CON LA LETRA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*B* SI NO ESTAS INTERESADO. \n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO🎊\n🎊*MENU* SI QUIERE VER EL MENU🎊.\n🎊*CURSOS* SI QUIERE VER EL LISTADO DE CURSOS🎊.`;
//             const msgCodigo = `*Se le genero el código único, utilícelo para aplicar la promoción:*`;
        
//             const msgCodigo2 = `*${idRandom()}*`;
//             const chatId = number.substring(1) + "@c.us";
    
//             const =
//                 let button = new Buttons(msgPromo,[{body:'A'},{body:'B'},{body:'C'}],'Promoción Especial Escuelas IADE','(Presione una letra para responder)\nFederico Escuelas IADE, area Promociones');
//                 client.sendMessage(chatId, button);
//               //  client.sendMessage(chatId, msgPromo);
//                 await awaitTimeout(2000);
//                 client.sendMessage(chatId, msgCodigo);
//                 await awaitTimeout(1500);
//                 client.sendMessage(chatId, msgCodigo2);
            
            
//             msgSends++;

//            if(i < bdiade.length-1){
//               doLoop(i+1);
             
//             }
//         }, 10000);
        
//      }
    
//     doLoop(0);
    
// }

// client.on('ready',()=>{
//     promoFede();
// })




// cuantos se mandaron en total codigo

// let resFinal = `Se termino de enviar la promo activada.\nSe han enviado *${msgSends}* mensajes de promo.\nPor favor, limpie y rellene la base de datos.`;
//     let number = "5491126642674" + "@c.us";
//     client.sendMessage(number, resFinal);
