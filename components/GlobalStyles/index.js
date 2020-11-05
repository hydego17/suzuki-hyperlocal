import { Global, css } from "@emotion/core"

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
          font-family: "SFProDisplay-Regular";
          src: url("fonts/SFProDisplay-Regular.woff") format("woff"),
            url("fonts/SFProDisplay-Regular.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
        }

        html,
        body {
          scroll-behavior: smooth;
          min-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, SFProDisplay-Regular,
            Helvetica Neue, sans-serif;
          font-size: 15px;
          letter-spacing: 0.5px;
          background-color: #f1f5f6;
        }

        h1 {
          font-size: 18px;
          line-height: 1.35;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }

        img {
          object-fit: cover;
          width: 100%;
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
          padding: 0.5rem;
          cursor: pointer;
        }

        .container {
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
          padding: 0.5rem 1.5rem;
        }

        .link_primary {
          text-align: center;
          display: block;
          border-radius: 2px;
          border: 2px solid #163c80;
          padding: 1rem;
          transition: all 0.3s ease;

          &:hover {
            color: white;
            background-color: #163c80;
          }
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
