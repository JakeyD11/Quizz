import { useState } from 'react';
import classes from './create.module.css';

function CreateQuiz() {
    const [category, setCategory] = useState();
    const [difficulty, setDifficulty] = useState('easy');
    const [summary, setSummary] = useState();
    const [title, setTitle] = useState();
    const [featured, setFeatured] = useState('notFeatured');

    function handleChangeTitle(quiz) {
        setTitle(quiz.target.value);
    }

    function handleChangeCategory(quiz) {
        setCategory(quiz.target.value);
    }

    function handleChangeDifficulty(quiz) {
        setDifficulty(quiz.target.value);
    }

    function handleChangeSummary(quiz) {
        setSummary(quiz.target.value);
    }
    function handleChangeFeatured(quiz) {
        setFeatured(quiz.target.value);
    }

    function submitHandler(event) {
        event.preventDefault(); // this keeps the form from trying to submit itself
        // which will cause the page to reload
        const quiz = {
            category,
            difficulty,
            summary,
            title,
            featured
        }
        // @TODO --- we'll come back and add the fetch
        // functionality later to call the api to 
        // actually create and save the quiz
        console.log(quiz);
        // Last step of this submit handler is to
        // clear the inputs
        setCategory('');
        setDifficulty('');
        setSummary('');
        setTitle('');
        setFeatured('');
    }
    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <h2>Create A new Quiz</h2>
            <div>
                <div className={classes.control}>
                    <label htmlFor='title'> Quiz Title</label>
                    <input type='text' name='title' required onChange={handleChangeTitle} value={title} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='catagory'>Quiz Subject</label>
                    <input type='text' name='catagory' required onChange={handleChangeCategory} value={category} />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='difficulty'>Quiz Difficulty</label>
                <select name='difficulty' required onChange={handleChangeDifficulty} value={difficulty}>
                    <option value='easy'>easy</option>
                    <option value='medium'>medium</option>
                    <option value='hard'>hard</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor='featured'>Featured Quiz?</label>
                <select name='featured' required onChange={handleChangeFeatured} value={featured}>
                    <option value='true'>featured</option>
                    <option value='false'>notfeatured</option>

                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor='summary'>Quiz Summary</label>
                <textarea type='text-area' cols={40} rows={5} name='summary' required onChange={handleChangeSummary} value={summary} />
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
