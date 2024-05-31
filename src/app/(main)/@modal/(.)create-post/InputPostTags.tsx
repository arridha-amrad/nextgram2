"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PostTagInputs = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="tags-input">Tags</Label>
      <Input id="tags-input" name="tags" />
    </div>
  );
};

export default PostTagInputs;
