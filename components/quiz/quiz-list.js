import QuizItem from "./quiz-item";
import classes from './quiz-list.module.css';

function QuizList(props) {
    const { items } = props;
    return <ul className={classes.list}>
        {items.map(quiz => <QuizItem key={quiz._id} id={quiz._id} category={quiz.category} difficulty={quiz.difficulty} summary={quiz.summary} length={quiz.questions?.length || 0} title={quiz.title} />)}
    </ul>

}


export default QuizList;