const getCookie = (name: string) => {
  let cookieArray = document.cookie.split("; ");
  let cookieValue = null;

  cookieArray.forEach((cookie) => {
    let cookiePart = cookie.split("=");
    if (cookiePart[0] === name) {
      cookieValue = cookiePart[1];
    }
  });

  return cookieValue;
};

export default getCookie;
