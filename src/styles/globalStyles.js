import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s linear;
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      min-height: 100px;
      margin-top: 60px;
      font-size: .85em;
      opacity: .8;
    }
    i svg {
      position: relative;
      width: 1em;
      margin: 0 3px;
      top: .125em;
    }

    .toggle-btn {
        position: absolute;
        top: 2rem;
        right: 4rem;
        transition: all 0.3s linear;
    }
    @media screen and (max-width: 768px) {
      .toggle-btn {
        position: absolute;
        top: 2rem;
        right: 2rem;
        transition: all 0.3s linear;
      } 
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
        color: #8899a6;
      }
      .projectCard:hover .title {
        text-decoration: underline;
     }
     .projectLink {
         float: left;
         margin: 5px;
         padding: 3px;
         border-radius: 2px;
         background-color: #eaeaea;
         color: black;
         text-decoration: none;
     }
    //  .projectLinkActive {
    //      color: white;
    //      background-color: #494850;
    //      font-weight: bold;
    //  }
    //  .projectCards {
    //   display: grid;
    //   grid-auto-flow: row-dense;
    //   // display: flex;
    //   // flex-flow: wrap;
    //   // flex-direction: column;
    //   // flex-wrap: wrap;
    //   // width: 100%;
    //   // max-width: 1068px;
    //  }
     .social-links {
       color: ${({ theme }) => theme.social_links}
     }
     .social-links:hover {
       color: ${({ theme }) => theme.social_links_hover}
     }
     
    //  .projectCard:hover {
    //     boxShadow: rgba(0, 0, 0, 0.21) 0px 6px 16px 0px;
    //  }
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#15202b',
    primary: '#6200ee',
    cardBg: '#494850',
    social_links: '#192734',
    social_links_hover: '#47A1EB',
};

export const darkTheme = {
    // body: "#121212",
    body: '#15202b',
    text: '#e4e6eb',
    cardBg: '#333',
    primary: '#bb86fc',
    // cardBg: "#eee"
    social_links_hover: '#47A1EB',
    social_links: '#0070f3',
};
