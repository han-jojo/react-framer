import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 35vw;
  gap: 10px;
  button:last-child {
    grid-column: span 2;
    width: 60px;
    height: 30px;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function Main() {
  const history = useHistory();

  return (
    <Wrapper>
      <Grid>
        <Box onClick={() => history.push(`${process.env.PUBLIC_URL}/basic`)}>
          Basic
        </Box>
        <Box onClick={() => history.push(`${process.env.PUBLIC_URL}/variants`)}>
          Variants
        </Box>
        <Box onClick={() => history.push(`${process.env.PUBLIC_URL}/gesture`)}>
          Gesture
        </Box>
        <Box onClick={() => history.push(`${process.env.PUBLIC_URL}/motion`)}>
          MotionValue
        </Box>
        <Box onClick={() => history.push(`${process.env.PUBLIC_URL}/popup`)}>
          Popup
        </Box>
        <Box onClick={() => history.push(`${process.env.PUBLIC_URL}/svg`)}>
          SVG
        </Box>
        <Box
          onClick={() =>
            history.push(`${process.env.PUBLIC_URL}/anim-presence`)
          }
        >
          AnimationPresence
        </Box>
        <Box onClick={() => history.push(`${process.env.PUBLIC_URL}/slider`)}>
          Slider
        </Box>
      </Grid>
    </Wrapper>
  );
}

export default Main;
