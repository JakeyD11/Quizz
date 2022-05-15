import classes from './quiz-summary.module.css';

function QuizSummary(props) {
    const { title } = props;

    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default QuizSummary;