"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
    return (
        <TracingBeam className="px-10">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-medium font-bold w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className="text-xl mb-4">
                            {item.title}
                        </p>

                        <div className="text-medium font-bold prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover" />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        description: (
            <>
                <p>
                    For hardware three Intel NUCs are used. The NUCs are equipped with 96GB of RAM and 1TB of SSD Nvme storage. The NUCs are running on Intel Core Ultra 5 processors with 14 cores.
                </p>
            </>
        ),
        badge: "Hardware",
        image:
            "/images/nuc14.jpg",
    },
    {
        description: (
            <>
                <p>
                    The obvious choice for the hypervisor is VMware ESXi. As a member of the VMware User Group &quot;VMUG&quot; I have access to the latest software and updates. The NUCs are running on ESXi 8.0 with a vCenter 8.0 server
                    for manageability. A cluster is created with the three NUCs for high availability and redundancy, automatic vMotion and DRS.
                </p>
            </>
        ),
        badge: "Virtualization",
        image:
            "/images/vmware.jpeg",
    },
    {
        description: (
            <>
                <p>
                    My K3s cluster consists of three nodes, one master and two workers. The operating system is Ubuntu 22.04 LTS. Every node has two cores of CPU and 8gb of RAM,
                    running about 15-30 pods based on the workload at the time. In fact, this website is running on the K3s cluster right now!
                </p>
            </>
        ),
        badge: "K3s Platform",
        image:
            "/images/k3s.jpg",
    },
    {
        badge: "Rancher",
        image:
            "/images/rancher.jpg",
        description:
            <>
                <p>
                    Rancher is used for managing the K3s cluster graphically. Although it&apos;s useful to deploy straight from the CLI with yaml files, Rancher provides a nice overview of the cluster and the workloads.
                </p>
            </>
    },
    {
        description: (
            <>
                <p>
                    Choice of monitoring is Grafana paired with Prometheus for K3s and InfluxDB for the ESXi cluster. Grafana is used for visualizing the data and creating dashboards for the clusters.
                </p>
            </>
        ),
        badge: "Grafana",
        image:
            "/images/grafana.png",
    },
    {
        badge: "Cloudflare",
        image:
            "/images/cloudflare.webp",
        description:
            <>
                <p>
                    To access the homelab from the outside, Cloudflare is used for DDNS and reverse proxy. The homelab is behind a Cloudflare proxy for security, performance and geoblocking.
                </p>
            </>
    },
    {
        description: (
            <>
                <p>
                    Authentication is handled by Github using OAuth2.0. This way I can use my Github account secured with multi-factor authentication to access the externally exposed services.
                </p>
            </>
        ),
        badge: "OAuth2.0",
        image:
            "/images/oauth.png",
    }
];
