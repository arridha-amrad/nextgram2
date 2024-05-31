"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PostDescriptionInput = () => {
  return (
    <div className="w-full space-y-2">
      <Label>Description</Label>
      <Textarea className="resize-none" name="description" />
    </div>
  );
};

export default PostDescriptionInput;
