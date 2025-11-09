'use client'
import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  skills,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  const customized = useMemo(() => {
    const text = typeof skills === 'string' ? skills : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [skills]);


  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(el, { transformOrigin: '0% 50%', rotate: baseRotation }, {
      ease: 'none',
      rotate: 0,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom',
        end: rotationEnd,
        scrub: true
      }
    });

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(wordElements, { opacity: baseOpacity, willChange: 'opacity' }, {
      ease: 'none',
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom-=20%',
        end: wordAnimationEnd,
        scrub: true
      }
    });

    gsap.fromTo(
      wordElements,
      {
        color: "#333", // starting color (black)
      },
      {
        color: "#fff", // ending color (white)
        ease: "power2.inOut",
        stagger: 0.05, // small delay between words (optional)
        scrollTrigger: {
          trigger: el,
          scroller,
          // when the top of element hits middle of viewport, start animation
          start: "top bottom-=10%",
          // when bottom of element leaves center, finish animation
          end: "bottom center",
          scrub: 1.5,
        },
      }
    );

    const customText = el.querySelector('.customized-text');

    // 2️⃣ Create a GSAP animation for it
    gsap.fromTo(
      customText,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 70%",  // roughly when 30% of element is visible
          end: "top 50%",    // end when about 50% visible
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(wordElements, { filter: `blur(${blurStrength}px)` }, {
        ease: 'none',
        filter: 'blur(0px)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName} flex items-center justify-between`}>
      <p
        className={`text-[clamp(9.6rem,4vw,3rem)] leading-[1.5] font-bold text-6xl ${textClassName}`}>{splitText}</p>
      <p className='text-2xl customized-text'>{customized}</p>
    </div>
  );
};

export default ScrollReveal;
