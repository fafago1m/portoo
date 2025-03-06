import { Database, Container, Server, ServerCrash, Earth, EthernetPort, Network, Inbox, Archive, Computer } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Hosting",
    subMenuHeading: ["Game Hosting", "Other Hosting"],
    subMenu: [
      {
        name: "Shona High",
        desc: "Advanced Minecraft Hosting",
        icon: Server,
        href: "/hosting/shona-high",
      },
      {
        name: "Docker Hosting",
        desc: "Custom Docker Image",
        icon: Container,
        href: "/hosting/docker-hosting",
      },
      {
        name: "Shona Expert",
        desc: "High Performance Hosting",
        icon: ServerCrash,
        href: "/hosting/shona-expert",
      },
      {
        name: "Database Hosting",
        desc: "SQL DB Hosting",
        icon: Database,
        href: "/hosting/database-hosting",
      },
      {
        name: "Shona Bare Metal",
        desc: "Dedicated Server Hosting",
        icon: Computer,
        href: "/hosting/shona-bare-metal",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Basic", "Network"],
    subMenu: [
      {
        name: "TLD",
        desc: "Top Level Domain",
        icon: Earth,
        href: "/resources/tld",
      },
      {
        name: "VPN",
        desc: "Your Custom Private Network",
        icon: EthernetPort,
        href: "/resources/vpn",
      },
      {
        name: "Email Service",
        desc: "Make custom email with own domain",
        icon: Inbox,
        href: "/resources/email-service",
      },
      {
        name: "Reverse Proxy",
        desc: "Proxy for your Server",
        icon: Network,
        href: "/resources/reverse-proxy",
      },
      {
        name: "Object Storage",
        desc: "S3 Object Storage",
        icon: Archive,
        href: "/resources/object-storage",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Terms",
    href: "/tos",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
