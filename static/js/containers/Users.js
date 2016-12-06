import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Users from '../components/Users.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (elements) => {
      dispatch(getusers(ownProps.filter))
    }
  }
}

const FilterUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default FilterUsers;