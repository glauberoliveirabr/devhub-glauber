// DevHub — carrega os repositórios do GitHub e popula a galeria.
// Usa cache em localStorage para respeitar o limite de 60 req/h da API pública.

const USUARIO = "glauberoliveirabr";
const CACHE_KEY = "devhub_repos";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutos

document.getElementById("ano").textContent = new Date().getFullYear();

async function obterRepos() {
  // Tenta usar o cache primeiro
  const cache = localStorage.getItem(CACHE_KEY);
  if (cache) {
    try {
      const { dados, timestamp } = JSON.parse(cache);
      if (Date.now() - timestamp < CACHE_TTL) return dados;
    } catch (_) {
      /* cache inválido, ignora */
    }
  }

  const resp = await fetch(
    `https://api.github.com/users/${USUARIO}/repos?sort=updated&per_page=100`
  );
  if (!resp.ok) throw new Error(`Falha na API (${resp.status})`);

  const dados = await resp.json();
  localStorage.setItem(CACHE_KEY, JSON.stringify({ dados, timestamp: Date.now() }));
  return dados;
}

function criarCard(repo) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <h3>${repo.name}</h3>
    <p>${repo.description ? escapeHtml(repo.description) : "Sem descrição."}</p>
    <div class="meta">
      ${repo.language ? `<span>● ${escapeHtml(repo.language)}</span>` : ""}
      <span>★ ${repo.stargazers_count}</span>
    </div>
    <a class="ver" href="${repo.html_url}" target="_blank" rel="noopener">Ver no GitHub →</a>
  `;
  return article;
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

async function carregarProjetos() {
  const estado = document.getElementById("estado");
  const galeria = document.getElementById("galeria");

  try {
    const repos = await obterRepos();
    const visiveis = repos.filter((r) => !r.fork && !r.archived);

    if (visiveis.length === 0) {
      estado.textContent = "Nenhum projeto público encontrado.";
      return;
    }

    estado.style.display = "none";
    visiveis.forEach((repo) => galeria.appendChild(criarCard(repo)));
  } catch (erro) {
    estado.className = "estado erro";
    estado.textContent =
      "Não foi possível carregar os projetos no momento. Tente novamente mais tarde.";
    console.error(erro);
  }
}

carregarProjetos();
