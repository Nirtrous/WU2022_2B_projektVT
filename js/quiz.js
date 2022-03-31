
// quiz


const answerFields = document.querySelectorAll('.answer-field');
const finalAnswers = document.querySelectorAll('.final_answers')
// const correctAnswers = new Array(answerFields.length).fill(undefined)


for (let fielIndex in answerFields) {
    const answerField = answerFields.item(fielIndex)
    for (let btnIndex in answerField.children) {
        const answerBtn = answerField.children.item(btnIndex)
        answerBtn.addEventListener('click', () => {
            answerField.classList.add('answered')
            
            if (answerBtn.classList.contains('correct-answer')) {
                finalAnswers.item(fielIndex).classList.add('correct-answer')
            } else {
                finalAnswers.item(fielIndex).classList.add('false-answer')
            }
        });
    }
}

