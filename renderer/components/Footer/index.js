import React from 'react';
import styles from './styles';
import settings from '../../statics/icon/settings.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="#" className="footer-setting">
          <img className="footer-settings__img" src={settings} />
        </a>
      </div>
      <h3>jijo</h3>
      <div>
        
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
