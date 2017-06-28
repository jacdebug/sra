import React from 'react';
import { connect } from 'react-redux';
import Files from '../components/Files';
import { fetchAllFiles } from '../actions';
import { getFiles, getPaginationLinks } from '../reducers/selectors';
import { routeParamsToRequestQueryString } from '../helpers/url';

const mapDispatchToProps = dispatch => ({
  fetchAllFiles: path => {
    dispatch(fetchAllFiles(path));
  },
});

const mapStateToProps = (state, { match, location }) => ({
  files: getFiles(state),
  paginationLinks: getPaginationLinks(state),
  match,
});

class FilesContainer extends React.Component {
  componentWillMount() {
    this.props.fetchAllFiles(
      routeParamsToRequestQueryString(this.props.match.params)
    );
  }

  componentWillReceiveProps({ match }) {
    if (
      JSON.stringify(this.props.match.params) !== JSON.stringify(match.params)
    ) {
      this.props.fetchAllFiles(routeParamsToRequestQueryString(match.params));
    }
  }

  render() {
    return <Files {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesContainer);
