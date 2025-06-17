// "use client";

// import BannerHero from "@/components/BannerHero/BannerHero";
// import { Titleh1 } from "@/components/Texts/Titleh1";
// import React from "react";
// import Image from "next/image";
// import InstagramEmbed from "@/components/RedesSociales/InstagramEmbed";

// const RedesSocialesPage = () => {
//   return (
//     <div className="flex flex-col gap-7 md:gap-16">
//       <BannerHero
//         src={
//           "https://res.cloudinary.com/dtbryiptz/image/upload/v1748923390/redes_n5ncln.jpg"
//         }
//         srcMobile={
//           "https://res.cloudinary.com/dtbryiptz/image/upload/v1748923390/redes_n5ncln.jpg"
//         }
//         title="Redes Sociales"
//         description="En esta sección encontrarás todo sobre nuestras redes sociales: síguenos y entérate de cursos, tips y novedades en RCP."
//       />

//       <div className="px-4 md:px-0 container mx-auto flex flex-col gap-7 md:gap-16 pb-7 md:pb-16">
//         <Titleh1 title="Con la RCP NO." />

//         <div className="w-full flex justify-center gap-10 flex-wrap">
//           <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
//             <InstagramEmbed url="https://www.instagram.com/reel/CoalPgtDGhL/?igsh=a2pldzZtZHpxejJv" />
//           </div>

//           <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
//             <InstagramEmbed url="https://www.instagram.com/p/CnHaZbJumgG/?igsh=MWZvdHR5MHR5MXlxOA==" />
//           </div>
//         </div>

//         <div className="w-full">
//           <div className="w-full h-full flex items-center justify-center mx-auto">
//             <Image
//               src="https://res.cloudinary.com/dtbryiptz/image/upload/v1747883997/rcp-no_gdwfiv.jpg"
//               width={100}
//               height={100}
//               alt="RCP"
//               className="w-[500px] h-full object-contain rounded"
//             />
//           </div>
//         </div>

//         <h2 className="text-2xl md:text-3xl font-semibold md:text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
//           ¡Jualian weich tambien lucha contra la muerte subita!
//         </h2>

//         <div className="w-full flex justify-center gap-10 flex-wrap">
//           <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
//             <InstagramEmbed url="https://www.instagram.com/p/CSzQYtXgY2t/" />
//           </div>
//         </div>

//         <h2 className="text-2xl md:text-3xl font-semibold md:text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
//           El Compromiso continúa Ley 27.159
//         </h2>

//         <div className="w-full flex justify-center gap-10 flex-wrap">
//           <div className="w-[500px] md:w-auto flex items-center justify-center h-full">
//             <InstagramEmbed url="https://www.instagram.com/p/CmEwMU2r6fF/?utm_source=ig_embed&amp;utm_campaign=loading" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RedesSocialesPage;

"use client";

import BannerHero from "@/components/BannerHero/BannerHero";
import { Titleh1 } from "@/components/Texts/Titleh1";
import Image from "next/image";
import InstagramEmbed from "@/components/RedesSociales/InstagramEmbed";
import { motion } from "framer-motion";
import {
  Instagram,
  Heart,
  Users,
  TrendingUp,
  Facebook,
  Youtube,
} from "lucide-react";

const RedesSocialesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // const stats = [
  //   { icon: Users, label: "Seguidores", value: "1500+" },
  //   { icon: Heart, label: "Publicaciones", value: "200+" },
  //   { icon: TrendingUp, label: "Desde", value: "2021" },
  // ]

  const stats = [
    { icon: Users, label: "Personas capacitadas", value: "+1500" },
    { icon: Heart, label: "Charlas realizadas", value: "+5000" },
    { icon: TrendingUp, label: "Años de experiencia", value: "+20" },
  ];

  return (
    <div className="flex flex-col gap-0 relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <BannerHero
          src="https://res.cloudinary.com/dtbryiptz/image/upload/v1748923390/redes_n5ncln.jpg"
          srcMobile="https://res.cloudinary.com/dtbryiptz/image/upload/v1748923390/redes_n5ncln.jpg"
          title="Redes Sociales"
          description="En esta sección encontrarás todo sobre nuestras redes sociales: síguenos y entérate de cursos, tips y novedades en RCP."
        />
      </motion.div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pointer-events-none" />

      {/* Stats Section */}
      <motion.section
        className="relative py-16 bg-gradient-to-r from-primary via-[#189cd8] to-secondary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    <stat.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="relative px-4 md:px-0 container mx-auto flex flex-col gap-16 py-16">
        {/* Main Title Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Titleh1 title="Con la RCP NO." />
          </motion.div>
          <motion.p
            className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Descubre nuestro contenido educativo y únete a nuestra comunidad
            comprometida con salvar vidas
          </motion.p>
        </motion.div>

        {/* Instagram Posts Grid */}
        <motion.section
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="group"
              variants={scaleVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="flex items-center gap-3 mb-4">
                  <Instagram className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-gray-800">
                    Instagram Reel
                  </span>
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <InstagramEmbed url="https://www.instagram.com/reel/CoalPgtDGhL/?igsh=a2pldzZtZHpxejJv" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              variants={scaleVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="flex items-center gap-3 mb-4">
                  <Instagram className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-gray-800">
                    Instagram Post
                  </span>
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <InstagramEmbed url="https://www.instagram.com/p/CnHaZbJumgG/?igsh=MWZvdHR5MHR5MXlxOA==" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="group"
              variants={scaleVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="flex items-center gap-3 mb-4">
                  <Instagram className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-gray-800">
                    Instagram Reel
                  </span>
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <InstagramEmbed url="https://www.instagram.com/p/DK15t9tsDCP" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group"
              variants={scaleVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <div className="flex items-center gap-3 mb-4">
                  <Instagram className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-gray-800">
                    Instagram Post
                  </span>
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="https://res.cloudinary.com/dtbryiptz/image/upload/v1747883997/rcp-no_gdwfiv.jpg"
                    width={800}
                    height={600}
                    alt="RCP Campaign"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Image Section */}
        {/* <motion.section
          className="relative py-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20" />
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Campaña Educativa
                  </h3>
                  <p className="text-gray-600">
                    Concientización sobre la importancia de la RCP
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://res.cloudinary.com/dtbryiptz/image/upload/v1747883997/rcp-no_gdwfiv.jpg"
                    width={800}
                    height={600}
                    alt="RCP Campaign"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.section> */}

        {/* Celebrity Section */}
        <motion.section
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="relative inline-block" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-20 scale-110" />
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Colaboración Especial
                </span>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                ¡Julián Weich también lucha contra la muerte súbita!
              </h2>
            </div>
          </motion.div>

          <motion.div className="mt-12" variants={scaleVariants}>
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-20 scale-105" />
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Instagram className="w-6 h-6 text-pink-500" />
                    <span className="font-semibold text-gray-800">
                      Colaboración Especial
                    </span>
                  </div>
                  <div className="aspect-full overflow-hidden rounded-xl">
                    <InstagramEmbed url="https://www.instagram.com/p/CSzQYtXgY2t/" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Law Section */}
        <motion.section
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="relative inline-block mb-12"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 rounded-2xl blur-xl opacity-20 scale-110" />
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Marco Legal
                </span>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                El Compromiso continúa Ley 27.159
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Comprometidos con el cumplimiento de la legislación vigente en
                materia de RCP
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative max-w-lg mx-auto"
            variants={scaleVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl blur-2xl opacity-20 scale-105" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <span className="font-semibold text-gray-800">
                    Información Legal
                  </span>
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <InstagramEmbed url="https://www.instagram.com/p/CmEwMU2r6fF/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* PDf nativo */}
        <div className="md:relative   md:max-w-2xl md:mx-auto">
          <iframe
            className="w-full md:w-[500px]"
            src="/post-ig.pdf"
            height="800px"
            style={{ border: "none" }}
          ></iframe>
        </div>

        {/* Call to Action */}
        <motion.section
          className="text-center py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary-to-r from-[primary] to-[secondary}] rounded-3xl blur-3xl opacity-10 scale-110" />
            <div className="relative bg-gradient-to-r from-primary to-red-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                ¡Seguinos en Nuestras Redes!
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Mantente actualizado con nuestros últimos contenidos educativos
                y unite a nuestra comunidad
              </p>
              <div className="flex flex-col  md:flex-row items-center gap-5 justify-center">
                <motion.button
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/argentinareanimaac/",
                      "_blank"
                    )
                  }
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-6 h-6" />
                    Seguir en Instagram
                  </div>
                </motion.button>
                <motion.button
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100087258240312",
                      "_blank"
                    )
                  }
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3">
                    <Facebook className="w-6 h-6" />
                    Seguir en Facebook
                  </div>
                </motion.button>

                <motion.button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/channel/UCUe7YAlQawPP9VHg_1B172w",
                      "_blank"
                    )
                  }
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3">
                    <Youtube className="w-6 h-6" />
                    Seguir en Youtube
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default RedesSocialesPage;
