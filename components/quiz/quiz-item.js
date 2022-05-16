import classes from './quiz-item.module.css';
import Button from '../ui/button';

function QuizItem(props) {

    const { subject, difficulty, id } = props;

    return <li className={classes.item}>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{subject}</h2>
                <div className={classes.date}>
                    <h2>{difficulty}</h2>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={`/quiz/${id}`}>Details</Button>
            </div>
        </div>
    </li>


}

export default QuizItem;