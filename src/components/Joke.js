import "./Joke.css";

export default function Joke(props){
  
  return (
    <div className="joke-wrapper">
      <h1 style={props.isPun ? "color: blue" : "color: black"}>{props.setup}</h1>
      <h2>{props.punchline}</h2>
    </div>
    
  )
}