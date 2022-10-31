//domain.com/sometext


import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetUpDetails = () => {


    <MeetupDetail
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1598px-Stadtbild_M%C3%BCnchen.jpg" alt="A First Meetup'
        title='A First Meetup'
        address='Some Street 5, Some City'
        description='The Meetup description' />
}

export async function getStaticPaths() {
    // we need this func to tell nextJS for which dynamic parameters value to pre-generate the page
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId // meetupId, because this is the identifier [meetupId]

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1598px-Stadtbild_M%C3%BCnchen.jpg" alt="A First Meetup',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'The Meetup description'
            }
        }
    }

}

export default MeetUpDetails