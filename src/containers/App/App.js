import './App.css';
import "../../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Home from '../Home';
import Work from '../../components/Work';
import HireCard from '../../components/Hire';
import Transfer from '../../components/Transfer';
import Club from '../../containers/Club'
import KickStart from '../KickStart';
import Intercom from '../Intercom';
import Blue from '../Blue';
import Footer from '../Footer';
import data from "../../Data/footerData";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Work />
      <HireCard />
      <Transfer />
      <Club />
      <KickStart />
      <Intercom />
      <Blue />
      <Footer data={data} colProps="col-6 col-lg-6"/>
    </div>
  );
}

export default App;
