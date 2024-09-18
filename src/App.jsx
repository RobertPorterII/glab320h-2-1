import Content from './components/Content';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

// function Header() {
//   return (<h1>Keeping it real Basic on React</h1>);
// }

// function Content() {
//   return (<p>How we begin is simple what we become can be very complex!</p>);
// }
// function Content(props) {
//   return (<p style={{ color: props.color}}>{props.text}</p>);
// }

// function Footer() {
//   return (<h1>End of Line Buddy Boy.</h1>);
// }

function App() {


  return (
    <main>
      <Header />
      {/* <Content /> */}
      <Content color ="royalblue" text="How we begin is simple what we become can be very complex!" />
      <Content color = "crimson" text="The journey will be long and difficult but ultimately rewarding." />
      <Content color ="darkgreen" text="As venture deep down this lonly road of React applications, hold me close in your prayers." />
      <Footer />
    </main>
  );
}

export default App
