export interface IquizzQuestion{
    ID:number
    quiestion: string
    answers: IAnswer[],
    type: string
}
export interface IAnswer {
    ID:number
    answer:string
    isCorrect:boolean
}
export const testQuizzQuestion = [
    {
        ID:1,
        quiestion: "question 1",
        answers: [
            { ID:1,answer:"answer.1",isCorrect:true},
            { ID:2,answer:"answer.2",isCorrect:false},
            { ID:3,answer:"answer.3",isCorrect:false},
        ],
        type: 'bison'
    },
    {
        ID:2,
        quiestion: "question 2",
        answers: [
            { ID:4,answer:"answer.1",isCorrect:false},
            { ID:5,answer:"answer.2",isCorrect:true},
            { ID:6,answer:"answer.3",isCorrect:false}
        ],
        type: 'eagle'
    },
    {
        ID:3,
        quiestion: "question 3",
        answers: [
            { ID:7,answer:"answer.1",isCorrect:false},
            { ID:8,answer:"answer.2",isCorrect:false},
            { ID:9,answer:"answer.3",isCorrect:true}
        ],
        type: 'bear'
    },
    {
        ID:3,
        quiestion: "question 3",
        answers: [
            { ID:7,answer:"answer.1",isCorrect:false},
            { ID:8,answer:"answer.2",isCorrect:false},
            { ID:9,answer:"answer.3",isCorrect:true}
        ],
        type: 'turtle'
    }
]
