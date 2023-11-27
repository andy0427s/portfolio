import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! I'm Tsang An Lee
        </SectionTitle>
        <SectionText>
        A backend develper skilled in Java, Spring Boot, and database management. Seeking a graduate role in software engineering to further hone my technical skills and contribute to innovative projects.
        </SectionText>
        <Button>Download My CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;