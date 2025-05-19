import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import "../styles/addUserForm.css";

interface Errors {
  name?: string;
  email?: string;
}

const AddUserForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("Viewer");
  const [error, setError] = useState<Errors>({});
  const [validForm, setValidForm] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateForm = useCallback((): Errors => {
    const error: Errors = {};
    if (!name.trim()) error.name = "Name is Required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      error.email = "Email is Required";
    return error;
  }, [name, email]);

  useEffect(() => {
    const formErrors = validateForm();
    setValidForm(Object.keys(formErrors).length === 0);
  }, [validateForm]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
    } else {
      console.log({ name, email, role });
      setName("");
      setEmail("");
      setRole("Viewer");
      setError({});
      setSuccessMessage("Add user successfully!!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add New User</h2>
      <div className="form-group">
        <label>Name:</label>
        <div className="form-input">
          <input
            type="text"
            value={name}
            placeholder="Enter full name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          {error.name && <span className="input-error">{error.name}</span>}
        </div>
      </div>
      <div className="form-group">
        <label>Email:</label>
        <div className="form-input">
          <input
            type="text"
            value={email}
            placeholder="Enter a valid email address"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          {error.email && <span className="input-error">{error.email}</span>}
        </div>
      </div>
      <div className="form-group">
        <label>Role:</label>
        <select
          value={role}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setRole(e.target.value)
          }
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <button type="submit" className="form-btn">
        Add user
      </button>
    </form>
  );
};

export default AddUserForm;
