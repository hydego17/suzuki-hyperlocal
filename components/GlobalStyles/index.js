import { Global, css } from "@emotion/core"
import "bootstrap/dist/css/bootstrap.min.css"
const primary = "#163C80"
const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        @font-face {
          font-family: "SFProDisplay";
          src: url("fonts/SFProDisplay-Thin.woff2") format("woff2");
          font-weight: 200;
        }

        @font-face {
          font-family: "SFProDisplay";
          src: url("fonts/SFProDisplay-Light.woff2") format("woff2");
          font-weight: 300;
        }

        @font-face {
          font-family: "SFProDisplay";
          src: url("fonts/SFProDisplay-Regular.woff2") format("woff2");
          font-weight: 400;
        }
        @font-face {
          font-family: "SFProDisplay";
          src: url("fonts/SFProDisplay-Medium.woff2") format("woff2");
          font-weight: 500;
        }
        @font-face {
          font-family: "SFProDisplay";
          src: url("fonts/SFProDisplay-Semibold.woff2") format("woff2");
          font-weight: 600;
        }
        @font-face {
          font-family: "SFProDisplay";
          src: url("fonts/SFProDisplay-Bold.woff2") format("woff2");
          font-weight: 700;
        }

        html,
        body {
          scroll-behavior: smooth;
          min-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, SFProDisplay,
            Helvetica Neue, sans-serif;
          font-size: 15px;
          letter-spacing: 0.5px;
          color: rgb(37, 37, 37);
        }

        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: 500;
          line-height: 1.2;
        }

        p {
          margin: 0;
        }

        hr {
          height: 1px;
          background: transparent;
          border-top: 1px solid #f6f5f1;
        }

        a {
          color: inherit;
          text-decoration: none !important;
        }

        ul {
          list-style: none;
        }

        img {
          object-fit: cover;
          max-width: 100%;
        }

        input {
          font-size: 0.9rem;
          border-radius: 5px;
          border: 1px solid gray;
          outline: none;
          width: 100%;
          padding: 0.5rem;
        }

        button {
          font-weight: bold;
          margin: 10px auto 0 auto;
          font-family: inherit;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border: 0;

          &:active,
          &:focus {
            outline: none;
          }
        }

        .container {
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
          padding: 0.5rem 1.5rem;
        }

        .link_primary {
          background-color: white;
          color: #163c80;
          text-align: center;
          display: block;
          border-radius: 2px;
          border: 2px solid #163c80;
          padding: min(12px);
          transition: all 0.3s ease;

          &.block {
            color: white;
            background-color: #163c80;
          }

          &:hover {
            color: white;
            background-color: #163c80;
          }
        }

        .banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          color: white;
          background: ${primary};
          text-align: center;
        }

        .label {
          display: inline-block;
          border-radius: 3px;
          font-size: 11px;
          color: #1f75e1;
          background: rgba(31, 117, 225, 0.08);
          border: 1px solid rgba(31, 117, 225, 0.63);
          padding: 3px 8px;
        }
      `}
    />
  </>
)

export default GlobalStyles
