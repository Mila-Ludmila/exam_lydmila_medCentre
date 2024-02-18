import React from "react";

export default function LayoutMain({ children, header, footer }) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
