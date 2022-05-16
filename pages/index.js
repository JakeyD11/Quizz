import Button from "../components/ui/button";
import { Fragment } from 'react';
import classes from './index.module.css';
import QuestionPage from "../components/question/questionList";

function HomePage() {
  return (
    <Fragment>

      <div >
        <h1 className={classes.welcome} >Welcome to the Quiz manager</h1>

      </div>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <img className={classes.image} src='/images/quiz.jpg' />
          <p className={classes.text}>Your one stop place for Quiz content</p>
        </div>

        <div className={classes.content}>
          <img className={classes.image} src='/images/subjects.jpg' />
          <p className={classes.text}>Find quizzes tailored for every subject</p>
        </div>

        <div className={classes.content}>
          <img className={classes.image} src='/images/graduation.jpg' />
          <p className={classes.text}>New quizzes added regularly</p>
        </div>
      </div>
      <div className={classes.content}>
        <p className={classes.text}>Please log in to continue...</p>
        <Button link='/auth'>Log in</Button>
      </div>

      <QuestionPage />


    </Fragment >
  )
}

export default HomePage;