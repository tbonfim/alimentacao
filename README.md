# Orientação Alimentar

Aplicação estática para consultar o plano alimentar e o catálogo de receitas de
Thiago Oliveira.

**Última atualização dos dados:** 23 de julho de 2026

## Páginas

- `index.html`: plano alimentar semanal, orientações e substituições.
- `receitas-jul2026.html`: receitas com busca e filtros por refeição e proteína.

## Estrutura

- `components/`: Web Components e seus estilos.
- `data/`: dados estruturados do plano e das receitas.
- `css/`: estilos compartilhados e estilos das páginas.
- `pdfs/`: documentos de referência locais (não publicados).
- `manu/*.pdf`: PDFs de referência da Emanuelle (não publicados).

Arquivos `.pdf` e a pasta `pdfs/` estão no `.gitignore`, então não vão para o
GitHub Pages e não ficam acessíveis pela URL pública do site.

## Executar localmente

O projeto não requer instalação ou etapa de build. Abra `index.html` diretamente
no navegador ou inicie um servidor HTTP local:

```sh
python3 -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000).

## Publicação

O conteúdo da branch `main` pode ser publicado diretamente pelo GitHub Pages.
