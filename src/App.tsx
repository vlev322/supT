import React from 'react';
import { Link } from 'react-router-dom';
import Router from './routes';
import './styles/vendors.scss';

import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';

const App = () => {
  SuperTokens.init({
    appInfo: {
      // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
      appName: '<YOUR_APP_NAME>',
      apiDomain: '<YOUR_API_DOMAIN>',
      websiteDomain: '<YOUR_WEBSITE_DOMAIN>',
      apiBasePath: '/auth',
      websiteBasePath: '/auth',
    },
    recipeList: [EmailPassword.init(), Session.init()],
  });
  return (
    <SuperTokensWrapper>
      <main>
        <p>App Works!</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Router />
      </main>
    </SuperTokensWrapper>
  );
};

export default App;
