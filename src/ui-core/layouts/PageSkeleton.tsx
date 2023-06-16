import { useEffect } from "react";
import { useUpdateUser, useUser } from "../../contexts/UserContext";
import { User } from "../../types/User";

type PageSkeletonType = {
  children: React.ReactNode;
};
const PageSkeleton = ({ children }: PageSkeletonType) => {
  const user = useUser();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default PageSkeleton;
