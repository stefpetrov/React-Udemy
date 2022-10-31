import { useRouter } from 'next/router'

// domain.com/news/something-important
const DetailPage = () => {
    const router = useRouter()

    const newsId = router.query.newsId
    // here we have 'something-important'


    return <h1>The Detail Page</h1>

}

export default DetailPage