"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useMotionPreference } from "@/providers";
import { getTransition, modalTransition } from "@/animations/transitions";

/**
 * Modal — shared shell powering all three locked modals (v2 §4a):
 * ViewAllProjectsModal, CaseStudyComingSoonModal, CurrentlyBuildingModal.
 *
 * Phase 2: fully implemented behavior + styling — focus trap, Esc to
 * close, backdrop click to close, body scroll lock, focus returned to the
 * trigger element on close, and the shared fade/scale open-close motion
 * (`modalTransition`) all three modals use identically (Master Prompt's
 * "consistent modal animations" rule).
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, titleId, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useMotionPreference();

  useLockBodyScroll(isOpen);
  useFocusTrap(dialogRef, isOpen);

  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      dialogRef.current?.focus();
    } else {
      triggerElementRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const transition = getTransition(modalTransition, prefersReducedMotion);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          data-component="Modal-backdrop"
          className="fixed inset-0 z-overlay flex items-center justify-center bg-overlay p-gutter"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            data-component="Modal"
            className="focus-ring relative w-full max-w-md rounded-token-lg bg-surface p-8 shadow-token-lg"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={transition}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="focus-ring absolute right-4 top-4 rounded-full p-1 text-ink-muted transition-colors duration-200 ease-editorial hover:bg-surface-alt hover:text-ink"
            >
              <X size={20} aria-hidden="true" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
