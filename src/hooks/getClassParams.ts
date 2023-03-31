import { useParams } from "react-router-dom";

const getClassParams = () => {
  const { classInfo } = useParams();
  const classid = classInfo?.split("_")[0];
  const classname = classInfo?.split("_")[1];
  return { classInfo, classid, classname };
};

export default getClassParams;
