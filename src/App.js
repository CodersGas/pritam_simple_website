import { Navbar, Footer } from './components';
import { PaymentPage } from './pages';
import HomePage from './pages/home/homePage';

function App() {
  return (
    <div className="App allPageContainer">
      <Navbar />
      <HomePage />
      {/* <PaymentPage /> */}
      <Footer />
    </div>
  );
}

export default App;
