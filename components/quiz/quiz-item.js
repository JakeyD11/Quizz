import classes from './quiz-item.module.css';
import Button from '../ui/button';

function QuizItem(props) {
    // const { title, image, date, location, id } = props;
    const { subject, difficulty, question, image, id } = props;

    const exploreLink = `/quiz/${id}`;

    return <li className={classes.item}>
        <img src={'/' + image} alt={subject} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{subject}</h2>
                <div className={classes.date}>
                    <h2>{difficulty}</h2>
                </div>
                <div className={classes.address}>
                    <p>{question}</p>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>Take Quiz</Button>
            </div>
        </div>
    </li>


}

export default QuizItem;