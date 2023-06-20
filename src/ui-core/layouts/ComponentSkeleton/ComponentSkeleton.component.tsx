import { useUser } from "../../../contexts/UserContext";
import { ComponentSkeletonProps } from "./ComponentSkeleton.types";

const ComponentSkeleton: React.FC<ComponentSkeletonProps> = ({
  children,
}: ComponentSkeletonProps): React.JSX.Element => {
  const user = useUser();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default ComponentSkeleton;
