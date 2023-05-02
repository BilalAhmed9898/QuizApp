import React, { useEffect, useMemo, useState } from 'react'
import '../app.css'
import Quiz from './Quiz'
import Timmer from './Timmer'

function MainApp({ setShowbox }) {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earnedamount, setEarnedamount] = useState("$ 0")
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is known for inventing the telephone?",
      answers: [
        {
          text: "Thomas Edison",
          correct: false,
        },
        {
          text: " Isaac Newton",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Alexander Graham Bell ",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "What is the smallest country in the world?",
      answers: [
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "Vatican City",
          correct: true,
        },
        {
          text: "Liechtenstein",
          correct: false,
        },
        {
          text: "Itlay",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the name of the famous natural wonder located on the border of Argentina and Brazil?",
      answers: [
        {
          text: "Grand Canyon",
          correct: false,
        },
        {
          text: "Victoria Falls",
          correct: false,
        },
        {
          text: "Iguazu Falls ",
          correct: true,
        },
        {
          text: "None of them",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who was the first person to walk on the moon?",
      answers: [
        {
          text: "Elon Musk",
          correct: false,
        },
        {
          text: "Neil Armstrong ",
          correct: true,
        },
        {
          text: " Yuri Gagarin",
          correct: false,
        },
        {
          text: "Buzz Aldrin ",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which country is known for producing the car brand Toyota?",
      answers: [
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the largest organ in the human body?",
      answers: [
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Lungs",
          correct: false,
        },
        {
          text: "Brain",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which famous author wrote the book To Kill a Mockingbird?",
      answers: [
        {
          text: "Harper Lee ",
          correct: true,
        },
        {
          text: " F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "What is the name of the river that runs through Egypt?",
      answers: [
        {
          text: "Nile",
          correct: true,
        },
        {
          text: "Mississippi",
          correct: false,
        },
        {
          text: "Amazon",
          correct: false,
        },
        {
          text: "None of them",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which famous singer is known for the song Thriller?",
      answers: [
        {
          text: "Michael Jackson ",
          correct: true,
        },
        {
          text: "Madonna",
          correct: false,
        },
        {
          text: "Queen",
          correct: false,
        },
        {
          text: "Prince",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the largest country in the world by land area?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "United states",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "What is the smallest mammal in the world?",
      answers: [
        {
          text: "Mouse",
          correct: false,
        },
        {
          text: "Pygmy marmoset",
          correct: false,
        },
        {
          text: "Bumblebee bat ",
          correct: true,
        },
        {
          text: "None of them",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "C",
          correct: false,
        },
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Ag",
          correct: false,
        },
      ],
    },
  ];
  const pyramid = useMemo(() =>
    [
      { id: 15, amount: "$50,000" },
      { id: 14, amount: "$25,000" },
      { id: 13, amount: "$16,000" },
      { id: 12, amount: "$8,000" },
      { id: 11, amount: "$4,000" },
      { id: 10, amount: "$2,000" },
      { id: 9, amount: "$1,800" },
      { id: 8, amount: "$1,600" },
      { id: 7, amount: "$1,400" },
      { id: 6, amount: "$1,200" },
      { id: 5, amount: "$1000" },
      { id: 4, amount: "$800" },
      { id: 3, amount: "$400" },
      { id: 2, amount: "$200" },
      { id: 1, amount: "$100" },
    ]
  )
  useEffect(() => {
    questionNumber > 1 && setEarnedamount(pyramid.find((m) => m.id === questionNumber - 1).amount)
    if (questionNumber > 15) {
      setStop(true)
    }
  }, [pyramid, questionNumber])

  const restart = () => {
    console.log("hello");
    setStop(false)
  }

  const quitegame = () => {
    setShowbox(true);
  }

  return (
    <div className='app'>
      <div className="main">
        {stop ? (
          <div className='result'>
            <h1>Congratulations You Win {earnedamount}</h1>
            <div>
              <button className='restart' onClick={restart}>Restart Quiz</button>
              <button className='quite' onClick={quitegame}>Quite Game</button>
            </div>
          </div>) : (
          <>
            <div className="top">
              <div className="timmer">
                <Timmer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Quiz
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop} />
            </div>
          </>
        )
        }
      </div>
      <div className="pyramids">
        <ul className='moneylist'>
          {pyramid.map((item) => (
            <li className={questionNumber === item.id ? "moneyListItem active" : "moneyListItem"} >
              <span className='moneylistItemnumber'>{item.id}</span>
              <span className='moneylistItemamount'>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainApp