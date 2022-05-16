import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
    const { subject, difficulty } = props;

    return (
        <section className={classes.title}>
            <h1>{subject} Quiz - {difficulty} mode</h1>
            <Button link='/quiz'>Show all Quiz</Button>
        </section>
    );
}

export default ResultsTitle;
