import { LoginRequest } from "@/generate-api";
import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const accountLogin = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const login = async (credentials: LoginRequest) => {
    try {
      if (loading) return;
      setLoading(true);
      await accountLogin(credentials);

      navigate("/");
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
