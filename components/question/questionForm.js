import { useState } from 'react';
import { useRouter } from 'next/router';

function CreateQuestion() {
    const router = useRouter();
    const [content, setContent] = useState();
    const [answers, setAnswers] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();



    function handleChangeContent(quiz) {
        setContent(quiz.target.value);
    }

    function handleChangeAnswers(quiz) {
        const answers = [];

        answers.push(quiz.target.value)
        console.log(answers)
        setAnswers
    }


    function submitHandler(event) {
        event.preventDefault();

        const quiz = {
            content,
            answers,
            correctAnswer,

        };

        fetch('/api/quiz', {
            method: 'POST',
            body: JSON.stringify(quiz),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(() => {
                router.push('/quiz');
            });
    }
    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <h2>Create A new Question</h2>
            <div>
                <div className={classes.control}>
                    <label htmlFor='content'> Question:</label>
                    <textarea type='text' cols={40} rows={5} required onChange={handleChangeContent} value={content} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='answer'>Quiz Subject</label>
                    <input type='text' name='answer' required onChange={handleChangeAnswers} value={answers} />
                    <input type='text' name='answer' required onChange={handleChangeAnswers} value={answers} />
                    <input type='text' name='answer' required onChange={handleChangeAnswers} value={answers} />
                    <input type='text' name='answer' required onChange={handleChangeAnswers} value={answers} />
                </div>
            </div>
            <div className={classes.action}>
                <button type='submit'>
                    Submit
                </button>
            </div>

        </form>
    );
}
export default CreateQuiz;
