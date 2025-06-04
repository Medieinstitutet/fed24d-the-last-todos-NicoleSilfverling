import './App.css';
import { Todos } from './components/Todos';
import { data } from './data/data';

function App() {
  return (
    <>
      <Todos todos={data} />
    </>
  );
}

export default App;
