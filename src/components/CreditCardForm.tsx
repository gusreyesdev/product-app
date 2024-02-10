import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { usePaymentStore, useUiStore } from "@/hooks";
import { Payment } from "@/interfaces";

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
  const navigate = useNavigate();

  const { closeModal } = useUiStore();

  const { startSetPayment } = usePaymentStore();

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

  const isCardValid = (number: string, expiry: string) => {
    if (!validator.isCreditCard(number)) {
      toast({
        duration: 2000,
        variant: "destructive",
        description: "Credit Card is Invalid",
      });
      return false;
    }

    const fullYear = String(new Date().getFullYear());

    const year = Number(fullYear.slice(-2));

    const cardYear = Number(expiry.slice(-2));

    if (cardYear < year) {
      toast({
        duration: 2000,
        variant: "destructive",
        description: "expiry is Invalid",
      });
      return false;
    }

    return true;
  };

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    const { number, name, expiry, cvc } = values;

    if (isCardValid(number, expiry)) {
      closeModal();

      const payment: Payment = {
        payment_method_type: "CARD",
        currency: "COP",
        card: {
          number: Number(number),
          name: name,
          expiry: Number(expiry),
          cvc: Number(cvc),
        },
      };

      startSetPayment(payment);

      navigate("/dashboard/summary/", { state: { card: values } });
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
