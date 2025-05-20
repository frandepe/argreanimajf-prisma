"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function ButtonMore() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="pt-3">
        <Button
          variant="ghost"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls="expandable-content"
          className="cursor-pointer"
        >
          {isExpanded ? "Mostrar menos" : "Leer mas"}
          {isExpanded ? (
            <ChevronUp className="-me-1 ms-1" size={16} strokeWidth={2} aria-hidden="true" />
          ) : (
            <ChevronDown className="-me-1 ms-1" size={16} strokeWidth={2} aria-hidden="true" />
          )}
        </Button>
          {isExpanded && (
            <div id="expandable-content" className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel
                tincidunt lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc eu nisl.
                Curabitur vehicula, sapien vel fringilla fermentum, purus nunc porta magna, nec
                condimentum lorem erat eu mi.
              </p>
            </div>
          )}
    </div>
  );
}

export { ButtonMore };
