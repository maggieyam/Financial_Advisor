
import { connect } from 'react-redux';
import { fetchPreferences, fetchPreference } from '../../actions/preference_actions';
import Portfolio from './portfolio';

const mapStateToProps = ({preferences}, {match}) => {
    return {
      preference: preferences[match.params.level],
    }
};

const mapDispatchToProps = dispatch => ({
//   fetchPreferences: () => dispatch(fetchPreferences()),
  fetchPreference: (level) => dispatch(fetchPreference(level)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);