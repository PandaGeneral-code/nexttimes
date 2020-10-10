import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { Container } from "../shared/Container/Container";
import RootWrapper, { ContainerWrapper } from "./styled";

export const Root = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <RootWrapper>
      <h2>Build your business today</h2>
      <h1>Think creatively</h1>
      <AnimateSharedLayout type="crossfade">
        <ContainerWrapper>
          <Container
            animationProps={{ enterFrom: "left" }}
            customStyle={{
              backgroundColor: { colorName: "shadow", opacity: 100 },
              heading: { color: { colorName: "white", opacity: 100 } },
            }}
            id="developWebsites"
            onClick={() => setSelectedId("developWebsites")}
          >
            <motion.img
              alt="develop-websites"
              animate={{ scale: [1, 1.1, 1] }}
              src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Website-development.png"
              transition={{ duration: 4, ease: "easeInOut", loop: Infinity }}
            />
          </Container>
          <Container
            animationProps={{ enterFrom: "top" }}
            customStyle={{
              backgroundColor: {
                colorName: "internationalOrange",
                opacity: 100,
              },
              heading: { color: { colorName: "white", opacity: 100 } },
            }}
            id="buildAdvertising"
          >
            <motion.img
              alt="build-advertising"
              animate={{ scale: [1, 1.1, 1] }}
              src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Advertising-Creations-and-delivery.png"
              transition={{ duration: 4, ease: "easeInOut", loop: Infinity }}
            />
          </Container>
          <Container
            animationProps={{ enterFrom: "bottom" }}
            customStyle={{
              backgroundColor: { colorName: "shuttleGray", opacity: 100 },
              heading: { color: { colorName: "white", opacity: 100 } },
              verticalAlignment: "center",
            }}
            id="designAndCreate"
          >
            <motion.img
              alt="design-and-create"
              animate={{ scale: [1, 1.1, 1] }}
              src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Design.png"
              transition={{ duration: 4, ease: "easeInOut", loop: Infinity }}
            />
          </Container>
          <Container
            animationProps={{ enterFrom: "right" }}
            customStyle={{
              backgroundColor: { colorName: "blackHaze", opacity: 100 },
              heading: { color: { colorName: "mineShaft", opacity: 100 } },
            }}
            id="supportMarketing"
          >
            <motion.img
              alt="support-marketing"
              animate={{ scale: [1, 1.1, 1] }}
              src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Marketing-Services.png"
              transition={{ duration: 4, ease: "easeInOut", loop: Infinity }}
            />
          </Container>
        </ContainerWrapper>
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.button onClick={() => setSelectedId(null)}>
                sss
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </RootWrapper>
  );
};
