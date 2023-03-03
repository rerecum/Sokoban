import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Map extends React.Component{
  renderSquare(i) {
    return (
    <Square value = {this.props.squares[i]}
    onClick = {() => this.props.onClick(i)}/>
    );
  }
}

reportWebVitals();
