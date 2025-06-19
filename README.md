# stock-logos

A simple React component for displaying Indian stock logos. When a logo isn't available, it shows a nice fallback with the ticker symbol.

## Install

npm install stock-logos
        or
yarn add stock-logos

## Usage

import { StockLogo } from 'stock-logos';
<StockLogo symbol="TCS" size={40} />


## What it does

The component tries to load a stock logo. If the logo doesn't exist (maybe it's a typo or unsupported stock), it renders a fallback circle with:

- First 2 letters of the symbol
- Random background color
- Clean typography

This way your UI doesn't break with missing images.

## Props

|   Prop    |   Type   |  Default |                   Description                  |
|-----------|----------|----------|------------------------------------------------|
|  `symbol` | `string` |    LOGO  |  Stock ticker symbol (e.g., "TCS", "HDFCBANK") |
|  `size`   | `number` |   `10`   | Sets both width and height                     |

Plus any other `img` props like `className`, `alt`, `onClick`, etc.

## Examples

Basic usage:

<StockLogo symbol="WIPRO" size={48} />

With custom styling:

<StockLogo 
  symbol="TATAMOTORS" 
  size={60} 
  className="rounded-lg shadow-md hover:scale-105 transition-transform"
  alt="Tata Motors logo"
/>

## Information

If you find a symbol that should work but doesn't, it might not be available in database yet.

## Requirements

- React 16.8+
- No other dependencies

## License

MIT

Built this because I got tired of handling missing stock logos in my trading apps. Hope it saves you some time too.