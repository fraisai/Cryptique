// COMPONENTS AND CONTAINERS
import CoinCard from './components/CoinCard';
import ConnectContainer from './containers/ConnectContainer';
import CryptoContainer from './containers/CryptoContainer';
import Dashboard from './containers/Dashboard';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import InvestmentsContainer from './containers/InvestmentsContainer';
import Navbar from './components/Navbar';
import NewsContainer from './containers/NewsContainer';
import OneDayChart from './components/dashboard-charts/OneDayChart';
import OneDayPieChart from './components/dashboard-charts/OneDayPieChart';
import OneWeekChart from './components/dashboard-charts/OneWeekChart';
import Sidebar from './components/Sidebar';
import Spinner from './components/Spinner';
import TrendingCardContainer from './containers/card-containers/TrendingCardContainer';
import TrendingContainer from './containers/TrendingContainer';

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
    OneDayChart,
    OneDayPieChart,
    OneWeekChart,
    Sidebar, 
    Spinner,
    TrendingCardContainer, 
    TrendingContainer, 
};

// SVG 
import LanguageSVG from './svg/dashboard/LanguageSVG';
import DashboardIconPieSVG from './svg/sidebar/DashboardIconPieSVG';
import CryptocurrenciesIconSVG from './svg/sidebar/CryptocurrenciesIconSVG';
import DropdownArrow from './svg/DropdownArrow';
import InvestmentsIcon from './svg/sidebar/InvestmentsIcon';
import NewsIcon from './svg/sidebar/NewsIcon';
import ConnectIconSVG from './svg/sidebar/ConnectIconSVG';
import AboutCryptiqueIconSVG from './svg/sidebar/AboutCryptiqueIconSVG.jsx';
import SupportIconSVG from './svg/sidebar/SupportIconSVG.jsx';
import SettingsIconSVG from './svg/sidebar/SettingsIconSVG.jsx';

export {
    AboutCryptiqueIconSVG,
    CryptocurrenciesIconSVG,
    DashboardIconPieSVG,
    DropdownArrow,
    LanguageSVG,
    InvestmentsIcon,
    NewsIcon,
    ConnectIconSVG,
    SupportIconSVG,
    SettingsIconSVG,
}


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
