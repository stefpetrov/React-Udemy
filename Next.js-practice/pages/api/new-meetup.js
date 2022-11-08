//    /api/new-meetup
//    POST /api/new-meetup
//   server side code here

import { MongoClient } from "mongodb"



async function handler(req, res) {
    if (req.mehtod === 'POST') {
        const data = req.body

        const { title, image, address, description } = data

        const client = await MongoClient.connect('mongodb+srv://stefan:Ss265849@cluster0.jszpofd.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        client.close()

        // now we send a response

        res.status(201).json({ message: 'Meetup inserted!' })

    }
}

export default handler