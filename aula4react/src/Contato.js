import foto from './gabriel-foto.jpeg';
import './Contato.css'


function Contato() {
    return (
        <div className="App">
        <header classname="App-header">

            <img src={foto} className="foto" alt="foto1" />
          <h1> Julio Gabriel Charlante</h1>
          <h3> 31 anos, casado, sem filhos.</h3>
          <h3> Desenvolvedor de softwares.</h3><br/>

          <a className='App-link' href='./App.js'> App </a>

          </header>
        </div>
      );
    }
    
export default Contato;