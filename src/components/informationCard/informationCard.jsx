
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
          <h2>check the information tap</h2>
          <h3>it will help you find out every feild and tell you all the information about it </h3>
         </div>
       </div>

        <div className={styles.mySlidesFade}>
          <div className={styles.numberText}>2 / 3</div>
          <QuestionsCard/>
        </div>

        <div className={styles.mySlidesFade}>
          <div className={styles.numberText}>3 / 3</div>
          <QuestionsCard/>
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

      {/* Dots */}
      <div className={styles.alignDots}>
        <span className={styles.dot} onClick={() => currentSlide(1)}></span>
        <span className={styles.dot} onClick={() => currentSlide(2)}></span>
        <span className={styles.dot} onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default InformationCard;


// 'use client';
// import styles from './informationCard.module.css'
// import React, { useState, useEffect } from 'react';
// import QuestionsCard from '../QuestionsCard/guestionsCard';

// const InformationCard = () => {
//     const [slideIndex, setSlideIndex] = useState(1);
  
//     const plusSlides = (n) => {
//       showSlides(slideIndex + n);
//     };
  
//     const currentSlide = (n) => {
//       showSlides(n);
//     };
  
//     const showSlides = (n) => {
//       let newSlideIndex = n;
//       const slides = document.getElementsByClassName('mySlides');
//       const dots = document.getElementsByClassName('dot');
  
//       if (n > slides.length) {
//         newSlideIndex = 1;
//       }
  
//       if (n < 1) {
//         newSlideIndex = slides.length;
//       }
  
//       for (let i = 0; i < slides.length; i++) {
//         if (slides[i]) {
//           slides[i].style.display = 'none';
//         }
//       }
  
//       for (let i = 0; i < dots.length; i++) {
//         if (dots[i]) {
//           dots[i].className = dots[i].className.replace(' active', '');
//         }
//       }
  
//       if (slides[newSlideIndex - 1]) {
//         slides[newSlideIndex - 1].style.display = 'block';
//       }
  
//       if (dots[newSlideIndex - 1]) {
//         dots[newSlideIndex - 1].className += ' active';
//       }
  
//       setSlideIndex(newSlideIndex);
//     };
  
//     useEffect(() => {
//       showSlides(slideIndex);
//     }, [slideIndex]);
  

//  ///
    
    
  
//     return (
//       <div> 
        
//         <div className={styles.slideshowContainer}>
//           {/* Slides */}
//           <div className={styles.mySlidesFade}>
//             <div className={styles.numbertext}>1 / 3</div>
//          <QuestionsCard/>
//             <div className={styles.text}>Caption Text</div>
//           </div>
  
//           <div className={styles.mySlidesFade}>
//             <div className={styles.numbertext}>2 / 3</div>
//             <QuestionsCard/>
//              <div className={styles.text}>Caption Two</div>
//           </div>
  
//           <div className={styles.mySlidesFade}>
//             <div className={styles.numbertext}>3 / 3</div>
//             <QuestionsCard/>
//              <div className={styles.text}>Caption three</div>
//           </div>
  
//           {/* Previous and Next buttons */}
//           <a className={styles.prev} onClick={() => plusSlides(-1)}>
//             ❮
//           </a>
//           <a className={styles.next} onClick={() => plusSlides(1)}>
//             ❯
//           </a>
//         </div>
  
//         <br />
  
//         {/* Dots */}
//         <div >
//           <span className={styles.dot} onClick={() => currentSlide(1)}></span>
//           <span  className={styles.dot} onClick={() => currentSlide(2)}></span>
//           <span  className={styles.dot} onClick={() => currentSlide(3)}></span>
//         </div>
//         </div>
//     );
//   };
  
//   export default InformationCard;

  
  