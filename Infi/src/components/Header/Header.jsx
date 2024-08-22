import React from 'react';
import { Layout, Menu, Select, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext.jsx';

const { Header } = Layout;

function AppHeader() {
    const { t, i18n } = useTranslation();
    const { isDarkMode, toggleTheme } = useTheme();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Define menu items using the `items` prop
    const menuItems = [
        {
            key: '1',
            label: <Link to="/">{t('header.home')}</Link>,
        },
        {
            key: '2',
            label: <Link to="/blog">{t('header.blog')}</Link>,
        },
        {
            key: '3',
            label: <Link to="/tools">{t('header.tools')}</Link>,
        },
    ];

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Menu theme={isDarkMode ? 'dark' : 'light'} mode="horizontal" items={menuItems} style={{ flex: 1 }} />
            <Switch
                checkedChildren={t('darkMode')}
                unCheckedChildren={t('darkMode')}
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <Select
                defaultValue={i18n.language}
                style={{ width: 120, marginLeft: 20 }}
                onChange={changeLanguage}
            >
                <Select.Option value="en">English</Select.Option>
                <Select.Option value="es">Español</Select.Option>
            </Select>
        </Header>
    );
}

export default AppHeader;
