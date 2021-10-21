import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/MainGameStyle.css';

function MainGame(props) {

    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);

    const [x, setX] = useState(0);
    const [y, setY] = useState(10);

    const Playground = styled.section`
        background-color: rgb(10, 46, 34);
        position: relative;
        width: 64rem;
        height: 32rem;
    `
    const PaddleA = styled.div`
        background-color: rgb(0, 0, 0);
        top: 0;
        left: 0;
        position: absolute;
        width: 2rem;
        height: 4rem;
        left: ${({ x }) => x + 'rem'};
        top: ${({ y }) => y + 'rem'};
    `

    const PaddleHandLeft = styled.div`
    
        background-color: red;
        background-size: contain;
        width          : 1.875rem;
        height         : 100%;
        position       : absolute;
        top            : 0;
        left: 3.125rem;
    
    `

    function increment(y) {
        return y + 1;
    }
    function decrement(y) {
        return y - 1;
    }

    const actionXMap = {
        ArrowLeft: decrement,
        ArrowRight: increment
    }
    const actionYMap = {
        ArrowDown: increment,
        ArrowUp: decrement
    }

    function handleKeyPress(e) {
        //const actionX = actionXMap[e.key];
        const actionY = actionYMap[e.key];
        //actionX && setX(actionX);
        actionY && setY(actionY);     
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    }, [])

    return (
        <div>
            <div style={{ color: "white" }}>Game: {props.gameName}</div>
            <div style={{ color: "white" }}>PlayerA: {props.playerA}</div>
            <div className="game">
                <Playground>
                    <div className="paddle-hand-right"></div>
                    <PaddleHandLeft> 
                        <PaddleA x={x} y={y} />
                    </PaddleHandLeft>
                    <div className="paddleB"></div>
                    <div className="ball"></div>
                </Playground>
            </div>
            <div className="scoreboard">
                <div className="score"> A : {scoreA}</div>
                <div className="score"> B : {scoreB}</div>
            </div>

        </div>
    )
}

export default MainGame


/**
 *
 *
 *         <div>
            <div style={{ color: "white" }}>Game: {props.gameName}</div>
            <div style={{ color: "white" }}>PlayerA: {props.playerA}</div>
            <div className="game">
                <div className="playground">
                    <div className="paddle-hand-right"></div>
                    <div className="paddle-hand-left"></div>
                    <div className="paddleA"></div>
                    <div className="paddleB"></div>
                    <div className="ball"></div>
                </div>
            </div>
            <div className="scoreboard">
                <div className="score"> A : {scoreA}</div>
                <div className="score"> B : {scoreB}</div>
            </div>

        </div>
 *
 *
 *
 */