# DevHub

Plataforma centralizada para exibir e gerenciar projetos e portfólios digitais, de **Glauber Oliveira**. O hub é um site estático (HTML, CSS e JavaScript) versionado no Git, hospedado no GitHub e publicado automaticamente via **GitHub Pages**.

🔗 **Acesse:** https://glauberoliveirabr.github.io/devhub-glauber/

---

## Sobre o projeto

O DevHub usa o GitHub como camada de armazenamento, versionamento e controle de acesso. A galeria de projetos é populada dinamicamente consumindo a **API pública do GitHub**, listando os repositórios do usuário. O **Google Gemini** foi utilizado como ferramenta de apoio em todas as etapas da implantação (planejamento, segurança, automação e documentação).

## Stack

- **Front-end:** HTML5, CSS3, JavaScript (sem frameworks)
- **Versionamento:** Git + GitHub
- **Publicação:** GitHub Pages + GitHub Actions (deploy contínuo)
- **Segurança:** 2FA, Branch Protection, Secret Scanning, Dependabot

## Estrutura

```
devhub-glauber/
├── index.html              # página principal do hub
├── css/style.css           # identidade visual
├── js/main.js              # carregamento dos projetos via API
├── assets/                 # imagens e mídia
├── projetos/               # projetos/portfólios do usuário
├── .github/workflows/      # automação de deploy (CI/CD)
├── README.md
├── SECURITY.md             # política de segurança
└── .gitignore
```

## Como rodar localmente

```bash
git clone https://github.com/glauberoliveirabr/devhub-glauber.git
cd devhub-glauber
# Abrir index.html no navegador, ou servir localmente:
python3 -m http.server 8000
# Acessar http://localhost:8000
```

## Fluxo de colaboração

1. Crie uma branch a partir da `main`: `git checkout -b feature/minha-feature`
2. Faça commits seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `chore:`)
3. Envie a branch e abra um **Pull Request**
4. Após revisão e aprovação, faça o merge na `main` (deploy automático)

A branch `main` é protegida: não aceita push direto nem force-push.

## Deploy

O deploy é contínuo. A cada push/merge na `main`, a GitHub Action em `.github/workflows/deploy.yml` publica o site no GitHub Pages automaticamente.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
