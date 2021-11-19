import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';


// class SocialMedia extends Component {

//   state = {
//     count: 1
//   }


//   Share = () => {
//     // console.log(this.params.count++);
//     this.setState(state => ({
//       count: ++state.count
//     }))
    
    
//   }
//   render() {
//     const {link, text, social} = this.props;
//     const {count} = this.state;
//     return (

//       <p>
//         <button onClick={this.Share} >+1</button>
//         <a href={link}>{text}</a> \/
//         <span>{social}</span>
//         <span>{count}</span>
//       </p>
//     )
//   }


// }




// const All = () => {
//   return (
//     <>
//       <SocialMedia link="https://damir.com" text="Click me" social="Instagram"/>
//       <SocialMedia link="https://damir.com" text="Click me" social="Facebook"/>
//       <SocialMedia link="https://damir.com" text="Click me" social="Telegram"/>
//     </>
//   )
// }

ReactDOM.render(

  <App />,
  document.getElementById('root')
);

