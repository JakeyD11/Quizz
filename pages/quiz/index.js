import { getFeaturedQuiz } from '../../helpers/api-util'
import QuizList from '../../components/quiz/quiz-list'
import Head from 'next/head';


function HomePage(props) {

    return <div>
        <Head>
            <title>Schwizz</title>
            <meta
                name='description'
                content='Find a lot of great quiz...'
            />
        </Head>

        <QuizList items={props.quiz} />
    </div>
}

export async function getStaticProps() {
    const featuredquiz = await getFeaturedQuiz();

    return {
        props: {
            quiz: featuredquiz
        },
        revalidate: 1800
    }
}

export default HomePage;