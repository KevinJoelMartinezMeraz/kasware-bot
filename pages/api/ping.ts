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
    const resParam= Object.entries(req.headers['nightbot-response-url']);
    const headerUrl=req.headers['nightbot-response-url'] as string;
    // console.log("🚀 ~ file: ping.ts ~ URLSearchParams", )

    const head=Object.entries(req.headers)
    // console.log("🚀 ~ file: ping.ts ~ line 37 ~ req", req.headers)
    // console.log('[content-Type]',req.headers['content-type']);
    
  
    const user = parseNightbotUser(req.headers['nightbot-user'] as string);
    const r=JSON.stringify(req.headers)
      const response =`Your URL; ${headerUrl} ||  HEAD is: ${head.join('-')} `;
    res.status(200)
      .send(response.slice(0,399));
}
      