import React from 'react';
import { Route } from 'react-router';
import routes from '../Routes/routes';
import PlaceholderPage from '../Pages/PlaceholderPage';

const DashRoutes = () => {
  const renderSubroutes = subroutes => {
    if (subroutes) {
      return (
        <div>
          {Object.values(subroutes).map(subroute => {
            return (
              <Route key={subroute.text} exact path={subroute.link} render={<PlaceholderPage />} />
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {Object.values(routes()).map(route => {
        return (
          <div>
            <Route key={route.text} exact path={route.link} render={<PlaceholderPage />} />
            {renderSubroutes(route.subroutes)}
          </div>
        );
      })}
    </div>
  );
};

export default DashRoutes;
