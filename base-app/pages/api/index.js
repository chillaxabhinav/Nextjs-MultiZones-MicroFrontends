import nc from 'next-connect';
import cors from 'cors';


const handler = nc()
                .use(cors())
                .get((req, res) => {
                    res.json({message : 'Get'});    
                })
                .post((req, res) => {
                    res.json({message : 'POST'})
                })


export default handler;