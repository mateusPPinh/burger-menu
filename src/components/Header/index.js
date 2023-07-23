import { Container, LeftContainer } from "./styles";
import wineLogo from '../../assets/logo.svg'
import {BsFillMoonFill} from 'react-icons/bs'
import { useState, useEffect } from "react";
import { BurgerMenu } from "../BurgerMenu";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 970);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Adiciona o event listener quando o componente monta
    window.addEventListener('resize', checkMobile);

    // Remove o event listener quando o componente desmonta
    return () => {
      window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const menu = (
    <ul>
      <li>
        <a href="#">CLUBE</a>
      </li>

      <li>
        <a href="#">LOJA</a>
      </li>

      <li>
        <a href="#">OFERTAS</a>
      </li>

      <li>
        <a href="#">PRODUTORES</a>
      </li>

      <li>
        <a href="#">EVENTOS</a>
      </li>
    </ul>
  );

  return (
    <Container isMobile={isMobile}>
      {isMobile ? (
        <>
          <BurgerMenu>{menu}</BurgerMenu>
          <img src={wineLogo} alt="WINE LOGOMARCA"/>
        </>
      ) : (
        <>
          <LeftContainer>
            <img src={wineLogo} alt="WINE LOGOMARCA"/>
            {menu}
         </LeftContainer>
        </>
      )}
      
      <button>
        <BsFillMoonFill size={26}/>
      </button>
    </Container>
  )
};
