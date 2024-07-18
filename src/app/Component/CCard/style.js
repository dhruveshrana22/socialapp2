import { Card, Typography } from "@mui/material";
import styled from "styled-components";

 export const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 1rem;

  @media (max-width: 600px) {
    max-width: 130px;
    margin: 0.5rem;
    max-height: 250px;
  }
`;
export const Title = styled(Typography)`

  @media (min-width: 300px) {
    font-size: 20;  
  }

  @media (min-width: 960px) {
    font-size: 22; /* font size for screens larger than 960px */
  }

  @media (min-width: 1280px) {
    font-size: 24; /* font size for screens larger than 1280px */
  }
`;
const scrollText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Text2 = styled.div`
  font-size: 16px; /* Default font size */

  @media (min-width: 300px) {
    font-size: 16px; /* Font size for screens larger than 300px */
  }

  @media (min-width: 600px) {
    font-size: 20px; /* Font size for screens larger than 600px */
  }

  @media (min-width: 960px) {
    font-size: 20px; /* Font size for screens larger than 960px */
  }

  @media (min-width: 1280px) {
    font-size: 20px; /* Font size for screens larger than 1280px */
  }

  white-space: nowrap; /* Prevent the text from wrapping */
  overflow: hidden; /* Hide the overflowing text */
  display: inline-block;
  animation: ${scrollText} 10s linear infinite; /* Apply the scrolling animation */
`;
