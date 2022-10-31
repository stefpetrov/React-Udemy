//    /api/new-meetup
//    POST /api/new-meetup

// server side code here

function handler(req, res) {
    if (req.mehtod === 'POST') {
        const data = req.body

        const { title, image, address, description } = data
        

    }
}

export default handler