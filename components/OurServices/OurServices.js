import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import Wrapper, { AnimatedListItem } from "./styled";

export const OurServices = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Wrapper>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 0 }}>
          {[
            {
              imageUrl:
                "https://tiemens.com.au/file/2018/01/Tiemens-Creative-Website-development.png",
              key: "developWebsites",
              text:
                "Locally made and created. Beautifully designed and coded. Super strong security on all websites. Fast servers with backups.",
              style: {
                backgroundColor: { colorName: "shadow" },
                text: { color: { colorName: "white", opacity: 0.7 } },
                title: { color: { colorName: "white" } },
              },
              title: {
                color: { colorName: "white" },
                text: "Develop websites",
              },
            },
            {
              imageUrl:
                "https://tiemens.com.au/file/2018/01/Tiemens-Creative-Advertising-Creations-and-delivery.png",
              key: "buildAdvertising",
              style: {
                backgroundColor: { colorName: "internationalOrange" },
                text: {
                  color: { colorName: "white", opacity: 0.7 },
                },
                title: { color: { colorName: "white" } },
              },
              text:
                "Radio, television, plus online, Facebook, newspaper and magazine advertising. Media buying and planning. Copywriting and art direction.",
              title: {
                color: { colorName: "white" },
                text: "Build advertising",
              },
            },
            {
              imageUrl:
                "https://tiemens.com.au/file/2018/01/Tiemens-Creative-Design.png",
              key: "designAndCreate",
              style: {
                backgroundColor: { colorName: "shuttleGray" },
                text: {
                  color: { colorName: "white", opacity: 0.7 },
                },
                title: { color: { colorName: "white" } },
              },
              text:
                "From logos and branding to brochures and flyers. Concepts proudly created here in Australia. As with most things the better the brief the better the outcome.",
              title: {
                color: { colorName: "white" },
                text: "Design and create",
              },
            },
            {
              imageUrl:
                "https://tiemens.com.au/file/2018/01/Tiemens-Creative-Marketing-Services.png",
              key: "supportMarketing",
              style: {
                backgroundColor: { colorName: "blackHaze" },
                text: {
                  color: { colorName: "doveGray", opacity: 1 },
                },
                title: { color: { colorName: "doveGray" } },
              },
              text:
                "From logos and branding to brochures and flyers. Concepts proudly created here in Australia. As with most things the better the brief the better the outcome.",
              title: {
                color: { colorName: "doveGray" },
                text: "Support marketing",
              },
            },
          ].map((item) => (
            <AnimatedListItem
              customStyle={item.style}
              key={item.key}
              layout
              onClick={() =>
                setSelected((selected) =>
                  selected === item.key ? null : item.key
                )
              }
            >
              <motion.img layout src={item.imageUrl} />
              <motion.h4 layout>{item.title.text}</motion.h4>
              <AnimatePresence>
                {selected === item.key && (
                  <motion.p
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {item.text}
                  </motion.p>
                )}
              </AnimatePresence>
            </AnimatedListItem>
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </Wrapper>
  );
};
