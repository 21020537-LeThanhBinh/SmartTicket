'use client';

import { IMember } from "@/types/Member";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface MemberInputProps {
  members: IMember[];
  setMembers: (value: IMember[]) => void;
}

const MemberInput: React.FC<MemberInputProps> = ({ members, setMembers }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-wrap gap-3">
      {members?.map((member, index) => {
        return (
          <div key={index} className="flex-shrink-0 flex gap-1 items-center">
            <Image
              src={member.avatar || '/images/placeholder.svg'}
              alt="Member avatar"
              className="rounded-full"
              width={36}
              height={36}
            />
            <span className="text-neutral-500 text-xs">{member.name}</span>


            {/* <button onClick={() => setFiles(files.filter((_, i) => i != index))} type="button" className="absolute right-1 top-1"> */}
            {/* <AiFillCloseCircle size={20} /> */}
            {/* </button> */}
          </div>
        )
      })}

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

export default MemberInput;
