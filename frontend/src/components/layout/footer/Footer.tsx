import { Link } from "react-router";

import LogoProject from "../../ui/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faYoutube,
    faPinterest,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { StyledFooter, Container, FooterMenuNavigation, FooterNavigation, FooterMenuNavigationUl, FooterMenuNavigationTitle, FooterMenuNavigationUlLiA, FooterLogos, FooterMenuNavigationLi, FooterMenuNavigationUlLi, FooterSocials, Logo, Copyright } from "./footer.styles";

export const footerItems = [
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

export const socialLinks = [
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

export const copyrightItems = [
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
                        <LogoProject fill="#471f05" />
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
