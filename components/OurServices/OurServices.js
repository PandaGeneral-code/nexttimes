import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import Wrapper, { LargeTile, SmallTile } from "./styled";

export const OurServices = () => {
  const [selected, setSelected] = useState(null);

  return (
    <AnimateSharedLayout type="crossfade">
      <Wrapper>
        <SmallTile
          animationProps={{
            direction: "left",
            id: "developWebsites",
            selected,
          }}
          customStyle={{
            background: { colorName: "shadow", opacity: 1 },
            heading: {
              color: { color: { colorName: "white", opacity: 1 } },
            },
            text: { color: "white", opacity: 0.7 },
          }}
          onClick={() => setSelected(() => "developWebsites")}
        >
          <motion.img
            alt="developWebsites"
            animate={{ scale: [1, 1.1, 1] }}
            src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Website-development.png"
            transition={{ duration: 4, delay: 1, repeat: Infinity }}
          />
          {selected === "developWebsites" && (
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h4>Develop websites</h4>
              <p>
                Radio, television, plus online, Facebook, newspaper and magazine
                advertising. Media buying and planning. Copywriting and art
                direction.
              </p>
            </motion.div>
          )}
        </SmallTile>
        <SmallTile
          animationProps={{
            direction: "top",
            id: "buildAdvertising",
            selected,
          }}
          customStyle={{
            background: { colorName: "internationalOrange", opacity: 1 },
            heading: {
              color: { color: { colorName: "white", opacity: 1 } },
            },
            text: { color: "white", opacity: 0.7 },
          }}
          onClick={() => setSelected(() => "buildAdvertising")}
        >
          <motion.img
            alt="buildAdvertising"
            animate={{ scale: [1, 1.1, 1] }}
            src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Advertising-Creations-and-delivery.png"
            transition={{ duration: 4, delay: 2, repeat: Infinity }}
          />
          {selected === "buildAdvertising" && (
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h4>Build advertising</h4>
              <p>
                Radio, television, plus online, Facebook, newspaper and magazine
                advertising. Media buying and planning. Copywriting and art
                direction.
              </p>
            </motion.div>
          )}
        </SmallTile>
        <SmallTile
          animationProps={{
            direction: "bottom",
            id: "designAndCreate",
            selected,
          }}
          customStyle={{
            background: { colorName: "shuttleGray", opacity: 1 },
            heading: {
              color: { color: { colorName: "white", opacity: 1 } },
            },
            text: { color: "white", opacity: 0.7 },
          }}
          onClick={() => setSelected(() => "designAndCreate")}
        >
          <motion.img
            alt="designAndCreate"
            animate={{ scale: [1, 1.1, 1] }}
            src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Design.png"
            transition={{ duration: 4, delay: 4, repeat: Infinity }}
          />
          {selected === "designAndCreate" && (
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h4>Design and create</h4>
              <p>
                From logos and branding to brochures and flyers. Concepts
                proudly created here in Australia. As with most things the
                better the brief the better the outcome.
              </p>
            </motion.div>
          )}
        </SmallTile>
        <SmallTile
          animationProps={{
            direction: "right",
            id: "supportMarketing",
            selected,
          }}
          customStyle={{
            background: { colorName: "blackHaze", opacity: 1 },
            heading: {
              color: { color: { colorName: "mineShaft", opacity: 1 } },
            },
            text: { color: "mineShaft", opacity: 1 },
          }}
          onClick={() => setSelected("supportMarketing")}
        >
          <motion.img
            alt="supportMarketing"
            animate={{ scale: [1, 1.1, 1] }}
            src="https://tiemens.com.au/file/2018/01/Tiemens-Creative-Marketing-Services.png"
            transition={{ duration: 4, delay: 3, repeat: Infinity }}
          />
          {selected === "supportMarketing" && (
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <h4>Support marketing</h4>
              <p>
                Extensive network of suppliers including printers, promotional
                suppliers, app developers, video and audio editiors, media
                companies, photographers and writers.
              </p>
            </motion.div>
          )}
        </SmallTile>
      </Wrapper>
    </AnimateSharedLayout>
  );
};
