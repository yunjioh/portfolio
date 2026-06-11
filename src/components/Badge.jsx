const Badge = ({ text, color, rotate, position, style: extraStyle }) => {
  const style = {
    backgroundColor: `var(${color})`,
    color: "#ffffff",
    transform: `rotate(${rotate}deg)`,
    position: "absolute",
    ...position,

    padding: "12px 20px",
    borderRadius: "30px",
    fontSize: "clamp(14px, 0.9vw, 16px)",

    ...extraStyle,
  };

  return (
    <span className="badge" style={style}>
      {text}
    </span>
  );
};

export default Badge;
