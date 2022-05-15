import { useRef } from 'react';
import Button from '../ui/button';
import classes from './quiz-search.module.css';

function QuizSearch(props) {
    const subjectInputRef = useRef();
    const difficultyInputRef = useRef();

    function submitHandler(quiz) {
        quiz.preventDefault();

        const selectedSubject = subjectInputRef.current.value;
        const selectedDifficulty = difficultyInputRef.current.value;

        props.onSearch(selectedSubject, selectedDifficulty);

    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor='subject'>Subject</label>
                <select id='subject' ref={subjectInputRef}>
                    <option value='Maths'>Maths</option>
                    <option value='English'>English</option>
                    <option value='Science'>Science</option>
                    <option value='IT'>IT</option>
                    <option value='Spanish'>Spanish</option>
                    <option value='French'>French</option>
                    <option value='Geography'>Geography</option>
                    <option value='Drama'>Drama</option>
                    <option value='History'>History</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor='difficulty'>difficulty</label>
                <select id='difficulty' ref={difficultyInputRef}>
                    <option value='Easy'>Easy</option>
                    <option value='Medium'>Medium</option>
                    <option value='Hard'>Hard</option>


                </select>
            </div>
        </div>
        <Button>Find Quiz</Button>
    </form>

}

export default QuizSearch;