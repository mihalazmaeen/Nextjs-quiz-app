"use client"

import { useState, useEffect } from "react"
import StatCard from "./StatCard"
interface QuizProps{
    questions:{
        question:string
        answers:string[]
        correctAnswer:string
    }[]
    userId:string | undefined
}

const Quiz = ({questions,userId}:QuizProps) => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [checked, setChecked] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number|null>(null)
    const [showResult, setShowResult] = useState(false)
    const [results, setResults] = useState({
      score:0,
      correctAnswers:0,
      wrongAnswers:0  
    })
    const [timeRemaining, setTimeRemaining] = useState(30)
    const [timerRunning, setTimerRunning] = useState(false)

     const startTimer = () => {
       setTimerRunning(true);
     };
     const stopTimer = () => {
       setTimerRunning(false);
     };
     const resetTimer = () => {
       setTimeRemaining(30);
     };
     const handleTimeUp = () => {
       stopTimer();
       resetTimer();
       nextQuestion();
     };

    useEffect(()=>{
        let timer:NodeJS.Timeout
        if(timerRunning && timeRemaining > 0){
            timer = setTimeout(()=>{
                setTimeRemaining((prevTime)=>prevTime - 1)
            },1000)
        }else if(timeRemaining === 0){
            handleTimeUp()
        }
        return () => clearTimeout(timer)
    },[timerRunning,timeRemaining])

    const onAnswerSelected = (answer:string, index:number) => {
        setChecked(true)
        setSelectedAnswerIndex(index)
        if(answer === correctAnswer){
            setSelectedAnswer(answer)
        }else{
            setSelectedAnswer("")
        }
    }

    const nextQuestion = () => {
        setSelectedAnswerIndex(null)
        setResults((prev)=>
        selectedAnswer ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1
        } : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1
        }
        )
    }

   
  return (
    <div className="bg-primary text-white px-4 rounded-md py-1">{timeRemaining} seconds to answer </div>
  )
}

export default Quiz