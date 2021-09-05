import React from 'react';
import { Link } from 'react-router-dom';

import editIcon from '../../assets/icons/editIcon.svg';
import trashIcon from '../../assets/icons/trashIcon.svg';

import { Container } from './style';

export const Card: React.FC = () => {
  return (
    <Container>
      <div className="info">
        <div className="contact-name">
          <strong>Hugo Cesar</strong>

          <small>instagram</small>
        </div>

        <span>hugo@email.com</span>

        <span>(82) 99999-9999</span>
      </div>

      <div className="actions">
        <Link to="/edit/123">
          <img src={editIcon} alt="Edit" />
        </Link>
        <button type="button">
          <img src={trashIcon} alt="Trash" />
        </button>
      </div>
    </Container>
  );
};

export default Card;
