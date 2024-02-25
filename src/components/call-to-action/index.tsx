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
    <section className="bg-custom-purple text-white lg:py-16">
      <div className="flex items-center justify-center flex-col p-10 gap-10 m-auto bg-custom-purple text-white lg: max-w-screen-xl">
        <h3 className="tracking-widest lg:text-xl">35,000+ ALREADY JOINED</h3>
        <h1 className="text-3xl font-bold text-center xl:text-5xl">
          Stay up-to-date with what we’re doing
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-4 w-full md:w-72 lg:w-96 lg:flex-row lg:justify-center"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="text-very-dark-blue m-auto lg:w-96"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-soft-red" />
                </FormItem>
              )}
            />
            <Button className="bg-soft-red w-full shadow-xl">Contact us</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
