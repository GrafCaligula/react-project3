import "./App.css";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <Joke
      isPun={false} 
      setup="Was ist gelb und kann nicht schwimmen?"
      punchline="Ein Bagger!"
      />
      <Joke
      isPun={false} 
      setup="Was ist klein, rund und dreieckig?"
      punchline="Ein kleines rundes Dreieck!"
      />
      <Joke
      isPun={false} 
      setup="Warum können Piraten keinen Kreisumfang berechnen?"
      punchline="Na, weil sie Pi-raten!"
      />
      <Joke
      isPun={false} 
      setup="Was ist süß und guckt durch's Schlüsselloch?"
      punchline="Eine Spanner-nass!"
      />
      <Joke
      isPun={true} 
      punchline="One-Line Joke"
      />
    </div>
  );
}

export default App;
