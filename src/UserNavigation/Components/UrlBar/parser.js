
export const parser = query => {
  if (query.includes(' ')) {
    query = `https://google.com/search?q=${query.split(' ').join('+')}`;
    return query;
  }
  if (!/^https?:\/\//i.test(query)) {
    query = 'https://' + query;
    return query;
  }
  return query;
};
