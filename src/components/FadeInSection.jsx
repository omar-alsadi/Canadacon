import React, { useRef } from 'react';
import { useIntersection } from 'react-use'
import { useStateValue } from './StateProvider';
import { Fade } from './styles/FadeInSection.style';
import { toggleVisible } from './../actions'
import gsap from 'gsap'

const FadeInSection = ({ children }) => {

    const [{ isVisible }, dispatch] = useStateValue();

    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    })

    const fadeIn = (el) => {
        gsap.to(el.current, 1, {
            opacity: 1,
            y: -60,
            ease: 'power4.out',
            stagger: {
                amount: .3
            }
        })
    }

    const fadeOut = (el) => {
        gsap.to(el.current, 1, {
            opacity: 0,
            y: -20,
            ease: 'power4.out'
        })
    }

    if (intersection && intersection.intersectionRatio < 1) {
        fadeOut(children)
    } else {
        fadeIn(children)
        dispatch(toggleVisible());
    }


    return (
        <Fade
            ref={sectionRef}
        >
            {children}
        </Fade>
    );
}

export default FadeInSection