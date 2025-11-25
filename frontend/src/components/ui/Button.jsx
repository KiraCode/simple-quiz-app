import React, { useMemo } from "react";

const Button = ({
  size,
  loading,
  loadingText = "Loading.....",
  children,
  onClick,
  disabled,
  icon,
  iconPosition,
}) => {
  const buttonClass = useMemo(
    () => clsx("btn", size, { loading }),
    [aize, loading, disabled]
  );
  return <div></div>;
};

export default Button;
