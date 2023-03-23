import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Passionate Developer
          <br />
          Explore My World:
        </SectionTitle>
        <SectionText style={{ paddingBottom: 0 }}>
          Hey! I am a Web Developer specialized in MERN Stack development
          with a profound passion for cloud computing technologies. As a Cloud
          Enthusiast, I have been continuously upgrading my skills and knowledge
          in AWS services. Alongside, I am an ardent DevOps enthusiast and
          always endeavor to optimize software development efficiency and
          quality. I am currently pursuing B.Tech in Computer Science and
          Engineering and set to graduate in 2023.
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;