import React from 'react';
import {SkypeIndicator} from 'react-native-indicators';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
// import Spinner from 'react-native-spinkit';
import Color from '../../constant/Color';

const LoadingScreen = props => {
  const {flag} = props;
  return (
    <Modal isVisible={flag} animationOutTiming={800}>
      <SkypeIndicator animationDuration={2000} color={Color.main.blueAkun} />
    </Modal>
  );
};

LoadingScreen.propTypes = {
  flag: PropTypes.bool.isRequired,
};

export default LoadingScreen;
