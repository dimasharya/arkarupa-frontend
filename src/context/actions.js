// const ROOT_URL = "https://secret-hamlet-03431.herokuapp.com";
import uniqid from "uniqid";

export async function loginUser(dispatch, loginPayload) {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(loginPayload),
  //   };

  if (
    loginPayload.username === "admin" &&
    loginPayload.password === "admin123"
  ) {
      const token = uniqid()
    dispatch({ type: "LOGIN_SUCCESS", payload: { user: loginPayload, auth_token: token } });
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ user: loginPayload, auth_token: token })
    );
    return loginPayload;
  } else {
    dispatch({ type: "LOGIN_ERROR", error: "login error" });
    console.log("login error");
    return;
  }
}

// 	try {
// 		dispatch({ type: 'REQUEST_LOGIN' });
// 		let response = await fetch(`${ROOT_URL}/login`, requestOptions);
// 		let data = await response.json();

// 		if (data.user) {
// 			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
// 			localStorage.setItem('currentUser', JSON.stringify(data));
// 			return data;
// 		}

// 		dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
// 		console.log(data.errors[0]);
// 		return;
// 	} catch (error) {
// 		dispatch({ type: 'LOGIN_ERROR', error: error });
// 		console.log(error);
// 	}
// }

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  //localStorage.removeItem("token");
}
