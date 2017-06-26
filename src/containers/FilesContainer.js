import React from 'react';
import { connect } from 'react-redux';
import Files from '../components/Files';
import { fetchAllFiles } from '../actions';

const mapDispatchToProps = dispatch => ({
  fetchAllFiles: () => {
    dispatch(fetchAllFiles());
  },
});

class FilesContainer extends React.Component {
  componentWillMount() {
      this.props.fetchAllFiles();
    
  }

  render() {
    return <Files {...this.props} />;
  }
}


export default connect(null, mapDispatchToProps)(FilesContainer);
