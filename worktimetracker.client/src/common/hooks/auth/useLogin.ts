import { LoginRequest } from "@/generate-api";
import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const useLogin = () => {
  const accountLogin = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  const login = async (credentials: LoginRequest) => {
    try {
      if (loading) return;
      setLoading(true);
      await accountLogin(credentials);

      const params = new URLSearchParams(location.search);
      const redirectUrl = params.get("redirectUrl") || "/";

      navigate(redirectUrl);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
