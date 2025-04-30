"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
    //   toast.success("Message sent!", { id: loadingToast });
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Get in
            touch!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full !py-0 border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-medium mb-6">Get In Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:its.yash.kumar23@gmail.com"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          its.yash.kumar23@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">GitHub</p>
                        <a
                          href="https://github.com/its-kumar-yash"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          @its-kumar-yash
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          LinkedIn
                        </p>
                        <a
                          href="https://www.linkedin.com/in/its-kumar-yash/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          Yash Kumar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-center text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Yash Kumar. All rights
                    reserved.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border !py-0 border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>

                {isSubmitted ? (
                  <div className="bg-primary/10 p-4 rounded-md flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p>
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="focus-visible:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="focus-visible:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={6}
                        required
                        className="resize-none focus-visible:ring-primary/50 h-24 overflow-y-scroll"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-white"></span>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
