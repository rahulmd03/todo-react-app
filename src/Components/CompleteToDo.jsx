import React from "react";
import { Table } from "react-bootstrap";

function CompletedTasks({ tasks, darkMode }) {
  const completedTasks = tasks.filter((item) => item.completed && !item.del);

  return (
    <>
      {completedTasks.length === 0 ? (
        <p className="text-muted text-center">No completed tasks.</p>
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
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((item) => (
              <tr key={item.id}>
                <td>{item.task}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default CompletedTasks;
