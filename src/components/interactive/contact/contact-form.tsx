"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/app/contato/actions";
import { trackEvent } from "@/lib/analytics";
import {
  contactSchema,
  contactServiceOptions,
  type ContactFormData,
  type ContactService,
} from "@/lib/schemas/contact";

interface ContactFormProps {
  prefillService?: ContactService;
  diagnosticSummary?: string;
}

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm({
  prefillService,
  diagnosticSummary,
}: ContactFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string>();
  const startedAt = useMemo(() => Date.now(), []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    values: undefined,
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: prefillService,
      message: "",
      diagnosticSummary,
      website: "",
      startedAt,
    },
  });

  // Quiz respondido depois do mount atualiza assunto + resumo,
  // desde que o usuário ainda não tenha mexido no campo.
  useEffect(() => {
    if (prefillService && !form.formState.touchedFields.service) {
      form.setValue("service", prefillService, { shouldValidate: true });
      form.setValue("diagnosticSummary", diagnosticSummary);
    }
  }, [prefillService, diagnosticSummary, form]);

  async function onSubmit(data: ContactFormData) {
    setState("sending");
    setServerError(undefined);
    const result = await submitContact(data);
    if (result.ok) {
      setState("success");
      trackEvent("contact_submitted", { service: data.service });
    } else {
      setState("error");
      setServerError(result.error);
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-risk-low-border bg-risk-low-bg p-card"
      >
        <p className="font-semibold text-risk-low-fg">Mensagem enviada.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Respondemos em até 1 dia útil. Se for urgente, chame no WhatsApp:
          o botão está logo abaixo do formulário.
        </p>
      </div>
    );
  }

  const errors = form.formState.errors;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="contato-nome">Nome</Label>
          <Input
            id="contato-nome"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "erro-nome" : undefined}
            {...form.register("name")}
          />
          {errors.name && (
            <p id="erro-nome" className="text-sm text-risk-high-fg">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="contato-empresa">Empresa</Label>
          <Input
            id="contato-empresa"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "erro-empresa" : undefined}
            {...form.register("company")}
          />
          {errors.company && (
            <p id="erro-empresa" className="text-sm text-risk-high-fg">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="contato-email">E-mail</Label>
          <Input
            id="contato-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "erro-email" : undefined}
            {...form.register("email")}
          />
          {errors.email && (
            <p id="erro-email" className="text-sm text-risk-high-fg">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="contato-telefone">Telefone / WhatsApp</Label>
          <Input
            id="contato-telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(81) 9…"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "erro-telefone" : undefined}
            {...form.register("phone")}
          />
          {errors.phone && (
            <p id="erro-telefone" className="text-sm text-risk-high-fg">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 grid gap-1.5">
        <Label id="contato-assunto-label" htmlFor="contato-assunto">
          Assunto
        </Label>
        <Select
          value={form.watch("service")}
          onValueChange={(value) =>
            form.setValue("service", value as ContactService, {
              shouldValidate: true,
              shouldTouch: true,
            })
          }
        >
          <SelectTrigger
            id="contato-assunto"
            aria-labelledby="contato-assunto-label"
            aria-invalid={Boolean(errors.service)}
            className="w-full sm:w-80"
          >
            <SelectValue placeholder="Escolha o assunto" />
          </SelectTrigger>
          <SelectContent>
            {contactServiceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-sm text-risk-high-fg">{errors.service.message}</p>
        )}
      </div>

      <div className="mt-5 grid gap-1.5">
        <Label htmlFor="contato-mensagem">Mensagem</Label>
        <Textarea
          id="contato-mensagem"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "erro-mensagem" : undefined}
          {...form.register("message")}
        />
        {errors.message && (
          <p id="erro-mensagem" className="text-sm text-risk-high-fg">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot — invisível para humanos, irresistível para bots */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="contato-website">Não preencha este campo</label>
        <input
          id="contato-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...form.register("website")}
        />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <Checkbox
          id="contato-lgpd"
          checked={form.watch("lgpdConsent") === true}
          onCheckedChange={(checked) =>
            form.setValue("lgpdConsent", checked === true ? true : (undefined as never), {
              shouldValidate: form.formState.isSubmitted,
            })
          }
          aria-labelledby="lgpd-descricao"
          className="mt-0.5"
        />
        <Label
          htmlFor="contato-lgpd"
          id="lgpd-descricao"
          className="text-sm leading-relaxed font-normal text-ink-muted"
        >
          Autorizo o uso destes dados exclusivamente para responder a este
          contato, conforme a{" "}
          <a
            href="/politica-de-privacidade"
            className="font-medium text-petrol-500 underline underline-offset-4"
          >
            Política de Privacidade
          </a>
          .
        </Label>
      </div>
      {errors.lgpdConsent && (
        <p className="mt-2 text-sm text-risk-high-fg">
          {errors.lgpdConsent.message}
        </p>
      )}

      {state === "error" && serverError && (
        <p role="alert" className="mt-4 text-sm text-risk-high-fg">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={state === "sending"}
        className="mt-6"
      >
        {state === "sending" ? "Enviando…" : "Enviar mensagem"}
      </Button>
    </form>
  );
}
