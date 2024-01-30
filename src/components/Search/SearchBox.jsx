"use client"
import { FiSearch } from "react-icons/fi";
import styles from './SearchBox.module.css'
import { useState } from "react";


const SearchBox = ()=>{
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = async () => {
    try {
      // Replace the following with your actual API endpoint for searching
      const response = await fetch(`/api/search?query=${encodeURIComponent(value)}`);
      if (response.ok) {
        const searchData = await response.json();
        // Assuming the searchData is an array of results from the search
        setSearchResults(searchData);
        console.log('Search Results:', searchData);
        // Handle the search results, e.g., update state or perform other actions
      } else {
        console.error('Error fetching search results');
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

    return (
    
     
     <div className={styles.searchBox}>
        <input className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        {/* //////// */}
        <button className={styles.button} onClick={() => handleSearch}>
          <FiSearch />
        </button>
        {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
              // Adjust the structure based on your actual search result data
            ))}
          </ul>
        </div>
      )}
      </div>

    );
}

export default SearchBox