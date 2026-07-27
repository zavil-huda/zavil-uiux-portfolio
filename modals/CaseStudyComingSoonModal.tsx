"use client";

import { useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { caseStudyComingSoonModal } from "@/content/modals";
import { track } from "@/lib/analytics";

/**
 * CaseStudyComingSoonModal — locked copy (v3, Decision 2). Launch-version
 * behavior for the "View Case Study" trigger (v2 §4a); replaced by the
 * dedicated case study page (scaffolded future route) in a future version.
 * Fires the locked "View Case Study" analytics event on open (v3,
 * Decision 4).
 */
export interface CaseStudyComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyComingSoonModal({
  isOpen,
  onClose,
}: CaseStudyComingSoonModalProps) {
  const titleId = "modal-case-study-coming-soon-title";

  useEffect(() => {
    if (isOpen) track("View Case Study");
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId={titleId}>
      <div className="flex flex-col gap-4 pr-6">
        <h2 id={titleId} className="font-display text-display-sm text-ink">
          {caseStudyComingSoonModal.title}
        </h2>
        <p className="text-body-md text-ink-muted">{caseStudyComingSoonModal.body}</p>
        <Button variant="secondary" size="sm" onClick={onClose} className="mt-2 self-start">
          {caseStudyComingSoonModal.buttonLabel}
        </Button>
      </div>
    </Modal>
  );
}
