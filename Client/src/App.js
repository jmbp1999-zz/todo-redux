import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { addTodos } from './redux/actions';

function App() {
  return (
    <div className="App m-5">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
