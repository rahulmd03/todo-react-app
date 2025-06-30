import React from "react";
import { Table, Button } from "react-bootstrap";

function ActiveTasks({ tasks, completeHandler, deleteHandler, darkMode }) {
  const activeTasks = tasks.filter((item) => !item.completed && !item.del);

  return (
    <>
      {activeTasks.length === 0 ? (
        <p className="text-muted text-center">No active tasks.</p>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          variant={darkMode ? "dark" : "light"}
        >
          <thead>
            <tr>
              <th>Task</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeTasks.map((item) => (
              <tr key={item.id}>
                <td>{item.task}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => completeHandler(item.id)}
                    >
                      ✓
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteHandler(item.id)}
                    >
                      🗑
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default ActiveTasks;
