'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ImageUploadProps {
  imageSrcOld?: string[];
  setImageSrcOld?: React.Dispatch<React.SetStateAction<string[]>>;
  files: any[];
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
}

const FileInput: React.FC<ImageUploadProps> = ({ imageSrcOld, setImageSrcOld, files, setFiles }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [previews, setPreviews] = useState<any[]>([])

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (inputRef.current) 
      inputRef.current.value = ''

    if (!files.length) 
      return setPreviews([])

    // console.log(files)

    const objectUrls = files.map((file) => URL.createObjectURL(file))
    setPreviews(objectUrls)

    // free memory when ever this component is unmounted
    return () => objectUrls.forEach((object) => URL.revokeObjectURL(object))
  }, [files])

  return (
    <div className="flex flex-wrap gap-3">
      {(imageSrcOld && setImageSrcOld) && imageSrcOld.map((item: any, index: number) => {
        return (
          <div key={index} className="flex-shrink-0 w-[120px] h-[120px] relative">
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src={item}
              alt="Listing picture"
              className="rounded-md"
            />

            <button onClick={() => setImageSrcOld(imageSrcOld.filter((_, i) => i != index))} type="button" className="absolute right-1 top-1">
              <Image
                alt="Menu close"
                src="/icons/close_small.svg"
                height={10}
                width={10}
              />
            </button>
          </div>
        )
      })}

      {previews?.map((item: any, index: number) => {
        return (
          <div key={index} className="flex-shrink-0 w-[120px] h-[120px] relative">
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src={item}
              alt="Listing picture"
              className="rounded-md"
            />

            <button onClick={() => setFiles(files.filter((_, i) => i != index))} type="button" className="absolute right-1 top-1 bg-white rounded-full p-1">
              <Image
                alt="Menu close"
                src="/icons/close_small.svg"
                height={10}
                width={10}
              />
            </button>
          </div>
        )
      })}

      <div
        onClick={() => inputRef.current?.click()}
        className={`
          relative
          transition
          border-dashed border-2 border-[#00BAB5]
          flex flex-col justify-center items-center gap-4
          text-neutral-600
          ${!isLoading && 'cursor-pointer hover:opacity-70'}
          w-[130px] h-[130px]
          rounded-lg
          bg-[#F5F8FB]
        `}
      >
        <Image alt="Add image" src="/icons/ic_picture.svg" width={36} height={36} />
        <div className={`text-sm leading-[18px]`}>
          Nhấn để thêm ảnh
        </div>
      </div>

      <input
        type="file"
        name="files"
        id="files"
        accept="image/*"
        onChange={(event: any) => setFiles([...files, ...event.target.files])}
        ref={inputRef}
        multiple
        hidden
      />
    </div>
  );
}

export default FileInput;
