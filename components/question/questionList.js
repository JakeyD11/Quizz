import QuestionItem from "./questionItem";
import { useState, useEffect } from 'react';

const QuestionList = props => {
    const [submitted, setSubmitted] = useState({});
    const [questionItems, setQuestionItems] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        // FETCH THE QUIZ DETAILS IN HERE??
        const questions = data.map(q => (
            <QuestionItem
                key={q._id}
                id={q._id}
                content={q.content}
                answers={q.answers}
                toggleNext={toggleNext}
                togglePrev={togglePrev}
                submittedValue={submitted[q._id]}
            />
        ));
        setQuestionItems(questions);
    }, []);

    function toggleNext(id, value) {
        setSubmitted(st => ({
            ...st,
            [id]: value,
        }));
        setCurrentQuestion(st => st + 1);
    }

    function togglePrev() {
        if (currentQuestion - 1 > -1) {
            setCurrentQuestion(st => st - 1);
        }
    }

    return <div>{questionItems.length && questionItems[currentQuestion]}</div>;
};

export default QuestionList;