"use client";

import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

type Props = {
  setFileList: Dispatch<SetStateAction<File[]>>;
  setPreview: Dispatch<SetStateAction<string[]>>;
};

const ButtonFilePicker = ({ setFileList, setPreview }: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { data } = useSession();

  const onChangeFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!data?.user.id) return;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        setFileList((val) => [...val, files[i]]);
        const url = URL.createObjectURL(files[i]);
        setPreview((val) => [...val, url]);
      }
    }
  };

  const pick = () => {
    ref.current?.click();
  };
  return (
    <div className="h-[300px] w-full items-center justify-center flex">
      <input
        ref={ref}
        type="file"
        hidden
        multiple
        onChange={onChangeFileInput}
      />
      <Button onClick={pick}>
        <ImagePlus className="w-5 h-5 mr-3" />
        Pick Files
      </Button>
    </div>
  );
};

export default ButtonFilePicker;
