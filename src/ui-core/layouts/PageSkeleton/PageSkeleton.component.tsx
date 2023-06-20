import { useUser } from "../../../contexts/UserContext";
import { PageSkeletonProps } from "./PageSkeleton.types";

const PageSkeleton: React.FC<PageSkeletonProps> = ({
  children,
}: PageSkeletonProps): React.JSX.Element => {
  const user = useUser();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default PageSkeleton;
