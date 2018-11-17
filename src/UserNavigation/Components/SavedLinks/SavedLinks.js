import React from 'react';
import {
  Container,
  Wrapper,
  ImageWrap,
  Image,
  Title,
  Src,
  MetaWrap
} from './styles.js';

const SavedLinks = ({ open, savedLinks }) => {
  const SavedLink = ({img, title, src}) => (
    <Wrapper>
      <ImageWrap>
        <Image src={img}/>
      </ImageWrap>
      <MetaWrap>
        <Title> {title} </Title>
        <Src> {src} </Src>
      </MetaWrap>
    </Wrapper>
  );
  return (
    <Container open={open}>
      { savedLinks && savedLinks.map(({ img, title, src }, i) => <SavedLink key={i} img={img} title={title} src={src} />)}
    </Container>
  );
};



export default SavedLinks;
