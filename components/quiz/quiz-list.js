import QuizItem from "./quiz-item";
import classes from './quiz-list.module.css';

function QuizList(props) {
    const { items } = props;
    return <ul className={classes.list}>
        {items.map(quiz => <QuizItem key={quiz._id} id={quiz._id} subject={quiz.subject} difficulty={quiz.difficulty} summary={quiz.summary} image={quiz.image} />)}
    </ul>

}
export default QuizList;