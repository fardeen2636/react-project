import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Freelancer = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [jobDescription, setJobDescription] = useState('');

  const fetchData = () => {
    setLoading(true);
    const url = "https://randomuser.me/api/";
    axios.get(url)
      .then(handleErrors)
      .then(updateProfile)
      .then(fetchRandomJobDescription)
      .then(() => {
        setLoading(false);
      })
      .catch(printError);
  };

  const handleErrors = (res) => {
    if (!res.data) {
      throw new Error("Network response was not ok");
    }
    console.log(res);
    return res;
  };

  const updateProfile = (res) => {
    const newProfile = res.data.results[0];
    setProfile(newProfile);
  };

  const fetchRandomJobDescription = () => {
    const freelancerDescriptions = ['Web Developer', 'UI/UX Designer', 'Game Developer', 'Logo Designer'];
    const randomIndex = Math.floor(Math.random() * freelancerDescriptions.length);
    const randomJob = freelancerDescriptions[randomIndex];

    setJobDescription(randomJob);
  };

  const printError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

      {loading ? (
        <p style={{ fontSize: '24px', marginBottom: '20px' }}>Loading...</p>
      ) : (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
          <section>
            <h2>Freelancer Profiles</h2>
            <img src={profile.picture?.medium} alt="User Avatar" width={100} height={100} />
            <h5>Name: {profile.name?.first} {profile.name?.last}</h5>
            <p>Username: {profile.login?.username}</p>
            <p>Email: {profile.email}</p>
            <p>City: {profile.location?.city}</p>
            <p>Job Category: {jobDescription}</p>
          </section>
        </div>
      )}
      {!loading && (
        <button
          onClick={fetchData}
          style={{ padding: '10px', fontSize: '20px', marginBottom: '20px', backgroundColor: '#1cbbb4', color: '#fff', border: '#1cbbb4' }}
        >
          Choose Freelancer
        </button>
      )}
    </div>
  );
};

export default Freelancer;