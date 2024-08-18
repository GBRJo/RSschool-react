import { ChangeEvent, FC } from 'react';

interface ImageUploadProps {
  label: string;
  error?: string;
  onChange: (file: File | null) => void;
}

export const ImageUpload: FC<ImageUploadProps> = ({
  label,
  error,
  onChange,
}) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className="input image_upload">
      {label && <label htmlFor="image-upload">{label}</label>}
      <input
        id="image-upload"
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleFileChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};
