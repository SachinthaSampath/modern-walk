import React from "react"; 
import { H1 } from "@/ui-core";
import { CategoryCardProps } from "./CategoryCard.types";
import { useRouter } from "next/navigation";

export default function CategoryCard({
  name,
  page,
  className,
}: CategoryCardProps): React.JSX.Element {
  const router = useRouter();
  return (
    <div
      className={className}
      onClick={() => {
        router.push(`${page}`);
      }}
    >
      <H1>{name}</H1>
    </div>
  );
}
