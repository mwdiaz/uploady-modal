import { Uploady } from "@rpldy/uploady";
import { UploadDropZone } from "@rpldy/upload-drop-zone";
import { useRef } from "react";

import styles from '@/styles/UploadProvider.module.css';

import type { UploadyProps } from '@rpldy/uploady';

export default function UploadProvider(props: UploadyProps) {
  const indicatorRef = useRef<HTMLDivElement>(null);

  return (
    <Uploady {...props} noPortal={true}>
      <UploadDropZone
        onDragOverClassName={styles.onDragOver}
        shouldRemoveDragOver={(e) => e?.target === indicatorRef.current}
      >
        <>
          {props.children}
          <div
            className={styles.dropIndicator}
            aria-hidden
            ref={indicatorRef}
          />
        </>
      </UploadDropZone>
    </Uploady>
  );
}
