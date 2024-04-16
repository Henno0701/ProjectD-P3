import { IonCard, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonCol, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { arrowForwardOutline, batteryHalfOutline, timeOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonTitle className='title-welcome'>Welcome</IonTitle>
        <IonTitle className='title-name'>Maruf</IonTitle>
        <h3 className='title-card'>Car Status</h3>
          <IonRow>
            <IonCol>
              <IonCard>
                <div className='card-container'>
                  <IonIcon icon={batteryHalfOutline} className='icon-battery card-icon' size='large'></IonIcon>
                  <p className='card-text'>56%</p>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <div className='card-container'>
                  <IonIcon icon={timeOutline} className='card-icon' size='large'></IonIcon>
                  <p className='card-text'>8:24</p>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>

      <h3 className='title-card'>Quick Access</h3>
      <IonButton expand='block' className='button'>
        Make Reservation
        <IonIcon icon={arrowForwardOutline}></IonIcon>
      </IonButton>
      <IonButton expand='block' className='button'>
        Example
        <IonIcon icon={arrowForwardOutline}></IonIcon>
      </IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
