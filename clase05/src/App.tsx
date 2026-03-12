
import { StatusBar,  useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { CountScreen } from './Components';
import React from 'react';
import { colors } from './themes';
import { appStyles } from './App.style';
import { Text } from 'react-native';


type AppProps = {}

type AppState = {
  result: number;
}

export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps){
    super(props)

    this.state = {
      result: 0
    }
  }

  handleOperation = (value: number) => {
    this.setState({
      result: this.state.result + value
    })
  }

  multiply = () => {
    this.setState({
      result: this.state.result * 2
    })
  }

  divide = () => {
    this.setState({
      result: this.state.result / 2
    })
  }

  reset = () => {
    this.setState({
      result: 0
    })
  }

  render(){

    return(

      <View style={appStyles.safeArea}>
        <View style={appStyles.container}>

          <Text>Resultado: {this.state.result}</Text>

          <CountScreen label="+1" OnPress={() => this.handleOperation(1)} />
          <CountScreen label="-1" OnPress={() => this.handleOperation(-1)} />

          <CountScreen label="x2" OnPress={this.multiply} />
          <CountScreen label="/2" OnPress={this.divide} />

          <CountScreen label="Reset" OnPress={this.reset} />

        </View>
      </View>

    )
  }
}

export default App