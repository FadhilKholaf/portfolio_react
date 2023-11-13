import React, {useEffect} from 'react'

const Icon = (props) => {
    useEffect(() => {
        const navigateToYouTube = () => {
          window.location.href = props.link;
        };
    
        const imgElement = document.querySelector('.img-icon');
        if (imgElement) {
          imgElement.addEventListener('click', navigateToYouTube);
        }
    
        return () => {
          if (imgElement) {
            imgElement.removeEventListener('click', navigateToYouTube);
          }
        };
      }, [props.link]);
  return (
    <img data-aos="fade-left" data-aos-delay={props.delay} src={props.icon} alt="" className="img-icon"/>
  )
}

export default Icon
