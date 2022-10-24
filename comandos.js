// Cartita
$(eval
    const responses = ['Tantas estrellas en el espacio y ninguna brilla como tú.', 'Me gusta el café, pero prefiero tener-té.', 'No eres Google, pero tienes todo lo que yo busco.', 'No sabía qué ponerme hoy, y me puse a pensar en ti.', 'No eres lo único en este mundo, pero sí en mi corazón.', 'Eres la canción que hace sonar mi guitarra.', 'Si lo bonito fuera pecado, tú no tendrías el perdón de Dios.', 'Ni en clase de matemáticas me perdía tanto como en tu mirada.', ]; responses[Math.floor(Math.random() * responses.length)];)

'¿Me haces un favor? Sal de mis sueños y entra en mi realidad. ',
'Ni en el mejor libro de recetas se encuentra semejante bombón.',
'¿Están lloviendo estrellas o solo tú caíste del cielo?',
'Quién fuera cemento para sostener ese monumento.',
'Tienes la sonrisa que quiero darle a mis hijos.',
'Perdí mi número de teléfono, ¿me das el tuyo?',
'Ya sé por qué el mar es salado, porque todo lo dulce te lo llevaste tú.',
'Eres como la chancha de mi mamá, te veo venir y se me acelera el corazón.',
'Soy nuevo en la ciudad, ¿me puedes dar instrucciones de cómo llegar a tu casa?',
'Tú con tantas curvas y yo sin frenos.',
'Ojalá fueras sol y me dieras todo el día.',
'Tu ropa me da miedo. ¿Puedes quitártela?',

// Amor
$(eval
    var res = "Existe $(urlfetch https://beta.decapi.me/random/number/0/100)% de amor <3 entre $(user) y $(urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel))!"; res;)

// Amor_sub
$(eval
    if ("$(query)" != "" && "$(query)" != " ") {
        var res = "Existe $(urlfetch https://beta.decapi.me/random/number/0/100)% de amor <3 entre $(user) y $(query)!";
    } else {
        var res = "Existe $(urlfetch https://beta.decapi.me/random/number/0/100)% de amor <3 entre $(user) y $(urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel))!";
    }
    res;)

// Chanclazo
$(eval
    var res = "$(user) le metió un chanclazo a $(urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel)) 🫣!"; res;)

// Chanclazo_sub
$(eval
    var res = "$(user) le metió un chanclazo a $(query)🫣!"; res;)


//Arma
$(eval
    const responses = ['Tu arma es una cuchara', 'Tu arma es un palo', 'Tu arma es un calzón', 'Tu arma es un zapato', 'Tu arma es una espada de madera', 'Tu arma es un teclado', 'Tu arma es un ratón muerto', 'Tu arma es una caja', 'Tu arma es una piedra', 'Tu arma es un matamoscas', 'Tu arma es una lata', 'Tu arma es un papel', 'Tu arma es un lapiz sin punta', 'Tu arma es una almohada', 'Tu arma es un peluche', ]; responses[Math.floor(Math.random() * responses.length)];)

//Arma_sub
$(eval
    const responses = ['Tu arma es una cuchara', 'Tu arma es un Rayo laser', 'Tu arma es una Espada de diamante', 'Tu arma es un Rifle de asalto', 'Tu arma es una Bazuka ', 'Tu arma es la Espada del rey Arturo', 'Tu arma es un Tanque', 'Hoy usarás el Traje de Iron Man', 'Tu arma son Bolas de fuego', 'Tu arma es El caparazon azul de Mario', 'Tu arma es una Ballesta', 'Tu arma es el Guante de Thanos', 'Tu arma es la Espada de Halo', 'Tu arma es una Torreta', 'Tu arma son unos Chakos ', 'Tu arma es una Katana ', ]; responses[Math.floor(Math.random() * responses.length)];)

//Batalla
$(eval
    if ("$(query)" != "" && "$(query)" != " ") {
        var enemy = "$(query)";
    } else {
        var enemy = "$(urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel))";
    }
    if ("$(urlfetch https://beta.decapi.me/random/number/0/100)" >= 50) {
        var res = "$(user) ganó una batalla contra " + enemy + "🥳☠️!"
    } else {
        var res = "$(user) perdió una batalla contra " + enemy + "😭☠️!";
    }
    res;)


//Batalla_sub
$(eval
    if ("$(query)" != "" && "$(query)" != " ") {
        var enemy = "$(query)";
    } else {
        var enemy = "$(urlfetch https://2g.be/twitch/randomviewer.php?channel=$(channel))";
    }
    if ("$(urlfetch https://beta.decapi.me/random/number/0/100)" >= 30) {
        var res = "$(user) ganó una batalla contra " + enemy + "🥳☠️!"
    } else {
        var res = "$(user) perdió una batalla contra " + enemy + "😭☠️!";
    }
    res;)

// Horoscopo
$(eval
    const res = ['Hoy tendrás un dia no tan malo', 'Yo que tú mejor no me entero, será muy malo', 'Recuerdame en que fecha naciste🤔', 'Hoy mejor no salgas, tú vida está en riesgo', 'Hoy tendrás la mejor suerte del mundo!', 'Hoy conocerás al amor de tu vida', 'Hoy puede que sufra tu corazoncito😣', 'Hoy conocerás a alguien importante']; res[Math.floor(Math.random() * res.length)];)

// 8Ball
$(eval
    const responses = ['Todo indica que sí...', 'Sí que sí!', 'Mis fuentes dicen que no.', 'Puedes confiar en ello.', 'Concéntrate y pregunta otra vez...', 'No estoy seguro...', 'Definitivamente sí!', 'Mejor no te lo digo.', 'Lo dudo.', 'Sí definitivamente!', 'No preguntes eso!', 'Es probable.', 'Pregunta de nuevo más tarde.', 'No!', 'No cuentes con eso.', 'No puedo responder eso.']; responses[Math.floor(Math.random() * responses.length)];)

// 8Ball_sub
$(eval
    const responses = ['Todo indica que sí...', 'Sí que sí!', 'Mis fuentes dicen que sí.', 'Puedes confiar en ello.', 'No hay ninguna duda!', 'Estoy muy seguro que SÍ', 'Definitivamente sí!', 'Yes en inglés😎', 'No preguntes eso, es obvio que sí!', 'Tengo la certeza de que sí', 'Me sorprende que lo preguntes, CLARO QUE SÍ', 'Síiiiiii!', 'Por su pollo que sí', 'Afirmativo, pareja', 'Obvio microbio😏']; responses[Math.floor(Math.random() * responses.length)];)


// !tijera
$(eval
    var tu="$(query)";
    var res ="";
    var res_bot ="";
    if (tu == "tijera" || tu== "papel" tu== "piedra") {
        const bank=['tijera','papel','piedra'];
        const win="$(urlfetch https://beta.decapi.me/random/number/0/2)"
        if (win==0) {
            res = "$(user) Yo también elegí " + tu + "😭 Es empate.!"
        } else if ( win==1) {
            if(tu=='tijera'){res_bot="piedra"};
            if(tu=='papel'){res_bot="tijera"};
            if(tu=='piedra'){res_bot="papel"};
            res = "$(user) PERDISTE🥳🥳 yo elegí " + res_bot + "!";
        }else if ( win==2) {
            if(tu=='tijera'){res_bot="papel"};
            if(tu=='papel'){res_bot="piedra"};
            if(tu=='piedra'){res_bot="tijera"};
            res = "$(user) GANASTE!😭😭 yo elegí " + res_bot + "!";
        }
    } else {
        res = "$(user) elige piedra, papel o tijera!!🤔 No sabes jugar?";
    }
    res;)
    //Optimizado
    $(eval var tu="$(query)";var r,t,pl,pd="";var rb=""; t="tijera";pl="papel";pd="piedra";if(tu==t||tu==pl||tu==pd){const w="$(urlfetch https://beta.decapi.me/random/number/0/2)";if(w==0){r="$(user) Yo elegí "+tu+"😭 Es empate.!";}else if(w==1){if(tu==t){rb=pd};if(tu==pl){rb=t};if(tu==pd){rb=pl};r="$(user) PERDISTE🥳 yo elegí "+rb+"!";}else if(w==2){if(tu==t){rb=pl};if(tu==pl){rb=pd};if(tu==pd){rb=t};r="$(user) GANASTE!😭 yo elegí "+rb+"!";}}else{r="$(user) elige piedra, papel o tijera!!🤔";}r;)

// F
$(eval  var res="$(user) dejará este mundo el próximo "; const w=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']; const num="$(urlfetch https://beta.decapi.me/random/number/0/6)"; res+=w[num]+"😭😭😭"; res;)

// F_sub
$(eval  var res="$(query) dejará este mundo el próximo "; const w=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']; const num="$(urlfetch https://beta.decapi.me/random/number/0/6)"; res+=w[num]+"😭😭😭"; res;)

// !teCambio un semaforo
$(eval
var r = [
    'WOW tienes $(query)😍! Yo también',
    'Ijole, eso ahorita no anda valiendo mucho:(',
    'Podrías llevar tu $(query) al basurero, quizás ahi te den algo',
    '$(query) no es de gran valor...',
    'Si no tienes nada mejor que $(query)',
    'Enserio $(user)😑? Me estas intendando vender $(query)?',
    'OMG tienes $(query)🫣 Te lo cambio por 5 diamantes!!',
    'Siempre quise $(query)😍 Te daré un Tesla por ello',
    'Mmm por $(query) te podría dar un pañal',
    'Te cambio $(query) por 100$ DLS',
    'Por $(query) te podría dar una paleta',
    'Aceptarías $(query) por $(query)?',
    '$(user) vuelve cunado tengas algo interesante',
]; r[Math.floor(Math.random() * r.length)];)
$(eval var r=['WOW tienes $(query)! Yo también','$(query) no es de gran valor...','Si no tienes nada mejor que $(query)','Really $(user)? Me intentas vender $(query)?','OMG $(query), Te lo cambio por 5 💎!!','Siempre quise $(query) Te daré un Tesla a cambio','Mmm por $(query) te podría dar un pañal','Te cambio $(query) por 100$ DLS','Por $(query) te podría dar una paleta','Aceptarías $(query) por $(query)?','$(user) vuelve cuando tengas algo interesante']; r[Math.floor(Math.random()*r.length)];)






// TEST
$(eval
    const response = "$(urlfetch https://v2.jokeapi.dev/joke/Any?lang=es)";
    // if(response.joke){
    //     var res=response.joke;
    // }else{
    //     var res=response.setup +" "+response.delivery;
    // }
    JSON.stringify(response);)
