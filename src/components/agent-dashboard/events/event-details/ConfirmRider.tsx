import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Trash2 } from "lucide-react";

type FileItem = {
  name: string;
  size: string;
  progress: number;
  status: "uploading" | "completed";
};

export default function ConfirmRider() {
  const [hospitalityFiles, setHospitalityFiles] = useState<FileItem[]>([]);
  const [techFiles, setTechFiles] = useState<FileItem[]>([]);

  // Utility: simulate file upload progress
  const simulateUpload = (
    newFiles: File[],
    setFiles: React.Dispatch<React.SetStateAction<FileItem[]>>
  ) => {
    newFiles.forEach((file) => {
      const fileItem: FileItem = {
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        progress: 0,
        status: "uploading",
      };

      setFiles((prev) => [...prev, fileItem]);

      const uploadInterval = setInterval(() => {
        setFiles((prev) =>
          prev.map((f) =>
            f.name === file.name
              ? {
                  ...f,
                  progress: Math.min(f.progress + 10, 100),
                  status: f.progress + 10 >= 100 ? "completed" : "uploading",
                }
              : f
          )
        );
      }, 300);

      setTimeout(() => clearInterval(uploadInterval), 3000);
    });
  };

  const onDropHospitality = useCallback(
    (acceptedFiles: File[]) =>
      simulateUpload(acceptedFiles, setHospitalityFiles),
    []
  );
  const onDropTech = useCallback(
    (acceptedFiles: File[]) => simulateUpload(acceptedFiles, setTechFiles),
    []
  );

  const {
    getRootProps: getHospitalityRoot,
    getInputProps: getHospitalityInput,
  } = useDropzone({ onDrop: onDropHospitality });

  const { getRootProps: getTechRoot, getInputProps: getTechInput } =
    useDropzone({
      onDrop: onDropTech,
    });

  const handleDelete = (type: "hospitality" | "tech", index: number) => {
    if (type === "hospitality") {
      setHospitalityFiles((prev) => prev.filter((_, i) => i !== index));
    } else {
      setTechFiles((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const renderFileRow = (
    file: FileItem,
    index: number,
    type: "hospitality" | "tech"
  ) => (
    <div
      key={index}
      className="border border-[#DFE3E8] rounded-lg py-2.5 px-3 flex flex-col gap-2 bg-[#F9FAFB]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#F44336]/10 text-[#F44336] p-2 rounded-md">
            <FileText size={18} />
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-[#212B36]">
              {file.name}
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-xs text-[#637381]">{file.size}</div>
              <span
                className={`text-xs ${
                  file.status === "completed"
                    ? "text-green-600"
                    : "text-[#919EAB]"
                }`}
              >
                ● {file.status === "completed" ? "Completed" : "Uploading"}
              </span>
            </div>
          </div>
        </div>

        <Button
          type="button"
          onClick={() => handleDelete(type, index)}
          className="cursor-pointer"
          variant={"ghost"}
        >
          <Trash2 size={16} />
        </Button>
      </div>
      <Progress value={file.progress} className="h-1.5 bg-[#DFE3E8]" />
    </div>
  );

  const renderSection = (
    title: string,
    files: FileItem[],
    type: "hospitality" | "tech",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dropzoneProps: any
  ) => (
    <div className="space-y-4">
      <h3 className="text-[20px] font-semibold]">{title}</h3>

      {/* Upload Box */}
      <div
        {...dropzoneProps}
        className="border border-dashed border-[#DFE3E8] rounded-lg p-6 flex flex-col items-center justify-center text-center bg-[#F9FAFB]/50 cursor-pointer hover:bg-[#F4F6F8]"
      >
        <Upload className="w-6 h-6 text-[#919EAB] mb-2" />
        <p className="text-sm text-[#637381]">
          Choose a file or drag & drop it here
        </p>
        <Button
          variant="outline"
          className="mt-3 border border-[#DFE3E8] text-[#212B36] text-sm h-9 px-4"
        >
          Browse File
        </Button>
        <input {...dropzoneProps.getInputProps?.()} hidden />
      </div>

      {/* File List */}
      <div className="space-y-3">
        {files.map((file, index) => renderFileRow(file, index, type))}
      </div>

      {/* Note */}
      <div>
        <label className="font-medium mb-1 block">Note</label>
        <Textarea
          placeholder="No notes yet"
          className="h-12 bg-[#F9FAFB] border border-[#DFE3E8] rounded-lg resize-none"
        />
      </div>
    </div>
  );

  return (
    <section className="space-y-10 max-w-7xl mx-auto">
      {renderSection(
        "Hospitality Rider (DJ Show)",
        hospitalityFiles,
        "hospitality",
        getHospitalityRoot({ getInputProps: getHospitalityInput })
      )}
      {renderSection(
        "Tech Rider (DJ Show)",
        techFiles,
        "tech",
        getTechRoot({ getInputProps: getTechInput })
      )}

      {/* Footer Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <Button
          variant="default"
          className="bg-primary01/80 hover:bg-primary01/70 text-white rounded-[8px] h-11 px-6"
        >
          Save
        </Button>
        <Button className="bg-[#DFE3E8] text-[#919EAB] rounded-[8px] h-11 px-6">
          Confirm Booking
        </Button>
      </div>
    </section>
  );
}
