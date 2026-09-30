import fs from 'fs';
import path from 'path';

const siteConfig = {
  name: 'DW Estruturas Metálicas',
  cnpj: '34.803.393/0001-93',
  address: 'Rua Othoniel Taborda Reinhardt, 451 – Xaxim, Curitiba/PR',
  phoneDisplay: '(41) 99894-1829',
  phoneRaw: '5541998941829',
  whatsappUrl: 'https://wa.me/5541998941829',
  defaultWaMsg: 'Olá! Vim pelo site da DW Estruturas Metálicas e gostaria de solicitar um orçamento.',
  yearsExp: 'Mais de 6 anos',
  factoryLocation: 'Xaxim, Curitiba/PR',
  baseUrl: 'https://dwestruturasmetalicas.com.br' // Configurável após domínio oficial
};

function getWaLink(customText) {
  const msg = customText || siteConfig.defaultWaMsg;
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(msg)}`;
}

// Layout Base: Header, Navigation, Footer, Schema, Floating WA
function renderPage({
  title,
  metaDescription,
  canonicalUrl,
  activeNav = '',
  breadcrumbs = [],
  heroContent = '',
  mainContent = '',
  isDraft = false
}) {
  const breadcrumbHtml = breadcrumbs.length > 0 ? `
    <nav class="breadcrumbs" aria-label="Navegação Estrutural">
      <a href="index.html"><i class="bi bi-house-door"></i> Início</a>
      ${breadcrumbs.map((b, i) => i === breadcrumbs.length - 1 
        ? `<i class="bi bi-chevron-right"></i> <span class="current" aria-current="page">${b.label}</span>`
        : `<i class="bi bi-chevron-right"></i> <a href="${b.url}">${b.label}</a>`
      ).join('')}
    </nav>
  ` : '';

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "description": "Projetamos, fabricamos e instalamos estruturas metálicas sob medida, do projeto ao acabamento, com fábrica própria no Xaxim, Curitiba. Mais de 6 anos de atuação.",
    "telephone": "+55-41-99894-1829",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Othoniel Taborda Reinhardt, 451",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.5085,
      "longitude": -49.2736
    },
    "areaServed": [
      "Curitiba",
      "São José dos Pinhais",
      "Araucária",
      "Fazenda Rio Grande",
      "Região Metropolitana de Curitiba"
    ],
    "url": siteConfig.baseUrl + (canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`)
  };

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${metaDescription}" />
  <meta name="robots" content="${isDraft ? 'noindex, nofollow' : 'index, follow'}" />
  <link rel="canonical" href="${siteConfig.baseUrl}/${canonicalUrl}" />

  <!-- Open Graph / Redes Sociais -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${metaDescription}" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:site_name" content="${siteConfig.name}" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg" />
  
  <!-- CSS Principal -->
  <link rel="stylesheet" href="assets/css/main.css" />

  <!-- Dados Estruturados Schema.org LocalBusiness -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>
<body>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-item">
        <i class="bi bi-geo-alt-fill"></i>
        <span>${siteConfig.address}</span>
      </div>
      <div class="top-bar-info">
        <div class="top-bar-item">
          <i class="bi bi-shield-check"></i>
          <span>Fábrica Própria no Xaxim • +6 Anos de Atuação</span>
        </div>
        <div class="top-bar-item">
          <span class="top-bar-badge">Atendimento Rápido via WhatsApp</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Cabeçalho Fixo -->
  <header class="header">
    <div class="container header-inner">
      <a href="index.html" class="logo-link" aria-label="DW Estruturas Metálicas - Página Inicial">
        <img src="assets/images/logo.svg" alt="DW Estruturas Metálicas Curitiba" class="logo-img" width="230" height="46" />
      </a>

      <!-- Menu Desktop -->
      <nav class="nav-desktop" aria-label="Navegação Principal">
        <a href="index.html" class="nav-link ${activeNav === 'home' ? 'active' : ''}">Início</a>
        
        <!-- Dropdown Serviços -->
        <div class="nav-dropdown">
          <a href="index.html#servicos" class="nav-link ${activeNav === 'servicos' ? 'active' : ''}">
            Serviços <i class="bi bi-chevron-down" style="font-size: 0.75rem;"></i>
          </a>
          <div class="nav-dropdown-menu">
            <a href="galpao-metalico-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-building"></i> Galpões e Barracões Metálicos
            </a>
            <a href="mezanino-metalico-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-layers-half"></i> Mezaninos Metálicos
            </a>
            <a href="escada-metalica-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-ladder"></i> Escadas Metálicas
            </a>
            <a href="plataforma-metalica-industrial.html" class="nav-dropdown-item">
              <i class="bi bi-cpu"></i> Plataformas Industriais
            </a>
            <a href="cobertura-metalica-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-shield-shaded"></i> Coberturas e Estruturas
            </a>
            <a href="pergolado-metalico-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-grid-3x3"></i> Pergolados Metálicos
            </a>
            <a href="fachada-metalica-corte-a-laser-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-aspect-ratio"></i> Fachadas em Aço a Laser
            </a>
            <a href="marquise-metalica-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-door-open"></i> Marquises Metálicas
            </a>
            <a href="quadra-poliesportiva-coberta-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-dribbble"></i> Quadras Poliesportivas
            </a>
            <a href="portao-basculante-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-layout-sidebar-inset"></i> Portões Basculantes
            </a>
            <a href="alambrado-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-grid-fill"></i> Alambrados
            </a>
            <a href="gradil-curitiba.html" class="nav-dropdown-item">
              <i class="bi bi-border-width"></i> Gradis de Proteção
            </a>
          </div>
        </div>

        <a href="obras-realizadas.html" class="nav-link ${activeNav === 'obras' ? 'active' : ''}">Obras Realizadas</a>
        
        <!-- Dropdown Regiões -->
        <div class="nav-dropdown">
          <a href="index.html#regioes" class="nav-link ${activeNav === 'regioes' ? 'active' : ''}">
            Regiões <i class="bi bi-chevron-down" style="font-size: 0.75rem;"></i>
          </a>
          <div class="nav-dropdown-menu" style="min-width: 260px;">
            <a href="index.html#regioes" class="nav-dropdown-item"><i class="bi bi-geo-alt"></i> Curitiba e Bairros</a>
            <a href="estrutura-metalica-sao-jose-dos-pinhais.html" class="nav-dropdown-item"><i class="bi bi-geo-alt"></i> São José dos Pinhais</a>
            <a href="estrutura-metalica-araucaria.html" class="nav-dropdown-item"><i class="bi bi-geo-alt"></i> Araucária</a>
            <a href="estrutura-metalica-fazenda-rio-grande.html" class="nav-dropdown-item"><i class="bi bi-geo-alt"></i> Fazenda Rio Grande</a>
          </div>
        </div>

        <a href="contato.html" class="nav-link ${activeNav === 'contato' ? 'active' : ''}">Contato</a>
      </nav>

      <!-- Botão Ação Cabeçalho -->
      <div class="header-actions">
        <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="bi bi-whatsapp"></i> Solicitar Orçamento
        </a>
        <button class="mobile-toggle" aria-label="Abrir menu de navegação" aria-expanded="false">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Gaveta Mobile -->
  <div class="mobile-backdrop"></div>
  <aside class="mobile-drawer" aria-label="Menu Mobile">
    <div>
      <div class="mobile-drawer-header">
        <img src="assets/images/logo.svg" alt="DW Estruturas Metálicas" style="height: 38px; width: auto;" />
        <button class="mobile-close-btn" aria-label="Fechar menu"><i class="bi bi-x-lg"></i></button>
      </div>
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item"><a href="index.html"><i class="bi bi-house"></i> Início</a></li>
        <li class="mobile-nav-item">
          <a href="index.html#servicos"><i class="bi bi-gear-wide-connected"></i> Serviços Principais</a>
          <div class="mobile-subnav">
            <a href="galpao-metalico-curitiba.html">• Galpões Metálicos</a>
            <a href="mezanino-metalico-curitiba.html">• Mezaninos Metálicos</a>
            <a href="escada-metalica-curitiba.html">• Escadas Metálicas</a>
            <a href="plataforma-metalica-industrial.html">• Plataformas Industriais</a>
            <a href="cobertura-metalica-curitiba.html">• Coberturas Metálicas</a>
            <a href="pergolado-metalico-curitiba.html">• Pergolados Metálicos</a>
            <a href="fachada-metalica-corte-a-laser-curitiba.html">• Fachadas em Aço a Laser</a>
            <a href="marquise-metalica-curitiba.html">• Marquises Metálicas</a>
            <a href="quadra-poliesportiva-coberta-curitiba.html">• Quadras Poliesportivas</a>
            <a href="portao-basculante-curitiba.html">• Portões Basculantes</a>
            <a href="alambrado-curitiba.html">• Alambrados</a>
            <a href="gradil-curitiba.html">• Gradis de Proteção</a>
          </div>
        </li>
        <li class="mobile-nav-item"><a href="obras-realizadas.html"><i class="bi bi-images"></i> Obras Realizadas</a></li>
        <li class="mobile-nav-item">
          <a href="index.html#regioes"><i class="bi bi-geo"></i> Regiões Atendidas</a>
          <div class="mobile-subnav">
            <a href="index.html#regioes">• Curitiba (Xaxim, CIC, Boqueirão...)</a>
            <a href="estrutura-metalica-sao-jose-dos-pinhais.html">• São José dos Pinhais</a>
            <a href="estrutura-metalica-araucaria.html">• Araucária</a>
            <a href="estrutura-metalica-fazenda-rio-grande.html">• Fazenda Rio Grande</a>
          </div>
        </li>
        <li class="mobile-nav-item"><a href="contato.html"><i class="bi bi-envelope"></i> Contato & Localização</a></li>
      </ul>
    </div>

    <div style="padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
      <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
        <i class="bi bi-whatsapp"></i> Conversar no WhatsApp
      </a>
      <p style="font-size: 0.8rem; color: #94a3b8; text-align: center; margin-top: 0.75rem;">
        Tel: ${siteConfig.phoneDisplay}
      </p>
    </div>
  </aside>

  <!-- Conteúdo Principal -->
  <main id="conteudo-principal">
    ${heroContent ? heroContent : `
      <section class="page-hero">
        <div class="container">
          ${breadcrumbHtml}
          <h1 class="page-hero-title">${title.split('|')[0].trim()}</h1>
        </div>
      </section>
    `}

    ${mainContent}
  </main>

  <!-- Rodapé Oficial -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Coluna 1: Marca & Resumo -->
        <div class="footer-brand">
          <a href="index.html">
            <img src="assets/images/logo.svg" alt="DW Estruturas Metálicas" style="height: 44px; width: auto;" />
          </a>
          <p>
            A DW projeta, fabrica e instala estruturas metálicas sob medida, do projeto ao acabamento. Fábrica própria no bairro Xaxim e mais de 6 anos de atuação em Curitiba e toda a Região Metropolitana.
          </p>
          <div style="display: flex; gap: 0.5rem; align-items: center; color: #22c55e; font-size: 0.85rem; font-weight: 600;">
            <i class="bi bi-patch-check-fill"></i> Fabricação Própria & Instalação
          </div>
        </div>

        <!-- Coluna 2: Serviços -->
        <div>
          <h4 class="footer-heading">Serviços Sob Medida</h4>
          <ul class="footer-links">
            <li><a href="galpao-metalico-curitiba.html"><i class="bi bi-chevron-right"></i> Galpões Metálicos</a></li>
            <li><a href="mezanino-metalico-curitiba.html"><i class="bi bi-chevron-right"></i> Mezaninos Metálicos</a></li>
            <li><a href="escada-metalica-curitiba.html"><i class="bi bi-chevron-right"></i> Escadas Metálicas</a></li>
            <li><a href="plataforma-metalica-industrial.html"><i class="bi bi-chevron-right"></i> Plataformas Industriais</a></li>
            <li><a href="cobertura-metalica-curitiba.html"><i class="bi bi-chevron-right"></i> Coberturas Metálicas</a></li>
            <li><a href="pergolado-metalico-curitiba.html"><i class="bi bi-chevron-right"></i> Pergolados Metálicos</a></li>
            <li><a href="fachada-metalica-corte-a-laser-curitiba.html"><i class="bi bi-chevron-right"></i> Fachadas Corte a Laser</a></li>
            <li><a href="gradil-curitiba.html"><i class="bi bi-chevron-right"></i> Gradis de Proteção</a></li>
          </ul>
        </div>

        <!-- Coluna 3: Regiões -->
        <div>
          <h4 class="footer-heading">Regiões Atendidas</h4>
          <ul class="footer-links">
            <li><a href="index.html#regioes"><i class="bi bi-geo-alt"></i> Curitiba (Xaxim, CIC, etc.)</a></li>
            <li><a href="estrutura-metalica-sao-jose-dos-pinhais.html"><i class="bi bi-geo-alt"></i> São José dos Pinhais</a></li>
            <li><a href="estrutura-metalica-araucaria.html"><i class="bi bi-geo-alt"></i> Araucária</a></li>
            <li><a href="estrutura-metalica-fazenda-rio-grande.html"><i class="bi bi-geo-alt"></i> Fazenda Rio Grande</a></li>
            <li><a href="index.html#regioes"><i class="bi bi-geo-alt"></i> Demais Cidades da RMC</a></li>
            <li><a href="obras-realizadas.html"><i class="bi bi-images"></i> Galeria de Obras Reais</a></li>
          </ul>
        </div>

        <!-- Coluna 4: Contato Oficial -->
        <div>
          <h4 class="footer-heading">Contato & Fábrica</h4>
          <div class="footer-contact-item">
            <i class="bi bi-geo-alt-fill"></i>
            <div>
              <strong>Fábrica Própria:</strong><br />
              ${siteConfig.address}
            </div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-whatsapp"></i>
            <div>
              <strong>WhatsApp / Telefone:</strong><br />
              <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" style="color: #22c55e; font-weight: 600;">
                ${siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
          <div style="margin-top: 1.25rem;">
            <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; font-size: 0.88rem; padding: 0.75rem 1rem;">
              <i class="bi bi-whatsapp"></i> Orçamento Direto
            </a>
          </div>
        </div>
      </div>

      <!-- Rodapé Inferior -->
      <div class="footer-bottom">
        <div>
          © ${new Date().getFullYear()} ${siteConfig.name}. Todos os direitos reservados.
        </div>
        <div class="footer-cnpj">
          CNPJ: ${siteConfig.cnpj}
        </div>
        <div>
          <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" class="footer-credit-link" title="Desenvolvido por CAMALY">
            <span>Produzida com</span>
            <span class="pulsing-heart-orange" aria-hidden="true"><i class="bi bi-suit-heart-fill"></i></span>
            <span>por</span>
            <span class="footer-credit-brand">CAMALY</span>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Botão Flutuante do WhatsApp -->
  <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Solicitar orçamento pelo WhatsApp">
    <i class="bi bi-whatsapp"></i>
    <span class="whatsapp-float-tooltip">Orçamento no WhatsApp</span>
  </a>

  <!-- Script Principal -->
  <script src="assets/js/main.js"></script>
</body>
</html>`;
}

// Export Helper
export { renderPage, siteConfig, getWaLink };
