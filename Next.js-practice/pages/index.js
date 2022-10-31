// domain.com/

import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1598px-Stadtbild_M%C3%BCnchen.jpg',
        adress: 'Some Adress  6, 12345, Some City',
        description: 'This is the first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1598px-Stadtbild_M%C3%BCnchen.jpg',
        adress: 'Some Adress  4, 12345, Some City',
        description: 'This is the second meetup!'
    }
]

const HomePage = () => {

    return (

        <MeetupList meetups={DUMMY_MEETUPS} />

    );
}

export default HomePage