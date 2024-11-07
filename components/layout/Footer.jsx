import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ footerData }) {
  return (
    <footer className="w-full py-20 px-5">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
          <h2 className="text-3xl text-white">{footerData.callToAction.heading}</h2>
          <Link
            href={footerData.callToAction.buttonLink}
            className="inline-flex h-12 items-center rounded bg-[#F7B928] px-8 font-medium transition-colors hover:bg-white"
          >
            {footerData.callToAction.buttonText}
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t text-white border-[#F7B928] pt-8">
          <div className="space-y-1 text-base">
            <h3 className="font-medium">Kontakta oss</h3>
            <a href={`mailto:${footerData.contact.email}`} className="block hover:underline">
              {footerData.contact.email}
            </a>
            <a href={`tel:${footerData.contact.phone}`} className="block hover:underline">
              {footerData.contact.phone}
            </a>
          </div>

          <div className="space-y-1 text-center">
            <h3 className="text-base font-medium ">Följ oss på sociala medier</h3>
            <div className="flex gap-4">
              {footerData.socialLinks.map((social, index) => (
                <Link href={social.href} key={index} className="hover:text-[#F7B928]">
                  {social.icon === "linkedin" && <Linkedin className="h-5 w-5" />}
                  {social.icon === "instagram" && <Instagram className="h-5 w-5" />}
                  {social.icon === "facebook" && <Facebook className="h-5 w-5" />}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>EL CURES</span>
            <span className="text-muted-foreground">{footerData.footerText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
