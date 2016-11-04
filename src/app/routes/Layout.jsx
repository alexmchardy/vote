/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

const styles = {
  container: {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 50,
  },
};

class Layout extends Component {

  muiTheme = getMuiTheme({
    //userAgent: this.props.userAgent,
    palette: {
      accent1Color: deepOrange500,
    },
  });

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vote/0">Vote Page</Link></li>
            <li><Link to="/election">Election Page</Link></li>
          </ul>
          </header>
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
