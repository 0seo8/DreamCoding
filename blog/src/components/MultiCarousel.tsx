//브라우저에서 자동으로 스크롤링 되고 하는 내용이 있으므로 클라이언트 컴포넌트로 만들어줌.
'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

type Props ={
  children: React.ReactNode
}
export default function MultiCarousel({children}:Props) {
  return (
    <Carousel infinite responsive={responsive} itemClass="m-2">
      {children}
    </Carousel>
 );
}