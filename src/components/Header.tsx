import styled from "styled-components";

const Title = styled.h1`
  color: #fff;
  font-size: 42px;
  font-weight: bold;
  padding-top: 40px;
`;

export default function Header({ title }: { title: string }) {
  return <Title>{title}</Title>;
}
