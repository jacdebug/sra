export const routeParamsToRequestQueryString = params => {
  let qs;

  switch (params.type) {
    case 'list':
      qs = `_page=${params.param1}`;
      break;

    case 'search':
      qs = `${params.param1}_like=${params.param2}&_page=${params.param3}`;
      break;

    case 'sort':
      qs = `_sort=${params.param1}&_order=${params.param2}&_page=${params.param3}`;
      break;

    default:
      qs = `_page=1`;
      break;
  }

  return qs;
};

export const responseLinksToRouteUrl = link => {
  let url = `/files/list/${link._page}`;

  if (link._sort && link._order)
    url = `/files/sort/${link._sort}/${link._order}/${link._page}`;

  let searchKey,
    searchParam,
    testSearchParam = Object.keys(link).filter(e => !!e.match(/_like/));

  if (testSearchParam.length) {
    searchKey = testSearchParam[0];
    searchParam = searchKey.split('_');
    url = `/files/search/${searchParam[0]}/${link[searchKey]}/${link._page}`;
  }

  return url;
};
