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

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>About</Heading>
      </Hero>
      <Para>
        <center>
          <p>Kealans Synth is an all-round multi-effect synth plugin that offers a combination of effects including fm modulation, filtering, amp modulation and filter modulation.  It’s a must-have in your plugin collection!</p>
        </center>
      </Para>

      <Header>
        <center>
          <h2>Oscillator</h2>
        </center>
      </Header>
      <Para>
        <center>
          <p>This synth contains one oscillator with the option of being a Sine, Square or Saw wave, which changes the sound of the waveform.</p>
        </center>
      </Para>

      <center>
      <a href="https://ibb.co/QmHWsL7"><img src="https://i.ibb.co/RH6XLfG/osc.png" alt="osc" border="0" width={200} height="140" /></a>
      </center>

      <center>
      <a href="https://ibb.co/K5bfVvh"><img src="https://i.ibb.co/p1bM4Fw/sawave-2.jpg" alt="sawave-2" border="0"/></a>
      </center>

      <Para>
        <center>
          <p>The oscillator can also apply some FM modulation to the waveform, meaning it will basically apply another waveform onto it, creating a wobbling sound which the user can change and shape.</p>
        </center>
      </Para>

      

      <center>
      <a href="https://ibb.co/FDmfQQz"><img src="https://i.ibb.co/TgYnQQt/fm.jpg" alt="fm" border="0" width={200} height="200"/></a>
      </center>

      
      <Header>
        <center>
          <h2>Filter</h2>
        </center>
      </Header>
      <Para>
        <center>
          <p>This synth contains one filter with the option of being a high pass, band pass or low pass filter, which cuts off a certain portion of the wavform.</p>
        </center>
      </Para>

      <center>
      <a href="https://ibb.co/wpYFj0P"><img src="https://i.ibb.co/9yGkS81/filter.png" alt="fm" border="0" width={200} height="140"/></a>
      </center>

      <Para>
        <center>
          <p>The user can change the frequency and the resonance of the filter, cutting off some of the frequency and making the sound more like a roland tr-303 which is used in a lot of electronic music.</p>
        </center>
      </Para>

      <Header>
        <center>
          <h2>Mod ADSR</h2>
        </center>
      </Header>
      <Para>
        <center>
          <p>It is also possible to change the attack, decay sustain, and release of the synth. This means you can change different paramaters which shape how quickly the sound gets to full volume, how long it stays at full volume, how long it takes to drop off and how long it echos for.</p>
        </center>
      </Para>

      <center>
      <a href="https://ibb.co/wh5NmVX"><img src="https://i.ibb.co/4RhZrzG/adsr.jpg" alt="fm" border="0" width={450} height="250"/></a>
      </center>

      <Header>
        <center>
          <h2>Filter ADSR</h2>
        </center>
      </Header>
      <Para>
        <center>
          <p>The plugin also allows you to change the adsr of the filter envelope, this shapes the type of filter which is applied to the waveform thus changing the sound even more.</p>
        </center>
      </Para>

      <center>
      <a href="https://ibb.co/PmgGzNc"><img src="https://i.ibb.co/VjTYptg/modenv.png" alt="fm" border="0" width={300} height="200"/></a>
      </center>


    </>
  )
}
