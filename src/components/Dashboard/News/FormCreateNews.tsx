"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { cn } from "@/libs/utils";
import { useNews } from "@/context/NewsContext";

import { ICreateNews } from "@/interfaces/news";
import { Controller, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUpload } from "@/components/FileUpload/FileUpload";
import { Input } from "@/components/ui/Input";

const FormCreateNews = () => {
  const [step, setStep] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { createNews } = useNews();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ICreateNews>();

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
      setIsExpanded(false);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setIsExpanded(true);
    }
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data: ICreateNews) => {
    setIsLoading(true);
    try {
      const res: any = await createNews({ ...data });
      console.log(res);

      if (!res?.success) {
        setErrorMessage(res);
        return;
      }
      setIsLoading(false);
    } catch (error) {
      alert("Algo salió mal, consulte al programador");
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-8"
    >
      {/* Progreso de pasos */}
      <div className="flex items-center gap-6 relative">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={cn(
              "w-2 h-2 rounded-full relative z-10",
              dot <= step ? "bg-white" : "bg-gray-300"
            )}
          />
        ))}
        <motion.div
          initial={{ width: "12px", height: "24px", x: 0 }}
          animate={{
            width: step === 1 ? "24px" : step === 2 ? "60px" : "96px",
            x: 0,
          }}
          className="absolute -left-[8px] top-[3px] -translate-y-1/2 h-3 bg-green-400 rounded-full"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.8,
            bounce: 0.25,
            duration: 0.6,
          }}
        />
      </div>

      {/* Contenido por paso */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        {step === 1 && (
          <div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Título de la noticia <span className="text-secondary">*</span>
              </label>
              <Input
                id="title"
                type="text"
                {...register("title", {
                  required: "El título de la noticia es requerido",
                })}
                className="bg-gray-50 border-gray-400 placeholder:text-gray-400 text-gray-800 w-full focus:border-primary focus:ring-primary"
                placeholder="Título de la noticia"
              />
            </div>
            <div className="my-6">
              <label
                htmlFor="redirect"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Link de redirección <span className="text-secondary">*</span>
              </label>
              <Input
                id="redirect"
                type="text"
                {...register("redirect", {
                  required: "El título de la noticia es requerido",
                })}
                className="bg-gray-50 border-gray-400 placeholder:text-gray-400 text-gray-800 w-full focus:border-primary focus:ring-primary"
                placeholder="Ejemplo: https://www.eldia.com/nota/2025-1-3-2-47-28-piden-desfibriladores-para-las-tres-plazas-que-estan-en-remodelacion-la-ciudad..."
              />
            </div>
            <div className="min-w-[300px]">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Categoría <span className="text-secondary">*</span>
              </label>
              <Controller
                name="category"
                control={control}
                rules={{ required: "Por favor, selecciona una categoría" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Categoria 1">Categoria 1</SelectItem>
                      <SelectItem value="Categoria 2">Categoria 2</SelectItem>
                      <SelectItem value="Categoria 3">Categoria 3</SelectItem>
                      <SelectItem value="Categoria 4">Categoria 4</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción <span className="text-secondary">*</span>
            </label>
            <Textarea
              placeholder="Breve descripción de la noticia"
              required
              maxLength={300}
              {...register("description", {
                required: "La descripción es requerida",
                maxLength: {
                  value: 300,
                  message: "La descripción no puede superar los 300 caracteres",
                },
              })}
            />
          </div>
        )}
        {step === 3 && (
          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-background border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="w-full max-w-sm">
        <motion.div
          className="flex items-center gap-1"
          animate={{
            justifyContent: isExpanded ? "stretch" : "space-between",
          }}
        >
          {!isExpanded && (
            <motion.button
              type="button"
              initial={{ opacity: 0, width: 0, scale: 0.8 }}
              animate={{ opacity: 1, width: "64px", scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                mass: 0.8,
                bounce: 0.25,
                duration: 0.6,
                opacity: { duration: 0.2 },
              }}
              onClick={handleBack}
              className="px-4 py-3 text-black bg-gray-100 font-semibold rounded-full hover:bg-gray-50 transition-colors text-sm cursor-pointer"
            >
              Atrás
            </motion.button>
          )}
          <motion.button
            type="button"
            onClick={handleContinue}
            animate={{ flex: isExpanded ? 1 : "inherit" }}
            className={cn(
              "px-4 py-3 rounded-full text-white bg-primary transition-colors flex-1",
              !isExpanded && "w-44"
            )}
          >
            <div className="flex items-center font-semibold justify-center gap-2 text-sm cursor-pointer">
              {step === 3 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    mass: 0.5,
                    bounce: 0.4,
                  }}
                >
                  <CircleCheck size={16} />
                </motion.div>
              )}
              {step === 3 ? "Finalizar" : "Continuar"}
            </div>
          </motion.button>
        </motion.div>
      </div>
    </form>
  );
};

export default FormCreateNews;
