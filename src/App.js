import { Layout, Menu } from 'antd';
import './App.css';
import './test.css'
import { Route, Routes } from 'react-router-dom';
import HeaderLayout from './components/header/HeaderLayout';
import FooterLayout from './components/footer/FooterLayout';
import Countries from './pages/countries/Countries';
import Home from './pages/home/Home';
import Pricing from './pages/pricing/Pricing';
import Lists from './pages/lists/Lists';
import Features from './pages/features/Features';
import Misc from './pages/misc/Misc';
import Blog from './pages/blog/Blog';
import BlogSingle from './pages/blog/BlogSingle';
import Terms from './pages/terms/Terms';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import MiscFeatures from './pages/miscFeatures/MiscFeatures';
import AboutUs from './pages/aboutUs/AboutUs';

const { Content } = Layout;

function App() {
  return (
    <div className="App container-main">
      <Layout>
        <HeaderLayout />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pricing/*" element={<Pricing />} />
            <Route path="available-data/*" element={<Lists />} />
            <Route path="features" element={<Features />} />
            <Route path="features/more*" element={<MiscFeatures />} />
            <Route path="blog" element={<Blog />} />
            <Route path="misc/*" element={<Misc />} />
            <Route path="blog/*" element={<BlogSingle />} />
            <Route path="terms/*" element={<Terms />} />
            <Route path="privacy-policy/*" element={<PrivacyPolicy />} />
            <Route path="countries/*" element={<Countries />} />
            <Route path="about-us/*" element={<AboutUs />} />
            <Route>404 Not Found</Route>
          </Routes>
        </Content>  
        <FooterLayout />
      </Layout>
    </div >
  );
}

export default App;
