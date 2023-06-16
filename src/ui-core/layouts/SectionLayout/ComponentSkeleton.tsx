import { useUser } from "../../../contexts/UserContext";

type ComponentSkeletonType = {
  children: React.ReactNode;
};
const ComponentSkeleton = ({ children }: ComponentSkeletonType) => {
  const user = useUser();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default ComponentSkeleton;
