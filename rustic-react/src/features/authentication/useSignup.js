import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: () => {
      toast.success("Account created!");
    },

    onError: (error) => {
      if (error.message.includes("Email rate limit exceeded")) {
        toast.error("Too many sign-up attempts. Please try again later.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    },
  });

  return { signup, isLoading };
}
