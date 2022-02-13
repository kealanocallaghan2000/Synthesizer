import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
  display: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;

`;

const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 900;

`

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Contact</Heading>
      </Hero>
    </>
  )
}
