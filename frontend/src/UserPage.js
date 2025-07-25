import { useEffect, useState } from "react";
import axios from "axios";

function UserPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/jobs/all").then(res => setJobs(res.data));
  }, []);

  return (
    <div className="container mt-4">
  <h2 className="text-center mb-4">Available Jobs</h2>
  <div className="row">
    {jobs.map((job, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{job.role}</h5>
            <p className="card-text"><strong>Experience:</strong> {job.experience} years</p>
            <p className="card-text"><strong>Salary:</strong> ₹{job.salary}</p>
            <p className="card-text"><strong>Last Date:</strong> {job.lastDate}</p>
            <p className="card-text">{job.description}</p>
            <button className="btn btn-outline-primary w-100">Apply Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
export default UserPage;
