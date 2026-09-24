"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
              Componente React · framer-motion
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink">
              Una pantalla que se endereza <br />
              <span className="mt-1 block text-5xl leading-none font-extrabold tracking-tight md:text-[6rem]">
                mientras bajas
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2400&q=80"
          alt="Portátil sobre un escritorio mostrando código en un editor"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
