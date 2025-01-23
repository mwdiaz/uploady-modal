import UploadProvider from "@/components/UploadProvider";
import ModalUploader from "@/components/ModalUploader";

export default function Home() {
  return (
    <UploadProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Drop files anywhere on the page to start uploading.</p>
        <ModalUploader />
      </main>
    </UploadProvider>
  );
}
