import { getQuizById, getFeaturedQuiz } from '../../helpers/api-util'
import { Fragment } from 'react';
import QuizSummary from '../../components/quiz-detail/quiz-summary';
import QuizLogistics from '../../components/quiz-detail/quiz-logistics';
import QuizContent from '../../components/quiz-detail/quiz-content'

import Head from 'next/head';


function QuizDetailPage(props) {
    const quiz = props.selectedQuiz;

    if (!quiz) {
        return <div className='center'><p> Loading...!</p></div>
    }

    return (
        <Fragment>
            <Head>
                <title>{quiz.title}</title>
                <meta
                    name='description'
                    content='amazing Quiz...'
                />
            </Head>
            <QuizSummary title={quiz.title} />
            <QuizLogistics subject={quiz.subject} difficulty={quiz.difficulty} image={quiz.image} ImageAlt={quiz.title} />
            < QuizContent >
                <p>{quiz.description}</p>
            </QuizContent>

        </Fragment >

    )
}

export async function getStaticProps(context) {
    const quizId = context.params.quizId;

    const quiz = await getQuizById(quizId);
    return {
        props: {
            selectedQuiz: quiz
        },
        revalidate: 30
    };
}

export async function getStaticPaths() {

    const quiz = await getFeaturedQuiz();
    const paths = quiz.map(quiz => ({ params: { quizId: quiz.id } }));
    return {
        paths: paths,
        fallback: 'blocking'
    };
}

export default QuizDetailPage;