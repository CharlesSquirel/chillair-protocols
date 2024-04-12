"use client";

import Close from "@/assets/icons/Close";
import { ValvesValidationSchema } from "@/utils/zod/valvesValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

interface FormContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function FormContainer({ title, children }: FormContainerProps) {
  const methods = useForm({ resolver: zodResolver(ValvesValidationSchema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="absolute left-[50%] top-[90px] z-10 flex w-[1844px] translate-x-[-50%] flex-col gap-6 rounded-md bg-white p-6 shadow-md"
      >
        <h2 className="relative block text-3xl font-bold text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-[40%] after:bg-primary after:content-['']">
          {title}
        </h2>
        {children}
        <Link href="/dashboard/valves" className="absolute right-6 top-6 z-10">
          <Close />
        </Link>
      </form>
    </FormProvider>
  );
}
