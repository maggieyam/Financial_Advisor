
import { connect } from 'react-redux';
import Preference from './preferences';
import { fetchPreferences } from '../../actions/preference_actions';

const mapStateToProps = ({ preferences }) => {
    return {
      preferences: Object.values(preferences)
    }
};

const mapDispatchToProps = dispatch => ({
  fetchPreferences: () => dispatch(fetchPreferences()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preference);