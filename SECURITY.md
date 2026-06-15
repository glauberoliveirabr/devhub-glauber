# Política de Segurança

## Versões suportadas

Este é um projeto de portfólio estático publicado continuamente. A versão em produção é sempre a publicada a partir da branch `main`.

| Versão | Suportada |
| ------ | --------- |
| main (produção) | ✅ |
| branches de desenvolvimento | ❌ |

## Práticas de segurança adotadas

- **Autenticação em dois fatores (2FA)** habilitada na conta proprietária.
- **Branch Protection** na `main`: exige Pull Request com revisão e bloqueia push direto e force-push.
- **Secret Scanning + Push Protection** habilitados para impedir o vazamento de tokens e chaves.
- **Dependabot** ativo para alertas e atualização de dependências vulneráveis.
- **Nenhuma credencial é versionada.** Segredos de automação ficam em GitHub Secrets; arquivos sensíveis são bloqueados pelo `.gitignore`.

## Como reportar uma vulnerabilidade

Caso você identifique uma vulnerabilidade de segurança neste projeto:

1. **Não** abra uma issue pública.
2. Utilize a aba **Security → Report a vulnerability** (GitHub Private Vulnerability Reporting) deste repositório.
3. Descreva o problema, os passos para reproduzi-lo e o impacto potencial.

O reporte será avaliado e respondido o mais breve possível. Agradecemos a divulgação responsável.
