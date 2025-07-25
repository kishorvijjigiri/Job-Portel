import { useState } from "react";
import axios from "axios";

function AdminPage() {
  const [job, setJob] = useState({
    role: "", experience: "", lastDate: "", salary: "", description: ""
  });

  const handleChange = e => setJob({ ...job, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/jobs/add", job);
    alert("Job posted");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Post a New Job</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              className="form-control"
              name="role"
              placeholder="Enter job role"
              value={job.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Experience (years)</label>
            <input
              type="number"
              className="form-control"
              name="experience"
              placeholder="Enter required experience"
              value={job.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Date to Apply</label>
            <input
              type="date"
              className="form-control"
              name="lastDate"
              value={job.lastDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary (₹)</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              placeholder="Enter salary"
              value={job.salary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Job Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              placeholder="Enter job description"
              value={job.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AdminPage;
