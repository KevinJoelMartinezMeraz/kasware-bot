// ping.ts

import { NextApiRequest, NextApiResponse } from 'next';
const parseNightbotUser = (userParams: string) => {
  const params = new URLSearchParams(userParams);

  return {
      name: params.get('name'),
      displayName: params.get('displayName'),
      provider: params.get('provider'),
      providerId: params.get('providerId'),
      userLevel: params.get('userLevel')
  };
};

const getAnsware = (user: string) => {
  const res = [
    'Tantas estrellas en el espacio y ninguna brilla como tú.', 
    'Me gusta el café, pero prefiero tener-té.', 
    'No eres Google, pero tienes todo lo que yo busco.', 
    'No sabía qué ponerme hoy, y me puse a pensar en ti.', 
    'No eres lo único en este mundo, pero sí en mi corazón.', 
    'Eres la canción que hace sonar mi guitarra.', 
    'Si lo bonito fuera pecado, tú no tendrías el perdón de Dios.', 
    'Ni en clase de matemáticas me perdía tanto como en tu mirada.',
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
    'Cuando te vi me dieron ganas de estudiar ecologista. Para plantarte un beso😍',
    '¿Te gusta Star Wars? Porque a mí me gusta Star contigo.',
    'Hola, me llamo '+user+', pero tú puedes llamarme esta noche.',
    'Eres como la chancla de mi madre: te veo venir y se me acelera el corazón.',
    '¿Vives a menudo por aquí?',
    'Bueno, aquí estoy, ¿cuáles eran tus otros 2 deseos?',
    'Oye, no sé cómo es eso de besar, ¿me ayudas?',
    'Me das tu nombre completo? Estoy haciendo mi carta para Santa Clause',
    '¿Qué te parece si nos damos un tiempo? Por ejemplo, tú me das tu presente y yo te doy mi futuro.',
    'Quién fuera bizco para verte 2 veces.',
    'No soy un perro, pero guau contigo.',
    'Oye, ¿te presentas a las elecciones? Porque eres un partidazo.',
    '¿Te importa que te siga hasta casa? Es que mi madre siempre me decía que persiguiera a mis sueños.',
    'Quería llevarte al cine, pero no permiten entrar con dulces.',
    'Me tengo que comprar un diccionario porque, desde que te vi, me he quedado sin palabras.',
    'Se me da fatal el inglés: confundí el pasado simple con un futuro contigo.',
    'No te sientes con cansancio? Por estar paseando todo el día en mi cabeza.',
    'Hola, perdona, ¿en qué parada de metro debo bajarme para llegar a gustarte?',
    'Creo que mi señal está fallando, porque no me llegan tus respuestas de mis historias del Insta.',
    'Ya compré el traje de astrounauta. Para cuando me hagas un espacio en tu vida.',
    'Contigo jamás jugaría a las escondidas. Es que eres una persona dificil de encontrar.',
    'Me avisas cuando llegues. A sentir algo por mi.',
    'Dónde puedo conseguir una mesa de ajedrez que traiga una reina como usted.',
    'Quisiera que fueras la reina de mi tablero de Ajedrez, para colocarte en la posición que yo quiera.',
    'Te mereces una tarjeta amarilla. Por la falta que me haces.',
    'Oye eres pokemon? Pokemencantas😏',
  ];
  return res[Math.floor(Math.random() * res.length)];
};

// 
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const user = parseNightbotUser(req.headers['nightbot-user'] as string);
  const h=getAnsware(user.name);
  res.status(200)
    .send(h);
}
      