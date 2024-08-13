// COMPONENTS AND CONTAINERS
import CoinCard from './components/CoinCard.jsx';
import ConnectContainer from './containers/ConnectContainer.jsx';
import CryptoContainer from './containers/CryptoContainer.jsx';
import CryptoOneWeekChart from './components/dashboard-charts/CryptoOneWeekChart.jsx'; // used in CoinCard.jsx
import Dashboard from './containers/Dashboard.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Footer from './components/Footer.jsx';
import InputCheckbox from './components/InputCheckbox.jsx';
import InvestmentsCard from './components/InvestmentsCard.jsx';
import InvestmentsContainer from './containers/InvestmentsContainer.jsx';
import LandingContainer from './containers/LandingContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import Navbar from './components/Navbar.jsx';
import NewsContainer from './containers/NewsContainer.jsx';
import OneDayChart from './components/dashboard-charts/OneDayChart.jsx'; // used in Dashboard.jsx
import OneDayPieChart from './components/dashboard-charts/OneDayPieChart.jsx';
import OneWeekChart from './components/dashboard-charts/OneWeekChart.jsx';
import Pagination from './components/Pagination.jsx';
import Sidebar from './components/Sidebar.jsx';
import SignIn from './components/SignIn.jsx';
import SignupContainer from './containers/SignupContainer.jsx';
import Spinner from './components/Spinner.jsx';
import TermsConditions from './containers/TermsConditions.jsx';
import TrendingCardContainer from './containers/card-containers/TrendingCardContainer.jsx';
import TrendingContainer from './containers/TrendingContainer.jsx';

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
    InputCheckbox,
    CryptoOneWeekChart,
    Pagination,
    LandingContainer
};





// SVG ICONS
import LanguageSVG from './svg/dashboard/LanguageSVG.jsx';
import DashboardIconPieSVG from './svg/sidebar/DashboardIconPieSVG.jsx';
import CryptocurrenciesIconSVG from './svg/sidebar/CryptocurrenciesIconSVG.jsx';
import DropdownArrow from './svg/DropdownArrow.jsx';
import InvestmentsIcon from './svg/sidebar/InvestmentsIcon.jsx';
import NewsIcon from './svg/sidebar/NewsIcon.jsx';
import ConnectIconSVG from './svg/sidebar/ConnectIconSVG.jsx';
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
