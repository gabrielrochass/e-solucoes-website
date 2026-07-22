# Decisões de design e conteúdo — E-Soluções

Documento vivo. Explica **por que** cada página é como é e **o que falta** preencher/validar antes do go-live. Complementa: [ASSETS.md](../ASSETS.md) (slots de imagem), [IMAGE-SOURCES.md](./IMAGE-SOURCES.md) (onde buscar fotos), [README.md](../README.md) (stack e como rodar).

## Princípios transversais

- **Assinatura visual: a matriz de risco 5×5.** É o artefato real do domínio (probabilidade × severidade). Aparece no hero, em divisores, nós de timeline e no loading do diagnóstico. Nenhum template corporativo tem isso — é o que tira a "cara de IA/genérico".
- **Laranja é acento cirúrgico.** Petróleo domina; o laranja (`#ff8c42`) só aparece no CTA primário da tela, num dado destacado e no focus ring. Nunca dois laranjas competindo no mesmo viewport.
- **Light-only.** Site de captação, visitante único; dark mode dobraria o QA de contraste. O "peso" visual vem de seções invertidas (petrol-950), não de um tema escuro.
- **Orçamento de qualidade inegociável:** Lighthouse 100, CLS 0, WCAG AA (0 violações no accesslint), `prefers-reduced-motion` respeitado em toda animação. Todo componente novo passa por esses gates antes de entrar.
- **Sem "cara de IA" no texto:** proibidos travessão (—) e middle dot (·) como muleta de pontuação. Separação de dados vira estrutura visual (spans em flex), não caractere. Números sempre tabulares.
- **Movimento com função.** Animação entra para guiar atenção ou revelar hierarquia, nunca como enfeite. Tudo via `motion` confinado a `src/components/motion/*`.

## Heros por página (por que cada um é diferente)

O pedido era diferenciar as telas. Cada hero tem um **layout e um mecanismo distintos**, para nenhuma página parecer clone da outra:

| Página | Hero | Por quê |
| --- | --- | --- |
| **Home** | Fundo petrol-950 + matriz em parallax (desktop) + entrada em cascata blur/stagger do texto | É a tese da marca ("Risco não se adivinha. Dimensiona-se."); o parallax da matriz é a assinatura em movimento |
| **Serviços** (4) | Split: copy à esquerda + **leque de 3 cards** à direita, com pattern próprio por serviço (DP=linhas de documento, clínica=hexágonos, SST=matriz, complementares=mesh) | As 4 páginas compartilham estrutura mas o pattern/ícone do card central muda — parecem parentes, não cópias |
| **Treinamentos** | **Fundo claro** (quebra a sequência de heros escuros) + leque de 3 cards de curso reais do catálogo | Único hero claro do site; amarra o hero ao conteúdo (cursos em destaque) |
| **Blog** | **Editorial**: destaque do artigo mais recente em split (capa + resumo), estilo capa de revista | Entrega conteúdo imediatamente; diferente de todo banner das outras páginas |
| **Sobre** | Split escuro + **leque de fotos** (equipe/clínica) + logo abaixo, um TextReveal palavra a palavra | O leque de fotos humaniza; o TextReveal dá um respiro editorial antes da tese |
| **Contato** | Banner enxuto ("Três perguntas e você sai com um caminho") | Deliberadamente sóbrio: o protagonismo é do quiz interativo logo abaixo, não do hero |

**Primitivos de animação criados nesta rodada** (`src/components/motion/`): `Entrance`/`EntranceItem` (cascata blur+y, inspirado no Hero10 do 21st.dev), `CardFan` (leque de 3 cards que abrem do centro na entrada, hover levanta). Ambos com fallback estático em reduced-motion.

## Página a página: decisões e pendências

### Home (`src/app/page.tsx`)
Arco de storytelling do PRD: hero (tese) → 3 problemas → 4 pilares → prova social → depoimentos → CTA final.
- **Prova social** (`NumberTicker`): números **`[VALIDAR]`** (850+, 100%, 35%) — vieram do PRD, precisam de confirmação da E-Soluções. Contam ao entrar na viewport.
- **Depoimentos** (marquee): mock anonimizado **`[VALIDAR]`** em `src/data/testimonials.ts` — substituir por reais autorizados.
- **CTA final**: slot de foto `home-especialista` (retrato Adna) ainda placeholder.

### Serviços (`src/components/sections/services/service-page.tsx` + `src/data/services/*.ts`)
Template único, 4 conteúdos tipados. Fluxo: hero → problema → solução (sticky scroll) → timeline de legislação → diferenciais → case → CTA.
- **Cases de cliente**: todos **`[VALIDAR]`** (anonimizados, números conservadores) — precisam de autorização/adaptação real.
- **Timeline de legislação**: datas de alta confiança; a entrada de riscos psicossociais na NR-1 está **`[VALIDAR]`** (portaria/cronograma).
- **Slots de foto**: `servico-<slug>-hero-1/-3` (leque) e `servico-<slug>-case`.

### Treinamentos (`src/app/treinamentos/page.tsx`)
Hero claro + tabela comparativa (filtros/sort/deep-link `?nr=`) + diagnóstico CIPA.
- **Catálogo** (`src/data/trainings.json`): 12 cursos **mock** atrás do contrato `TrainingProvider`. Preços e URLs de checkout são ilustrativos — trocar pelo catálogo real (idealmente via API do Host, sem refactor de componente).
- **Diagnóstico CIPA**: dimensionamento transcrito do Quadro I da NR-5 oficial (gov.br). O mapa **setor → grau de risco típico** é prudencial e está **`[VALIDAR]`** por CNAE (ver cabeçalho de `src/lib/cipa/cipa-data.ts`). Resultado é orientativo por design (disclaimer no painel).

### Blog (`src/app/blog/page.tsx` + `src/content/blog/*.mdx`)
Hero editorial + grade. 3 artigos completos + 9 stubs `draft: true` (fora de listagem/sitemap em produção).
- **Fatos normativos**: escritos só com alta confiança; detalhes incertos generalizados ("verifique a redação vigente"). Nenhuma estatística inventada.
- **Falta**: completar os 9 stubs; capas reais (opcionais — placeholder por domínio cobre); avatar de autor.

### Sobre (`src/app/sobre/page.tsx`)
Hero com leque de fotos → TextReveal (manifesto) → tese "um dado, três usos" → método (ScrollTimeline com beam que preenche) → bloco da especialista.
- **Falta**: retrato Adna (`sobre-especialista`), fotos do leque (`sobre-hero-1..3`), bio/cargo **`[VALIDAR]`** em `src/content/authors.yml`.

### Contato (`src/app/contato/page.tsx`)
Quiz de 3 perguntas → pré-preenche o formulário (RHF + Zod + server action). E-mail via `EmailProvider` (stub de console; Resend entra no deploy).
- **Falta**: dados de contato reais em `src/lib/site-config.ts` (telefone, endereço, WhatsApp, e-mail — todos **`[VALIDAR]`**); credencial do Resend.

### Legais (`politica-de-privacidade`, `termos-de-uso`)
Templates LGPD com marcadores **`[VALIDAR]`** visíveis (razão social, CNPJ, DPO, prazo de retenção, foro). **Exigem revisão jurídica antes do go-live.**

## Backlog de validação (resumo — busque `[VALIDAR]` no código)

1. Dados de contato/endereço/razão social/CNPJ (`site-config.ts`, páginas legais)
2. Números de prova social e todos os cases de cliente
3. Revisão jurídica das páginas legais
4. Mapa setor → grau de risco do diagnóstico CIPA (por CNAE)
5. Catálogo real de treinamentos (preços, URLs, idealmente API do Host)
6. Depoimentos reais autorizados
7. Bios/fotos (Adna, equipe) e todos os slots de `ASSETS.md`
8. Detalhe normativo dos riscos psicossociais na NR-1
9. GA4 property (`NEXT_PUBLIC_GA_ID`) e domínio final

## Opções de hero/layout para evoluir (inventário para decisão futura)

Alternativas pesquisadas e descartadas nesta rodada (mantidas aqui como cardápio; todas exigiriam re-skin para a paleta e passar nos gates):

- **Sticky scroll no hero**: painel fixo trocando por seção conforme o scroll — poderoso, mas já usamos sticky scroll na seção de soluções; repetir no hero cansaria.
- **Container 3D scroll** (card que rotaciona em rotateX com o scroll): só faz sentido se houver um portal/dashboard do cliente para mostrar. Sem produto SaaS próprio, fica sem função.
- **Text shimmer / kinetic type**: brilho varrendo um rótulo. Reservado para um selo pontual; hoje o acento é o laranja, não brilho.
- **Bento grid no hero**: destacaria o carro-chefe num bloco maior. Bom candidato para uma futura home v2, combina com a linguagem de grid da matriz.
- **Descartados por conflito de tom**: heros com WebGL/shader, partículas, glow neon, glassmorphism, timelines gamificadas/retrô — quebram o tom técnico B2B e o orçamento de performance.

Se o dono quiser trocar um hero atual por uma dessas opções, o caminho é: adaptar cores → confinar `motion` em `components/motion/` → validar reduced-motion → rodar os gates (build, Lighthouse, accesslint) antes de integrar.
