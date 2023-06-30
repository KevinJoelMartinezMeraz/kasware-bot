// ping.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";

async function translate(encodedParams:any) {
    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '545a391f9dmsh0d5a24c76dfbfa6p13ecedjsn5b9c101dfc30',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
        };
    const response = await axios.request(options);
    // console.log("🚀 ~ file: translate_es.ts:19 ~ translate ~ response:", response)
    return response.data.data.translations[0].translatedText;
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const query=req.query.value;    
    const encodedParams = new URLSearchParams();
    var response='';
    if (query) {
        encodedParams.append("q", query.toString());
        encodedParams.append("target", "es");
        encodedParams.append("source", "en");
        response=await translate(encodedParams);
    }else{
        response='Send a message to translate.';
    }
    // console.log("🚀 ~ file: translate_es.ts:24 ~ query:", response)

    res.status(200)
      .send(response);
}
      