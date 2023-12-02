import './App.css';
import OrderPage from './components/OrderPage';
import Navbar from './components/Navbar';
import Orderpage1 from './components/Orderpage1';
import Orderpage2 from './components/Orderpage2';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Orderpage1/>
      <Orderpage2/>
   <OrderPage/>
    </div>
  );
}

export default App;
