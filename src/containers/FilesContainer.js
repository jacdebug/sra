import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Files from '../components/Files';
import { fetchAllFiles, updateSearchTerm, updateSortBy } from '../actions';
import {
  getFiles,
  getPaginationLinks,
  getFormData,
} from '../reducers/selectors';

const mapDispatchToProps = dispatch => ({
  fetchAllFiles: path => {
    dispatch(fetchAllFiles(path));
  },
  updateSearchTerm: q => {
    dispatch(updateSearchTerm(q));
  },
  updateSortBy: e => {
    dispatch(updateSortBy(e));
  },
});

const mapStateToProps = (state, { match, location }) => ({
  files: getFiles(state),
  paginationLinks: getPaginationLinks(state),
  searchTerm: getFormData(state).searchTerm,
  sortBy: getFormData(state).sortBy,
});

class FilesContainer extends React.Component {
  componentWillMount() {
    this.props.fetchAllFiles(this.props.location.search);
  }

  componentWillReceiveProps({ location }) {
    if (location.search !== this.props.location.search) {
      this.props.fetchAllFiles(location.search);
    }
  }

  doFileSearch(query) {
    this.pushUrl({
      name_like: query,
      _page: 1,
    });
  }

  doSortBy(e) {
    const parsed = queryString.parse(this.props.location.search);
    parsed._sort = e.currentTarget.value;
    this.props.updateSortBy(parsed._sort);
    this.pushUrl(parsed);
  }

  pushUrl(parsed) {
    let url = [
      this.props.history.location.pathname,
      queryString.stringify(parsed),
    ].join('?');
    this.props.history.push(url);
  }

  searchKeyHandler(e) {
    let searchQuery = e.currentTarget.value;
    this.props.updateSearchTerm(searchQuery);
    //if (e.key === 'Enter') {
    this.doFileSearch(searchQuery);
    //}
  }

  render() {
    return (
      <Files
        searchKeyPress={this.searchKeyHandler.bind(this)}
        sortOnChange={this.doSortBy.bind(this)}
        {...this.props}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesContainer);
