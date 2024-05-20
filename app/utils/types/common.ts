import { MouseEventHandler } from "react";

export interface FormIncrementalButtonsProps {
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface Links {
  href: string;
  text: string;
}

export interface FormEditPropsAsParams {
  params: {
    id: string;
  };
}

export interface FormEditProps {
  firma: string[];
  id: string;
}
