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
import SignIn from './components/SignIn.jsx';
import Sidebar from './components/Sidebar';
import Spinner from './components/Spinner';
import TrendingCardContainer from './containers/card-containers/TrendingCardContainer';
import TrendingContainer from './containers/TrendingContainer';
import InvestmentsCard from './components/InvestmentsCard.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import SignupContainer from './containers/SignupContainer.jsx';
import TermsConditions from './containers/TermsConditions.jsx';
import InputCheckbox from './components/InputCheckbox.jsx';


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
    SignIn,
    Spinner,
    TrendingCardContainer, 
    TrendingContainer, 
    InvestmentsCard,
    LoginContainer, 
    SignupContainer,
    TermsConditions,
    InputCheckbox
};





// SVG ICONS
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
import GoogleSignInSVG from './svg/sign-in/GoogleSignInSVG.jsx';
import GithubSignInSVG from './svg/sign-in/GithubSignInSVG.jsx';
import RightArrowSVG from './svg/RightArrowSVG.jsx';
import AddInvestmentsButtonSVG from './svg/coin-card/AddInvestmentsButtonSVG.jsx';
import LeftArrowSVG from './svg/LeftArrowSVG.jsx';
import TrashcanSVG from './svg/TrashcanSVG.jsx';
import ThreeDotsSVG from './svg/ThreeDotsSVG.jsx';
import FacebookIconSVG from './svg/footer/FacebookIconSVG.jsx';
import InstagramIconSVG from './svg/footer/InstagramIconSVG.jsx';
import TwitterIconSVG from './svg/footer/TwitterIconSVG.jsx'



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
    GoogleSignInSVG,
    GithubSignInSVG,
    RightArrowSVG,
    AddInvestmentsButtonSVG, 
    LeftArrowSVG,
    TrashcanSVG,
    ThreeDotsSVG,
    FacebookIconSVG,
    InstagramIconSVG,
    TwitterIconSVG
}


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
