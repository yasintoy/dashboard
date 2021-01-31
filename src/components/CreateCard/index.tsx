import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons/lib';

import './styles.scss';

const CreateCard: React.FC = () => (
  <div className="create_card">
    <div>
      <PlusCircleOutlined />
    </div>
    <div className="create_card_text">Create Services Card</div>
  </div>
);

export default CreateCard;
