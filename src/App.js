import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Personal De La Empresa</h1>
        <Testimonio 
        nombre='Nicolas Agosti'
        pais='Argentina'
        cargo='Ingeniero en Sistemas De Información'
        empresa='Google'
        descripcion='Las comillas invertidas no son caracteres ASCII tradicionales. Sin embargo, si te refieres al carácter de acento grave (`) que a menudo se utiliza en la programación para delimitar literales de plantillas en lenguajes como JavaScript o para crear cadenas de plantillas en JavaScript'
        imagen='cail'
        />
        <Testimonio 
        nombre='Elias Aires'
        pais='Argentina'
        cargo='Analista De Sistemas'
        empresa='Amazon'
        descripcion='Las comillas invertidas no son caracteres ASCII tradicionales. Sin embargo, si te refieres al carácter de acento grave (`) que a menudo se utiliza en la programación para delimitar literales de plantillas en lenguajes como JavaScript o para crear cadenas de plantillas en JavaScript'
        imagen='elias'
        />
      </div>
    </div>
  );
}

export default App;
