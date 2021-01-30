import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons/lib';

import './styles.scss';

const CreateCard: React.FC = () => (
  <div className="create-card">
    <div>
      <PlusCircleOutlined />
    </div>
    <div>Create Services Card</div>
  </div>
);

export default CreateCard;
