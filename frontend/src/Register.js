import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "USER" // default role
});

  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await axios.post("http://localhost:8080/api/auth/register", form);
    console.log(res.data);
    navigate("/login");
  } catch (err) {
    console.error("Registration error:", err.response?.data || err.message);
    alert("Registration failed: " + (err.response?.data || err.message));
  }
};

  return (
    <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-lg">
        <div className="card-body">
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select className="form-select" name="role" value={form.role} onChange={handleChange} required>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
            <div className="text-center mt-3">
  <span>Already registered?</span> <br />
  <button type="button" className="btn btn-link" onClick={() => navigate("/login")}>Login</button>
</div>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>
 );
}
export default Register;
