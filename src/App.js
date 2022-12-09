import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import layer0 from '../src/Images/parallax0@2x.png';
import layer1 from '../src/Images/parallax1@2x.png';
import layer3 from '../src/Images/parallax3@2x.png';
import layer4 from '../src/Images/parallax4@2x.png';
import layer5 from '../src/Images/parallax5@2x.png';
import layer6 from '../src/Images/parallax6@2x.png';
import layer7 from '../src/Images/parallax7@2x.png';
import layer8 from '../src/Images/parallax8@2x.png';
function App() {
  return (
    <div className="App">
      <Parallax pages={1.5} className="Parallax">
        <ParallaxLayer
        speed={0.1} 
        style={{ backgroundImage: `url(${layer0})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        factor={1}
        ></ParallaxLayer>
        <ParallaxLayer 
        speed={0.05}
        factor={1}
        style={{ backgroundImage: `url(${layer1})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        ></ParallaxLayer>
        <ParallaxLayer
        speed={0.1}
        offset={0.05}
        factor={1} 
        style={{ backgroundImage: `url(${layer3})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        ></ParallaxLayer>
        <ParallaxLayer 
        speed={0.3}
        offset={0.15}
        factor={1} 
        style={{ backgroundImage: `url(${layer4})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        ></ParallaxLayer>
        <ParallaxLayer 
        speed={0.5}
        offset={0.25}
        factor={1} 
        style={{ backgroundImage: `url(${layer5})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        ></ParallaxLayer>
        <ParallaxLayer
        speed={0.6}
        offset={0.3}
        factor={1} 
        style={{ backgroundImage: `url(${layer6})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        ></ParallaxLayer>
        <ParallaxLayer
        speed={0.7}
        offset={0.35}
        factor={1} 
        style={{ backgroundImage: `url(${layer7})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        ></ParallaxLayer>
        <ParallaxLayer
        speed={0.8}
        offset={0.4}
        factor={1} 
        style={{ backgroundImage: `url(${layer8})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
