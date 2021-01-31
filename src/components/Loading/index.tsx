import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import './styles.scss';

const Loading: React.FC = () => (
  <div className="loading">
    <LoadingOutlined className="loading-spinner" />
  </div>
);

export default Loading;
