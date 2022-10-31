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

const HomePage = (props) => {


    return <MeetupList meetups={props.meetups} />
}

// you can run server side code here
// fetch data from API
// the page is pre-generated for every incoming request

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS

//         }
//     }
// }

export async function getStaticProps() {
    // you can run server side code here
    // we fetching data from API here insted of doing this in the component 
    // now data is not fetched on the second rerendered cycle, but during the build process
    //  GREAT FOR SEO, one of the main feature in NextJS(Data fetching for prerendering!)
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}

export default HomePage