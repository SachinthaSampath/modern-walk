export type CustomPopoverProps = {
  triggerText?: string;
  titleText?: string;
  children?: React.ReactNode | string;
  cancelText?: string;
  actionText?: string;
  cancelAction?: () => {};
  actionAction?: () => {};
};
