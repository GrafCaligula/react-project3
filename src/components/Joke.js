import "./Joke.css";

export default function Joke(props){
  
  return (
    <div className="joke-wrapper">
      <h1>{props.setup}</h1>
      <h2>{props.punchline}</h2>
    </div>
    
  )
}