import { useEffect, useState } from 'react'
import '../app.css'


function Quiz({ data, questionNumber, setQuestionNumber, setStop }) {

  const [question, setQuestion] = useState(null);
  const [selectedanswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');



  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack()
    }, duration);

  }
  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])


  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName('answer active');
    delay(2000, () => setClassName(ans.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
      if (ans.correct) {
        setQuestionNumber((prev) => prev + 1)
      }
      else {
        setStop(true)
      }
    }


    )
  }
  return (
    <div className="Quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) =>
        (
          <div className={selectedanswer === ans ? className : "answer"} onClick={() => handleClick(ans)}>{ans.text}</div>
        ))}
      </div>
    </div>
  )
}

export default Quiz