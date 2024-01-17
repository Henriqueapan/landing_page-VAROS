"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import * as React from "react";
import { cadastroFormSubmitAction } from "@/src/app/pageResources/sections/Cadastro/action";
import { TFieldNames } from "@/src/app/pageResources/sections/Cadastro/Cadastro";

type TFieldValues = Record<TFieldNames, string>;

type TInputDefinitions = {
  name: TFieldNames;
  placeholder: string;
  type: string;
};

const inputDefinitions: Array<TInputDefinitions> = [
  {
    name: "name",
    type: "text",
    placeholder: "Nome",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Seu melhor e-mail",
  },
  {
    name: "tel",
    type: "tel",
    placeholder: "Celular",
  },
];

export default function CadastroForm() {
  const [fieldValues, setFieldValues] = useState<TFieldValues>(
    {} as TFieldValues,
  );

  const [fieldErrors, setFieldErrors] = useState<TFieldValues>(
    {} as TFieldValues,
  );

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [message, setMessage] = useState("");

  async function sendData(): Promise<void> {
    const res = await cadastroFormSubmitAction(fieldValues);

    setMessage(res.message);
  }

  useEffect(() => {
    if (!Object.keys(fieldErrors).length && hasSubmitted) {
      sendData().finally();
      return;
    }
  }, [hasSubmitted, fieldErrors]);

  const getFieldValue = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt) return;

    setFieldValues({
      ...fieldValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setHasSubmitted(true);

    const newFieldErrors: TFieldValues = {} as TFieldValues;

    inputDefinitions.forEach((inputDefinition) => {
      const typedFieldName = inputDefinition.name as TFieldNames;

      if (!fieldValues[typedFieldName])
        newFieldErrors[typedFieldName] = "Campo obrigatório";
    });
    setFieldErrors(newFieldErrors);
  };

  return (
    <form
      className="w-full max-w-[564px] py-[60px] px-[53px] flex flex-col justify-between
            border border-grey-800 rounded-[32px] bg-grey-900 text-grey-100"
      onSubmit={handleSubmit}
    >
      {inputDefinitions.map((inputDefinition, idx) => (
        <React.Fragment key={idx}>
          <input
            {...inputDefinition}
            className="w-full border border-grey-700 bg-grey-800 text-grey-600
                  rounded-[4px] py-[13px] px-[19px] mb-6"
            onChange={getFieldValue}
          />
          <p>{fieldErrors[inputDefinition.name]}</p>
        </React.Fragment>
      ))}
      <button
        type="submit"
        className="w-full bg-fl-green text-c-black uppercase text-[18px] tracking-[1.62px]
                py-2.5 px-4 font-semibold border border-doc rounded-[4px]"
      >
        Quero me inscrever
      </button>
    </form>
  );
}
