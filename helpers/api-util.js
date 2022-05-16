import Quiz from '../models/Quiz';
import Submission from '../models/Submission';
import Question from '../models/Question';
import { connectToDatabase } from '../lib/db';


export async function getAllQuiz() {
    await connectToDatabase();

    const data = await Quiz.find();

    return data;
}

export async function getFeaturedQuiz() {
    await connectToDatabase();
    const data = await Quiz.find({ featured: true });

    return data;
}

export async function getQuizById(id) {
    await connectToDatabase();
    let data = await Quiz.findById(id);
    if (!data) {
        return null;
    }
    data.questions = await Question.find({ quizId: id });
    return data;
}

export async function getFilteredQuiz(category, difficulty) {
    await connectToDatabase();
    const data = await Quiz.find({ category, difficulty });
    return data;
}

