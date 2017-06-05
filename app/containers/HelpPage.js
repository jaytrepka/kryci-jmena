import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Help from '../components/Help';
import * as HelpActions from '../actions/help';

function mapStateToProps(state) {
  return {
    help: state.help
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HelpActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
