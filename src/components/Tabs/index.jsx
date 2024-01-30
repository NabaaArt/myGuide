"use client";

import { useEffect, useState } from "react";
import style from "./style.module.css";

export const Tabs = ({
  index = 0,
  onTab = () => {},
  tabs,
  actions = null,
  sticky = false,
}) => {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    let activeClass = document.querySelector(".active");
    setLeft(activeClass.offsetLeft);
    setWidth(activeClass.offsetWidth);
  }, [index]);

  return (
    <div className={style.tabs}>
      <div
        className={style.tabsHead}
        style={
          sticky
            ? {
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
              }
            : {}
        }
      >
        <div className={style.tablist}>
          <div className={style.line} style={{ left, width }}></div>
          {tabs?.map((tab, i) => (
            <div
              key={i}
              onClick={() => onTab(i)}
              className={`${style.tab} ${
                i === index ? `${style.active} active` : ""
              }`}
            >
              <p className={style.label}>{tab.label}</p>
            </div>
          ))}
        </div>
        {actions}
      </div>

      <div className={style.tabsBody}>{tabs[index]?.content}</div>
    </div>
  );
};
