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

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Home</Heading>
      </Hero>
      <center>
      <a><img src="https://i.ibb.co/HqJdpcJ/synth.png" alt="synth" border="0"/></a>  

      </center>
      <center>
      <iframe width="600" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1222916356%3Fsecret_token%3Ds-VWb3hbHFwDx&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </center>

    </>
  )
}
