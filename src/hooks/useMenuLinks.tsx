export default function useMenuLinks() {
  const links = [
    { label: "Página Inicial", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Jornada", href: "/journey" },
    { label: "Projetos", href: "/projects" },
    { label: "Contacto", href: "/contact" },
  ];

  return { links };
}
