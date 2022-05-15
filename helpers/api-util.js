export async function getAllQuiz() {
    const response = await fetch('https://events-316a2-default-rtdb.europe-west1.firebasedatabase.app/quiz.json');
    const data = await response.json();

    const quiz = [];

    for (const key in data) {
        quiz.push({
            id: key,
            ...data[key]
        });
    }

    return quiz;
}

export async function getFeaturedQuiz() {

    const allQuiz = await getAllQuiz();
    return allQuiz.filter((quiz) => quiz.isFeatured);
}

export async function getQuizById(id) {
    const allQuiz = await getAllQuiz();
    return allQuiz.find((quiz) => quiz.id === id);
}

export async function getFilteredQuiz(data, subject, difficulty) {

    return data
        .filter(x => x.difficulty === difficulty)
        .filter(y => y.subject === subject)

};