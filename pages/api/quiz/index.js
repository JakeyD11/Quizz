import { getFeaturedQuiz, getFilteredQuiz } from '../../../helpers/api-util';

export default async function useHandler(req, res) {
    const {
        query: { category, difficulty },
        method,
    } = req;

    let quizList = [];
    switch (method) {
        case 'GET':
            if (category || difficulty) {
                quizList = await getFilteredQuiz(category, difficulty);
                return res.status(200).send(quizList);
            }
            quizList = await getFeaturedQuiz();
            return res.status(200).send(quizList);
        case 'POST':
        // @TODO
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}