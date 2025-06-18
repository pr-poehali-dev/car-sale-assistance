import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PhotoUploadProps {
  onPhotosChange?: (photos: File[]) => void;
}

const PhotoUpload = ({ onPhotosChange }: PhotoUploadProps) => {
  const [photos, setPhotos] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/"),
    );
    addPhotos(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    addPhotos(files);
  };

  const addPhotos = (newFiles: File[]) => {
    const updatedPhotos = [...photos, ...newFiles].slice(0, 10);
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-2xl text-white flex items-center">
          <Icon name="Camera" size={24} className="mr-3 text-red-400" />
          Загрузите фото автомобиля
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? "border-red-400 bg-red-400/10"
              : "border-white/30 hover:border-red-400/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Icon name="Upload" size={48} className="text-red-400 mx-auto mb-4" />
          <p className="text-white text-lg mb-2">
            Перетащите фото или нажмите для выбора
          </p>
          <p className="text-gray-400 text-sm">
            До 10 фотографий, форматы: JPG, PNG (макс. 5MB каждая)
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        <Button
          size="lg"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg"
          disabled={photos.length === 0}
        >
          <Icon name="Calculator" size={20} className="mr-2" />
          Получить оценку ({photos.length} фото)
        </Button>
      </CardContent>
    </Card>
  );
};

export default PhotoUpload;
