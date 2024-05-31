"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import CarouselPreview from "./CarouselPreview";
import PostDescriptionInput from "./InputPostDescription";
import { ImagePlus } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import PostTagInputs from "./InputPostTags";
import PostLocation from "./InputPostLocation";
import ButtonFilePicker from "./ButtonFilePicker";
import { useFormState } from "react-dom";
import { createPostAction } from "./create-post-action";

const initialState = {
  error: {} as any,
};

const FilePicker = () => {
  const [preview, setPreview] = useState<string[]>([]);
  const [fileList, setFileList] = useState<File[]>([]);

  const [formState, formAction] = useFormState(createPostAction, initialState);

  const router = useRouter();

  return (
    <div className="w-full max-h-screen h-full">
      {preview.length === 0 ? (
        <ButtonFilePicker setFileList={setFileList} setPreview={setPreview} />
      ) : (
        <div className="w-full flex gap-3 items-start justify-start">
          <div className="flex-2">
            <CarouselPreview listOfImageUrl={preview} />
          </div>
          <form
            action={(data) => {
              fileList.forEach((fl) => data.append("images", fl));
              formAction(data);
            }}
            className="overflow-y-auto flex-[3] overflow-auto px-2 space-y-3"
          >
            <PostLocation />
            <PostTagInputs />
            <PostDescriptionInput />
            <div className="flex items-center justify-end gap-3">
              <Button
                onClick={() => {
                  router.back();
                }}
                variant="ghost"
              >
                Cancel
              </Button>
              <Button type="submit">Create Post</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilePicker;
