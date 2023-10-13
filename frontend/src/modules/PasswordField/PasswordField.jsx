import { useState } from 'react';
import './Password.css';
const PasswordField = ({name, value, className,onChange,placeholder, required }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 

  return (
    <div className="password-field position-relative">
      <input
        type={passwordVisible ? 'text' : 'password'}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        required={required}
      />
      <span className='password-toggle-icon' onClick={togglePasswordVisibility}>
        {passwordVisible ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
      </span>
    </div>
  );
};

export default PasswordField;
