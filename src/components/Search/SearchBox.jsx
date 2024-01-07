"use client"
import { FiSearch } from "react-icons/fi";
import styles from './SearchBox.module.css'
import { useState } from "react";
import { useAppStore } from "../../store";


const SearchBox = ()=>{
    const [value, setValue] = useState();
    const { setSearchKey } = useAppStore();
  
    return (
    
        <div className={styles.searchBox}>
        <input className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchKey(value);
            }
          }}
        />
        <button className={styles.button} onClick={() => setSearchKey(value)}>
          <FiSearch />
        </button>
      </div>

    );
}

export default SearchBox