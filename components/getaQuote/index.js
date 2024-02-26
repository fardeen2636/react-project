import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetaQuote = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);

    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'X-RapidAPI-Key': '73a5988d19msh1d5292c170cf61ep186533jsn102e798f0c50',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setQuoteData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {quoteData && (
        <div style={{
          backgroundColor: '#1cbbb4',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          transition: 'opacity 0.5s ease',
          marginBottom: '20px',
        }}>
          <h2>{quoteData.content}</h2>
          <p>{quoteData.originator.name}</p>
        </div>
      )}

      {loading && <p style={{ fontSize: '24px', marginBottom: '20px' }}>Loading...</p>}

      {!loading && (
        <button
          style={{
            backgroundColor: '#1cbbb4',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            border: 'none',
            fontSize: '16px',
          }}
          onClick={handleNewQuote}
        >
          Get New Quote
        </button>
      )}
    </div>
  );
};

export default GetaQuote;
