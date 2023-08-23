import { useUserContext } from "../../../contexts/page";
import { ComponentSkeletonProps } from "./ComponentSkeleton.types";

const ComponentSkeleton: React.FC<ComponentSkeletonProps> = ({
  children,
}: ComponentSkeletonProps): React.JSX.Element => {
  const {user} = useUserContext();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default ComponentSkeleton;
