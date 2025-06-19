import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type Props = {
    symbol: string;
    size?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>;
declare const StockLogo: ({ symbol, size, ...props }: Props) => react_jsx_runtime.JSX.Element;

export { StockLogo };
