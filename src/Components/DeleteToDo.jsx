import React from "react";
import { Table } from "react-bootstrap";

function DeletedTasks({ tasks, darkMode }) {
  const deletedTasks = tasks.filter((item) => item.del);

  return (
    <>
      {deletedTasks.length === 0 ? (
        <p className="text-muted text-center">No deleted tasks.</p>
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
            {deletedTasks.map((item) => (
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

export default DeletedTasks;
