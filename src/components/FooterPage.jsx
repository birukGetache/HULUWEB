import React from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/HULU.png'; // Update with the path to your logo

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f2f2f2;
  border-top: 1px solid #ddd;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
  margin: 0;
`;

const SocialMedia = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SocialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialIcon = styled.a`
  font-size: 2em;
  color: #007bff;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

const SocialLabel = styled.span`
  font-size: 1em;
  color: #555;
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 1em;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const FooterPage = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfo>
          <Logo src={logo} alt="Company Logo" />
          <Description>
            We are a leading company providing high-quality services tailored to meet your needs. Our team is dedicated to delivering excellence and ensuring customer satisfaction.
          </Description>
        </CompanyInfo>

        <SocialMedia>
          <SocialItem>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialLabel>Facebook</SocialLabel>
          </SocialItem>
          <SocialItem>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialLabel>Twitter</SocialLabel>
          </SocialItem>
          <SocialItem>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialLabel>LinkedIn</SocialLabel>
          </SocialItem>
          <SocialItem>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialLabel>Instagram</SocialLabel>
          </SocialItem>
        </SocialMedia>

        <ContactForm>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows="4" required />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
      </FooterContent>
    </FooterContainer>
  );
};

export default FooterPage;
