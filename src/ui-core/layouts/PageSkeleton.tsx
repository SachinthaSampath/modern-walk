import { useUpdateUser, useUser } from "../../contexts/UserContext";

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
