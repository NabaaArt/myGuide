'use client';
import styles from './slideNav.module.css'
import React, { useState } from 'react';


const SideNav = () => {
  const [active, setActive] = useState(false);

  const toggleCollapsible = () => {
    setActive(!active);
  };
  return (
    <div>
      <button type="button" className={styles.collapsible}>Open Collapsible</button>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
  )
};

export default SideNav;