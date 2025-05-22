// src/utils/index.js
export const createPageUrl = (pageNameWithParams) => {
  const [pageName, queryString] = pageNameWithParams.split('?');
  let path = `/${pageName.toLowerCase()}`;
  if (pageName === 'Home') {
    path = '/';
  }
  return queryString ? `${path}?${queryString}` : path;
};