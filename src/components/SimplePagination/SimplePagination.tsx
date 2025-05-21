import { cn } from "@/libs/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function SimplePagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent className="w-full justify-between pl-5">
        <PaginationItem>
          <PaginationLink
            className={cn(
              "aria-disabled:pointer-events-none aria-disabled:opacity-50 h-11 w-11",
              buttonVariants({
                variant: "outline",
              })
            )}
            href="#"
            onClick={handlePrevClick}
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1}
          >
            <ChevronLeftIcon size={40} strokeWidth={3} />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            Página <span className="text-foreground">{currentPage}</span> de{" "}
            <span className="text-foreground">{totalPages}</span>
          </p>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={cn(
              "aria-disabled:pointer-events-none aria-disabled:opacity-50 h-11 w-11",
              buttonVariants({
                variant: "outline",
              })
            )}
            href="#"
            onClick={handleNextClick}
            aria-label="Go to next page"
            aria-disabled={currentPage === totalPages}
          >
            <ChevronRightIcon size={40} strokeWidth={3} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export { SimplePagination };
