import React from 'react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css'
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import { IonApp, IonPage } from '@ionic/react';
import Todo from './components/Todo';
// import Todo from './components/Todo_app';



const App: React.FunctionComponent = () => (
  <IonApp>
      <IonPage>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Todo} exact={true} />
              {/* <Route exact path="/todo" component={Todo} /> */}
            </Switch>
          </BrowserRouter>
      </IonPage>
  </IonApp>
);

export default App;