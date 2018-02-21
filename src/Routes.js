import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import  App  from './components/App'
import Drugstore from './components/Drugstore'
import DrivingSchool from './components/DrivingSchool'
import Workshop from './components/Workshop'
import ForwardMan from './components/ForwardMan'
import Supermaket from './components/Supermaket'
import Concerts from './components/Concerts'

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 60 }}>
    <Scene key='main' component={ App } initil title="My help - tudo num so lugar"/>
    <Scene key='drugstore' component={ Drugstore }  title="Farmacias"/>
    <Scene key='drivingSchool' component={ DrivingSchool }  title="Auto Escolas"/>
    <Scene key='carRepair' component={ Workshop }  title="Oficinas e autopeças"/>
    <Scene key='forwardMan' component={ ForwardMan }  title="Despachantes"/>
    <Scene key='supermakets' component={ Supermaket }  title="Supermercados"/>
    <Scene key='workshop' component={ Concerts }  title="Concertos"/>
  </Router>
)


export default Routes;
