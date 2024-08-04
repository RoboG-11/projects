import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export function useResetPassword() {
  const navigate = useNavigate()

  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: resetPasswordApi,

    onSuccess: () => {
      toast.success("Check your email for the reset link");
      navigate("/login");
    },


    onError: (error) => {
      if (error.message.includes("Email rate limit exceeded")) {
        toast.error("Too many reset-password attempts. Please try again later.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
      navigate("/login");
    },
  });
  return { resetPassword, isLoading };
}
