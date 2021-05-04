import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s linear;
    }
    // .btn-primary {
    //     background: ${({ theme }) => theme.primary};
    //     color: ${({ theme }) => theme.text};
    //     padding: 0.5rem 1.5rem;
    //     font-size: 1rem;
    //     border-radius: 1rem;
    //     cursor: pointer;
    //     outline: none;
    //     border: none;
    //     transition: all 0.3s linear;
    // }
    .toggle-btn {
        position: absolute;
        top: 2rem;
        right: 4rem;
        transition: all 0.3s linear;
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
     .projectLinkActive {
         color: white;
         background-color: #494850;
         font-weight: bold;
     }
     .projectCards {
      display: flex,
      flex-flow: wrap,
      max-width: 1068px
     }
`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
  primary: "#6200ee",
  cardBg: "#ccc"
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  cardBg: "#333",
  primary: "#bb86fc",
};
