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
                <title>{quiz.subject}</title>
                <meta
                    name='description'
                    content='amazing Quiz...'
                />
            </Head>
            <QuizLogistics subject={quiz.subject} difficulty={quiz.difficulty} image={quiz.image} ImageAlt={quiz.title} />
            < QuizContent >
                <p>{quiz.description}</p>
            </QuizContent>

        </Fragment >

    )
}

export async function getServerSideProps(context) {
    const quizId = context.params.quizId;

    let quiz = await getQuizById(quizId);
    quiz = JSON.parse(JSON.stringify(quiz));
    return {
        props: {
            selectedQuiz: quiz,
        },
    };
}


export default QuizDetailPage;