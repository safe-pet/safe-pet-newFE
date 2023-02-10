export const requestUserInfo = () => {
  window.Kakao.API.request({
    url: "/v2/user/me",
  })
    .then(function (res: any) {
      console.log(JSON.stringify(res));
    })
    .catch(function (err: any) {
      console.log("failed to request user information: " + JSON.stringify(err));
    });
};
