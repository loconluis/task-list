import css from 'styled-jsx/css';

export default css`
  .topbar {
    height: 38px;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
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
`;
