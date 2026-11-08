// Verifica links internos, imagens e noindex no build (dist/).
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const arquivos = [];
(function andar(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    statSync(p).isDirectory() ? andar(p) : p.endsWith(".html") && arquivos.push(p);
  }
})(DIST);

const existe = (url) => {
  const [caminho] = url.split(/[?#]/);
  if (caminho === "/" || caminho === "") return existsSync(join(DIST, "index.html"));
  return existsSync(join(DIST, caminho)) || existsSync(join(DIST, caminho + ".html"));
};

let erros = 0;
for (const f of arquivos) {
  const html = readFileSync(f, "utf8");
  const pagina = f.replace(DIST, "").replace(/\.html$/, "") || "/";
  if (/name="robots" content="noindex/.test(html) && !pagina.endsWith("/404")) {
    console.error(`NOINDEX indevido em ${pagina}`);
    erros++;
  }
  for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const url = m[1];
    if (url.startsWith("//")) continue;
    if (!existe(url)) {
      console.error(`Link quebrado em ${pagina}: ${url}`);
      erros++;
    }
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${m[1]}"`)) {
      console.error(`Âncora ausente em ${pagina}: #${m[1]}`);
      erros++;
    }
  }
}
console.log(`${arquivos.length} páginas verificadas, ${erros} problema(s).`);
process.exit(erros ? 1 : 0);
