// ping.ts

import { NextApiRequest, NextApiResponse } from 'next';

function getRandomArbitrary(min:number, max:number) {
    // find diff
    let difference = max - min;    

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

// 
export default async function (req: NextApiRequest, res: NextApiResponse) {
  
  const min=parseInt(req.query.min.toString());
  const max=parseInt(req.query.max.toString());
  // var response=0;
  try {
    const response=getRandomArbitrary(min, max);
    res.status(200).send(Math.floor(response));
    
  } catch (error) {
    const response=`Ingresa numero valido`;
    res.status(200).send(response);
    
  }
}
      