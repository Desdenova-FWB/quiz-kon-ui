export interface IquizzQuestion{
    __id:string
    questionText: string
    answers: IAnswer[]
}
export interface IAnswer {
    __id:string
    answerText:string
    isCorrect:boolean
}
export const testQuizzQuestion : IquizzQuestion[]= [
    {
        __id:"1",
        questionText: "question 1",
        answers: [
            { __id:"1",answerText:"answerText.1",isCorrect:true},
            { __id:"2",answerText:"answerText.2",isCorrect:false},
            { __id:"3",answerText:"answerText.3",isCorrect:false},
        ]
    },
    {
        __id:"2",
        questionText: "question 2",
        answers: [
            { __id:"4",answerText:"answerText.1",isCorrect:false},
            { __id:"5",answerText:"answerText.2",isCorrect:true},
            { __id:"6",answerText:"answerText.3",isCorrect:false}
        ]
    },
    {
        __id:"3",
        questionText: "question 3",
        answers: [
            { __id:"7",answerText:"answerText.1",isCorrect:false},
            { __id:"8",answerText:"answerText.2",isCorrect:false},
            { __id:"9",answerText:"answerText.3",isCorrect:true}
        ]
    },
    {
        __id:"3",
        questionText: "question 3",
        answers: [
            { __id:"7",answerText:"answerText.1",isCorrect:false},
            { __id:"8",answerText:"answerText.2",isCorrect:false},
            { __id:"9",answerText:"answerText.3",isCorrect:true}
        ]
    }
]
