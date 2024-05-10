export default function Product() {
  return (
    <div>
      <Button>Hello World</Button>
      <h1>Product</h1>
    </div>
  );
}

import { styled } from "../styles/index";

export const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
  cursor: "pointer",
  hover: {
    transform: "scale(1.1)",
    backgroundColor: "Black",
  },
});
