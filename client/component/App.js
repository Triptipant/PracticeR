import React from 'react';
import Main from './Main';
import * as Actions from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Cart from './Cart'


/*const test = React.createClass({
    render () {
        return(
<div className="App-intro">
          <Cart />
        </div>
        )
    }

})
  export default test;*/

function mapStateToProps(state){
    return {
    login : state.login,
    dashboard: state.dashboard
    }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(Actions, dispatch);
} 

const App = connect(mapStateToProps,
mapDispatchToProps)(Main);

export default App;