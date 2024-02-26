import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; 

function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [isTermsChecked, setTermsChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setTermsChecked(!isTermsChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isTermsChecked) {
      console.log('please accept the terms and conditions');
      return;
    }
    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email: formData.email,
        password: formData.password,
      });
      router.replace('./login');
      console.log('Registration successful:', response.data);
      /// You can handle the successful registration response here
    } catch (error) {
      console.error('Error during registration:', error.message);
      /// You can handle the error here (display an error message, etc.)
    }
  };

  return (
    <section>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f7f7', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: 'white' }}>
          <form onSubmit={handleSubmit}>
            <h1
              className="text-center" >
              <span>Spering</span>
            </h1>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form3Example1" className="form-control" placeholder='First Name' />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form3Example2" className="form-control" placeholder='Last Name' />
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <input
                type="email"
                className="form-control shadow-none"
                placeholder="Email"
                aria-label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12 my-2">
              <input
                type="password"
                className="form-control shadow-none"
                placeholder="Password"
                aria-label="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12 my-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheckbox"
                  checked={isTermsChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="termsCheckbox">
                  Terms and Conditions
                </label>
              </div>
            </div>
            <div className="col-12 mx-auto my-2 mt-4">
              <button
                className="btn btn-primary btn-block mb-4"
                type="submit"
                style={{ backgroundColor: '#1cbbb4', borderColor: '#1cbbb4' }}
              >
                <i className="fa fa-lock"></i> Join Spering
              </button>
            </div>

            <div className="text-center">
              <p>or sign up with</p>
              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#1cbbb4' }}>
                <FaFacebook />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#1cbbb4' }}>
                <FaGoogle />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#1cbbb4' }}>
                <FaTwitter />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1" style={{ color: '#1cbbb4' }}>
                <FaGithub />
              </button>
            </div>
            <div className="text-center">
              <p style={{ padding: '10px', color: '#1a2e35' }}>Already have an account? <a href="/login" style={{ color: '#1cbbb4' }}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </section >

  )
};

export default SignupPage;