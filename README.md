# mangueirasanitaria.com.br

Site catálogo das mangueiras sanitárias FlexMilk, FlexFood e FlexPharma e das conexões ConeX by Pronex (Grupo Pronex). Sem preços, sem estoque e sem checkout: o cliente conhece o produto e fala com a equipe por telefone, WhatsApp ou e-mail.

## Stack

- [Astro](https://astro.build) gerando HTML estático (`build.format: "file"`, URLs sem barra final).
- Fontes IBM Plex servidas pelo próprio site (sem Google Fonts).
- Orçamento sem servidor: `/orcamento` monta o pedido no navegador e abre o WhatsApp ou o e-mail com o texto pronto. Nenhum dado é gravado.
- Hospedagem: Hostinger (Apache/LiteSpeed). Regras de URL, HTTPS e cache em `public/.htaccess`.

## Comandos

```bash
npm ci
npm run dev          # http://localhost:4321
npm run build        # gera dist/
npm run check:links  # links internos, âncoras e noindex indevido
npm run preview
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Contatos, empresa, tabela técnica, linhas, conexões, menu | `src/data/site.ts` |
| Pop-up e botão do WhatsApp | `src/components/WhatsAppFlutuante.astro` (objeto `CONFIG`) |
| Liberar download das fichas | `DOWNLOADS_LIBERADOS` em `src/data/site.ts` + PDFs em `public/docs/` |
| Textos das páginas | `src/pages/*.astro` |
| Cores e tipografia | `src/styles/global.css` |

Todo dado técnico vem do DataSheet Pronex (jan/2025), da Ficha do Kit de Conexão (mar/2025) ou de resposta da Pronex. Não acrescente dado técnico sem fonte. Itens em aberto estão em [PENDENCIAS.md](PENDENCIAS.md).

## Medição (GA4 via GTM)

Defina a variável de repositório `PUBLIC_GTM_ID` (Settings → Secrets and variables → Actions → Variables). Sem ela, o site não carrega nenhum script de terceiros e não mostra banner de cookies. Com ela, o Consent Mode v2 começa negado e só mede após o "Aceitar".

Eventos enviados ao `dataLayer`: `contact_click` (canal, origem), `view_line`, `view_connection`, `compare_lines`, `file_download`, `quote_start`, `quote_step`, `generate_lead` (canal whatsapp ou email).

## Publicação na Hostinger

O workflow `.github/workflows/deploy.yml` faz build e verificação em todo push e pull request. **A publicação não é automática.** Ela roda só quando:

- alguém dispara o workflow manualmente (Actions → Build e deploy → Run workflow) com "Publicar" marcado; ou
- a variável `DEPLOY_AUTOMATICO` for `true`.

Segredos necessários (environment `producao`):

| Segredo | Exemplo |
| --- | --- |
| `HOSTINGER_HOST` | IP ou host SSH do plano |
| `HOSTINGER_PORT` | `65002` (padrão Hostinger) |
| `HOSTINGER_USER` | usuário SSH |
| `HOSTINGER_PATH` | `domains/mangueirasanitaria.com.br/public_html` |
| `HOSTINGER_SSH_KEY` | chave privada cuja pública está no hPanel |

### DNS (Registro.br → Microsoft 365)

Na zona DNS da Microsoft, criar só:

- `A` em `@` apontando para o IP da Hostinger;
- `CNAME` em `www` apontando para `mangueirasanitaria.com.br`.

Não mexer em MX, autodiscover, SPF ou DKIM.
