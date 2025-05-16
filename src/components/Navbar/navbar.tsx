import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { default as NextLink } from "next/link";
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

interface MenuItem {
  title: string;
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
    title: string;
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
    url: "https://www.argentinareanima.com",
    src: "/logo/logo.png",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 w-full bg-white px-10">
      <div className="w-full">
        <nav className="hidden justify-between lg:flex w-full">
          <div className="flex items-center gap-6">
            <NextLink href={logo.url} className="flex items-center gap-2">
              <Image
                width={200}
                height={200}
                src={logo.src}
                className="img-logo transform transition-transform duration-300 hover:scale-105 w-18 cursro-pointer"
                alt={logo.alt}
              />
            </NextLink>
          </div>
          <div className="flex gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Inicio */}
                <NavigationMenuItem className="text-muted-foreground">
                  <NextLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                    href="#"
                  >
                    Inicio
                  </NextLink>
                </NavigationMenuItem>

                {/* Noticias  asdas t se */}
                <NavigationMenu viewportCustomClass="w-90 sm:left-0 xl:left-90">
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger className="cursor-pointer">
                      Noticias
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <li>
                          <NextLink
                            href="#"
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                          >
                            <Book className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">Blog</div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                The latest industry news, updates, and info
                              </p>
                            </div>
                          </NextLink>
                        </li>
                        <li>
                          <NextLink
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Trees className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Company
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Our mission is to innovate and empower the world
                              </p>
                            </div>
                          </NextLink>
                        </li>
                        <li>
                          <a
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Sunset className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Careers
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Browse job listing and discover our workspace
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Zap className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Support
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Get in touch with our support team or visit our
                                community forums
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>

                {/* Jornadas y actividades */}
                <NavigationMenuItem className="text-muted-foreground">
                  <NextLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                    href="#"
                  >
                    Jornadas y actividades
                  </NextLink>
                </NavigationMenuItem>

                {/* Cursos gratuitos */}

                <NavigationMenu viewportCustomClass="w-90 sm:left-0 xl:left-90">
                  <NavigationMenuItem className="text-muted-foreground ">
                    <NavigationMenuTrigger className="cursor-pointer">
                      Cursos gratuitos
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <li>
                          <NextLink
                            href="#"
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                          >
                            <Zap className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Help Center
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Get all the answers you need right here
                              </p>
                            </div>
                          </NextLink>
                        </li>
                        <li>
                          <NextLink
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Sunset className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Contact Us
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                We are here to help you with any questions you
                                have
                              </p>
                            </div>
                          </NextLink>
                        </li>
                        <li>
                          <a
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Trees className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Status
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Check the current status of our services and
                                APIs
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Book className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Terms of Service
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Our terms and conditions for using our services
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>

                {/* Biblioteca de contenido */}

                <NavigationMenu viewportCustomClass="w-90 sm:left-0 xl:left-90">
                  <NavigationMenuItem className="text-muted-foreground ">
                    <NavigationMenuTrigger className="cursor-pointer">
                      Biblioteca de contenido
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <li>
                          <NextLink
                            href="#"
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                          >
                            <Zap className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Guías de primeros auxilios.
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                              Pasos clave para actuar en emergencias médicas.
                              </p>
                            </div>
                          </NextLink>
                        </li>
                        <li>
                          <NextLink
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Sunset className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Manuales visuales o descargables.
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                              Material práctico para consulta rápida o descarga.
                              </p>
                            </div>
                          </NextLink>
                        </li>
                        <li>
                          <a
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Trees className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Infografías y videos educativos.
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                              Contenido visual para aprender de forma clara y rápida.
                              </p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href="#"
                          >
                            <Book className="size-5 shrink-0" />
                            <div>
                              <div className="text-sm font-semibold">
                                Todo categorizado por tema.
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                Our terms and conditions for using our services
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>

                {/* Pricing */}
                <NavigationMenuItem className="text-muted-foreground">
                  <a
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                    href="#"
                  >
                 Galería / Redes sociales
                  </a>
                </NavigationMenuItem>

                {/* Blog */}
                <NavigationMenuItem className="text-muted-foreground">
                  <a
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                    href="#"
                  >
                Contacto
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                width={50}
                height={50}
                src={logo.src}
                className="w-8"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image
                        width={50}
                        height={50}
                        src={logo.src}
                        className="w-8"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {/* Aquí van los elementos del Accordion */}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="flex flex-col justify-start"></div>
                  </div>
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
