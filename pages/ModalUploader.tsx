import { Dialog, Heading, Modal, ModalOverlay } from "react-aria-components";
import { useBatchAddListener } from "@rpldy/uploady";
import { useState } from "react";

import styles from '@/styles/ModalUploader.module.css';

import type { ModalOverlayProps } from 'react-aria-components';
import type { Batch } from '@rpldy/uploady';

export default function ModalUploader(props: ModalUploaderProps) {
  const { isOpen: isInitiallyOpen } = props;

  const [ isOpen, setOpen ] = useState(Boolean(isInitiallyOpen));
  const [ items, setItems ] = useState<Batch["items"]>([]);

  useBatchAddListener((batch) => {
    if (!isOpen) {
      setOpen(true);
    }

    setItems([...items, ...batch.items]);
  });

  return (
    <ModalOverlay
      className={styles.modalOverlay}
      isDismissable={true}
      isOpen={isOpen}
      onOpenChange={(open) => {
        setOpen(open);

        if (!open) {
          setItems([]);
        }
      }}
    >
      <Modal className={styles.modal}>
        <Dialog className={styles.dialog}>
          <Heading className={styles.heading} slot="title">
            Upload Files
          </Heading>
          <p className="my-3">
            Click outside to close this dialog. List of files to upload:
          </p>
          <ul className="p-4 list-disc list-inside">
            {items.map((item) => (
              <li className="mb-1" key={item.id}>
                {item.file.name}
              </li>
            ))}
          </ul>
          <p className="my-3">Drop files on the page, observe that the drop is not handled by Uploady.</p>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}

export interface ModalUploaderProps extends ModalOverlayProps {}
