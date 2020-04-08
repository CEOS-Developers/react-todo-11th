import React, { useState } from "react";
import styled from "styled-components";

export default function TodoInput({ addTodo }) {
    const [thisTodo, setThisTodo] = useState({
    })

    const inputChangeHandler = (el) => {
        const { name, value } = el.target;

        if (name === 'dueDate') {
            if (value.length > 8) {
                el.target.value = value.slice(0, 8);
                return;
            }
        }

        setThisTodo({
            ...thisTodo,
            [name]: value
        })
    }

    return (
        <Wrapper>
            <TimeInput>
                <p style={{"fontSize":"1.5rem","padding":"0px","margin":"0px"}}>시간</p>
                <input style={{ "width": "80%", "borderWidth": "1px", "borderStyle": "solid", "borderColor": "rgb(97, 97, 97)", "borderImage": "initial", "padding": "0.5rem 0.8rem" }} name="dueDate" onChange={inputChangeHandler} type="number" placeholder="날짜를 입력하세요 (ex.20200404)"></input>
            </TimeInput>
            <ContentInput>
                <p style={{"fontSize":"1.5rem","padding":"0px","margin":"0px"}}>TODO</p>
                <textarea style={{"width":"80%","height":"30vh","resize":"none","borderWidth":"1px","borderStyle":"solid","borderColor":"rgb(97, 97, 97)","borderImage":"initial","padding":"0.5rem 0.8rem"}} name="content" onChange={inputChangeHandler} placeholder="할 일을 입력하세요"></textarea>
            </ContentInput>
            <button style={{"color":"white","backgroundColor":"rgb(97, 97, 97)","fontSize":"1.5rem","outline":"none","borderWidth":"initial","borderStyle":"none","borderColor":"initial","borderImage":"initial","padding":"0.5rem 1rem","borderRadius":"0.3rem"}} onClick={(() => {
                addTodo(thisTodo);
            })}>등록</button>
        </Wrapper>
    );
}

const TimeInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;`

const ContentInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    height: 37rem;
    flex: 1 1 0%;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    border-image: initial;
    padding: 1rem 2rem;
`;