import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Vybe from './pages/projects/Vybe';
import YouTubeShorts from './pages/projects/YouTubeShorts';
import SaasChurn from './pages/projects/SaasChurn';
import AIReview from './pages/projects/AIReview';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    const location = useLocation();

    return (
        <>
            <CustomCursor />
            <Navbar />
            <ScrollToTop />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/project/vybe" element={<Vybe />} />
                    <Route path="/project/youtube-shorts" element={<YouTubeShorts />} />
                    <Route path="/project/saas-churn" element={<SaasChurn />} />
                    <Route path="/project/ai-review" element={<AIReview />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    );
}
