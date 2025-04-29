import React, { useState } from "react";
import Img from "../assets/ai2.png";
import { AiChatContainer, AiChat } from "../styles/aiChatStyle";

const Ai = () => {
    return (
        <>
            <AiChatContainer>
                <AiChat>
                    <img src={Img} alt="" />
                </AiChat>
            </AiChatContainer>
        </>
    )
}

export default Ai;