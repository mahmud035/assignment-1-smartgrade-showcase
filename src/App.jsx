import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Table from './components/Table/Table';

const App = () => {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <Header />
      <Table />
      <Footer />
    </div>
  );
};

export default App;
