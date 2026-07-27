"use client";

import { useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { currentlyBuildingModal } from "@/content/modals";
import { track } from "@/lib/analytics";

/**
 * CurrentlyBuildingModal — locked copy (v3, Decision 2). Launch-version
 * behavior for the "Currently Building" trigger (v2 §4a); replaced by the
 * actual project page in a future version. Fires the locked "Currently
 * Building Modal" analytics event on open (v3, Decision 4).
 */
export interface CurrentlyBuildingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CurrentlyBuildingModal({
  isOpen,
  onClose,
}: CurrentlyBuildingModalProps) {
  const titleId = "modal-currently-building-title";

  useEffect(() => {
    if (isOpen) track("Currently Building Modal");
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId={titleId}>
      <div className="flex flex-col gap-4 pr-6">
        <h2 id={titleId} className="font-display text-display-sm text-ink">
          {currentlyBuildingModal.title}
        </h2>
        <p className="text-body-md text-ink-muted">{currentlyBuildingModal.body}</p>
        <Button variant="secondary" size="sm" onClick={onClose} className="mt-2 self-start">
          {currentlyBuildingModal.buttonLabel}
        </Button>
      </div>
    </Modal>
  );
}
