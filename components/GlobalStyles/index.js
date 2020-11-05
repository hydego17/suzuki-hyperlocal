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
          src: url("fonts/SFProDisplay-Regular.eot");
          src: url("fonts/SFProDisplay-Regular.eot?#iefix")
              format("embedded-opentype"),
            url("fonts/SFProDisplay-Regular.otf") format("opentype"),
            url("fonts/SFProDisplay-Regular.svg") format("svg"),
            url("fonts/SFProDisplay-Regular.ttf") format("truetype"),
            url("fonts/SFProDisplay-Regular.woff") format("woff"),
            url("fonts/SFProDisplay-Regular.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
        }

        html,
        body {
          min-height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, SFProDisplay-Regular,
            Helvetica Neue, sans-serif;
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

        form {
          margin: 0 2rem;
          display: flex;
          flex: 1;

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
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0.5rem 1rem;
          padding-top: 5rem;
        }
      `}
    />
  </>
)

export default GlobalStyles
