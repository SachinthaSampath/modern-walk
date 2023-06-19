import { useUser } from "../../../contexts/UserContext";
import { ComponentSkeletonProps } from "./ComponentSkeleton.types";

const ComponentSkeleton = ({ children }: ComponentSkeletonProps) => {
  const user = useUser();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default ComponentSkeleton;
