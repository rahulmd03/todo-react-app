import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Card,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import ActiveTasks from "./Components/ActiveToDo";
import CompletedTasks from "./Components/CompleteToDo";
import DeletedTasks from "./Components/DeleteToDo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [darkMode, setDarkMode] = useState(true); // Theme state

  const deleteHandler = (id) => {
    setToDos(toDos.map((item) => (item.id === id ? { ...item, del: true } : item)));
  };

  const completeHandler = (id) => {
    setToDos(toDos.map((item) => (item.id === id ? { ...item, completed: true } : item)));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!toDo.trim()) return;
    setToDos([
      ...toDos,
      { task: toDo.trim(), id: Date.now(), del: false, completed: false },
    ]);
    setToDo("");
  };

  const appTheme = darkMode ? "bg-dark text-white" : "bg-light text-dark";
  const cardTheme = darkMode ? "bg-secondary text-white" : "";

  return (
    <div className={`App py-5 min-vh-100 ${appTheme}`}>
      <Container>
        <Navbar className="justify-content-between mb-4">
          <h1 className="m-0 fw-bold">📋 ToDo App</h1>
          <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </Navbar>

        <Form onSubmit={addTask} className="mb-4">
          <InputGroup>
            <Form.Control
              placeholder="Enter a new task..."
              onChange={(e) => setToDo(e.target.value)}
              value={toDo}
              className={darkMode ? "bg-dark text-white border-secondary" : ""}
            />
            <Button type="submit" variant="primary">
              Add Task
            </Button>
          </InputGroup>
        </Form>

        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className={cardTheme}>
              <Card.Header className="bg-primary text-white">Active Tasks</Card.Header>
              <Card.Body>
                <ActiveTasks
                  tasks={toDos}
                  completeHandler={completeHandler}
                  deleteHandler={deleteHandler}
                  darkMode={darkMode}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={cardTheme}>
              <Card.Header className="bg-success text-white">Completed Tasks</Card.Header>
              <Card.Body>
                <CompletedTasks tasks={toDos} darkMode={darkMode} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={cardTheme}>
              <Card.Header className="bg-danger text-white">Deleted Tasks</Card.Header>
              <Card.Body>
                <DeletedTasks tasks={toDos} darkMode={darkMode} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
