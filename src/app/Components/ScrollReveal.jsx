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

  // Split title text into individual words
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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    // Rotate animation
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        rotate: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    // Fade-in text words
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity },
      {
        opacity: 1,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    // Word color transition
    gsap.fromTo(
      wordElements,
      { color: '#333' },
      {
        color: '#fff',
        ease: 'power2.inOut',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=10%',
          end: 'bottom center',
          scrub: 1.5,
        },
      }
    );

    // Blur effect (optional)
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: 'blur(0px)',
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    // ✨ Handle centralized customized skill text
    // This updates the fixed overlay as user scrolls into each skill section
    ScrollTrigger.create({
      trigger: el,
      scroller,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => showSkill(skills),
      onEnterBack: () => showSkill(skills),
      onLeave: () => hideSkill(),
      onLeaveBack: () => hideSkill(),
    });

    // Helper functions for overlay animation
    const showSkill = (text) => {
      const overlay = document.querySelector('#customized-overlay');
      if (overlay) {
        overlay.textContent = text;
        gsap.to(overlay, { opacity: 1, duration: 0.6, y: 0 });
      }
    };

    const hideSkill = () => {
      const overlay = document.querySelector('#customized-overlay');
      if (overlay) {
        gsap.to(overlay, { opacity: 0, duration: 0.6, y: -20 });
      }
    };

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    skills,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(2.6rem,5vw,7rem)] md:text-text-[clamp(4.6rem,5vw,7rem)] lg:text-[clamp(6.6rem,5vw,7rem)] 2xl:text-[clamp(9.6rem,4vw,3rem)] leading-[1.5] font-bold  ${textClassName}`}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
