import Quiz from "../../models/quiz";

function QuestionPage(props) {

    return (

        <div>
            <div>
                <h1>{Quiz.title}</h1>
                <h2>{Quiz.difficulty}</h2>
            </div>
            <div>
                <p>{quiz.content}</p>
            </div>
            <div>
                <input type='radio' value="" name='' /> Answer 1
                <input type='radio' value="" name='' /> Answer 2
                <input type='radio' value="" name='' /> Answer 3
                <input type='radio' value="" name='' /> Answer 4

            </div>
        </div>
    )

}

export default QuestionPage;