"use client";

import { useState } from "react";
import { ContactForm } from "@/components/interactive/contact/contact-form";
import { ContactQuiz } from "@/components/interactive/contact/contact-quiz";
import {
  summarizeQuiz,
  type QuizAnswers,
  type QuizRecommendation,
} from "@/components/interactive/contact/quiz-engine";
import type { ContactService } from "@/lib/schemas/contact";

/**
 * Único boundary client da página de contato: o resultado do quiz
 * pré-preenche o assunto e o resumo do formulário (estado co-locado,
 * sem store global).
 */
export function ContactFlow() {
  const [prefillService, setPrefillService] = useState<ContactService>();
  const [diagnosticSummary, setDiagnosticSummary] = useState<string>();

  function handleQuizComplete(
    recommendation: QuizRecommendation,
    answers: QuizAnswers,
  ) {
    setPrefillService(recommendation.service);
    setDiagnosticSummary(summarizeQuiz(answers, recommendation));
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <ContactQuiz onComplete={handleQuizComplete} />
      </div>
      <div className="relative lg:col-span-7">
        <ContactForm
          prefillService={prefillService}
          diagnosticSummary={diagnosticSummary}
        />
      </div>
    </div>
  );
}
