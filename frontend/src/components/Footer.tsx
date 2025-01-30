import styled from "styled-components";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--color-8);
  padding: 1rem 0;
  @media (min-width: 992px) {
    padding: 3.125rem 0 1.875rem;
  }
`;

const Container = styled.div`
  display: block;
  max-width: 100%;
  max-width: 74.375rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    position: relative;
    gap: 2.5rem 2.5rem;
    grid-template-areas:
      "nav logo"
      "copy copy";
  }
`;

const FooterNavigation = styled.nav`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  gap: 0;
  margin-bottom: 1.875rem;
  grid-area: nav;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const FooterMenuNavigation = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto;
  gap: 0;
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, calc(25% - 2.5rem));
    grid-template-rows: 100%;
    gap: 0 2.5rem;
    justify-content: space-between;
    border-right: 1px solid var(--color-7);
    padding-right: 2.5rem;
  }
`;

const FooterMenuNavigationLi = styled.li`
  position: relative;
  border-bottom: 1px solid var(--color-7);
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  @media (min-width: 992px) {
    border-bottom: none;
  }
`;

const FooterMenuNavigationUl = styled.ul`
  list-style: none;
  margin: 0.75rem 0 0 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
  @media (min-width: 992px) {
    position: relative;
    max-height: 100%;
    z-index: 2;
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

const FooterMenuNavigationTitle = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
  color: var(--color-2);
`;

const FooterMenuNavigationUlLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.9375rem;
  }
`;

const FooterMenuNavigationUlLiA = styled(Link)`
  line-height: 1.2;
  font-size: 0.75rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-3);
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 992px) {
    font-size: 0.75rem;
  }
`;

const FooterLogos = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto;
  gap: 30px 0;
  @media (min-width: 992px) {
    grid-template-rows: min-content min-content;
    margin: auto;
  }
`;

const Logo = styled(Link)`
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 992px) {
    margin: auto;
    img {
      width: 5.3125rem;
    }
  }
`;

const FooterSocials = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 2rem;
    height: 2rem;
    transition: all 0.3s ease-in-out;
    background-color: var(--color-14);
    border-radius: 50%;
  }
  li:first-child,
  li:last-child {
    margin-left: 0;
  }
  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
  }
  @media (min-width: 992px) {
    display: flex;
  }
`;

const Copyright = styled.div`
  grid-area: copy;
  p {
    font-size: 0.75rem;
    color: var(--color-7);
    text-align: center;
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0.5rem 0 0;
    padding: 0;
    list-style: none;
    list-style-position: inside;
  }
  ul li {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 1.2;
    padding: 0.5rem;
    &:not(:first-child) {
      &::before {
        content: " • ";
        display: inline-block;
        color: var(--color-7);
        font-size: 2.5rem;
        line-height: 1;
        margin-right: 0.5rem;
      }
    }
  }
  ul li a {
    font-size: 0.75rem;
    color: rgba(var(--color-7), 1);
    text-decoration: none;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      text-align: left;
      margin-right: 1rem;
    }
    ul {
      margin: 0;
    }
    ul li {
      padding: 0.5rem;
      position: relative;
    }
  }
`;

const footerItems = [
  {
    title: "Mapa del sitio",
    items: [
      {
        label: "Todas las recetas",
        href: "#",
      },
      {
        label: "Listas Nestlé",
        href: "#",
      },
      {
        label: "Elige los ingredientes",
        href: "#",
      },
      {
        label: "Recetarios descargables",
        href: "#",
      },
      {
        label: "Planea tu menú",
        href: "#",
      },
      {
        label: "Sitemap",
        href: "#",
      },
    ],
  },
  {
    title: "Escuela del sabor",
    items: [
      {
        label: "Todos los artículos",
        href: "#",
      },
      {
        label: "Tips",
        href: "#",
      },
      {
        label: "Cocción y técnica",
        href: "#",
      },
      {
        label: "Recetas caseras",
        href: "#",
      },
      {
        label: "Aprendiendo a cocinar",
        href: "#",
      },
      {
        label: "Ingredientes",
        href: "#",
      },
      {
        label: "Utensilios",
        href: "#",
      },
      {
        label: "Cocinando con niños",
        href: "#",
      },
    ],
  },
  {
    title: "Categorías de recetas",
    items: [
      {
        label: "Todas las categorías",
        href: "#",
      },
      {
        label: "Desayunos",
        href: "#",
      },
      {
        label: "Recetas con pollo",
        href: "#",
      },
      {
        label: "Parrilladas",
        href: "#",
      },
      {
        label: "Plato fuerte",
        href: "#",
      },
      {
        label: "Postres",
        href: "#",
      },
      {
        label: "Pasteles",
        href: "#",
      },
    ],
  },
];

const socialLinks = [
  {
    icon: faInstagram,
    href: "https://www.instagram.com/recetasnestle/",
  },
  {
    icon: faFacebook,
    href: "https://www.facebook.com/Recetas-Nestl%C3%A9-142919275994/",
  },
  {
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCWIgEeSnQT6tZ6BLAh_ot5Q",
  },
  {
    icon: faPinterest,
    href: "https://www.pinterest.com/recetasnestle/",
  },
  {
    icon: faTiktok,
    href: "https://www.tiktok.com/@recetasnestlemx",
  },
];

const copyrightItems = [
  {
    href: "#",
    label: "Aviso de privacidad",
  },
  {
    href: "#",
    label: "Términos y condiciones",
  },
  {
    href: "#",
    label: "Contáctanos",
  },
  {
    href: "#",
    label: "Configuración de cookies",
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterNavigation>
          <FooterMenuNavigation>
            {footerItems.map((footerItem, idx) => (
              <FooterMenuNavigationLi key={idx}>
                <FooterMenuNavigationTitle>
                  {footerItem.title}
                </FooterMenuNavigationTitle>

                <FooterMenuNavigationUl>
                  {footerItem.items.map((item, itemIdx) => (
                    <FooterMenuNavigationUlLi key={itemIdx}>
                      <FooterMenuNavigationUlLiA to={item.href}>
                        {item.label}
                      </FooterMenuNavigationUlLiA>
                    </FooterMenuNavigationUlLi>
                  ))}
                </FooterMenuNavigationUl>
              </FooterMenuNavigationLi>
            ))}
          </FooterMenuNavigation>
        </FooterNavigation>

        <FooterLogos>
          <Logo to="/">
            <img
              src="https://www.recetasnestle.com.mx/themes/custom/cookit/Content/img/logo.svg"
              alt="Recetas Nestlé Logo"
              width={67}
              height={32}
            />
          </Logo>
          <FooterSocials>
            {socialLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={link.icon}
                    style={{ fontSize: "20px" }}
                  />
                </a>
              </li>
            ))}
          </FooterSocials>
        </FooterLogos>

        <Copyright>
          <p>
            ©2019, Nestlé. Marcas registradas por Société des produits Nestlé,
            S.A. Vevey (Suiza)
          </p>
          <ul>
            {copyrightItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </Copyright>
      </Container>
    </StyledFooter>
  );
};
