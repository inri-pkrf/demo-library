// src/utils/index.js
export const createPageUrl = (pageNameWithParams = '') => {
  const [pageName, queryString] = pageNameWithParams.split('?');
  let path = pageName ? `/${pageName.toLowerCase()}` : '/';

  return queryString ? `${path}?${queryString}` : path;
};