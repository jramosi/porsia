import { ENV } from "../utils";

export class Auth {
  baseApi = ENV.BASE_API;
  //POST REGISTRAR
  async register(data) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.nombre,
          password: data.password, //MANDAR LOS DATOS A REGISTRAR
        }),
      };

      //
      const response = await fetch(url, params);
      const result = await response.json();

      //

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
  //POST LOGUEARSE
  async login(data) {
    try {
      const URL = `${this.baseApi}/${ENV.API_ROUTES.LOGIN}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.nombre,
          password: data.password,
        }),
      };
      const response = await fetch(url, params);
      const result = await response.json();

      //

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  /*   const response= await authcontol.login(data);//en vez de data lo que se mandara
  console.log(response);//devuelve el token y refresh */
}
