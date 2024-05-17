"use client";

import CloseIcon from "@/assets/icons/CloseIcon";
import { sendToast } from "@/utils/helpers/sendToast";
import { findToastFormType } from "@/utils/switch/findToastFormType";
import { FormType, SubmitHandlerType } from "@/utils/types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ZodType } from "zod";

interface FormContainerProps<T extends FieldValues> {
  title: string;
  children: React.ReactNode;
  onSubmitForm: SubmitHandlerType<T>;
  validationSchema: ZodType<any, any, any>;
  closeUrl: string;
  defaultValues?: DefaultValues<T>;
  id?: string;
  formType: FormType;
}

export default function FormContainer<T extends FieldValues>({
  title,
  children,
  onSubmitForm,
  validationSchema,
  closeUrl,
  defaultValues,
  id,
  formType,
}: FormContainerProps<T>) {
  const router = useRouter();
  const methods = useForm<T>({
    resolver: zodResolver(validationSchema),
    defaultValues: defaultValues,
  });

  const handleCloseForm = () => {
    router.back();
    methods.reset();
  };
  const onSubmit: SubmitHandler<T> = async (data) => {
    try {
      const toastFormType = await findToastFormType(formType);
      if (id) {
        await onSubmitForm(data, id);
        handleCloseForm();
        sendToast("success", toastFormType, "edit");
      } else {
        await onSubmitForm(data, undefined as any);
        handleCloseForm();
        sendToast("success", toastFormType, "add");
      }
    } catch (error) {
      console.log(error);
      console.error(error);
      sendToast("error");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="absolute z-10 flex min-h-full w-full flex-col gap-6 rounded-md bg-white p-6 shadow-md"
      >
        <h2 className="relative block text-xl font-bold text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-[300px] after:bg-primary after:content-[''] sm:text-2xl md:text-3xl">
          {title}
        </h2>
        {children}
        <Link href={closeUrl} className="absolute right-6 top-6 z-10">
          <CloseIcon className="size-7 sm:size-8 md:size-10" />
        </Link>
      </form>
    </FormProvider>
  );
}
