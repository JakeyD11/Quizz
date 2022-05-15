
import LogisticsItem from './logistics-item';
import classes from './quiz-logistics.module.css';

function QuizLogistics(props) {
    //   const { date, address, image, imageAlt } = props;
    const { subject, difficulty, question, answer, image } = props;


    return (
        <section className={classes.logistics}>
            <div className={classes.image}>
                <img src={`/${image}`} alt={imageAlt} />
            </div>
            <ul className={classes.list}>
                <LogisticsItem>
                    <h1>{subject}</h1>
                </LogisticsItem>
                <LogisticsItem>
                    <h2>{difficulty}</h2>
                </LogisticsItem>
                <div>
                    {question}
                </div>
                <div>
                    {answer}
                </div>
            </ul>
        </section>
    );
}

export default QuizLogistics;
