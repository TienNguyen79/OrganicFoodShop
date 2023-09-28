import Cookies from "js-cookie";

const accessTokenKey = "organicshop_access_token";

const objCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN, //cái COOKIE_DOMAIN ở file .env bên dưới ngoài
};

export const saveToken = (access_token) => {
  if (access_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

export const getToken = () => {
  const access_token = Cookies.get(accessTokenKey);

  return access_token;
};

export const logOut = () => {
  const access_token = Cookies.get(accessTokenKey);

  if (access_token) {
    Cookies.remove(accessTokenKey, {
      ...objCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
