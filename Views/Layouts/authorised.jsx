const React = require('react');
const AuthorisedNavBar = require('../Fragments/AuthorisedNav');
class AuthorisedLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-bootstrap-typeahead@5.1.1/css/Typeahead.css"
            type="text/css">
          </link>

        </head>
        <body>
          <AuthorisedNavBar></AuthorisedNavBar>
          <main role="main">
            {this.props.children}
          </main>
          <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
          <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous"></script>

          <script
            type="text/javascript"
            src="/public/react-bootstrap.js"
            >
          </script>

        </body>
      </html>
    );
  }
}

module.exports = AuthorisedLayout;
