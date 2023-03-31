import { useNavigate } from "react-router-dom";

const useRoute = () => {
  const navigate = useNavigate();
  return { route: navigate };
};

export default useRoute;
