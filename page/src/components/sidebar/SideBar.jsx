import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import {FaHome, FaCalendarCheck} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineSystemUpdate, MdOutlineDateRange, MdOutlineAccessTime, MdMoreTime, MdDomainVerification} from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { GiPathDistance } from "react-icons/gi";
import { BiCog, BiLogoMicrosoftTeams } from "react-icons/bi";
import { AiFillHeart, AiFillPicture, AiOutlineAppstoreAdd, AiOutlineHeatMap, AiFillTool } from "react-icons/ai";
import { BsCartCheck, BsFillClipboardFill, BsFillPinMapFill } from "react-icons/bs";
import { RiPresentationFill, RiSpeedFill } from "react-icons/ri";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, TbHexagonNumber5, TbHexagonNumber6, TbHexagonNumber7, TbHexagonNumber8, TbHexagonNumber9 } from "react-icons/tb";
import { TbLicense, TbGeometry } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Inicio",
    icon: <FaHome />,
  },
  {
    path: "/apresentacao",
    name: "Apresentações ▾",
    icon: <RiPresentationFill />,
    subRoutes: [
      {
        path: "/apresentacao/1",
        name: "Apresentação 1 ",
        icon: <TbHexagonNumber1 />,
      },
      {
        path: "/apresentacao/2",
        name: "Apresentação 2",
        icon: <TbHexagonNumber2 />,
      },
      {
        path: "/apresentacao/3",
        name: "Apresentação 3",
        icon: <TbHexagonNumber3 />,
      },
    ],
  },
  {
    path: "/atas",
    name: "Atas ▾",
    icon: <BiLogoMicrosoftTeams />,
    subRoutes: [
      {
        path: "/ata/1",
        name: "27/03/2024",
        icon: <MdOutlineDateRange />,
      },
      {
        path: "/ata/2",
        name: "01/04/2024",
        icon: <MdOutlineDateRange />,
      },
      {
        path: "/ata/3",
        name: "03/04/2024",
        icon: <MdOutlineDateRange />,
      },
    ],
  },
  {
    path: "/pre-rastreabilidade",
    name: "Pré-Rastreabilidade ▾",
    icon: <GiPathDistance />,
    subRoutes: [
      
      {
        path: "/pre-rastreabilidade/heatmap-de-disponibilidade",
        name: "Heatmap de Disponibilidade",
        icon: <AiOutlineHeatMap />,
      },
      {
        path: "/pre-rastreabilidade/rich-picture",
        name: "Rich Picture",
        icon: <AiFillPicture />,
      },
      {
        path: "/pre-rastreabilidade/apps-analisados",
        name: "Apps Analisados",
        icon: <MdOutlineSystemUpdate />,
      },
      {
        path: "/pre-rastreabilidade/apps-escolhido",
        name: "App Escolhido",
        icon: <AiOutlineAppstoreAdd />,
      },
      {
        path: "/pre-rastreabilidade/licenca",
        name: "Licença",
        icon: <TbLicense />,
      },
    ],
  },
  {
    path: "/planejamento",
    name: "Planejamento ▾",
    icon: <BsFillClipboardFill/>,
    subRoutes: [
      {
        path: "/planejamento/cronograma-planejado",
        name: "Cronograma Planejado",
        icon: <MdOutlineAccessTime />,
      },
      {
        path: "/planejamento/cronograma-realizado",
        name: "Cronograma Realizado",
        icon: <MdMoreTime />,
      },
      {
        path: "/planejamento/ferramentas-utilizadas",
        name: "Ferramentas Utilizadas",
        icon: <AiFillTool />,
      },
    ],
  },
  {
    path: "/elicitacao",
    name: "Elicitação ▾",
    icon: <FaListCheck />,
  },
  {
    path: "/modelagem",
    name: "Modelagem ▾",
    icon: <TbGeometry />,
  },
  {
    path: "/agil",
    name: "Ágil ▾",
    icon: <RiSpeedFill />,
  },
  {
    path: "/verificacao",
    name: "Verificação ▾",
    icon: <MdDomainVerification />,
  },
  {
    path: "/validacao",
    name: "Validação ▾",
    icon: <GrValidate />,
  },
  {
    path: "/pos-rastreabilidade",
    name: "Pós-Rastreabilidade ▾",
    icon: <BsFillPinMapFill />,
  },
  {
    path: "/entrega-final",
    name: "Entrega-Final ▾",
    icon: <FaCalendarCheck />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Mozilla Firefox
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <Image src={logo} onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    key={index}
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index} 
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;