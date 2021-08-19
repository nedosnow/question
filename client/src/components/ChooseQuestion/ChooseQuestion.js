import "./ChooseQuestion.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allQuestions } from "../../redux/action/question";
export default function ChooseQuestion() {
  const dispatch = useDispatch()

  const number = useSelector((state)=> state.number)
  const questions = useSelector((state)=> state.questions)
      const currentQuestion = questions.filter((el)=>el.number==number.number)
      console.log(currentQuestion);

  
  useEffect(()=>{
    fetch('http://localhost:3000/')
    .then((response) => response.json())
    .then((response)=>dispatch(allQuestions(response)))
    .catch((error)=>console.log(error))
  }, []);





  return (
    <>
      <form method="POST">
        {currentQuestion.map((e)=>(
        <div class="card">
          <img src={e.picture} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">{e.quest}</p>
            <p class="card-text">{e.title}</p>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
            <button type="submit" class="btn btn-primary">
              Ответ
            </button>
          </div>
        </div>
        ))} 
      </form>
    </>
  );
}
