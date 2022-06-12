export const ColoredMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "20px",
    textAlign: "center"
  };

  return <p style={contentStyle}>{children}</p>;
};
