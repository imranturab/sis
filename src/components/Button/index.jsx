import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[50px]",
};
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-black-900",
    green_800: "bg-green-800 text-white-A700",
  },
};
const sizes = {
  sm: "h-[129px] px-[35px] text-[63px]",
  xs: "h-[69px] px-[19px] text-2xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50", "green_800"]),
};

export { Button };
