import { useState } from "react";
import jobs from "./jobs.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");

  const filteredJobs = jobs
    .filter(j => j.title.toLowerCase().includes(search.toLowerCase()))
    .filter(j => location === "All" || j.location === location)
    .filter(j => type === "All" || j.type === type);

  return (
    <div className="container">
      <h2>💼 Job Listings</h2>

      <div className="filters">
        <input
          placeholder="Search job title..."
          onChange={e => setSearch(e.target.value)}
        />

        <select onChange={e => setLocation(e.target.value)}>
          <option>All</option>
          <option>Remote</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Pune</option>
        </select>

        <select onChange={e => setType(e.target.value)}>
          <option>All</option>
          <option>Internship</option>
          <option>Full-time</option>
        </select>
      </div>

      <div className="job-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="card">
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <span className={`badge ${job.type === "Internship" ? "intern" : "full"}`}>
              {job.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
