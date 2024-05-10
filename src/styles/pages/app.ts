import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  margin: "0 auto",
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
});
