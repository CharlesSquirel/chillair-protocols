"use client";

import Close from "@/assets/icons/Close";
import {
  CreateValveCredentials,
  createValve,
} from "@/data/creatingFunc/createValve";
import { ValvesCredentials } from "@/utils/types/payloads";
import { ValvesValidationSchema } from "@/utils/zod/valvesValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

interface FormContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function FormContainer({ title, children }: FormContainerProps) {
  const router = useRouter();
  const methods = useForm({ resolver: zodResolver(ValvesValidationSchema) });
  const handleCloseForm = () => {
    router.back();
    methods.reset();
  };
  const onSubmit = async (data: FieldValues) => {
    const valvesData: CreateValveCredentials = {
      userSignature: "asdasd",
      email: "jan@kowalski.pl",
      userId: "234234",
      firma: data.firma,
      type: data.type,
      serialNumber: data.serialNumber,
      infoBlock: data.infoBlocks,
    };
    try {
      console.log("przed fetchem");
      const response = await fetch("/api/valves", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: valvesData }),
      });
      console.log("po fetchu");

      if (!response.ok) {
        throw new Error("Failed to create valve");
      }

      // Jeśli żądanie powiodło się, możesz zamknąć formularz
      handleCloseForm();
      console.log("fetch wykonany");
    } catch (error) {
      console.error(error);
    }
  };

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
