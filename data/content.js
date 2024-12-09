"use client";
import Image from "next/image";

export const AboutContent = () => {
return (
<div className="flex items-center justify-end w-full">
  <Image
    src="https://i.postimg.cc/DZNC6H4D/processed-B30-E3881-60-F2-474-D-A014-B7895-EBAA0-BB-1.jpg"
    alt="dummy image"
    width={500}
    height={500}
    className="object-right rounded-lg"
  />
</div>
);
};

export const IAMContent = () => {
return (
<div className="flex items-center justify-end w-full">
  <Image
    src="/images/devops.jpg"
    alt="dummy image"
    width={500}
    height={500}
    className="object-right rounded-lg"
    priority
  />
</div>
);
};

export const KubernetesContent = () => {
return (
<div className="flex items-center justify-end w-full">
  <Image
    src="/images/tessa.jpg"
    alt="dummy image"
    width={500}
    height={500}
    className="object-right rounded-lg"
    priority
  />
</div>
);
};

export const HomeLabContent = () => {
return (
<div className="flex items-center justify-end w-full">
  <Image
    src="/images/homelab.webp"
    alt="dummy image"
    width={500}
    height={500}
    className="object-right rounded-lg"
    priority
  />
</div>
);
}