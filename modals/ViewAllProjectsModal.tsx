"use client";

import { useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { viewAllProjectsModal } from "@/content/modals";
import { track } from "@/lib/analytics";

/**
 * ViewAllProjectsModal — locked copy (v3, Decision 2). Launch-version
 * behavior for the "View All" trigger (v2 §4a); replaced by a dedicated
 * Projects Gallery page in a future version. Fires the locked "View All
 * Projects" analytics event on open (v3, Decision 4).
 */
export interface ViewAllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ViewAllProjectsModal({ isOpen, onClose }: ViewAllProjectsModalProps) {
  const titleId = "modal-view-all-projects-title";

  useEffect(() => {
    if (isOpen) track("View All Projects");
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId={titleId}>
      <div className="flex flex-col gap-4 pr-6">
        <h2 id={titleId} className="font-display text-display-sm text-ink">
          {viewAllProjectsModal.title}
        </h2>
        <p className="text-body-md text-ink-muted">{viewAllProjectsModal.body}</p>
        <Button variant="secondary" size="sm" onClick={onClose} className="mt-2 self-start">
          {viewAllProjectsModal.buttonLabel}
        </Button>
      </div>
    </Modal>
  );
}
