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
import { parser } from '../UrlBar/parser';

const SavedLinks = ({ open, savedLinks, addOneTab }) => {

  const SavedLink = ({img, title, src}) => (
    <Wrapper>
      <ImageWrap>
        <Image src={img}/>
      </ImageWrap>
      <MetaWrap>
        <Title onClick={() => addOneTab({src: parser(src)}) }> {title.length > 30 ? title.substr(0,30).concat('...') : title} </Title>
        <Src> {src.length > 30 ? src.substr(0,30).concat('...') : src} </Src>
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
