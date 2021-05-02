import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.8s linear;
    }
    .btn-primary {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text};
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
        transition: all 0.8s linear;
    }
    .toggle-btn {
        position: absolute;
        top: 2rem;
        right: 4rem;
        transition: all 0.8s linear;
    }
    .heading2Xl {
        font-size: 2.5rem;
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: -0.05rem;
        margin: 1rem 0;
      }
      
      .headingXl {
        font-size: 2rem;
        line-height: 1.3;
        font-weight: 800;
        letter-spacing: -0.05rem;
        margin: 1rem 0;
      }
      
      .headingLg {
        font-size: 1.5rem;
        line-height: 1.4;
        margin: 1rem 0;
      }
      
      .headingMd {
        font-size: 1.2rem;
        line-height: 1.5;
      }
      
      .borderCircle {
        border-radius: 9999px;
      }
      
      .colorInherit {
        color: inherit;
      }
      
      .padding1px {
        padding-top: 1px;
      }
      
      .list {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
      }
      a {
          color: #0070f3;
          text-decoration: none;
          font-weight: 700;
      }
      
      a:hover {
          text-decoration: underline;
      }
      .listItem {
        margin: 1rem 1rem 0 0;
      }
      
      .lightText {
        color: #666;
      }

      hr {
        margin: 1.5em auto;
        position: relative;
        height: 9px;
        width: 9px;
        border: transparent;
        overflow: visible;
        background-image: url('data:image/svg+xml;utf8,<svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="8" height="8" rx="4" fill="%231CB0A8" /></svg>');
        
        &:before {
          position: absolute;
          height: 9px;
          width: 10px;
          content: '';
          background-image: url('data:image/svg+xml;utf8,<svg width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.91043 1.29752C4.30449 0.688518 5.19551 0.688519 5.58957 1.29752L9.25143 6.95675C9.68196 7.62211 9.20436 8.5 8.41186 8.5H1.08814C0.29564 8.5 -0.181954 7.62211 0.248574 6.95675L3.91043 1.29752Z" fill="%23FCB643" /></svg>');
          left: -18px;
        }
        
        &:after {
          position: absolute;
          height: 9px;
          width: 9px;
          content: '';
          background-image: url('data:image/svg+xml;utf8,<svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.5" width="8" height="8" rx="1" fill="%23EF4056" /></svg>');
          right: -18px;    
        }
      }

`;

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    primary: '#6200ee'
};

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    primary: '#bb86fc'
};