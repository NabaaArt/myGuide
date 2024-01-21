'use client';
import styles from './informationCard.module.css';
import React, { useState, useEffect } from 'react';
import QuestionsCard from '../QuestionsCard/guestionsCard';

const InformationCard = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newSlideIndex = n;
    const slides = document.getElementsByClassName(styles.mySlidesFade);
    const dots = document.getElementsByClassName(styles.dot);

    if (n > slides.length) {
      newSlideIndex = 1;
    }

    if (n < 1) {
      newSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      if (slides[i]) {
        slides[i].style.display = 'none';
      }
    }

    for (let i = 0; i < dots.length; i++) {
      if (dots[i]) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
    }

    if (slides[newSlideIndex - 1]) {
      slides[newSlideIndex - 1].style.display = 'block';
    }

    if (dots[newSlideIndex - 1]) {
      dots[newSlideIndex - 1].className += ' active';
    }

    setSlideIndex(newSlideIndex);
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div>
      <div className={styles.slideshowContainer}>
        {/* Slides */}
        <div className={styles.mySlidesFade}>
          <div className={styles.numberText}>1 / 3</div>
          <div className={styles.container}>
            <h2 className={styles.infoText}>check the information tap be</h2>
            <h3>it will help you find out every feild and tell you all the information about it </h3>
          </div>
        </div>

        <div className={styles.mySlidesFade}>
          <div className={styles.numberText}>2 / 3</div>
          <QuestionsCard />
        </div>

        <div className={styles.mySlidesFade}>
          <div className={styles.numberText}>3 / 3</div>
          <QuestionsCard />
        </div>

        {/* Previous and Next buttons */}
        <a className={styles.prev} onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className={styles.next} onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>

      <br />


    </div>
  );
};

export default InformationCard;


