import { ChangeEvent, forwardRef, useImperativeHandle, useRef } from 'react';

interface ImageUploadProps {
  label: string;
  error?: string;
  onChange?: (file: File | null) => void;
  defaultValue?: File | null;
}

export const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ label, error, onChange }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      if (onChange) {
        onChange(file);
      }
    };

    // Позволяет внешнему ref управлять этим input, если ref передан
    useImperativeHandle(ref, () => inputRef.current!);

    return (
      <div className="input image_upload">
        {label && <label htmlFor="image-upload">{label}</label>}
        <input
          id="image-upload"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
          ref={inputRef}
        />
        {error && <div className="error">{error}</div>}
      </div>
    );
  },
);
