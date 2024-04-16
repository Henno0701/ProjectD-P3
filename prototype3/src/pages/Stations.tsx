import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Stations.css';

import StationsReserve from './Stations-Reserve';

const Stations: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent fullscreen>
      <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Redirect exact path="/Stations" to="/Stations" />
              <Route path="/reserve" render={() => <StationsReserve />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="top">
              <IonTabButton tab="reserve" href="/reserve">
                <IonLabel>Reserve Stations</IonLabel>
              </IonTabButton>

            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Stations page" />
      </IonContent>
    </IonPage>
  );
};

export default Stations;
