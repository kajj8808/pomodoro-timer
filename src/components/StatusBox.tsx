import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;
const Title = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Text = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: 28px;
`;

interface StatusBoxProps {
  title: string;
  maxValue: number;
  currentValue: number;
}
export default function StatusBox({
  title,
  maxValue,
  currentValue,
}: StatusBoxProps) {
  return (
    <Box>
      <Text>
        {currentValue}/{maxValue}
      </Text>
      <Title>{title}</Title>
    </Box>
  );
}
