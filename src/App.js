// Components
import PrimeiroComponente from './components/primeiroComponente';
import TemplateExpressions from './components/TemplateExpressions';
import Challenge from './components/Challenge';
import UserDetails from './components/UserDetails';
//styles CSS
import './App.css';

const pessoas = [
  {id: 0, nome: "Caíque", idade: 28, profissao: "estudante"},
  {id: 1, nome: "Anderson", idade: 58, profissao: "carteiro"},
  {id: 2, nome: "Iane", idade: 16, profissao: "baba"},
]

function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu primeiro App</p>
      <PrimeiroComponente/>
      <TemplateExpressions/>
      <Challenge/>
      {pessoas.map((pessoas) =>(
      <UserDetails 
      key={pessoas.id}
      nome={pessoas.nome} 
      idade={pessoas.idade} 
      profissao={pessoas.profissao}   />)
      )}
    </div>
  );
}

export default App;
