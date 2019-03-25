import React, {Component} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import TextArea from '../TextArea/TextArea.component'
import styles from './Home.component.style';
import PropsTypes from 'prop-types';

class Home extends Component {
    render () {
        return (
        <View style={styles.container}>
            <Text style={styles.textAreaTitle}>Please enter your notes here:</Text>
            <TextArea style={styles.textArea}/>
            <Button Text='Submit'/>
        </View>
        );
    }
}

export default Home;