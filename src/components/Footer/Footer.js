import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
} from "./FooterStyles.js";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-80px" }}>
        
      </h1>
      <Container>
        <Row>
      <Column>
            <FooterLink href="https://github.com/AdrianCalcagno">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  GitHub
                </span>
              </i>
            </FooterLink>
            </Column>

            <FooterLink>
              <i>
                <span style={{ marginLeft: "10px", color:"white"}}>
                 By Adrián Calcagno
                </span>
              </i>
            </FooterLink>

            <Column>
            <FooterLink href="https://www.linkedin.com/in/adriancalcagno/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i>
            </FooterLink>
            </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

