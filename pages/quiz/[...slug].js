import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';
import { getFilteredQuiz } from '../../helpers/api-util';
import QuizList from '../../components/quiz/quiz-list';
import ResultsTitle from '../../components/quiz/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';


function FilteredQuiz(props) {
    const [loadedQuiz, setLoadedQuiz] = useState();
    const router = useRouter();

    const filterData = router.query.slug;

    const { data, error } = useSWR(
        'https://events-316a2-default-rtdb.europe-west1.firebasedatabase.app/quiz.json'
    );

    useEffect(() => {
        if (data) {
            const quiz = [];

            for (const key in data) {
                quiz.push({
                    id: key,
                    ...data[key],
                });
            }

            setLoadedQuiz(quiz);
        }
    }, [data]);

    let pageHeadData = (
        <Head>
            <title>Filtered Quiz</title>
            <meta name='description' content={`A list of filtered Quiz.`} />
        </Head>
    );

    if (!loadedQuiz) {
        return (
            <Fragment>
                {pageHeadData}
                <p className='center'>Loading...</p>
            </Fragment>
        );
    }

    if (!subject || !difficulty) {

        return <Fragment>
            <ErrorAlert><p> Invalid Parameters!</p></ErrorAlert>
            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>

        </Fragment>
    }

    const filteredQuiz = loadedQuiz.filter((quiz) => {

    })


    if (!filteredQuiz || filteredQuiz.length === 0) {
        return <Fragment>
            <ErrorAlert><p> No events found!</p></ErrorAlert>
            <div className="center">
                <Button link='/events'>Show All Quiz</Button>
            </div>

        </Fragment>
    }


    return (
        <Fragment>
            <Head>
                <title>Filtered Quiz</title>
                <meta
                    name='description'
                    content='All Quiz by search'
                />
            </Head>
            <ResultsTitle subject={subject} difficulty={difficulty} />
            <QuizList items={filteredQuiz} />

        </Fragment>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;

    const [subject, difficulty] = params.slug;

    if (!subject || !difficulty)
        return {
            hasError: true,
        };

    const filteredQuiz = await getFilteredQuiz({
        subject,
        difficulty,
    });

    console.log(filteredQuiz);

    return {
        quiz: {
            data: filteredQuiz,
            subject: numSubject,
            difficulty: numDifficulty,
        }
    };
}

export default FilteredQuiz;