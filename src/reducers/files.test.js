import reducers from './index';

test('reducers', () => {
  let state;
  state = reducers(
    {
      filesReducer: {
        files: [],
        paginationLinks: [
          {
            type: 'first',
            isEnabled: true,
            queryString: '?_page=1',
            linkData: {
              _page: '1',
              rel: 'first',
              url: 'http://localhost:3003/files?_page=1',
            },
          },
          {
            type: 'prev',
            isEnabled: false,
            queryString: '?',
            linkData: null,
          },
          {
            type: 'next',
            isEnabled: true,
            queryString: '?_page=2',
            linkData: {
              _page: '2',
              rel: 'next',
              url: 'http://localhost:3003/files?_page=2',
            },
          },
          {
            type: 'last',
            isEnabled: true,
            queryString: '?_page=100',
            linkData: {
              _page: '100',
              rel: 'last',
              url: 'http://localhost:3003/files?_page=100',
            },
          },
        ],
        form: { searchTerm: '', sortBy: 'id' },
      },
    },
    {
      type: 'RECEIVE_FILES',
      response: {
        files: [],
        links: {
          first: {
            _page: '1',
            rel: 'first',
            url: 'http://localhost:3003/files?_page=1',
          },
          next: {
            _page: '2',
            rel: 'next',
            url: 'http://localhost:3003/files?_page=2',
          },
          last: {
            _page: '100',
            rel: 'last',
            url: 'http://localhost:3003/files?_page=100',
          },
        },
      },
    }
  );

  expect(state).toEqual({
    filesReducer: {
      files: [],
      form: { searchTerm: '', sortBy: 'id' },
      paginationLinks: [
        {
          isEnabled: true,
          linkData: {
            _page: '1',
            rel: 'first',
            url: 'http://localhost:3003/files?_page=1',
          },
          queryString: '?_page=1',
          type: 'first',
        },
        { isEnabled: false, linkData: null, queryString: '?', type: 'prev' },
        {
          isEnabled: true,
          linkData: {
            _page: '2',
            rel: 'next',
            url: 'http://localhost:3003/files?_page=2',
          },
          queryString: '?_page=2',
          type: 'next',
        },
        {
          isEnabled: true,
          linkData: {
            _page: '100',
            rel: 'last',
            url: 'http://localhost:3003/files?_page=100',
          },
          queryString: '?_page=100',
          type: 'last',
        },
      ],
    },
  });
  
});
