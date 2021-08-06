// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'
import { EmailVerifyer } from './EmailVerifyer';

function App() {
  const [background, setBackground] = useState('')
  const [font, setFont] = useState('')
  const [accent, setAccent] = useState('')

  const backgroundStyle = {
    backgroundColor: background
  }

  const borderStyle = {
    border: 'thick double ' + accent
  }

  const fontStyle = {
    color: font
  }

  const buttonStyle = {
    backgroundColor: accent
  }

  const handleClick = () => {
    window.alert('This is a dummy button you stupid idiot! It doesn \'t do anything!')
  }

  return (
    <div className="App" style={backgroundStyle}>
      <header className="App-header">
        <div id='input-container'>
          <input
            type='text'
            value={background}
            onChange={(e) => setBackground(e.target.value)} />

          <input
            type='text'
            value={accent}
            onChange={(e) => setAccent(e.target.value)} />

          <input
          type='text'
          value={font}
          onChange={(e) => setFont(e.target.value)} />

        </div>

        <div id='border' style={borderStyle}>
          <p className='filler-text' style={fontStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium et arcu non commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eget bibendum justo, sit amet posuere erat. Nunc a diam interdum, consequat purus sit amet, sodales nisi. Aliquam sit amet auctor ipsum, dignissim lobortis ligula. Phasellus non lectus mauris.
          </p>
          <p className='filler-text' style={fontStyle}>
          Nullam ornare ligula enim, sit amet posuere arcu bibendum lacinia. Pellentesque non nisi fringilla, pulvinar massa sit amet, rhoncus purus. Praesent consectetur odio nec elit laoreet condimentum. Duis sollicitudin turpis sodales tortor placerat aliquam eget sodales risus. Aliquam erat volutpat. Suspendisse mauris urna, porta et neque ac, rutrum tempor nunc. Morbi blandit placerat velit, at eleifend est facilisis eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas finibus interdum est, sed feugiat mi volutpat a. Duis ornare a odio eu tempor. Morbi dui sapien, commodo at eleifend a, pellentesque nec felis. Aliquam erat volutpat. Aenean vel mauris vitae urna ultricies fringilla. Proin interdum mi erat. Sed cursus faucibus lectus in pretium. Curabitur sit amet sapien vehicula tortor varius lacinia.
          </p>
        </div>

        <button type='button' onClick={handleClick} style={buttonStyle}>Click me</button>

      </header>
    </div>
  );
}

export default App;
