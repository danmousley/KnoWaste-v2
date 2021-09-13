import logo from './logo.svg';
import './App.scss';
import Example from './pages/example/example.jsx';
import Routes from './routes/routes';

function App() {
  return (
    <>
      {/* <section>
        <NavBar />
      </section> */}
      <section>
        <Routes />
      </section>
    </>
  );
}

export default App;
