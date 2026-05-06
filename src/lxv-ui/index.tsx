import "./lxv-ui.css";

export interface ButtonProps {
  invert?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const LxvUi = ({
  invert = false,
  size = "medium",
  ...props
}: ButtonProps) => {
  const mode = !invert ? "lxv-ui-copyright--invert" : "";
  return (
    <div
      className={["lxv-ui-copyright", `lxv-ui-copyright--${size}`, mode].join(
        " ",
      )}
      {...props}
    >
      LxvUI
    </div>
  );
};
