import { useUser } from "../../../contexts/UserContext";
import { PageSkeletonProps } from "./PageSkeleton.types";

const PageSkeleton = ({ children }: PageSkeletonProps) => {
  const user = useUser();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default PageSkeleton;
