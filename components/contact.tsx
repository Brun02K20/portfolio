"use client";

import type React from "react";
import type { CSSProperties } from "react";

import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Download, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { Cta } from "@/components/cta-buttons";
import { mailto, site } from "@/lib/site";

const inputClasses =
  "h-12 rounded-xl border-white/10 bg-white/[0.04] dark:bg-white/[0.04] px-4 text-white placeholder:text-zinc-500 transition-all duration-300 focus-visible:border-purple-400/60 focus-visible:bg-white/[0.07] focus-visible:ring-4 focus-visible:ring-purple-500/20 aria-invalid:border-red-500/70 aria-invalid:ring-red-500/20";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
      message: !formData.message.trim(),
    };

    setFormErrors(errors);

    // Si hay errores, no enviar el formulario
    if (errors.name || errors.email || errors.message) {
      setIsSubmitting(false);
      return;
    }

    // Si no hay errores, enviar el formulario
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setDialogMessage(t("contact.success"));
      setFormData({ name: "", email: "", message: "" });
    } else {
      setDialogMessage(t("contact.error"));
    }
    setShowDialog(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const channels = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: site.email,
      href: mailto,
      accent: "from-indigo-500 to-purple-500",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: site.phoneDisplay,
      href: site.whatsapp,
      accent: "from-emerald-500 to-teal-500",
      external: true,
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: site.location,
      accent: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Local glow so the closing section feels like a destination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_65%)] blur-2xl"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="05" icon={Mail} title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* ---------------------------------------------------------- */}
          {/* Direct channels                                            */}
          {/* ---------------------------------------------------------- */}
          <Reveal direction="left" className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white">
                <span className="gradient-text-static">{t("contact.getInTouch")}</span>
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">{t("contact.intro")}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-400">
                <Clock className="h-4 w-4 text-cyan-300" />
                {t("contact.responseTime")}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${channel.accent} text-white shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">{channel.label}</span>
                      <span className="block truncate text-sm font-medium text-white sm:text-base">{channel.value}</span>
                    </span>
                  </>
                );
                const classes =
                  "glass group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]";
                return channel.href ? (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className={classes}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={channel.label} className={classes}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Cta variant="whatsapp" href={site.whatsapp} external>
                <MessageCircle />
                {t("contact.writeWhatsapp")}
              </Cta>
              <Cta variant="secondary" href={mailto}>
                <Mail />
                {t("contact.sendEmail")}
              </Cta>
            </div>

            <p className="text-sm text-zinc-400">
              {t("contact.orCv")}{" "}
              <a
                href={site.cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-white underline decoration-pink-400/60 decoration-2 underline-offset-4 transition hover:decoration-pink-400"
              >
                {t("contact.downloadCv")}
                <Download className="h-3.5 w-3.5" />
              </a>
            </p>
          </Reveal>

          {/* ---------------------------------------------------------- */}
          {/* Form                                                        */}
          {/* ---------------------------------------------------------- */}
          <Reveal direction="right">
            <div
              className="gradient-border glow-brand-lg relative overflow-hidden rounded-3xl p-6 sm:p-8"
              style={{ "--gb-fill": "#0f0f26" } as CSSProperties}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl animate-float-slow" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl animate-float-delayed" />

              <div className="relative">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/40">
                    <Send className="h-5 w-5 text-white" />
                  </span>
                  {t("contact.sendMessage")}
                </h3>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t("contact.namePlaceholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={formErrors.name || undefined}
                    className={inputClasses}
                  />

                  <Input
                    type="email"
                    name="email"
                    placeholder={t("contact.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={formErrors.email || undefined}
                    className={inputClasses}
                  />

                  <Textarea
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    aria-invalid={formErrors.message || undefined}
                    className={`${inputClasses} min-h-40 resize-none py-3`}
                  />

                  <Cta type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className={isSubmitting ? "animate-pulse" : "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"} />
                    {isSubmitting ? t("contact.sending") : t("contact.send")}
                  </Cta>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogPortal>
          <AlertDialogOverlay className="bg-black/60 backdrop-blur-sm" />
          <AlertDialogContent className="glass-strong rounded-2xl border-white/10">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">{t("contact.notice")}</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-zinc-300">
                {dialogMessage}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => setShowDialog(false)}
                className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 hover:cursor-pointer"
              >
                {t("common.ok")}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    </section>
  );
}
