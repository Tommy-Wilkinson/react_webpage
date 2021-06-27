import React, {useState} from 'react';
import {Button} from '../ButtonElement';
import { HeroContainer, 
         HeroBg,
         VideoBg,
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight
         } from './HeroElements';
import Video from '../../videos/video.mp4';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Connecting the World
                </HeroH1>
                <HeroP>
                    Sign-up to connect today.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                     onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary = 'true'
                     dark = 'true'
                     >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
