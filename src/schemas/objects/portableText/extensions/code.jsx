import React from 'react';
import PropTypes from 'prop-types';

const CodeRenderer = ({ children }) => (
  <div>
    <pre>
      <code style={{ display: 'block', padding: '10px', background: '#DEDEDE' }}>{children}</code>
    </pre>
  </div>
);

CodeRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  title: 'Code',
  value: 'code',
  blockEditor: {
    render: CodeRenderer,
  },
};
