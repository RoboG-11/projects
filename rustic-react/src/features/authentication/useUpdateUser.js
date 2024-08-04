import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser } from "../../services/apiAuth";

import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: (data) => {
      if (data.isBrian) {
        toast.error("You cannot change the password of this super user :D (brian@mail.com)");

        navigate("/dashboard", { replace: true });

      } else {
        toast.success("Password was successfully updated");

        queryClient.invalidateQueries({
          queryKey: ["user"],
        });

        navigate("/dashboard", { replace: true });
      }
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
}
