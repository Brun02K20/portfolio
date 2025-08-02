"use client";

import type React from "react";

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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
      setDialogMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setDialogMessage("Error sending message. Please try again later.");
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

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            {/* Responsive contact info - horizontal on medium+ screens, vertical on small */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300 text-sm">bvirinni@gmail.com</p>
                </div>
              </div>

              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300 text-sm">+54 9 (351) 357-6662</p>
                </div>
              </div>

              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300 text-sm">Córdoba, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full bg-gray-700 border ${formErrors.name ? "border-red-500" : "border-gray-600"} text-white placeholder-gray-400`}
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full bg-gray-700 border ${formErrors.email ? "border-red-500" : "border-gray-600"} text-white placeholder-gray-400`}
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Hi, I would like to..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full bg-gray-700 border ${formErrors.message ? "border-red-500" : "border-gray-600"} text-white placeholder-gray-400`}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogPortal>
          <AlertDialogOverlay className="bg-black/50 backdrop-blur-sm" />
          <AlertDialogContent className="bg-gray-800 dark:bg-gray-800 border border-gray-600">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">Notice</AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-gray-300">
                {dialogMessage}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => setShowDialog(false)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white hover:cursor-pointer"
              >
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    </section>
  );
}
