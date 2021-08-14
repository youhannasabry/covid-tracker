import request from '../request';

export const verifyToken = async () => {
  try {
    const result = await request({
      url: `/auth/verify-token`,
      method: 'GET',
    });
    return result;
  } catch (error) {
    if (error.statusCode === 401) {
      return false;
    }
    throw error;
  }
};

export const login = credentials =>
  request({
    url: '/auth/login',
    method: 'POST',
    data: credentials,
  });

export const logout = () =>
  request({
    url: `/auth/logout`,
    method: 'GET',
  });
