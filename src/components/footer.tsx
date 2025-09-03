"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, HandHeart, FileText } from "lucide-react"
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
    <footer id="contact" className="bg-gray-900 text-gray-300 w-full pt-16 pb-8">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: About & Contact Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
                <HandHeart className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold font-headline text-white">
                Hope of Faith Foundation
                </span>
            </Link>
            <p className="text-gray-400">
                Transforming lives through love and care, providing holistic care for vulnerable children in Uganda.
            </p>
            <div className="space-y-3">
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
               <div className="flex items-start">
                <FileText className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                <span>Reg No: 80020002320853</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-headline text-white">Quick Links</h3>
            <ul className="space-y-2">
                <li><Link href="/#mission" className="hover:text-primary transition-colors">Our Mission</Link></li>
                <li><Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="/#get-involved" className="hover:text-primary transition-colors">Get Involved</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-headline text-white">Get in Touch</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Your Email Address" {...field} className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-primary focus:border-primary" />
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
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} className="min-h-[100px] bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-primary focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
           <p className="text-gray-400 mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Hope of Faith Foundation. All Rights Reserved.</p>
           <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-primary">Facebook</Link>
            <Link href="#" className="text-gray-400 hover:text-primary">Twitter</Link>
            <Link href="#" className="text-gray-400 hover:text-primary">Instagram</Link>
           </div>
        </div>
      </div>
    </footer>
  )
}
