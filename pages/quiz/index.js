import { getFeaturedQuiz } from '../../helpers/api-util'
import QuizList from '../../components/quiz/quiz-list'
import Head from 'next/head';
import Fragment from 'react';
import { useRouter } from 'next/router';
import QuizSearch from '../../components/quiz/quiz-search';

function AllQuizPage(props) {

    const router = useRouter();
    const { quiz } = props;


    function findQuizHandler(subject, difficulty) {
        const fullPath = `/events/${subject}/${difficulty}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <Head>
                <title>Schwizz</title>
                <meta
                    name='description'
                    content='Find a lot of great quiz...'
                />
            </Head>
            <QuizSearch onSearch={findQuizHandler} />
            <QuizList items={quiz} />
        </Fragment>
    )
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

export default AllQuizPage;