"use client";

import {
  Activity,
  ActivityIcon,
  BookDownIcon,
  Download,
  Headset,
  HeartPulse,
  Home,
  ImageDown,
  Library,
  Menu,
  Network,
  Newspaper,
  NewspaperIcon,
  Pen,
  Search,
  Star,
  User2,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { JSX } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface DropdownWithoutIconProps {
  href?: string;
  goToMenu?: string;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

interface MenuItem {
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/logo/logo.png",
    alt: "argentinareanima",
  },
}: Navbar1Props) => {
  function DropdownWithoutIcon({
    href,
    rightIcon,
    children,
  }: DropdownWithoutIconProps) {
    return (
      <Link href={href || ""} className="menu-item bg-none w-full">
        {children}
        <span className="icon-right">{rightIcon}</span>
      </Link>
    );
  }

  const router = useRouter();

  return (
    <section className="py-4 w-full bg-white px-10">
      <div className="w-full">
        <nav className="hidden justify-between lg:flex w-full">
          <div className="flex items-center gap-6">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                width={200}
                height={200}
                src={logo.src}
                className="img-logo transform transition-transform duration-300 hover:scale-105 w-18 cursor-pointer"
                alt={logo.alt}
              />
            </Link>
          </div>
          <div className="flex gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Inicio */}
                <NavigationMenuItem>
                  <Link
                    href="/"
                    // inline-flex h-10 w-max items-center relative justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium  hover:bg-muted text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full relative">
                      Inicio
                    </span>
                  </Link>
                </NavigationMenuItem>

                {/* Inicio */}
                <NavigationMenuItem>
                  <Link
                    href="/quienes-somos"
                    // inline-flex h-10 w-max items-center relative justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium  hover:bg-muted text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full relative">
                      ¿Quiénes somos?
                    </span>
                  </Link>
                </NavigationMenuItem>

                {/* Noticias  asdas t se */}
                <NavigationMenu>
                  <NavigationMenuItem
                    className="text-muted-foreground"
                    onClick={() => router.push("/noticias")}
                  >
                    <NavigationMenuTrigger className="cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-medium  hover:bg-muted text-muted-foreground hover:text-accent-foreground transition-colors">
                      <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full relative">
                        {" "}
                        Noticias
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <li>
                          <Link
                            href="/noticias"
                            className="flex  gap-4 rounded-md p-3 leading-none no-underline bg-background  outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                          >
                            <Newspaper className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Novedades institucionales.
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Resumen de los orígenes y evolución de nuestra
                                entidad.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="/noticias"
                          >
                            <Activity className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Noticias en los medios
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Todas las noticias en los medios de
                                comunicacion.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="/noticias"
                          >
                            <Star className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                            Noticias Alianza con Camuzzi Gas
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Explora nuestras noticias con Camuzzi Gas
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>

                {/* Jornadas y actividades */}
                <NavigationMenuItem className="text-muted-foreground">
                  <div className="group">
                    <Link
                      className=" inline-flex h-10 w-max items-center relative justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                      href="/actividades"
                    >
                      <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full relative">
                        Actividades
                      </span>
                    </Link>
                  </div>
                </NavigationMenuItem>

                {/* Cursos gratuitos */}

                <NavigationMenu>
                  <NavigationMenuItem
                    className="text-muted-foreground"
                    onClick={() => router.push("/capacitaciones")}
                  >
                    <NavigationMenuTrigger className="cursor-pointer">
                      <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full relative">
                        Capacitaciones
                      </span>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <li>
                          <Link
                            href="#"
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                          >
                            <Download className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Cursos Gratuitos
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Accede a nuestras capacitaciones gratuitas.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <ImageDown className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                RCP
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                               Cursos de RCP.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Search className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                               DEA
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                               Cursos de DEA
                              </p>
                            </div>
                          </Link>
                        </li>
                       
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>

                {/* sM */}

                <NavigationMenu>
                  <NavigationMenuItem className="text-muted-foreground ">
                    <NavigationMenuTrigger className="cursor-pointer">
                      <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full relative">
                        Más
                      </span>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <li>
                          <Link
                            href="#"
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                          >
                            <HeartPulse className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Filiales
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Sedes regionales que ofrecen capacitación en RCP
                                y primeros auxilios.
                              </p>
                            </div>
                          </Link>
                        </li>
                         <li>
                          <Link
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="/galeria"
                          >
                            <Network className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                              Galeria de Imagenes
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Explora nuestra galeria de imagenes.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="/redes-sociales"
                          >
                            <Network className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Redes Sociales
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Encuentra fácilmente el contenido que buscas por
                                categorías.
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>

                {/* Blog */}
                <NavigationMenuItem className="text-muted-foreground">
                  <Link
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                    href="/contacto"
                  >
                    <span className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full relative">
                      {" "}
                      Contacto
                    </span>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={logo.url} className="flex items-center gap-2">
              <Image
                width={150}
                height={150}
                src={logo.src}
                className="w-12"
                alt={logo.alt}
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto px-0">
                <SheetHeader className="pl-6">
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <Image
                        width={150}
                        height={150}
                        src={logo.src}
                        className="w-14"
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="my-6 flex flex-col gap-6">
                  <div className="border-t ">
                    <div className="flex flex-col justify-start"></div>
                  </div>
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {/* Aquí van los elementos del Accordion */}

                    <DropdownWithoutIcon href="/">
                      <div className="flex items-center py-3 px-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors w-full dark:hover:text-white">
                        <Home className="mr-2" />
                        <span className="text-lg">Inicio</span>
                      </div>
                    </DropdownWithoutIcon>

                    <DropdownWithoutIcon href="/quienes-somos">
                      <div className="flex items-center py-3 px-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors w-full dark:hover:text-white">
                        <Users className="mr-2" />
                        <span className="text-lg">¿Quiénes somos?</span>
                      </div>
                    </DropdownWithoutIcon>

                    <DropdownWithoutIcon href="/noticias">
                      <div className="flex items-center py-3 px-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors w-full dark:hover:text-white">
                        <NewspaperIcon className="mr-2" />
                        <span className="text-lg">Noticias</span>
                      </div>
                    </DropdownWithoutIcon>

                    <DropdownWithoutIcon href="/actvidades">
                      <div className="flex items-center py-3 px-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors w-full dark:hover:text-white">
                        <ActivityIcon className="mr-2" />
                        <span className="text-lg">Actividades</span>
                      </div>
                    </DropdownWithoutIcon>

                    <DropdownWithoutIcon href="/capacitaciones">
                      <div className="flex items-center py-3 px-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors w-full dark:hover:text-white">
                        <Pen className="mr-2" />
                        <span className="text-lg">Capacitaciones </span>
                      </div>
                    </DropdownWithoutIcon>

                    <DropdownWithoutIcon href="/editar-perfil">
                      <div className="flex items-center py-3 px-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors w-full dark:hover:text-white">
                        <Library className="mr-2" />
                        <span className="text-lg">Más</span>
                      </div>
                    </DropdownWithoutIcon>

                    <DropdownWithoutIcon href="/contacto">
                      <div className="flex items-center py-3 px-4 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors w-full dark:hover:text-white">
                        <Headset className="mr-2" />
                        <span className="text-lg">Contacto</span>
                      </div>
                    </DropdownWithoutIcon>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar };
