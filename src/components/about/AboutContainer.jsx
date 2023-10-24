import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import AboutCard from './AboutCard';

const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    text-align: center;
  
    margin-top: 100px;
`;

const AboutHeading = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    background-color: skyblue;
    border-radius:  5px;
    color: black;
    margin-bottom: 20px;
`;

const AboutText = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    text-align:justify;
    color: #555;
    margin-bottom: 30px;
    font-family: monospace;
`;

const ImageContainer = styled.div`
    margin: 30px 0;
    img {
        background:black;
        max-width: 100%;
        border-radius: 50%;
    }
`;

const ImpressiveFact = styled.div`
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    text-align: left;
`;

const FactHeading = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: black;
    margin-bottom: 10px;   
    background-color: skyblue;
    border-radius:  5px;
`;

const FactText = styled.p`
    font-size: 1.3rem;
    color: #333;
    font-weight:bold;
    line-height: 1.6;

`;

const About = () => {
    return (
            <>
              <Helmet>
        <title>About Ogendu Academy</title>
        </Helmet>
        <AboutContainer>
            <AboutHeading>Welcome to Ogendu Academy</AboutHeading>
            <AboutText>
                Ignite your curiosity and expand your horizons at Ogendu Academy. With a pioneering spirit, we
                embrace the digital era, delivering top-notch education to learners worldwide.
            </AboutText>
            <ImageContainer>
                <img src="/ogendu5.png" alt="Online Learning" />
            </ImageContainer>
            <ImpressiveFact>
                <FactHeading>Seamless Learning Experience</FactHeading>
                <img src="sm.jpeg" alt="" />
                <FactText>
                    Our virtual classrooms provide a seamless learning journey, blending innovative technology
                    with expert guidance, ensuring a dynamic educational experience.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Global Community, United Online</FactHeading>
                <img src="ign.png" alt="" />
                <FactText>
                    Diverse minds from different corners of the world converge in our virtual community. Connect,
                    collaborate, and learn together, breaking down geographical barriers.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Lifelong Learning Empowerment</FactHeading>
                <img src="lf.webp" alt="" />
                <FactText>
                    Beyond courses, we empower you with skills to thrive in an ever-evolving digital landscape,
                    fostering a lifelong love for learning and growth.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Expert Faculty Network</FactHeading>
                <img src="exp.png" alt="" />
                <FactText>
                    Our faculty members are industry experts, bringing real-world insights and knowledge to your
                    virtual classrooms, ensuring your education is relevant and practical.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Innovative Learning Resources</FactHeading>
                <img src="vt.png" alt="" />
                <FactText>
                    Experience engaging and interactive learning materials that make complex concepts understandable,
                    and cultivate a sense of curiosity that drives your pursuit of knowledge.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Personalized Learning Pathways</FactHeading>
                <img src="psx.jpg" alt="" />
                <FactText>
                    At Ogendu Academy, you're not just another student. We tailor your learning journey to match your
                    pace, goals, and learning preferences, ensuring your success is our primary focus.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Industry-Aligned Curriculum</FactHeading>
                <img src="gl1.jpg" alt="" />
                <FactText>
                    Our curriculum is designed in collaboration with industry leaders to equip you with skills that are
                    relevant and sought-after, empowering you to excel in your chosen field.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Global Alumni Network</FactHeading>
                <img src="hd1.jpg" alt="" />
                <FactText>
                    As part of the Ogendu community, you join a network of accomplished individuals across the globe,
                    opening doors to networking, collaboration, and opportunities beyond graduation.
                </FactText>
            </ImpressiveFact>
            <ImpressiveFact>
                <FactHeading>Transformative Education</FactHeading>
                <img  src="tg.webp" alt="" />
                <FactText>
                    Experience education that transcends textbooks. Ogendu Academy's transformative approach aims to
                    nurture critical thinking, creativity, and the skills needed to thrive in an ever-changing world.
                </FactText>
            </ImpressiveFact>
       
        </AboutContainer>
     <AboutCard />
        
        </>
    );
};

export default About;
