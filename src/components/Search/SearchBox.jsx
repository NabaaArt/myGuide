"use client"
import { FiSearch } from "react-icons/fi";
import styles from './SearchBox.module.css'
import { useState } from "react";
import { useRouter } from "next/navigation"

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    //   router.push(`/search?q=${encodedSearchQuery}`);

  };

  // const [value, setValue] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch(`/api/search?query=${encodeURIComponent(value)}`);
  //     if (response.ok) {
  //       const searchData = await response.json();
  //       setSearchResults(searchData);
  //       console.log('Search Results:', searchData);
  //     } else {
  //       console.error('Error fetching search results');
  //     }
  //   } catch (error) {
  //     console.error('Error during search:', error);
  //   }
  // };

  return (


    <form className={styles.searchBox} onSubmit={onSearch}>
      <input className={styles.input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      {/* //////// */}
      <button className={styles.button}
      // onClick={() => handleSearch}
      >
        <FiSearch />
      </button>
      {/* {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
              // Adjust the structure based on your actual search result data
            ))}
          </ul>
        </div>
      )} */}
    </form>

  );
}

export default SearchBox