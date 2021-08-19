import ChooseQuestion from "../ChooseQuestion/ChooseQuestion";
import "./CardBoard.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addQuestion } from "../../redux/action/oneQuestion";

export default function CardBoard() {
  const dispatch = useDispatch()
  const openQuestion = (id) => {
    dispatch(addQuestion({number:id}))
    setTimeout(() => {
    return dispatch(addQuestion({number:null}))
    }, 1000);
  };

  return (
    <>
      <div className="board">
        <ChooseQuestion />
        <div className="card-in">
          <div className="zero-line">
            <div className="each">
              <div className="category">Космос</div>
            </div>
            <div className="each">
              <div className="category">Фильмы</div>
            </div>
            <div className="each">
              <div className="category">JavaScript</div>
            </div>
          </div>
        </div>

        <div className="card-in">
          <div className="zero-line">
            <div className="each">
              <button id="1" onClick={() => openQuestion(1)} className="circle">
                200
              </button>
            </div>
            <div className="each">
              <button id="5" onClick={() => openQuestion(5)} className="circle">
                200
              </button>
            </div>
            <div className="each">
              <button id="9" onClick={() => openQuestion(9)} className="circle">
                200
              </button>
            </div>
          </div>
        </div>

        <div className="card-in">
          <div className="zero-line">
            <div className="each">
              <button id="2" onClick={() => openQuestion(2)} className="circle">
                300
              </button>
            </div>
            <div className="each">
              <button id="6" onClick={() => openQuestion(6)} className="circle">
                300
              </button>
            </div>
            <div className="each">
              <button
                id="10"
                onClick={() => openQuestion(10)}
                className="circle"
              >
                300
              </button>
            </div>
          </div>
        </div>
        <div className="card-in">
          <div className="zero-line">
            <div className="each">
              <button id="3" onClick={() => openQuestion(3)} className="circle">
                500
              </button>
            </div>
            <div className="each">
              <button id="7" onClick={() => openQuestion(7)} className="circle">
                500
              </button>
            </div>
            <div className="each">
              <button
                id="11"
                onClick={() => openQuestion(11)}
                className="circle"
              >
                500
              </button>
            </div>
          </div>
        </div>
        <div className="card-in">
          <div className="zero-line">
            <div className="each">
              <button id="4" onClick={() => openQuestion(4)} className="circle">
                800
              </button>
            </div>
            <div className="each">
              <button id="8" onClick={() => openQuestion(8)} className="circle">
                800
              </button>
            </div>
            <div className="each">
              <button
                id="12"
                onClick={() => openQuestion(12)}
                className="circle"
              >
                800
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

<div className="circle"></div>;
