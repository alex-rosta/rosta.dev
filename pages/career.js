import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export default function TimelineDemo() {
  const data = [
    {
      title: '2023feb-now',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
            Working at Region Sörmland as an infrastructure engineer. My main
            focus is on IAM and Server/Storage/Backup.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <Image
              src="/images/identity.png"
              alt="identity template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="rounded-lg object-cover w-full h-auto md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
                Working with enterprise infrastructure, I have learned a lot
                about IAM, Server, Storage and Backup.
                <br />
                <br />
                My biggest project is the development and implementation of a
                new on-premise Identity Provider for the region, Which now over
                60 business critical applications are using everyday, 24/7.
              </p>
            </div>
            <div className="rounded-lg object-cover h-full md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
                ✅ Identity Provider
                <br />
                ✅ Active Directory
                <br />
                ✅ Entra ID
                <br />
                ✅ vSphere, Datacenter, Netapp, HPE Primera
                <br />✅ Building automation with PowerShell, Python.
              </p>
            </div>
            <Image
              src="/images/hpe.jpg"
              alt="hpe template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: '2021-2023',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
            Worked at Gibon as an IT consultant. My main focus was on Azure and
            Microsoft 365.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/azure.jpg"
              alt="azure template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/Terraform.png"
              alt="terraform template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
              Migrated several medium and small businesses to Azure and
              Microsoft 365. <br />
              <br />
              Also maintained and developed new solutions for existing
              customers.
              <br />
              <br />
              ✅ Terraform
              <br />
              ✅ Azure
              <br />
              ✅ Microsoft 365
              <br />
              ✅ Intune
              <br />
              ✅ AVD
              <br />
            </p>
          </div>
        </div>
      ),
    },
    {
      title: '2019-2021',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
            Started as a support engineer at a municipality and region.
            <br />
            <br />
            ✅ Supporting end-users
            <br />
            ✅ Troubleshooting
            <br />
            ✅ Windows
            <br />
            ✅ Hardware
            <br />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/support.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/itsupport.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
