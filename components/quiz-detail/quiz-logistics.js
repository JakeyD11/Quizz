import LogisticsItem from './logistics-item';
import classes from './quiz-logistics.module.css';

function QuizLogistics(props) {
    const { subject, difficulty, question, answer, image } = props;

    return (
        <section className={classes.logistics}>

            <ul className={classes.list}>
                <LogisticsItem>
                    <h1>{subject}</h1>
                </LogisticsItem>
                <LogisticsItem>
                    <h2>{difficulty}</h2>
                </LogisticsItem>
                <div>{question}</div>
                <div>{answer}</div>
            </ul>
        </section>
    );
}

export default QuizLogistics;