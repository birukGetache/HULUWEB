import React from 'react';
import styled from '@emotion/styled';
import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa'; // Example icons

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #007bff;
  margin-bottom: 20px;
  text-align: center;
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards horizontally */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ServiceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%; /* Full width on small screens */
  }
`;

const Icon = styled.div`
  font-size: 3em;
  color: #007bff;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
`;

const ServicePage = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: 'Web Development',
      description: 'We build high-quality, responsive websites tailored to your needs.'
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Create user-friendly mobile applications for both iOS and Android.'
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: 'Commitions',
      description: 'Efficient and secure database management solutions for your business.'
    },
  ];

  return (
    <Container>
      <Title>Our Services</Title>
      <Services>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <Icon>{service.icon}</Icon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <Description>{service.description}</Description>
          </ServiceCard>
        ))}
      </Services>
    </Container>
  );
};

export default ServicePage;
