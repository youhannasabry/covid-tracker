import moment from 'moment';
import server from '../constants/server';

export const formatDate = date => {
  if (!date) return '';
  return moment(date).format('DD/MM/YYYY hh:mm a');
};

export const formatImageUrl = url => {
  if (!url || typeof url !== 'string' || url.length === 0) return '';
  const isValidUrl = url.match(
    // eslint-disable-next-line
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  );
  if (isValidUrl) return url;
  if (url.slice(0, 8) === '//static') {
    return `https:${url}`;
  }
  if (url.slice(0, 7) === '/images') {
    return `${server.staticServer}${url}`;
  }
  return url;
};
