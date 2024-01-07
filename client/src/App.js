import { useEffect, useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newTodo, setNewTodo] = useState("");

    return (
        <div className="App">
            <h1>Welcome, Nick</h1>
            <h4>Your Tasks</h4>

            <div className="todos">
                <div className="todo">
                    <div className="checkbox"></div>
                    <div className="text">Play with Eddie</div>
                    <div className="delete-todo">x</div>
                </div>
                <div className="todo is-complete">
                    <div className="checkbox"></div>
                    <div className="text">Call Dad</div>
                    <div className="delete-todo">x</div>
                </div>
            </div>
        </div>
    );
}

export default App;
