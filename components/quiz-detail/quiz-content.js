import classes from './quiz-content.module.css';

function QuizContent(props) {
    return (
        <section className={classes.content}>
            {props.children}
        </section>
    );
}

export default QuizContent;