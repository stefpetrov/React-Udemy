// domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {

    async function addMeetupHandler(enteredMeetupData) {

        const response = await fetch('/api/new-meetup', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enteredMeetupData)
        })

        const data = await response.json()
        console.log(data)
    }


    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage