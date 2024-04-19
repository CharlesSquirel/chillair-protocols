"use client";

import CloseIcon from "@/assets/icons/CloseIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "Zod";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type SubmitFunction<T> = (data: T) => void;

interface FormContainerProps<T extends FieldValues> {
  title: string;
  children: React.ReactNode;
  onSubmitForm: SubmitFunction<T>;
  validationSchema: ZodType<any, any, any>;
  closeUrl: string;
}

export default function FormContainer<T extends FieldValues>({
  title,
  children,
  onSubmitForm,
  validationSchema,
  closeUrl,
}: FormContainerProps<T>) {
  const router = useRouter();
  const methods = useForm<T>({
    resolver: zodResolver(validationSchema),
  });
  const handleCloseForm = () => {
    router.back();
    methods.reset();
  };
  const onSubmit: SubmitHandler<T> = async (data) => {
    onSubmitForm(data);
    handleCloseForm();
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
        <Link href={closeUrl} className="absolute right-6 top-6 z-10">
          <CloseIcon />
        </Link>
      </form>
    </FormProvider>
  );
}
