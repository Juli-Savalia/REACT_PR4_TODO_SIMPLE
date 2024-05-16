import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [alltask, setallTask] = useState([]);

  const handleEvent = (e) => {
    e.preventDefault();
    let obj = {
      uid: Date.now(),
      task,
      status: "Pending",
    };
    let newRecord = [...alltask, obj];
    setallTask(newRecord);
    alert("Task Added Successfully");
    setTask("");
  };

  const CompleteTodo = (com) => {
    let updateStatus = alltask.map((up) => {
      if (up.uid === com) {
        up.status = "Completed";
      }
      return up;
    });
    setallTask(updateStatus);
    alert("Status updated Successfully");
  };

  const DeleteTodo = (del) => {
    setallTask(alltask.filter((item) => item.uid != del));
    alert("Task deleted Successfully");
  };

  return (
    <div>
      <h3>Simple ToDo List</h3>
      <form onSubmit={handleEvent}>
        <input
          type="text"
          onChange={(c) => setTask(c.target.value)}
          value={task}
        ></input>
        <input type="button" value="Submit" />
      </form>
      <br></br>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>TASK</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {alltask.map((t) => {
            const { uid, task, status } = t;
            return (
              <>
                <tr key={uid}>
                  <td>{uid}</td>
                  <td>{task}</td>
                  <td>{status}</td>
                </tr>
                <button
                  disabled={status == "Completed"}
                  onClick={() => CompleteTodo(uid)}
                >
                  Complete
                </button>
                <button onClick={() => DeleteTodo(uid)}>Delete</button>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
