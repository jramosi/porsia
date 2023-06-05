"use client";

import { Button, Form, Input } from "antd";
import toast, { Toaster } from "react-hot-toast";

//
import { Auth } from "../../../api";
const authController = new Auth();
///

/*** */
import { useAuth } from "../../../hooks"; //para mandar el acces
/** */

const App = () => {
  /** */
  const { login } = useAuth(); //para mandar el acces
  /** */
  const notify = (values) =>
    toast.success("Successfully toasted!", {
      duration: 2000,
      position: "top-center",
    });

  ////
  const onFinish = async (values) => {
    //await authController.register(values); //llamo la api ojo es solo ejemplo para registrar
    const response = await authController.login(values); //llama api de login
    console.log(response); //esta lo que devuleve
    login(response.accessToken);

    /////
    notify("Exito");
    /*
  console.log("Success:", values);
  console.log(values.username);
  console.log(values.password); */
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 800,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "campo obligatorio",
          },
        ]}
      >
        <Input placeholder="Ingrese su Usuario" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "campo obligatorio",
          },
        ]}
      >
        <Input.Password placeholder="Ingrese su contrasena" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Toaster />
      </Form.Item>
    </Form>
  );
};
export default App;
