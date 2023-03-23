import './App.css';
import TableOfContent from './TableOfContent';
import Movies from './Movies';
import Favorite from './Favorite';

function App() {

  const title="Browse Films:";
  const logoImgLink="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254";
  
  return (
    <div className="app">
       <TableOfContent />
      <div className="content">
        <img className="logo" src={logoImgLink} alt="logo"/>
        <Favorite/>
        <h1>{title}</h1>
        <Movies/>
      </div>      
     
    </div>
  );
}

export default App;
