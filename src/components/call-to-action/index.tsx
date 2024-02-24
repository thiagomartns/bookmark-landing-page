import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { ActionButton } from "../action-button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SubsSchema } from "../../../schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";

export const CallToAction = () => {
  const form = useForm<z.infer<typeof SubsSchema>>({
    resolver: zodResolver(SubsSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="flex items-center justify-center flex-col p-10 gap-10 bg-custom-purple text-white">
      <h3 className="tracking-widest">35,000+ ALREADY JOINED</h3>
      <h1 className="text-3xl font-bold text-center">
        Stay up-to-date with what we’re doing
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="text-very-dark-blue"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-soft-red" />
              </FormItem>
            )}
          />
          <ActionButton className="w-full" label="Contact us" color="red" />
        </form>
      </Form>
    </section>
  );
};
