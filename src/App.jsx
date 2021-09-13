import logo from './logo.svg';
import './App.scss';
import Routes from './routes/routes';
import NavBar from './shared/navbar/navbar.jsx';

function App() {
  return (
    <>
      <section>
        <NavBar />
      </section>
      <section>
        <Routes />
      </section>
    </>
  );
}

export default App;
