
import './App.css';
import CardAlert from './components/CardAlert';



function App() {
  return (
    <div className="App">
      <CardAlert

        image='cookie'
        text='Nós utilizamos cookies para melhorar 
        nossa UX, analytics e marketing.'
        btn='orange'
      />

      <CardAlert

        image='alert'
        text='Você será deslogado imediatamente!'
        btn='blue'
      />

    </div>
  );
}

export default App;
