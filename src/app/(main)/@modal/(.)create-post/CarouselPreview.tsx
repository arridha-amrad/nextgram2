"use client";

import {
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  listOfImageUrl: string[];
};

export default function CarouselPreview({ listOfImageUrl }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        className="max-w-sm mx-auto"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <div className="relative">
          <CarouselContent>
            {listOfImageUrl.map((url, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    className="object-cover w-full h-full overflow-hidden"
                    src={url}
                    width={100}
                    height={100}
                    alt="post-image"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <div className="py-2 flex gap-1 items-center justify-center">
        {listOfImageUrl.map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-2 aspect-square rounded-full",
              current === i + 1 ? "bg-foreground/20" : "bg-foreground/10"
            )}
          />
        ))}
      </div>
    </div>
  );
}
