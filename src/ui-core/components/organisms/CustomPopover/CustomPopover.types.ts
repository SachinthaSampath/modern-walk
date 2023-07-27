import { variants } from "../../../../types";

export type CustomPopoverProps = {
  triggerText?: string;
  titleText?: string;
  children?: React.ReactNode | string;
  cancelText?: string;
  actionText?: string;
  cancelAction?: () => void;
  actionAction?: () => void;
  variant?: keyof typeof variants;
  containerClassName?: string;
};
