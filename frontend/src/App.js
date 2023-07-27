import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false); // Add a loading state

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true while fetching data
      const response = await axios.get(`http://localhost:3005/scrape?search=${searchTerm}`);
      setUserList(response.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      setLoading(false); // Set loading to false in case of an error as well
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className="App">
      <h4>User List</h4>
      <br></br>
      <div id="cover">
        <form method="get" onSubmit={handleSearch}>
          <div className="tb">
            <div className="td">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {loading ? ( // Display loading message or spinner while loading
        <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      ) : (
        <div className="user-list">
          {userList.map((user, index) => (
            <div className="user-card" key={index}>
              <p>{user}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
