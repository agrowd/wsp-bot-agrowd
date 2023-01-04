const fs = require('fs');

const qrcode = require('qrcode-terminal');

const { Client, Chat, PrivateChat, GroupChat, Message, MessageMedia, Contact, PrivateContact, BusinessContact, ClientInfo, Location, LocalAuth } = require('whatsapp-web.js');

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
let msgA = `🎉Contamos con una promoción que no te podes perder, *inscribiéndote y abonando el día de hoy tenes un 40% + PLUS de descuento*\n*Serian $14.000 total de los $24.000 valor habitual/común* (por 2 cursos abonando el dia de hoy, si necesita màs Cursos *consulte por promoción*)\n\nA medida que van pasando los días se va bajando el descuento hasta el día 7/11 que tiene un *10% + PLUS final ($20.000)*🕒‼️\n\n-Se puede abonar con transferencia, depósito, Rapipago, Pagofacil, Tarjeta de Crédito/Débito, MercadoPago.\n*Dígame por aquí si tiene alguna duda en particular en cuanto a metodología, certificaciones*`;
let msgAB = `Nuestros cursos se llevan a cabo *online a través de nuestra plataforma de aprendizaje en nuestro sitio web*. Al inscribirse, tendrá acceso a *clases audiovisuales* y *manuales de estudio* para ver uno y luego leer el otro. Si surge alguna duda, *puede solicitar ayuda adicional a un tutor*. El curso es asincrónico, por lo que *usted podrá estudiar en la medida en que disponga de tiempo*. Una vez que se sienta seguro, puede realizar el *examen en la misma plataforma*. El examen es una prueba de selección múltiple y, si se obtienen un *70% de respuestas correctas, se emitirá un certificado de Escuelas IADE*. Con este certificado puede tramitar los otros que tienen validez en Estados Unidos y en los países del Mercosur.`;
let msgB = `Muchas gracias por su respuesta, ya mismo lo sacaremos de la lista de interesados. Saludos`;
let msgC = `Ya mismo le enviare el audio`;
let msgD = `*Formulario de inscripción*\n-Una vez completado se le generara el perfil en el campus virtual-\nNOMBRE COMPLETO:\nDNI:\nTEL:\nE-MAIL:\nCURSO/S:\nMEDIO DE PAGO:`;
client.on('message',async  (msg) => {
    if (msg.body == "a" || msg.body == "A" || msg.body == "aa" ) {
        await awaitTimeout(delay);
        client.sendMessage(msg.from, msgA);
        await awaitTimeout(3000);
        client.sendMessage(msg.from, '*Metodologia de Estudio:*');
        await awaitTimeout(3000);
        client.sendMessage(msg.from, msgAB);
        client.sendMessage(msg.from, 'Hasta aqui alguna duda?');
    } else if (msg.body == "b" || msg.body == "B" || msg.body == "bb") {
        await awaitTimeout(delay);
        client.sendMessage(msg.from, msgB);
    } else if (msg.body == "c" || msg.body == "C" || msg.body == "cc") {
        await awaitTimeout(2000);
        client.sendMessage(msg.from, '*Metodologia explicada en audio:*');
        await awaitTimeout(5000);
        const hasil = fs.readFileSync('media/audio/metodologia-audio.ogg', {encoding: 'base64'});
        const media = new MessageMedia('audio/ogg', hasil);
        client.sendMessage(msg.from,media, { sendAudioAsVoice: true});
    } else if (msg.body == "d" || msg.body == "D" || msg.body == "DD") {
        await awaitTimeout(delay);
        client.sendMessage(msg.from, msgD);
        await awaitTimeout(delay);
        client.sendMessage(msg.from, msgAB);
    }else if (msg.body == "Opciones" || msg.body == "OPCIONES" || msg.body == "opciones" ){
        client.sendMessage(msg.from, "*Opciones:*\n-Activar promo\n Solo tenemos estas :(");
    }
});


client.on('message',async(msg)=>{
    
    if(msg.body == "Prueba federico"){
        let button = new Buttons('Button body',[{body:'bt1'},{body:'bt2'},{body:'bt3'}],'title','footer');
        client.sendMessage(msg.from, button);
        client.sendMessage(msg.from, "se tuvo que haber enviado");
    }else if(msg.body == "Federico"){
            
    }
    
});




const noEnviados =[];

var horaLocal = new Date().toLocaleTimeString();

// FUNCION PROMO

let promoFede =()=>{
    let msgSends = 0;
    function doLoop(i) {
        let alumno = bdiade[i];
        setTimeout(async function () {
            const number = alumno.Telefono;
    
    
            const msgPromo = `Hola ${alumno.Nombre} ${horaLocal < 12 ? `buenos días`: `buenas tardes`}, me estoy comunicando desde Escuelas IADE🙂 *Cursos Online Certificados* porque tenemos\n *Promociones Especiales*😊 de hasta *50%*(dependiendo dia de pago/MÉTODO)\nque quizá le podrían interesar sobre el ${alumno.Curso}🧑‍🎓.\n\n*RESPONDA CON LA LETRA*:\n🎊*A* PARA SABER SOBRE LA PROMOCIÓN.\n🎊*B* SI NO ESTAS INTERESADO \n🎊*C* SI QUIERE UN AUDIO EXPLICATIVO\n🎊*D* SI QUIERE INSCRIBIRSE EN EL CURSO Y APROVECHAR EL 60% + CURSO DE REGALO EL DIA DE HOY🎊.\n`
           
            const msgCodigo = `*Se le genero el código único, utilícelo para aplicar la promoción:*`;
        
            const msgCodigo2 = `*${idRandom()}*`
            const chatId = number.substring(1) + "@c.us";
    
            if(alumno.SendStatus == "Null"){
                client.sendMessage(chatId, msgPromo);
                await awaitTimeout(2000);
                client.sendMessage(chatId, msgCodigo);
                await awaitTimeout(1500);
                client.sendMessage(chatId, msgCodigo2);
                alumno.SendStatus = "Enviado Correctamente";
            }else{
                noEnviados.push(alumno);
            }
            
            msgSends++;

           if(i < bdiade.length-1){
              doLoop(i+1);
             
            }
        }, 10000);
        
     }
    
    doLoop(0);
    
}



client.on('messege', (msg) => {
    if (msg.body == "Activar Promo" || msg.body == "Activar promo") {
        promoFede();
        client.sendMessage(msg.from, "Promo Activada con éxito");
    }
    

});


// cuantos se mandaron en total codigo

// let resFinal = `Se termino de enviar la promo activada.\nSe han enviado *${msgSends}* mensajes de promo.\nPor favor, limpie y rellene la base de datos.`;
//     let number = "5491126642674" + "@c.us";
//     client.sendMessage(number, resFinal);
