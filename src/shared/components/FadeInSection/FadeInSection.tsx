import { useLayoutEffect, useRef, useState } from "react";
import './FadeInSection.css';

const FadeInSection: React.FC<{children?: React.ReactNode}> = ({
    children
  }) => {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        const current = domRef.current;
        if (!current) return;
   
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true)
                }
            });
        });
            

        observer.observe(current);
        return () => observer.unobserve(current);
    })

    return (<div ref ={ domRef } className={ isVisible ? 'animated-section is-visible' : 'animated-section' }>{ children }</div>);
  };


export default FadeInSection;