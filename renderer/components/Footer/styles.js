import css from 'styled-jsx/css';

export default css`
  .footer {
    height: 38px;
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2c2c2c;
    background: linear-gradient(
      180deg,
      rgba(64, 64, 64, 1) 0%,
      rgba(51, 51, 51, 1) 100%
    );
    z-index: 5;
    user-select: none;
    cursor: default;
  }
  h3 {
    margin: 0;
    color: white;
    font-size: 12px;
    letter-spacing: 0.02em;
    font-weight: 500;
  }
  .footer_settings {
    margin: -35px;
    height: 25px;
    width: 25px;
  }
  .footer-setting {
    padding-left: 10px;
  }
  .footer-settings__img {
    margin-left: 10px
    height: 25px;
    width: 25px;
  }
`;
