import React from 'react';
import { connect } from 'react-redux';
import Files from '../components/Files';
import { fetchAllFiles } from '../actions';
import { getFiles, getPaginationLinks } from '../reducers/selectors';

const mapDispatchToProps = dispatch => ({
  fetchAllFiles: path => {
    dispatch(fetchAllFiles(path));
  },
  searchKeyPress: () => console.log('tes1'),
  sortOnChange: () => console.log('tes1'),
});

const mapStateToProps = (state, { match, location }) => ({
  files: getFiles(state),
  paginationLinks: getPaginationLinks(state),
  match,
  searchTerm: 'test',
  sortedBy: '',
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

  render() {
    return <Files {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesContainer);

/*

const searchKeyPress = e => {
  searchQuery = e.currentTarget.value;
  if (e.key === 'Enter') {
    let url = [
      history.location.pathname,
      queryString.stringify({
        name_like: e.currentTarget.value,
        _page: 1,
      }),
    ].join('?');

    history.push(url);
  }
};




sortOnChange
e => {
          const parsed = queryString.parse(location.search);
          parsed._sort = e.currentTarget.value;

          let url = [
            history.location.pathname,
            queryString.stringify(parsed),
          ].join('?');

          history.push(url);
        }

        */
