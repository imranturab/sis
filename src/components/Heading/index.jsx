import React from "react";

const sizes = {
  s: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  md: "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  xs: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  lg: "text-[92px] font-bold md:text-5xl",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
