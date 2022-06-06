import type { NextPage } from 'next'
import Header from '../component/header'
import Paper from '../component/paper'

const Reinforcementlearning: NextPage = ({articles}: any) => {
    return(
        <div>
            <Header />
            <h2 style={{marginBottom: `0.5rem`, padding: `1rem`}}>News about Reinforcement Learning</h2>
            {
                articles.map((article: any, index: any) => (
                <>
                    <Paper
                    key={index}
                    title={article.title}
                    description={article.description}
                    published={article.published}
                    url={article.url}
                    tags={article.tags}
                    />
                </>
                ))
            }
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://api:8080/get?tag=reinforcementlearning`)
    const data = await res.json()

    var articles: any = []
    data.forEach((article: any) => {
        if (article.type_of === 'article') {
            articles.push({
                title: article.title,
                description: article.description,
                published: article.published_timestamp,
                url: article.url,
                tags: article.tags,
            })  
        }
    })

    return {
        props: {articles},
    }
}


export default Reinforcementlearning
