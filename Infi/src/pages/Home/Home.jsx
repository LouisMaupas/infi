// src/pages/Home/Home.jsx
import React from 'react';
import { Typography, Card, List, Space } from 'antd';
import { ReadOutlined, ToolOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';

const { Title, Paragraph } = Typography;

const featuredArticles = [
    { title: 'Article 1', description: 'Description of article 1' },
    { title: 'Article 2', description: 'Description of article 2' },
    { title: 'Article 3', description: 'Description of article 3' },
];

const featuredTools = [
    { title: 'Tool 1', description: 'Description of tool 1' },
    { title: 'Tool 2', description: 'Description of tool 2' },
];

function Home() {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Space direction="vertical" size="large" className={styles.content}>
                <Title level={1}>{t('home.welcome')}</Title>
                <Paragraph>{t('home.description')}</Paragraph>

                <Card title={t('home.featuredArticles')} className={styles.card}>
                    <List
                        itemLayout="horizontal"
                        dataSource={featuredArticles}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<ReadOutlined />}
                                    title={item.title}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </Card>

                <Card title={t('home.featuredTools')} className={styles.card}>
                    <List
                        itemLayout="horizontal"
                        dataSource={featuredTools}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<ToolOutlined />}
                                    title={item.title}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </Space>
        </div>
    );
}

export default Home;