// src/components/ui/use-toast.ts
import { toast as sonnerToast } from "sonner";

export const toast = sonnerToast;          // import { toast } from "@/components/ui/use-toast"
export function useToast() {               // compat pour ancien code: const { toast } = useToast()
  return { toast: sonnerToast };
}
