# Como instalar e publicar o DevHub

Guia completo: do zero até o site no ar. Nome do repositório sugerido: **`devhub-glauber`**.

---

## Pré-requisitos

- **Git** instalado → confira com `git --version`. Se não tiver: https://git-scm.com/downloads
- **Conta no GitHub** (usuário `glauberoliveirabr`)
- (Opcional) **Python 3** para testar localmente

---

## Passo 1 — Criar o repositório no GitHub

1. Acesse https://github.com/new
2. **Repository name:** `devhub-glauber`
3. **Visibility:** Public (é um portfólio)
4. **NÃO** marque "Add a README" (já temos os arquivos)
5. Clique em **Create repository**

---

## Passo 2 — Instalar os arquivos localmente

Descompacte o `devhub-glauber.zip` em uma pasta. Abra o terminal **dentro da pasta `devhub-glauber`** e rode:

```bash
# Inicializa o Git
git init
git branch -M main

# Adiciona e registra os arquivos
git add .
git commit -m "feat: implantação inicial do DevHub"

# Conecta ao repositório remoto
git remote add origin https://github.com/glauberoliveirabr/devhub-glauber.git

# Envia para o GitHub
git push -u origin main
```

> **Se aparecer erro de autenticação:** o GitHub não aceita senha no push. Use um
> **Personal Access Token** (Settings → Developer settings → Personal access tokens →
> Fine-grained token, com permissão de `Contents: Read and write` no repositório) no
> lugar da senha, ou configure uma chave SSH.

---

## Passo 3 — Testar localmente (opcional)

Antes ou depois do push, você pode ver o site na sua máquina:

```bash
python3 -m http.server 8000
# Abra http://localhost:8000 no navegador
```

---

## Passo 4 — Ativar o GitHub Pages

1. No repositório: **Settings → Pages**
2. Em **Build and deployment → Source**, escolha **GitHub Actions**
3. O workflow `deploy.yml` publica o site automaticamente a cada push na `main`
4. Em 1–2 minutos o site estará em:
   **https://glauberoliveirabr.github.io/devhub-glauber/**

---

## Passo 5 — Ativar as políticas de segurança

Para alinhar com a Seção 3 do documento de entrega:

| Política | Onde ativar |
| --- | --- |
| **2FA** | Foto de perfil → Settings → Password and authentication → Enable 2FA |
| **Branch Protection** | Repo → Settings → Branches → Add rule (`main`): exigir PR + aprovação, bloquear force-push |
| **Secret Scanning + Push Protection** | Repo → Settings → Code security and analysis → Enable |
| **Dependabot** | Mesma página → Enable Dependabot alerts e security updates |

---

## Passo 6 — Checklist final

- [ ] Push concluído (arquivos aparecem no repositório)
- [ ] Action de deploy verde (aba **Actions**)
- [ ] Site abre no link do GitHub Pages
- [ ] Galeria lista os projetos do GitHub
- [ ] Branch `main` protegida
- [ ] 2FA, Secret Scanning e Dependabot ativos

Pronto! O repositório passa a refletir exatamente o que o documento de entrega descreve.

---

## Atualizações futuras

Sempre que quiser alterar o site:

```bash
git checkout -b feature/minha-mudanca
# ... edite os arquivos ...
git add .
git commit -m "feat: descrição da mudança"
git push -u origin feature/minha-mudanca
# Abra um Pull Request no GitHub → revise → merge na main
# O deploy acontece sozinho após o merge.
```
