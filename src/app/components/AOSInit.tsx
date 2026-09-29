'use client'
import { useEffect } from "react";
import "aos/dist/aos.css";

export function AOSInit() {

  useEffect(() => {
    import("aos").then(({ default: AOS }) => {
      AOS.init({
        mirror: true,
        duration: 800,
        easing: "ease-in-out",
        once: false,
        offset: 80,
      });
    });
  }, []);

  return null;
}
