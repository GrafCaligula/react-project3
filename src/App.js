import "./App.css";
import Joke from "./components/Joke";
import jokeData from "./jokeData.js";

function App() {
  const jokeElements = jokeData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div>{jokeElements}</div>;
}

export default App;
