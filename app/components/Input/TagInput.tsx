'use client';

import { IMember } from "@/types/Member";
import { useEffect, useRef, useState } from "react";
import { Tag } from "../Tag";

interface TagInputProps {
  tags: string[];
  setTags: (value: IMember[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-wrap gap-3">
      {tags?.map((tag, index) => <Tag tag={tag} key={index} />)}

      <div
        onClick={() => inputRef.current?.click()}
        className={`
          relative
          transition
          border-dashed border border-neutral-800
          flex flex-col justify-center items-center gap-4
          text-neutral-600
          ${!isLoading && 'cursor-pointer hover:opacity-70'}
          w-[36px] h-[36px]
          rounded-full
        `}
      >
        +
      </div>
    </div>
  );
}

export default TagInput;
