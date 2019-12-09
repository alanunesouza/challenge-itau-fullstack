import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Discovery from '../pages/Discovery';
import NewDiscovery from '../pages/NewDiscovery';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Discovery} isPrivate />

      <Route path="/discoveries" exact component={Discovery} isPrivate />
      <Route path="/discoveries/add" exact component={NewDiscovery} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
