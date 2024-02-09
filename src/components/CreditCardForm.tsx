import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast";

import validator from "validator";

const FormSchema = z.object({
  number: z.coerce
    .string()
    .min(14, { message: "Card number is invalid" })
    .max(19, { message: "Card number must be 19 numbers" }),

  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .max(18, {
      message: "Name is invalid",
    }),

  expiry: z.coerce
    .string()
    .min(4, { message: "Expiry is invalid" })
    .max(4, { message: "Expiry must be 4 numbers" }),

  cvc: z.coerce
    .string()
    .min(4, { message: "CVC is invalid" })
    .max(4, { message: "CVC must be 4 numbers" }),
});

export const CreditCardForm = () => {
  const [state, setState] = useState({
    focus: undefined,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
    },
  });

  const number = form.watch("number");
  const name = form.watch("name");
  const expiry = form.watch("expiry");
  const cvc = form.watch("cvc");

  const handleInputFocus = (event: any) => {
    setState({
      focus: event.target.name,
    });
  };

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const { number } = values;

    console.log("values", values);

    if (!validator.isCreditCard(number)) {
      toast({
        duration: 2000,
        variant: "destructive",
        description: "Credit Card is Invalid",
      });
    }
  };

  return (
    <div>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={state.focus}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    className="mt-2"
                    placeholder="Number"
                    onFocus={handleInputFocus}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    onFocus={handleInputFocus}
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expiry"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    onFocus={handleInputFocus}
                    placeholder="Expiry"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    onFocus={handleInputFocus}
                    placeholder="Cvc"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button className="w-full" type="submit">
              Accept
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
