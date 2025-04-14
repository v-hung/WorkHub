import { useLogin } from "@/common/hooks/auth/useLogin";
import { wrapLoader } from "@/common/utils/loader";
import { LoginRequest } from "@/generate-api";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { redirect } from "react-router";

export const loader = wrapLoader(async ({ request }, user) => {
  console.log("user", user);
  if (user) {
    const redirectUrl =
      new URL(request.url).searchParams.get("redirectUrl") || "/";
    throw redirect(redirectUrl);
  }
});

export function Component() {
  const { loading, login } = useLogin();

  const onFinish: FormProps<LoginRequest>["onFinish"] = (values) => {
    login(values);
  };

  const onFinishFailed: FormProps<LoginRequest>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login-form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      initialValues={{ rememberMe: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rememberMe"
        valuePropName="checked"
        wrapperCol={{ offset: 6, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{ offset: 6, span: 16 }}
        style={{ marginBottom: 0 }}
      >
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
