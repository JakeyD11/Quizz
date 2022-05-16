import classes from './quiz-item.module.css';
import Button from '../ui/button';

function QuizItem(props) {

    const { category, difficulty, id, summary, title, length } = props;

    return (
        <div className={classes.wrapper}>
            <div>
                <h1 className={classes.title}>{title}</h1>
                <h2 className={classes.title}>Subject: {category}</h2>
                <h2 className={classes.title}>Difficulty: {difficulty}</h2>
                <p className={classes.summary}>About: {summary}</p>
                <p className={classes.amount}>Number of Questions: {length}</p>
            </div>
            <div className={classes.actions}>
                <Button link={`/quiz/${id}`}>Details</Button>
            </div>
        </div>
    )


}

export default QuizItem;