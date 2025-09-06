"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Check, Mail, User, HardDrive } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  storage: string;
}

const ContactSalesModal = ({ isOpen, onClose }: ContactSalesModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      storage: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact Sales Form Data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    form.reset();
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  const storageOptions = [
    { value: "1-10tb", label: "1-10 TB" },
    { value: "10-50tb", label: "10-50 TB" },
    { value: "50-100tb", label: "50-100 TB" },
    { value: "100tb-1pb", label: "100 TB - 1 PB" },
    { value: "1pb+", label: "1 PB+" },
    { value: "custom", label: "Custom Requirements" },
  ];

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="glass-card max-w-md">
          <div className="text-center py-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Check className="w-8 h-8 text-green-600" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold mb-2"
            >
              Thank You!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mb-6"
            >
              Your request has been submitted successfully. Our sales team will contact you within 24 hours to discuss your enterprise storage needs.
            </motion.p>
            <Button onClick={handleClose} className="glass-button">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glass-card max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Contact Sales</DialogTitle>
          <DialogDescription>
            Tell us about your enterprise storage needs and we'll get back to you with a customized solution.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder=" "
                        {...field}
                        className="glass-input peer pt-6 pb-2"
                      />
                    </FormControl>
                    <FormLabel className="absolute left-3 top-1 text-xs text-muted-foreground flex items-center gap-2 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary">
                      <User className="w-4 h-4" />
                      Full Name
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder=" "
                        {...field}
                        className="glass-input peer pt-6 pb-2"
                      />
                    </FormControl>
                    <FormLabel className="absolute left-3 top-1 text-xs text-muted-foreground flex items-center gap-2 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary">
                      <Mail className="w-4 h-4" />
                      Business Email
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storage"
              rules={{
                required: "Please select your storage requirements",
              }}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="glass-input pt-6 pb-2">
                          <SelectValue placeholder=" " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background/95 backdrop-blur-sm border">
                        {storageOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="bg-background/90">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormLabel className="absolute left-3 top-1 text-xs text-primary flex items-center gap-2 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground">
                      <HardDrive className="w-4 h-4" />
                      Required Storage
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 glass-button bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSalesModal;