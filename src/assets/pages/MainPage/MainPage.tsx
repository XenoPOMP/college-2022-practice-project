import React from 'react';
import Page from '../../components/Page/Page';

const MainPage = () => {
  return (
    <Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
      <h1>Это шапка</h1>
      <h2>Это заголовок внутри контента</h2>
      <span>Это обычный текст</span>
    </Page>
  );
};

export default MainPage;
