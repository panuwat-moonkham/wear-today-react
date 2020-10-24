import React from "react";
import facrbookimage from "../assets/contact_img.png";
import styled from "styled-components";

const Title = styled.h1`
  padding-top: 8rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 0 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Image = styled.image`
  padding: 2rem;
  flex: 1;
`;
const Text = styled.div`
  padding:  0rem;
`;

function Contact() {
  return (
    <>
      <Title>Contact</Title>
      <Content id="content">
        <Image>{facrbookimage}</Image>
        <Text link="https://www.facebook.com">Facrbook</Text>
        <Image>{facrbookimage}</Image>
        <Text>Imstagram</Text>
        <Image>{facrbookimage}</Image>
        <Text>099-276-3131, </Text>
      </Content>
    </>
  );
}

export default Contact;
