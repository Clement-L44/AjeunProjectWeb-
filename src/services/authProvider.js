import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from "react-admin";

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const email = params.username;
    const password = params.password;
    const request = new Request("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    console.log(email, password);
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("token", token);
        //window.location.reload();
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("token");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    console.log("AUTH_ERROR");
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem("token")
      ? Promise.resolve()
      : Promise.reject({ redirectTo: "/login" });
  }
  if (type === AUTH_GET_PERMISSIONS){

      const role = localStorage.getItem('permissions');
      console.log(role);
      return role ? Promise.resolve(role) : Promise.reject();
    
  }
  return Promise.resolve();
};
