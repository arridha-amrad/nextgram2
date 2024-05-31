"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PostLocation = () => {
  return (
    <div className="space-y-2">
      <Label htmlFor="location">Location</Label>
      <Input id="location" name="location" />
    </div>
  );
};

export default PostLocation;
