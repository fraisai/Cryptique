import CoinCard from './components/CoinCard';
import ConnectContainer from './containers/ConnectContainer';
import CryptoContainer from './containers/CryptoContainer';
import Dashboard from './containers/Dashboard';
import Footer from './components/Footer';
import InvestmentsContainer from './containers/InvestmentsContainer';
import Navbar from './components/Navbar';
import NewsContainer from './containers/NewsContainer';
import Sidebar from './components/Sidebar';
import TrendingCardContainer from './containers/card-containers/TrendingCardContainer';
import TrendingContainer from './containers/TrendingContainer';
import Spinner from './components/Spinner';
import ErrorPage from './components/ErrorPage';

export { 
    CoinCard, 
    ConnectContainer, 
    CryptoContainer, 
    Dashboard, 
    ErrorPage,
    Footer, 
    InvestmentsContainer, 
    Navbar, 
    NewsContainer, 
    Sidebar, 
    Spinner,
    TrendingCardContainer, 
    TrendingContainer, 
};


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
