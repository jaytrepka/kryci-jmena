import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Guess from '../components/Guess';
import * as GuessActions from '../actions/guess';

function mapStateToProps(state) {
  return {
    guess: state.guess
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GuessActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Guess);
