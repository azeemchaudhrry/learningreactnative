import React, {Component} from 'react';
import {Text} from 'react-native';

class BlinkText extends Component {
    constructor(props) {
      super(props);
      this.state = { IsShowingText: true };
  
      setInterval(() => {
        this.setState(previousState => (
          {IsShowingText: !previousState.IsShowingText}
        ))
      }, 1000);
    }
  
  
    render() {
      if(!this.state.IsShowingText)
      {
        return null;
      }
      return (
        <Text>{this.props.paragraph}</Text>
      )
    }
  }
  

export default BlinkText;