import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/api/auth/login", form);
    const user = res.data;
    if (user.role === "ADMIN") navigate("/admin");
    else navigate("/user");
  };

  return (
   <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-lg">
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
            <div className="text-center mt-3">
  <span>Don't have an account?</span> <br />
  <button type="button" className="btn btn-link" onClick={() => navigate("/")}>Register</button>
</div>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
export default Login;
