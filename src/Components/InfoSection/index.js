import React from 'react'
import { Button } from '../ButtonElement';
import { InfoContainer,
         InfoWrapper,
         InfoRow,
         BtnWrap,
         Heading,
         Subtitle,
         TopLine,

         TextWrapper,
         Column1,
         Column2,
         ImgWrap,
         Img
 } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, img, lightText, darkText, topLine, headline, description, buttonlabel, alt}) => {

    return (
        <>
        <InfoContainer lightBg = {lightBg} id = {id}>
            <InfoWrapper>
                <InfoRow imgStart = {imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home'
                            smooth={true}
                            duration = {500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >{buttonlabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                             <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection

