import React from 'react'
import {StatusBar, Platform} from 'react-native'
import {AppLoading, Asset, Font} from 'expo'
import {Provider} from 'react-redux'
import store from './config/Store'

import RootContainer from './RootContainer'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      /* eslint-disable global-require */
      require('./assets/images/icons/baseline-add-24px.png'),
    ]),

    Font.loadAsync({
      /* eslint-disable */ 
        'Heebo': require('./assets/fonts/Heebo-Regular.ttf'),
        'Heebo-Black': require('./assets/fonts/Heebo-Black.ttf'),
        'Heebo-Bold': require('./assets/fonts/Heebo-Bold.ttf'),
        'Heebo-ExtraBold': require('./assets/fonts/Heebo-ExtraBold.ttf'),
        'Heebo-Light': require('./assets/fonts/Heebo-Light.ttf'),
        'Heebo-Medium': require('./assets/fonts/Heebo-Medium.ttf'),
        'Heebo-Thin': require('./assets/fonts/Heebo-Thin.ttf'),
      /* eslint-enable */
    }),
  ]);

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  };
  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true})
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }

    return (
      <Provider store={store}>
        <React.Fragment>
          {Platform.OS === 'ios' && <StatusBar barStyle='light-content' />}
          <RootContainer />
        </React.Fragment>
      </Provider>
    )
    
  }
}
