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

const Para = styled.p`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 300;
  justify-content: center;
  align-items: center;

`

const Header = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;

`

export default function Github() {
  return (
    <>
      <Head>
        <title>Github</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Github</Heading>
      </Hero>

      <center>
      <a href="https://github.com/kealanocallaghan2000/AppliedProject"><img src="https://i.ibb.co/D196ZLb/git.png" alt="osc" border="0" width={200} height="200" /></a>
      </center>
    </>
  )
}
