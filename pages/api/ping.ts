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
const parseMessage = (userParams: string) => {
    const params = new URLSearchParams(userParams);
    const res= Object.entries(params);
    console.log("🚀 ~ file: ping.ts ~ URLSearchParams", res)

    return res;
};

// export default async function (req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).send('Hello!');
// }

// `Hello! Your username3 is ${user.displayName} and the current channel is ${channel.displayName}. anmd you send $(query) `
export default async function (req: NextApiRequest, res: NextApiResponse) {
    const channel = parseNightbotChannel(
      req.headers['nightbot-channel'] as string
      );
    const query=parseMessage(
      req.headers['nightbot-response-url'] as string
    );
    

    const head=req.query.value
    console.log("🚀 ~ file: ping.ts ~ line 37 ~ req", head)
    // console.log('[content-Type]',req.headers['content-type']);
    
    res.status(200)
      .send('Tu mandaste '+head);
}
      