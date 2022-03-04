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

export default function Download() {
  return (
    <>
      <Head>
        <title>Download</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Download</Heading>
      </Hero>

      <center>
      <a href="https://drive.google.com/uc?export=download&id=1VYUztG4PQrDdxAsu6fGeMuTHArawaPjw"><img src="https://i.ibb.co/SVF8s7j/60721.png" alt="osc" border="0" width={200} height="200" /></a>
      </center>

      <Para>
        <center>
          <p>To install this plugin on your pc, download the Vst3 file and place it in your plugins folder. Refresh the plugin folder from your DAW and enjoy! :)</p>
        </center>
      </Para>
    </>
  )
}
