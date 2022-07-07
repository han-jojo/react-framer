import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #ff6b81;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function Popup() {
  const [id, setId] = useState<null | string>(null);
  const [circelClicked, setCircelClicked] = useState<boolean>(false);

  const circleClicked = () => setCircelClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        <Box onClick={() => setId("1")} layoutId={"1"}></Box>
        <Box onClick={() => setId("2")} layoutId={"2"}>
          {!circelClicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box onClick={() => setId("3")} layoutId={"3"}>
          {circelClicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box onClick={() => setId("4")} layoutId={"4"}></Box>
        <button onClick={circleClicked}>Move</button>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 300, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Popup;
