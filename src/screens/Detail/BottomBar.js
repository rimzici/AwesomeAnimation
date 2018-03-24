import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from './Button';
import { Row } from '../../components';
import { getPlatformElevation } from '../../utils';

class BottomButtons extends PureComponent {
  render() {
    const { isHidden } = this.props;

    return (
      <Row style={styles.container}>
        <View style={styles.flexContainer}>
          <Button
            isHidden={isHidden}
            name="present"
            backgroundColor="#008dff"
          />
        </View>
        <View style={styles.flexContainer}>
          <Button
            isHidden={isHidden}
            name="wallet"
            backgroundColor="#ff2d4c"
            delay={125}
          />
        </View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 112,
    marginHorizontal: 16,
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomButtons;
