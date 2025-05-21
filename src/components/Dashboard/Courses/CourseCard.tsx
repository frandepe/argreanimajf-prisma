import React from "react";
import { Course } from "@/generated/prisma";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PenIcon, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCourse } from "@/context/CourseContext";

const CourseCard = ({ n }: { n: Course }) => {
  const { deleteCourse, setSelectedCourse } = useCourse();

  return (
    <AccordionItem value={n.id.toString()} key={n.id} className="py-2">
      <AccordionTrigger className="flex flex-1 items-center justify-between py-2 text-left text-lg font-semibold">
        {n.title}
      </AccordionTrigger>

      <AccordionContent className="pt-4 pb-2 text-muted-foreground">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-medium text-foreground">{n.title}</h3>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Eliminar noticia"
                  onClick={async () => {
                    if (
                      confirm("¿Estás seguro que queres eliminar este curso?")
                    ) {
                      await deleteCourse(n.id);
                    }
                  }}
                >
                  <Trash className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary">
                <p>Eliminar curso</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Editar noticia"
                  onClick={() => setSelectedCourse(n)}
                >
                  <PenIcon className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Editar curso</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CourseCard;
