import Image from "next/image";

export default function PhoneVisual({ side = "front", priority = false, className = "" }: { side?: "front" | "back"; priority?: boolean; className?: string }) {
  return <div className={`phone-visual ${className}`}>
    <Image src={`/products/iphone-17/iphone-17-${side}.svg`} alt={side === "front" ? "iPhone 17 visto de frente" : "iPhone 17 en Azul Niebla visto desde atrás"} width={700} height={1400} priority={priority} sizes="(max-width: 600px) 70vw, 420px" />
  </div>;
}
