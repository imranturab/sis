import React from "react";

const sizes = {
  xs: "text-[19px] font-normal",
  lg: "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  s: "text-2xl font-normal md:text-[22px]",
  xl: "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  md: "text-3xl font-normal md:text-[28px] sm:text-[26px]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
