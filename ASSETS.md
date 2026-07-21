# ASSETS.md — Slots de imagem aguardando assets reais

Todo lugar do site que espera foto/vídeo real usa o componente
[`ImageSlot`](src/components/illustrations/image-slot.tsx) com um `slotId`
desta tabela. O slot reserva o aspect-ratio (zero CLS) e mostra um
placeholder projetado (ilustração SVG da marca) até o asset chegar.

**Como trocar um placeholder por foto real:**

1. Otimize a imagem (webp/avif, 1x e 2x das dimensões da tabela).
2. Coloque em `public/images/<área>/`.
3. No componente que usa o `ImageSlot`, substitua o child (ilustração) por
   `<Image src=... alt=... fill className="object-cover" />` — as dimensões
   do slot não mudam.
4. Escreva `alt` descritivo (pt-BR) — obrigatório.

| slotId | Página / seção | Dimensões (1x) | Ratio | Conteúdo esperado | Direção de arte |
| ------ | -------------- | -------------- | ----- | ----------------- | --------------- |
| _(slots são adicionados conforme as seções são construídas — F3 em diante)_ | | | | | |

## Assets pendentes fora de slots

| Asset | Onde entra | Status |
| ----- | ---------- | ------ |
| Logo oficial (SVG) | Header/footer (hoje: wordmark tipográfico + células de matriz) | Aguardando brand guidelines |
| Foto Adna Correia (retrato) | Home CTA final, blog author bio, /sobre | Aguardando foto high-res |
| Fotos clínica (mín. 20) | /servicos/clinica-ocupacional, home | Aguardando sessão |
| Vídeo clínica 30–60s | Hero /servicos/clinica-ocupacional (fase futura) | Aguardando produção |
| OG image de marca 1200×630 | `src/app/opengraph-image.png` | Placeholder gerado entra na F8 |
