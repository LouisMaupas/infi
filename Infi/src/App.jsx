// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from '../src/components/Header/Header.jsx';
import Home from "./pages/Home/Home.jsx";

function AppContent() {
    const { isDarkMode } = useTheme();

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                {/*<Footer />*/}
            </Router>
        </ConfigProvider>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;