import { useState } from 'react'
import './eightball.css'

const EightBall = ({answers = [
    { msg: "It is certain.", color: "green"},
    { msg: "It is decidedly so.", color: "green"},
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
]}) => {
    const [eightBallColor, setColor] = useState("black")
    const [eightBallMsg, setMsg] = useState("Think of a Question.")
    
    const handleEightBallClick = () => {
        const idx = Math.floor(Math.random() * answers.length)
        setColor(answers[idx].color)
        setMsg(answers[idx].msg)
    }
    
    return (<div className={`eight-ball eight-ball-${eightBallColor}`} onClick={handleEightBallClick}>
        {eightBallMsg}
    </div>)
}

export default EightBall