import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUserInfo } from '../actions/index'
import Users from '../components/Users.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state["users"]
  }
}

const mapDispatchToProps =  ({
  onClick: addUserInfo
});

const UserFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UserFilter;