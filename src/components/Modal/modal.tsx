import type { PropsWithChildren } from "react";
import { useSearchParams } from "react-router";
import { Dialog, DialogContent } from "../ui/dialog";
import { cn } from "@/lib/utils";

interface ModalProps {
  modalId: string;
  openId: string;
  bodyClassName?: string;
}

export default function Modal({
  openId,
  modalId,
  children,
  bodyClassName,
}: PropsWithChildren<ModalProps>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const modal = searchParams.get(modalId);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      searchParams.set(modalId, openId);
    } else {
      searchParams.delete(modalId);
    }

    setSearchParams(searchParams);
  };

  return (
    <Dialog open={modal === openId} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "w-full max-w-[95vw] sm:max-w-[60vw] max-h-[90dvh] px-2 sm:px-6 py-4",
          bodyClassName
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
