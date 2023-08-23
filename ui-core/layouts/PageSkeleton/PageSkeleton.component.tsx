import { useUserContext } from "../../../contexts/page";
import { PageSkeletonProps } from "./PageSkeleton.types";

const PageSkeleton: React.FC<PageSkeletonProps> = ({
  children,
}: PageSkeletonProps): React.JSX.Element => {
  const { user } = useUserContext();
  if (!user?.isLoggedIn) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default PageSkeleton;
