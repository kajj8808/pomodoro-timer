import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  line-height: 1;
  margin-top: -20px;
  padding: 5px;
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 72px;
  font-weight: 500;
`;

export default function Colon() {
  return (
    <Box>
      <Text>:</Text>
    </Box>
  );
}
