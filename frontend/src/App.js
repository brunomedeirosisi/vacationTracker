import React, { useEffect, useState } from "react";
import Gantt from "./components/Gantt";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTracker, setActiveTracker] = useState("VacationTracker");

  const fetchProjects = async (tracker) => {
    setLoading(true);
    try {
      const endpoint =
        tracker === "VacationTracker"
          ? "http://localhost:3333/api/projects/projects-with-details"
          : "http://localhost:3333/api/dedications/dedications-with-details";

      const response = await fetch(endpoint);
      const data = await response.json();

      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        console.error("Unexpected data format from API:", data);
        setProjects([]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(activeTracker);
  }, [activeTracker]);

  const handleTrackerChange = (tracker) => {
    setActiveTracker(tracker);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={() => handleTrackerChange("VacationTracker")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: activeTracker === "VacationTracker" ? "#007bff" : "#f0f0f0",
            color: activeTracker === "VacationTracker" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          VacationTracker
        </button>
        <button
          onClick={() => handleTrackerChange("AllocationTracker")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTracker === "AllocationTracker" ? "#007bff" : "#f0f0f0",
            color: activeTracker === "AllocationTracker" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          AllocationTracker
        </button>
      </div>

      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.project_name} style={{ marginBottom: "40px" }}>
            <h2 style={{ textAlign: "center" }}>{project.project_name}</h2>
            <Gantt tasks={project} />
          </div>
        ))
      ) : (
        <p>No data available for the selected tracker.</p>
      )}
    </div>
  );
}
/*
import React, { useEffect, useState } from "react";
import Gantt from "./components/Gantt";

export default function App() {
  const [activeTab, setActiveTab] = useState("vacationTracker"); // Tracks the selected tab
  const [data, setData] = useState([]); // Holds the fetched data
  const [loading, setLoading] = useState(true); // Loading state

  // URLs for the two trackers
  const dataSources = {
    vacationTracker: "http://localhost:3333/api/projects/projects-with-details",
    allocationTracker: "http://localhost:3333/api/dedications/dedications-with-details",
  };

  // Fetch data based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(dataSources[activeTab]);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error(`Error fetching data for ${activeTab}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]); // Re-run effect when `activeTab` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      //{ Tab Navigation }
      <div style={styles.tabContainer}>
        <button
          style={activeTab === "vacationTracker" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("vacationTracker")}
        >
          Vacation Tracker
        </button>
        <button
          style={activeTab === "allocationTracker" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("allocationTracker")}
        >
          Allocation Tracker
        </button>
      </div>

      //{ Gantt Component }
      <div style={styles.content}>
        <Gantt tasks={data} /> //{ Pass the fetched data to the Gantt component }
      </div>
    </div>
  );
}

// Simple styles for the tabs and content
const styles = {
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    margin: "0 5px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  activeTab: {
    padding: "10px 20px",
    margin: "0 5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "1px solid #007bff",
    borderRadius: "5px",
  },
  content: {
    padding: "20px",
  },
};
*/
/*

import React, { useEffect, useState } from "react";
import Gantt from './components/Gantt';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3333/api/dedications/dedications-with-details");
        const data = await response.json();
        console.log(data)
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading timelines...</div>;
  }

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "40px" }}>
          <h2>{project.project_name}</h2>
          <Gantt tasks={project} />
        </div>
      ))}
    </div>
  );
}

*/
/*import React from "react";
import Gantt from './components/Gantt';

const App = () => {
  const tasks = {
    items: [
      { id: 1, content: "03-04 -> 13-04 [10 dias]", start: "2025-04-03", end: "2025-04-13", group: 1, className: "manager-task" },
      { id: 2, content: "14 dias", start: "2025-06-05", end: "2025-06-19", group: 1, className: "manager-task" },
      { id: 3, content: "6 dias", start: "2025-10-08", end: "2025-10-14", group: 1, className: "manager-task" },

      { id: 4, content: "10 dias", start: "2025-04-03", end: "2025-04-13", group: 2, className: "developer-task" },
      { id: 5, content: "14 dias", start: "2025-06-05", end: "2025-06-19", group: 2 , className: "developer-task"},
      { id: 6, content: "6 dias", start: "2025-10-08", end: "2025-10-14", group: 2 , className: "developer-task"},
      { id: 7, content: "10 dias", start: "2025-05-03", end: "2025-05-13", group: 3 , className: "designer-task"},
      { id: 8, content: "14 dias", start: "2025-07-05", end: "2025-07-19", group: 3 , className: "designer-task"},
      { id: 9, content: "6 dias", start: "2025-11-08", end: "2025-11-14", group: 3 , className: "designer-task"}



    ],
    groups: [
      { id: 1, content: "Bruno",value: 2 },  { id: 2, content: "Mapa" ,value: 1},  { id: 3, content: "Juliana",value: 1 }
    ]
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h1>Projeto CEMIG</h1>
      <Gantt tasks={tasks} />
    </div>
  );
};

export default App;

*/
/*import React, { Component } from 'react';
import Gantt from './components/Gantt';
import './components/Gantt.css';

const data = {
  data: [
      {id: 11, text: "Project #1", type: "project", progress: 0, open: true, start_date: "02-04-2023 00:00", duration: 13, parent: 0},
      {id: 12, text: "Task #1", start_date: "03-04-2023 00:00", duration: 5, parent: "11", progress: 0, open: true},
      {id: 13, text: "Task #2", start_date: "03-04-2023 00:00", type: "project", render:"split", parent: "11", progress: 0.5, open: false, duration: 11},
      {id: 17, text: "Stage #1", start_date: "03-04-2023 00:00", duration: 1, parent: "13", progress: 0, open: true},
      {id: 18, text: "Stage #2", start_date: "05-04-2023 00:00", duration: 2, parent: "13", progress: 0, open: true},
      {id: 19, text: "Stage #3", start_date: "08-04-2023 00:00", duration: 1, parent: "13", progress: 0, open: true},
      {id: 20, text: "Stage #4", start_date: "10-04-2023 00:00", duration: 4, parent: "13", progress: 0, open: true},
      {id: 14, text: "Task #3", start_date: "02-04-2023 00:00", duration: 6, parent: "11", progress: 0, open: true},
      {id: 15, text: "Task #4", type: "project", render:"split", parent: "11", progress: 0, open: true, start_date: "03-04-2023 00:00", duration: 11},
      {id: 21, text: "Stage #1", start_date: "03-04-2023 00:00", duration: 4, parent: "15", progress: 0, open: true},
      {id: 22, text: "Stage #2", start_date: "08-04-2023 00:00", duration: 3, parent: "15", progress: 0, open: true},
      {id: 23, text: "Mediate milestone", start_date: "14-04-2023 00:00", duration: 0, type: "milestone", parent: "15", progress: 0, open: true, duration: 0},
      {id: 16, text: "Final milestone", start_date: "15-04-2023 00:00", duration: 0, type: "milestone", parent: "11", progress: 0, open: true, duration: 0}
  ],
  links: [
      {id: "1", source: "17", target: "18", type: "0"},
      {id: "2", source: "18", target: "19", type: "0"},
      {id: "3", source: "19", target: "20", type: "0"},
      {id: "4", source: "21", target: "22", type: "0"},
      {id: "5", source: "22", target: "23", type: "0"}
  ]
};
class App extends Component {
    render() {
        return (
            <div>
                <div className="gantt-container">
                    <Gantt tasks={data}/>
                </div>
            </div>
        );
    }
}
export default App;
*/
/*import React from "react";
import axios from "axios";
import "./App.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        this.setState({
          todos: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddTodo = (value) => {
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        this.setState({
          todos: [...this.state.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Todos</h1>
              <div className="todo-app">
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <TodoList todos={this.state.todos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
*/