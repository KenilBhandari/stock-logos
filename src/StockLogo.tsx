import React, { useEffect, useState } from "react";

type Props = {
  symbol: string;
  size?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const StockLogo = ({ symbol, size = 10, ...props }: Props) => {
  const [error, setError] = useState(false);

  const initials = symbol.slice(0, 2).toUpperCase();
  const fallbackColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFD93D",
    "#1A535C",
    "#FF9F1C",
    "#2E86AB",
    "#6C5CE7",
    "#00B894",
  ];

  useEffect(() => {
    setError(false);
  }, [symbol]);

  const bgColor =
    fallbackColors[Math.floor(Math.random() * fallbackColors.length)];
  const url = `https://images.dhan.co/symbol/${symbol.toUpperCase()}.png`;

  if (!symbol) {
    return (
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: size * 0.5,
          fontFamily: "Arial, sans-serif",
          textTransform: "uppercase",
        }}
        className="rounded-full"
        aria-label="Stock logo fallback"
      >
        LOGO
      </div>
    );
  }


  if (error) {
    return (
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: size * 0.5,
          fontFamily: "Arial, sans-serif",
          textTransform: "uppercase",
        }}
        className={`rounded-full ${props.className || ""}`}
        {...props}
        aria-label={`${symbol} logo fallback`}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={url}
      draggable={false}
      onError={() => setError(true)}
      srcSet={url}
      alt={`${symbol} logo`}
      width={size}
      height={size}
      decoding="async"
      {...props}
    />
  );
};
