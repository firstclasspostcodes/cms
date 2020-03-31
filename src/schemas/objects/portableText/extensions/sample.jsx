import React from 'react';
import PropTypes from 'prop-types';
import { FiCode as Icon } from 'react-icons/fi';

const SampleRenderer = ({ children }) => <samp style={{ background: '#EEE' }}>{children}</samp>;

SampleRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Sample',
  value: 'samp',
  blockEditor: {
    icon: Icon,
    render: SampleRenderer,
  },
};
