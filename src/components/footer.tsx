"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, Landmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Footer() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    })
    form.reset()
  }

  return (
    <footer id="contact" className="bg-secondary w-full py-12 md:py-20">
      <div className="container max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold font-headline mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            We'd love to hear from you. Please fill out the form, and we'll get back to you as soon as possible.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Regarding your project..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message here..." {...field} className="min-h-[120px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold font-headline mb-4">Contact Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:info@hopeoffaithfoundation.org" className="hover:text-primary">info@hopeoffaithfoundation.org</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:+256123456789" className="hover:text-primary">+256 123 456 789</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline mb-4">Our Location</h3>
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              <Image src="https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0057.jpg?raw=true" alt="Map of Uganda" data-ai-hint="uganda map" width={600} height={338} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-screen-xl mt-16 pt-8 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
           <div className="flex items-center mb-4 sm:mb-0">
             <Landmark className="h-5 w-5 mr-2 text-primary" />
             <p>&copy; {new Date().getFullYear()} Hope of Faith Foundation. All rights reserved.</p>
           </div>
           <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary">Facebook</Link>
            <Link href="#" className="hover:text-primary">Twitter</Link>
            <Link href="#" className="hover:text-primary">Instagram</Link>
           </div>
        </div>
      </div>
    </footer>
  )
}
