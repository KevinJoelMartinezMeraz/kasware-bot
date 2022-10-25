// ping.ts

import { NextApiRequest, NextApiResponse } from 'next';

const parseNightbotChannel = (channelParams: string) => {
  const params = new URLSearchParams(channelParams);

  return {
      name: params.get('name'),
      displayName: params.get('displayName'),
      provider: params.get('provider'),
      providerId: params.get('providerId')
  };
};

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

const getAnsware = (user: string,channel: string,query: string) => {
  const res = [
    `WOW tienes ${query}😍! Yo también :/`,
    'Ijole, eso ahorita no anda valiendo mucho:(',
    `Podrías llevar tu ${query} al basurero, quizás ahi te den algo.`,
    `${query} no es de gran valor...`,
    `Si no tienes nada mejor que ${query}`,
    `Enserio ${user}😑? Me estas intendando vender ${query}?`,
    `OMG tienes ${query}🫣 Te lo cambio por 5 diamantes!!`,
    `Siempre quise ${query}😍 Te daré un Tesla por ello`,
    `Mmm por ${query} te podría dar un pañal`,
    `Te cambio ${query} por 100$ DLS.`,
    `Por ${query} te podría dar una piedra, aceptalo o dejalo.`,
    `Aceptarías ${query} por ${query}?🤔`,
    `${user} vuelve cuando tengas algo interesante...`,
    `${query} es lo último de moda😍 Te daré una 20 casas!!`,
    `En serio me llamaste solo por ${query}?`,
    `${query} por 1000 Millones de DLS, aceptas?`,
    `Por ${query} lo único que te puedo ofrecer es el guante de Thanos.`,
    `Te doy un calzón manchado... Creo que es justo por ${query}`,
    `Te cambio ${query} por una lata de frijoles podrida`,
    `Te cambio ${query} por un bote lleno de pedos`,
    `Te cambio ${query} por una foto de ${channel} en calzones👀`,
    `Te cambio ${query} por una cuchufleta`,
    `Te cambio ${query} por un chicle seco`,
    `${query}? Wow nunca nadie me había regalado nada😍 Gracias!`,
    `Te cambio ${query} por una pijama en forma de unicornio`,
    `Te cambio ${query} por el whats de tu crush👀`,
    `Te cambio ${query} por el nuevo !phone`,
    `Te cambio ${query} por una botella con refresco de piña🌚`,
    `Te cambio ${query} por una hamburguesa mordida`,
    `Te cambio ${query} por una bola de pelos(no preguntes de donde la conseguí)`,
    `Te cambio ${query} por un clón perfecto de ${user}`,
    `Te cambio ${query} por un clón perfecto de ${channel}`,
    `${user} de dónde conseguiste ${query}???`,
    `${query}? Eso lo usan psicópatas`,
  ];
  return res[Math.floor(Math.random() * res.length)];
};

// 
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const channel = parseNightbotChannel(req.headers['nightbot-channel'] as string);
  const user = parseNightbotUser(req.headers['nightbot-user'] as string);
  const query=req.query.value;
  var h='';
  if (query) {
    h=getAnsware(user.displayName,channel.displayName,query.toString());
  }else{
    h=`${user.displayName} Tienes que decirme que quieres cambiarme.`
  }
  res.status(200)
    .send(h);
}
      