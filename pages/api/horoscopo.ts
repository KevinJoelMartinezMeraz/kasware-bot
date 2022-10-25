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

const getHoroscopo = () => {
  const res = [
    'Hoy tendrás un dia no tan malo, realmente puedes ir con calma y disfrutarlo.', 
    'Yo que tú mejor no me entero, hoy definitivamente no es tu dia, será mejor que no hagas planes.', 
    'Recuerdame en que fecha naciste🤔?', 
    'Hoy mejor no salgas, tú vida está en riesgo, nunca fue un mejor momento para quedarte en casa.', 
    'Hoy tendrás la mejor suerte del mundo! Compra boletos de lotería o declarate a tu crush que seguro que saldrás victorios@', 
    'El amor de tu vida ronda cerca, quizás no te haz dado cuenta y tienes que aprestar más atención. No estará ahí para siempre.', 
    'Hoy puede que sufra tu corazoncito😣 alguien a quien aprecias te hará mucho daño.', 
    'Hoy conocerás a alguien importante, manten los ojos abiertos y no vayas a arruinar esta oportunidad.',
    'Hoy te sentirás muy romántic@, aunque también con muchas dudosas, ten cuidado de hacia donde diriges tu atención.',
    'El dinero y la fortuna hoy te sonrrien, es un buen momento para inicar un negocio o jugar un momento en el casino.',
    'El aire es un recurso fundamental para el humano, y hoy debes aprevecharlo al máximo porque se vendrán grandes jornadas de trabajo.',
    'Es hora de retomar aquello que haz abandonado, ya lo haz aplazado demaciado y lo sabes.',
    'Tendrás unos dias demaciados productivos, pero intenta no sobrecargarte.',
    'Esa persona está esperando que la llames, solo recuerda ir despacio y no llevar las cosas de manera precipitada.',
    'Se viene una semana de malas deciciones, si tienes una reunión importante, lo mejor será que la posterges porque podrías meter la pata.',
    'Venus se ha aliniado con el planeta tienrra, hoy todo el universo se ha unido para favorecerse.',
    'Haz trabajado demaciado y lo sabes, reucerda que un descanso siempre viene bien.',
    'Comienza para ti un nuevo ciclo, en el que vivirás un cambio, una renovación y podrás sentirlo en cuanto abras los ojos.',
    'Comparte tu bienestar con quienes te rodean, en especial a todas aquellas personas que a diario están pendientes de ti.',
    'Puedes sentirte hoy satisfech@, porque estás en un inmejorable momento laboral.',
    'Si has conocido recientemente y te interesa, cuídale porque te dará mucho cariño.',
    'Evita encerrarte tanto en ti mism@, ábrete al mundo y a las nuevas experiencias.',
    'No es momento de probar cosas nuevas, tampoco en el amor.',
    'Si estás dudando mucho con un tema en especifico, no lo hagas, no es el momento de tomar riesgos.',
    'Hoy pasarás un día entrañable, y puede que también bastante divertido.',
    'Si recientemente has pasado por una etapa de soledad y de nostalgia, ahora el amor te ronda y la persona que llegue viene para quedarse.',
    'Has de empezar hoy a mirar las cosas desde otras perspectivas, no te quedes sólo con la tuya, escucha las opiniones de los demás.'
  ];
  return res[Math.floor(Math.random() * res.length)];
};

// 
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const user = parseNightbotUser(req.headers['nightbot-user'] as string);
  const h=getHoroscopo();
  res.status(200)
    .send(h);
}
      