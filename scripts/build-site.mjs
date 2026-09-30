import fs from 'fs';
import path from 'path';
import { renderPage, siteConfig, getWaLink } from './renderer.mjs';

function writeHtml(filename, content) {
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Generated: ${filename}`);
}

/* ==========================================================================
   1. PÁGINA INICIAL / LANDING PAGE (index.html)
   ========================================================================== */
function generateHomePage() {
  const heroContent = `
    <section class="hero-section">
      <div class="hero-bg-overlay"></div>
      <div class="structural-grid-lines"></div>
      <div class="container hero-content">
        <div class="hero-subtitle">
          <span class="badge-tag badge-tag-dark">
            <i class="bi bi-gear-fill"></i> FABRICAÇÃO PRÓPRIA • CURITIBA E REGIÃO
          </span>
        </div>
        <h1 class="hero-title">
          Estrutura metálica em Curitiba, do projeto à instalação.
        </h1>
        <p class="hero-lead">
          A DW projeta, fabrica e instala estruturas metálicas sob medida, do projeto ao acabamento. Fábrica própria no Xaxim e mais de 6 anos de atuação em Curitiba e Região Metropolitana.
        </p>
        <div class="hero-cta-group">
          <a href="${getWaLink('Olá! Vim pelo site da DW Estruturas Metálicas e gostaria de solicitar um orçamento.')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            <i class="bi bi-whatsapp"></i> Solicitar orçamento pelo WhatsApp
          </a>
          <a href="#servicos" class="btn btn-secondary btn-lg">
            <i class="bi bi-arrow-down-circle"></i> Conhecer nossos serviços
          </a>
        </div>
        <div class="hero-trust-pillars">
          <div class="trust-pillar-item">
            <div class="trust-pillar-icon"><i class="bi bi-calendar-check"></i></div>
            <div class="trust-pillar-text">
              <h4>Mais de 6 anos</h4>
              <p>Experiência e solidez no setor metalúrgico.</p>
            </div>
          </div>
          <div class="trust-pillar-item">
            <div class="trust-pillar-icon"><i class="bi bi-building-gear"></i></div>
            <div class="trust-pillar-text">
              <h4>Fábrica no Xaxim</h4>
              <p>Estrutura própria para fabricação em Curitiba.</p>
            </div>
          </div>
          <div class="trust-pillar-item">
            <div class="trust-pillar-icon"><i class="bi bi-rulers"></i></div>
            <div class="trust-pillar-text">
              <h4>Sob Medida</h4>
              <p>Soluções estruturais projetadas para sua obra.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const mainContent = `
    <!-- SEÇÃO APRESENTAÇÃO -->
    <section class="section section-light" id="apresentacao">
      <div class="container">
        <div class="grid-2">
          <div>
            <span class="badge-tag"><i class="bi bi-check2-circle"></i> APRESENTAÇÃO</span>
            <h2 class="section-title">Seu projeto ganha estrutura com a DW.</h2>
            <p class="section-lead">
              Com fábrica própria localizada no bairro Xaxim, em Curitiba, a DW Estruturas Metálicas atua há mais de 6 anos desenvolvendo projetos sob medida para diferentes necessidades.
            </p>
            <p>
              Acompanhamos cada etapa com rigor e precisão: desde o projeto técnico inicial e corte de materiais, passando pela fabricação especializada em nossa sede, até o transporte, instalação no local e acabamento completo da estrutura.
            </p>
            
            <div class="about-pillars-list">
              <div class="about-pillar-card">
                <i class="bi bi-pencil-ruler"></i>
                <h4>Projeto & Planejamento</h4>
                <p>Estudo detalhado das dimensões e especificações necessárias para sua necessidade.</p>
              </div>
              <div class="about-pillar-card">
                <i class="bi bi-tools"></i>
                <h4>Fabricação Própria</h4>
                <p>Usinagem, corte, montagem e soldagem em nossa fábrica no Xaxim.</p>
              </div>
              <div class="about-pillar-card">
                <i class="bi bi-truck"></i>
                <h4>Instalação no Local</h4>
                <p>Montagem ágil com fixação segura em Curitiba e cidades metropolitanas.</p>
              </div>
              <div class="about-pillar-card">
                <i class="bi bi-paint-bucket"></i>
                <h4>Acabamento Completo</h4>
                <p>Tratamento protetivo e acabamento refinado para durabilidade da estrutura.</p>
              </div>
            </div>
          </div>

          <div class="about-card">
            <div class="about-image-wrapper">
              <img src="assets/images/mezanino/mezanino-2.jpg" alt="Fabricação e instalação de mezanino metálico pela DW Estruturas Metálicas" loading="lazy" width="600" height="480" />
              <div class="about-badge-floating">
                <i class="bi bi-award-fill"></i>
                <div>
                  <h4>Fábrica Própria no Xaxim</h4>
                  <p>Rua Othoniel Taborda Reinhardt, 451 • Curitiba/PR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO SERVIÇOS -->
    <section class="section section-dark" id="servicos">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag badge-tag-dark"><i class="bi bi-grid-fill"></i> PORTFÓLIO DE SOLUÇÕES</span>
          <h2 class="section-title" style="color: #ffffff;">Estruturas sob medida para diferentes projetos.</h2>
          <p class="section-lead">
            Desenvolvemos estruturas metálicas com precisão para aplicações industriais, comerciais e residenciais em Curitiba e Região Metropolitana.
          </p>
        </div>

        <div class="services-grid">
          <!-- 1. Galpões -->
          <div class="service-card service-card-featured">
            <div class="service-icon-box"><i class="bi bi-building"></i></div>
            <h3 class="service-title">Galpões e Barracões Metálicos</h3>
            <p class="service-description">
              Construção do zero de estruturas metálicas para galpões e barracões industriais, comerciais e logísticos. Vãos livres otimizados, tesouras, pilares e fechamentos resistentes.
            </p>
            <a href="galpao-metalico-curitiba.html" class="service-link">
              Ver detalhes de galpões metálicos <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 2. Mezaninos -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-layers-half"></i></div>
            <h3 class="service-title">Mezaninos Metálicos</h3>
            <p class="service-description">
              Ampliação inteligente de área útil para estoques, escritórios, lojas e galpões com vigamento robusto e cálculo sob medida.
            </p>
            <a href="mezanino-metalico-curitiba.html" class="service-link">
              Ver detalhes de mezaninos <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 3. Escadas -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-ladder"></i></div>
            <h3 class="service-title">Escadas Metálicas</h3>
            <p class="service-description">
              Escadas retas, caracol, industriais e de acesso técnico com segurança estrutural, degraus reforçados e acabamento preciso.
            </p>
            <a href="escada-metalica-curitiba.html" class="service-link">
              Ver detalhes de escadas <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 4. Plataformas -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-cpu"></i></div>
            <h3 class="service-title">Plataformas Industriais & Metalurgia</h3>
            <p class="service-description">
              Plataformas para manutenção, passarelas e soluções customizadas em aço para ambientes fabris e operacionais.
            </p>
            <a href="plataforma-metalica-industrial.html" class="service-link">
              Ver detalhes de plataformas <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 5. Coberturas -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-shield-shaded"></i></div>
            <h3 class="service-title">Coberturas e Estruturas Metálicas</h3>
            <p class="service-description">
              Treliças, telhados metálicos e coberturas sob medida para garagens, comércios e instalações em geral.
            </p>
            <a href="cobertura-metalica-curitiba.html" class="service-link">
              Ver detalhes de coberturas <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 6. Pergolados -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-grid-3x3"></i></div>
            <h3 class="service-title">Pergolados Metálicos</h3>
            <p class="service-description">
              Pergolados em aço com design contemporâneo para áreas gourmet, garagens, jardins e espaços de convivência.
            </p>
            <a href="pergolado-metalico-curitiba.html" class="service-link">
              Ver fotos e projetos de pergolados <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 7. Fachadas a laser -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-aspect-ratio"></i></div>
            <h3 class="service-title">Fachadas em Aço com Corte a Laser</h3>
            <p class="service-description">
              Painéis metálicos decorativos e fachadas arquitetônicas com recortes geométricos customizados para lojas e empresas.
            </p>
            <a href="fachada-metalica-corte-a-laser-curitiba.html" class="service-link">
              Ver detalhes de fachadas <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 8. Marquises -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-door-open"></i></div>
            <h3 class="service-title">Marquises Metálicas</h3>
            <p class="service-description">
              Marquises para proteção de entradas comerciais e residenciais, projetadas com fixação sólida e linhas limpas.
            </p>
            <a href="marquise-metalica-curitiba.html" class="service-link">
              Ver detalhes de marquises <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 9. Quadras -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-dribbble"></i></div>
            <h3 class="service-title">Quadras de Esportes</h3>
            <p class="service-description">
              Estruturas metálicas completas para quadras esportivas: cobertura com grandes vãos, pilares de sustentação e alambrados.
            </p>
            <a href="quadra-poliesportiva-coberta-curitiba.html" class="service-link">
              Ver estruturas para quadras <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 10. Portão Basculante -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-layout-sidebar-inset"></i></div>
            <h3 class="service-title">Portões Basculantes</h3>
            <p class="service-description">
              Fabricação sob medida de portões basculantes reforçados para residências, condomínios e portarias comerciais.
            </p>
            <a href="portao-basculante-curitiba.html" class="service-link">
              Ver detalhes de portões <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 11. Alambrado -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-grid-fill"></i></div>
            <h3 class="service-title">Alambrados</h3>
            <p class="service-description">
              Cercamentos com tela de alambrado, mourões metálicos e estrutura firme para terrenos, indústrias e áreas esportivas.
            </p>
            <a href="alambrado-curitiba.html" class="service-link">
              Ver detalhes de alambrados <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <!-- 12. Gradil -->
          <div class="service-card">
            <div class="service-icon-box"><i class="bi bi-border-width"></i></div>
            <h3 class="service-title">Gradis de Proteção</h3>
            <p class="service-description">
              Gradis metálicos reforçados para muros, condomínios, empresas e residências com acabamento durável e excelente estética.
            </p>
            <a href="gradil-curitiba.html" class="service-link">
              Ver fotos e opções de gradil <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO OBRAS REALIZADAS -->
    <section class="section section-light-alt" id="obras">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag"><i class="bi bi-camera-fill"></i> FOTOGRAFIAS REAIS</span>
          <h2 class="section-title">Conheça alguns dos nossos trabalhos.</h2>
          <p class="section-lead">
            Registros fotográficos reais de estruturas fabricadas e instaladas pela DW Estruturas Metálicas. Clique para ampliar cada imagem.
          </p>
        </div>

        <div class="gallery-filter-bar">
          <button class="filter-btn active" data-filter="all">Todas as Obras</button>
          <button class="filter-btn" data-filter="mezanino">Mezaninos</button>
          <button class="filter-btn" data-filter="pergolados">Pergolados</button>
          <button class="filter-btn" data-filter="gradil">Gradis</button>
        </div>

        <div class="gallery-grid">
          <!-- Mezaninos -->
          <div class="gallery-item" data-category="mezanino">
            <img src="assets/images/mezanino/mezanino-1.jpg" data-full="assets/images/mezanino/mezanino-1.jpg" alt="Mezanino metálico - Obra DW Estruturas Metálicas" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Mezanino Metálico</span>
              <div class="gallery-caption">
                <span>Mezanino Metálico</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <div class="gallery-item" data-category="mezanino">
            <img src="assets/images/mezanino/mezanino-3.jpg" data-full="assets/images/mezanino/mezanino-3.jpg" alt="Estrutura de mezanino metálico - DW" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Mezanino Metálico</span>
              <div class="gallery-caption">
                <span>Mezanino Metálico</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <div class="gallery-item" data-category="mezanino">
            <img src="assets/images/mezanino/mezanino-4.jpg" data-full="assets/images/mezanino/mezanino-4.jpg" alt="Vigamento de mezanino metálico - DW" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Mezanino Metálico</span>
              <div class="gallery-caption">
                <span>Mezanino Metálico</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <!-- Pergolados -->
          <div class="gallery-item" data-category="pergolados">
            <img src="assets/images/pergolados/pergolado-1.jpg" data-full="assets/images/pergolados/pergolado-1.jpg" alt="Pergolado metálico - DW Estruturas Metálicas" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Pergolado Metálico</span>
              <div class="gallery-caption">
                <span>Pergolado Metálico</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <div class="gallery-item" data-category="pergolados">
            <img src="assets/images/pergolados/pergolado-5.jpg" data-full="assets/images/pergolados/pergolado-5.jpg" alt="Pergolado de ferro sob medida - DW" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Pergolado Metálico</span>
              <div class="gallery-caption">
                <span>Pergolado Metálico</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <div class="gallery-item" data-category="pergolados">
            <img src="assets/images/pergolados/pergolado-10.jpg" data-full="assets/images/pergolados/pergolado-10.jpg" alt="Estrutura de pergolado metálico - DW" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Pergolado Metálico</span>
              <div class="gallery-caption">
                <span>Pergolado Metálico</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <!-- Gradis -->
          <div class="gallery-item" data-category="gradil">
            <img src="assets/images/gradil/gradil-1.jpg" data-full="assets/images/gradil/gradil-1.jpg" alt="Gradil metálico - DW Estruturas Metálicas" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Gradil de Proteção</span>
              <div class="gallery-caption">
                <span>Gradil</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <div class="gallery-item" data-category="gradil">
            <img src="assets/images/gradil/gradil-3.jpg" data-full="assets/images/gradil/gradil-3.jpg" alt="Instalação de gradil metálico - DW" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Gradil de Proteção</span>
              <div class="gallery-caption">
                <span>Gradil</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>

          <div class="gallery-item" data-category="gradil">
            <img src="assets/images/gradil/gradil-6.jpg" data-full="assets/images/gradil/gradil-6.jpg" alt="Gradil de ferro e proteção - DW" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-category-badge">Gradil de Proteção</span>
              <div class="gallery-caption">
                <span>Gradil</span>
                <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <a href="obras-realizadas.html" class="btn btn-secondary-dark">
            <i class="bi bi-images"></i> Ver galeria completa de fotos reais
          </a>
        </div>
      </div>
    </section>

    <!-- SEÇÃO DIFERENCIAIS -->
    <section class="section section-light" id="diferenciais">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag"><i class="bi bi-shield-check"></i> POR QUE ESCOLHER A DW</span>
          <h2 class="section-title">Da fabricação ao acabamento, um único parceiro.</h2>
          <p class="section-lead">
            Trabalhamos com transparência e foco técnico para entregar estruturas duráveis e alinhadas ao seu projeto.
          </p>
        </div>

        <div class="diferenciais-grid">
          <div class="diferencial-card">
            <div class="diferencial-number">01</div>
            <h3>Fábrica própria no Xaxim</h3>
            <p>Infraestrutura com maquinário para fabricar com controle direto de qualidade e acabamento em Curitiba.</p>
          </div>

          <div class="diferencial-card">
            <div class="diferencial-number">02</div>
            <h3>Mais de 6 anos de atuação</h3>
            <p>Histórico consistente na produção e montagem de estruturas metálicas na capital e região.</p>
          </div>

          <div class="diferencial-card">
            <div class="diferencial-number">03</div>
            <h3>Projeto, Fabricação e Instalação</h3>
            <p>Centralizamos todas as fases: planejamento, corte, soldagem, transporte e montagem completa.</p>
          </div>

          <div class="diferencial-card">
            <div class="diferencial-number">04</div>
            <h3>Estruturas sob medida</h3>
            <p>Adequação técnica precisa às dimensões e necessidades específicas da sua obra ou imóvel.</p>
          </div>

          <div class="diferencial-card">
            <div class="diferencial-number">05</div>
            <h3>Atendimento Curitiba e RMC</h3>
            <p>Atendemos toda Curitiba, São José dos Pinhais, Araucária, Fazenda Rio Grande e cidades vizinhas.</p>
          </div>

          <div class="diferencial-card" style="background-color: var(--color-primary-900); color: #ffffff;">
            <div class="diferencial-number" style="color: var(--color-accent);">06</div>
            <h3 style="color: #ffffff;">Contato direto no WhatsApp</h3>
            <p style="color: var(--text-light-secondary);">
              Atendimento ágil para esclarecer dúvidas e receber dados do seu projeto sem intermediários.
            </p>
            <div style="margin-top: 1rem;">
              <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent-light); font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem;">
                Falar com a DW <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO ETAPAS DO PROCESSO -->
    <section class="section section-dark-alt" id="etapas">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag badge-tag-dark"><i class="bi bi-diagram-3"></i> FLUXO DE ATENDIMENTO</span>
          <h2 class="section-title" style="color: #ffffff;">Como funciona o processo na DW</h2>
          <p class="section-lead">
            Etapas claras do primeiro contato até a conclusão da sua estrutura metálica.
          </p>
        </div>

        <div class="process-grid">
          <div class="process-card">
            <div class="process-step-badge">1</div>
            <h4>Conte o que você precisa</h4>
            <p>Inicie a conversa pelo WhatsApp informando o tipo de estrutura metálica desejada.</p>
          </div>

          <div class="process-card">
            <div class="process-step-badge">2</div>
            <h4>Envie informações do projeto</h4>
            <p>Compartilhe medidas aproximadas, fotos do local ou referências para análise.</p>
          </div>

          <div class="process-card">
            <div class="process-step-badge">3</div>
            <h4>Solicite uma proposta</h4>
            <p>Apresentamos a proposta com os parâmetros técnicos para a sua estrutura sob medida.</p>
          </div>

          <div class="process-card">
            <div class="process-step-badge">4</div>
            <h4>Fabricação & Instalação</h4>
            <p>Execução completa: fabricação em nossa oficina, montagem no local e acabamento acordado.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO REGIÕES ATENDIDAS -->
    <section class="section section-light" id="regioes">
      <div class="container">
        <div class="regions-card">
          <div class="section-header-left">
            <span class="badge-tag"><i class="bi bi-geo-alt-fill"></i> COBERTURA GEOGRÁFICA</span>
            <h2 class="section-title">Curitiba e Região Metropolitana.</h2>
            <p class="section-lead">
              Nossa fábrica própria está sediada no bairro Xaxim, em Curitiba. A partir dessa base fabril, prestamos atendimento completo em toda a capital e municípios vizinhos.
            </p>
          </div>

          <div class="regions-cities-grid">
            <div class="region-city-box">
              <i class="bi bi-buildings"></i>
              <h4>Curitiba</h4>
              <span>Sede fabril no Xaxim</span>
            </div>
            <a href="estrutura-metalica-sao-jose-dos-pinhais.html" class="region-city-box">
              <i class="bi bi-pin-map"></i>
              <h4>São José dos Pinhais</h4>
              <span>Atendimento em toda a cidade</span>
            </a>
            <a href="estrutura-metalica-araucaria.html" class="region-city-box">
              <i class="bi bi-pin-map"></i>
              <h4>Araucária</h4>
              <span>Região industrial e urbana</span>
            </a>
            <a href="estrutura-metalica-fazenda-rio-grande.html" class="region-city-box">
              <i class="bi bi-pin-map"></i>
              <h4>Fazenda Rio Grande</h4>
              <span>Obras comerciais e residenciais</span>
            </a>
          </div>

          <div class="curitiba-neighborhoods-box">
            <h4><i class="bi bi-compass"></i> Bairros atendidos em Curitiba:</h4>
            <p style="font-size: 0.9rem; color: var(--text-dark-secondary); margin-bottom: 0.85rem;">
              Fabricamos e instalamos estruturas metálicas em todos os bairros da capital paranaense, incluindo:
            </p>
            <div class="neighborhoods-tags">
              <span class="nh-tag">Xaxim</span>
              <span class="nh-tag">Boqueirão</span>
              <span class="nh-tag">Alto Boqueirão</span>
              <span class="nh-tag">Hauer</span>
              <span class="nh-tag">Pinheirinho</span>
              <span class="nh-tag">Sítio Cercado</span>
              <span class="nh-tag">Capão Raso</span>
              <span class="nh-tag">Novo Mundo</span>
              <span class="nh-tag">Tatuquara</span>
              <span class="nh-tag">CIC (Cidade Industrial de Curitiba)</span>
              <span class="nh-tag">Uberaba</span>
              <span class="nh-tag">Demais bairros e RMC</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO FAQ -->
    <section class="section section-light-alt" id="faq">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag"><i class="bi bi-question-circle"></i> DÚVIDAS FREQUENTES</span>
          <h2 class="section-title">Perguntas Frequentes sobre Contratação</h2>
          <p class="section-lead">
            Informações claras e transparentes sobre o atendimento da DW Estruturas Metálicas.
          </p>
        </div>

        <div class="faq-list">
          <!-- FAQ 1 -->
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>Como solicitar um orçamento à DW?</span>
              <i class="bi bi-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>
                O caminho principal e mais rápido é entrar em contato pelo nosso WhatsApp <strong>(41) 99894-1829</strong>. Você também pode preencher o formulário rápido ao final desta página, que direcionará as informações diretamente para nossa equipe no WhatsApp.
              </p>
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>Quais regiões a DW Estruturas Metálicas atende?</span>
              <i class="bi bi-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>
                Atendemos Curitiba (com fábrica própria no bairro Xaxim), São José dos Pinhais, Araucária, Fazenda Rio Grande e demais cidades da Região Metropolitana de Curitiba.
              </p>
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>A empresa fabrica e instala as estruturas?</span>
              <i class="bi bi-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>
                Sim. A DW projeta, fabrica e realiza a montagem e instalação no local da obra, além de cuidar do acabamento da estrutura conforme o escopo contratado.
              </p>
            </div>
          </div>

          <!-- FAQ 4 -->
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>Quais informações ajudam a preparar o orçamento?</span>
              <i class="bi bi-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>
                Para agilizar a análise, é útil informar o tipo de serviço (ex: mezanino, galpão, pergolado, gradil), as medidas aproximadas (largura, comprimento e altura), a cidade/bairro da instalação e, se houver, fotos ou projetos de referência do local.
              </p>
            </div>
          </div>

          <!-- FAQ 5 -->
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>O que influencia o custo de uma estrutura metálica?</span>
              <i class="bi bi-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>
                O custo depende diretamente das características específicas de cada projeto: dimensões totais, tipo de perfis e materiais metálicos utilizados, complexidade da montagem, condições de acesso ao local de instalação e acabamento especificado. Por isso, avaliamos caso a caso sob medida.
              </p>
            </div>
          </div>

          <!-- FAQ 6 -->
          <div class="faq-item">
            <button class="faq-question" aria-expanded="false">
              <span>O prazo depende de quais características do projeto?</span>
              <i class="bi bi-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>
                O prazo de fabricação e montagem varia conforme a complexidade e o porte da estrutura, o volume de peças a fabricar, a disponibilidade de materiais e as condições do local para a fixação. O cronograma estimado é informado na proposta de acordo com o projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO CTA FINAL & FORMULÁRIO -->
    <section class="quote-section" id="contato">
      <div class="container">
        <div class="quote-grid">
          <div class="quote-info">
            <span class="badge-tag badge-tag-dark"><i class="bi bi-chat-dots-fill"></i> SOLICITE SEU ORÇAMENTO</span>
            <h2>Vamos dar estrutura ao seu próximo projeto?</h2>
            <p>
              Conte o que você precisa e solicite um orçamento à DW Estruturas Metálicas. Nossa equipe está pronta para avaliar suas informações e propor a solução ideal.
            </p>

            <div class="quote-direct-wa">
              <i class="bi bi-whatsapp"></i>
              <div>
                <h4>Prefere atendimento imediato?</h4>
                <p>Clique no botão abaixo para abrir diretamente nosso WhatsApp.</p>
                <div style="margin-top: 0.65rem;">
                  <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.65rem 1.25rem; font-size: 0.88rem;">
                    <i class="bi bi-whatsapp"></i> Conversar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div style="font-size: 0.85rem; color: var(--text-light-muted);">
              <p><i class="bi bi-geo-alt"></i> Rua Othoniel Taborda Reinhardt, 451 – Xaxim, Curitiba/PR</p>
              <p><i class="bi bi-building"></i> CNPJ: 34.803.393/0001-93</p>
            </div>
          </div>

          <!-- Formulário Curto com Redirecionamento Real -->
          <div class="quote-form-card">
            <h3 style="color: #ffffff; font-size: 1.35rem; margin-bottom: 0.5rem;">Formulário Rápido</h3>
            <p style="font-size: 0.88rem; color: var(--text-light-secondary); margin-bottom: 1.5rem;">
              Preencha os campos para iniciar a conversa no WhatsApp com os dados do seu projeto:
            </p>

            <form class="quote-form">
              <div class="form-group">
                <label class="form-label" for="home-nome">Seu Nome *</label>
                <input type="text" id="home-nome" name="nome" class="form-control" placeholder="Ex: Carlos Silva" required />
              </div>

              <div class="grid-2" style="gap: 1rem; margin-bottom: 0;">
                <div class="form-group">
                  <label class="form-label" for="home-tel">Telefone / WhatsApp *</label>
                  <input type="tel" id="home-tel" name="telefone" class="form-control" placeholder="(41) 99999-9999" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="home-cidade">Cidade / Bairro</label>
                  <input type="text" id="home-cidade" name="cidade" class="form-control" placeholder="Ex: Curitiba - Xaxim" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="home-servico">Serviço Desejado</label>
                <select id="home-servico" name="servico" class="form-control">
                  <option value="Galpão Metálico">Galpão ou Barracão Metálico</option>
                  <option value="Mezanino Metálico">Mezanino Metálico</option>
                  <option value="Escada Metálica">Escada Metálica</option>
                  <option value="Plataforma Industrial">Plataforma Industrial / Passarela</option>
                  <option value="Cobertura Metálica">Cobertura ou Estrutura Metálica</option>
                  <option value="Pergolado Metálico">Pergolado Metálico</option>
                  <option value="Fachada em Aço Corte a Laser">Fachada em Aço / Painel a Laser</option>
                  <option value="Marquise Metálica">Marquise Metálica</option>
                  <option value="Quadra de Esportes">Estrutura para Quadra de Esportes</option>
                  <option value="Portão Basculante">Portão Basculante</option>
                  <option value="Alambrado">Alambrado</option>
                  <option value="Gradil">Gradil de Proteção</option>
                  <option value="Outro Serviço Metálico">Outro Projeto Sob Medida</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="home-msg">Breve descrição do projeto (opcional)</label>
                <textarea id="home-msg" name="mensagem" class="form-control" placeholder="Ex: Medidas aproximadas, finalidade ou detalhes do local..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1rem;">
                <i class="bi bi-arrow-right-circle"></i> Solicitar orçamento
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderPage({
    title: 'DW Estruturas Metálicas | Estrutura Metálica em Curitiba do Projeto à Instalação',
    metaDescription: 'Projetamos, fabricamos e instalamos estruturas metálicas sob medida em Curitiba e Região Metropolitana. Fábrica própria no Xaxim e mais de 6 anos de atuação.',
    canonicalUrl: 'index.html',
    activeNav: 'home',
    heroContent,
    mainContent
  });

  writeHtml('index.html', html);
}

/* ==========================================================================
   2. PÁGINA OBRAS REALIZADAS (obras-realizadas.html)
   ========================================================================== */
function generateObrasPage() {
  const mainContent = `
    <section class="section section-light">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag"><i class="bi bi-camera-fill"></i> GALERIA DE OBRAS REAIS</span>
          <h2 class="section-title">Portfólio de Estruturas Fabricadas e Instaladas</h2>
          <p class="section-lead">
            Confira fotografias reais dos trabalhos executados pela DW Estruturas Metálicas. Categorias confirmadas: Mezaninos, Pergolados e Gradis.
          </p>
        </div>

        <div class="gallery-filter-bar">
          <button class="filter-btn active" data-filter="all">Todas as Fotos (${10 + 12 + 6})</button>
          <button class="filter-btn" data-filter="mezanino">Mezaninos (10)</button>
          <button class="filter-btn" data-filter="pergolados">Pergolados (12)</button>
          <button class="filter-btn" data-filter="gradil">Gradis (6)</button>
        </div>

        <div class="gallery-grid">
          <!-- Mezaninos (1 a 10) -->
          ${[1,2,3,4,5,6,7,8,9,10].map(n => `
            <div class="gallery-item" data-category="mezanino">
              <img src="assets/images/mezanino/mezanino-${n}.jpg" data-full="assets/images/mezanino/mezanino-${n}.jpg" alt="Mezanino metálico - Obra real DW" loading="lazy" />
              <div class="gallery-overlay">
                <span class="gallery-category-badge">Mezanino Metálico</span>
                <div class="gallery-caption">
                  <span>Mezanino Metálico #${n}</span>
                  <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
                </div>
              </div>
            </div>
          `).join('')}

          <!-- Pergolados (1 a 12) -->
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(n => `
            <div class="gallery-item" data-category="pergolados">
              <img src="assets/images/pergolados/pergolado-${n}.jpg" data-full="assets/images/pergolados/pergolado-${n}.jpg" alt="Pergolado metálico sob medida - Obra real DW" loading="lazy" />
              <div class="gallery-overlay">
                <span class="gallery-category-badge">Pergolado Metálico</span>
                <div class="gallery-caption">
                  <span>Pergolado Metálico #${n}</span>
                  <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
                </div>
              </div>
            </div>
          `).join('')}

          <!-- Gradis (1 a 6) -->
          ${[1,2,3,4,5,6].map(n => `
            <div class="gallery-item" data-category="gradil">
              <img src="assets/images/gradil/gradil-${n}.jpg" data-full="assets/images/gradil/gradil-${n}.jpg" alt="Gradil metálico de proteção - Obra real DW" loading="lazy" />
              <div class="gallery-overlay">
                <span class="gallery-category-badge">Gradil de Proteção</span>
                <div class="gallery-caption">
                  <span>Gradil Metálico #${n}</span>
                  <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="background-color: var(--color-primary-900); border-radius: var(--radius-md); padding: 3rem; margin-top: 4rem; color: #ffffff; text-align: center;">
          <h3 style="color: #ffffff; font-size: 1.75rem; margin-bottom: 0.75rem;">Gostou do que viu e precisa de uma estrutura similar?</h3>
          <p style="color: var(--text-light-secondary); max-width: 650px; margin: 0 auto 1.75rem auto;">
            Entre em contato pelo WhatsApp e envie os dados ou medidas da sua obra para receber uma proposta sob medida.
          </p>
          <a href="${getWaLink('Olá! Estava visualizando a galeria de obras no site e gostaria de solicitar um orçamento.')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            <i class="bi bi-whatsapp"></i> Solicitar Proposta no WhatsApp
          </a>
        </div>
      </div>
    </section>
  `;

  const html = renderPage({
    title: 'Obras Realizadas | DW Estruturas Metálicas Curitiba',
    metaDescription: 'Fotografias reais de obras executadas pela DW Estruturas Metálicas em Curitiba e Região: mezaninos metálicos, pergolados e gradis sob medida.',
    canonicalUrl: 'obras-realizadas.html',
    activeNav: 'obras',
    breadcrumbs: [{ label: 'Obras Realizadas', url: 'obras-realizadas.html' }],
    mainContent
  });

  writeHtml('obras-realizadas.html', html);
}

/* ==========================================================================
   3. PÁGINA CONTATO & LOCALIZAÇÃO (contato.html)
   ========================================================================== */
function generateContatoPage() {
  const mainContent = `
    <section class="section section-light">
      <div class="container">
        <div class="grid-2" style="align-items: flex-start; gap: 3.5rem;">
          <div>
            <span class="badge-tag"><i class="bi bi-geo-alt-fill"></i> ATENDIMENTO DIRETO</span>
            <h2 class="section-title">Fale com a DW Estruturas Metálicas</h2>
            <p class="section-lead">
              Estamos prontos para atender seu pedido de orçamento para Curitiba e qualquer cidade da Região Metropolitana.
            </p>

            <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
              <div class="about-pillar-card" style="display: flex; gap: 1rem; align-items: flex-start;">
                <i class="bi bi-whatsapp" style="font-size: 1.75rem; color: #25d366; margin: 0;"></i>
                <div>
                  <h4>WhatsApp & Telefone</h4>
                  <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark-primary); margin: 0.2rem 0;">
                    ${siteConfig.phoneDisplay}
                  </p>
                  <a href="${getWaLink()}" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); font-weight: 600; font-size: 0.88rem;">
                    Iniciar conversa no WhatsApp <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="about-pillar-card" style="display: flex; gap: 1rem; align-items: flex-start;">
                <i class="bi bi-building-gear" style="font-size: 1.75rem; color: var(--color-accent); margin: 0;"></i>
                <div>
                  <h4>Fábrica Própria</h4>
                  <p style="color: var(--text-dark-primary); font-weight: 600; margin: 0.2rem 0;">
                    ${siteConfig.address}
                  </p>
                  <p style="font-size: 0.85rem; color: var(--text-dark-secondary); margin: 0;">
                    Bairro Xaxim, Curitiba – PR
                  </p>
                </div>
              </div>

              <div class="about-pillar-card" style="display: flex; gap: 1rem; align-items: flex-start;">
                <i class="bi bi-card-checklist" style="font-size: 1.75rem; color: var(--color-primary-700); margin: 0;"></i>
                <div>
                  <h4>Dados da Empresa</h4>
                  <p style="color: var(--text-dark-primary); font-weight: 600; margin: 0.2rem 0;">
                    CNPJ: ${siteConfig.cnpj}
                  </p>
                  <p style="font-size: 0.85rem; color: var(--text-dark-secondary); margin: 0;">
                    Mais de 6 anos de atuação no mercado metalúrgico
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulário -->
          <div class="quote-form-card" style="background-color: var(--color-primary-900);">
            <h3 style="color: #ffffff; font-size: 1.35rem; margin-bottom: 0.5rem;">Solicitar Orçamento</h3>
            <p style="font-size: 0.88rem; color: var(--text-light-secondary); margin-bottom: 1.5rem;">
              Preencha para direcionar seus dados ao WhatsApp da empresa:
            </p>

            <form class="quote-form">
              <div class="form-group">
                <label class="form-label" for="contato-nome">Nome *</label>
                <input type="text" id="contato-nome" name="nome" class="form-control" placeholder="Seu nome" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contato-tel">WhatsApp / Telefone *</label>
                <input type="tel" id="contato-tel" name="telefone" class="form-control" placeholder="(41) 99999-9999" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contato-cidade">Cidade / Bairro</label>
                <input type="text" id="contato-cidade" name="cidade" class="form-control" placeholder="Ex: Curitiba / São José dos Pinhais" />
              </div>

              <div class="form-group">
                <label class="form-label" for="contato-servico">Serviço de Interesse</label>
                <select id="contato-servico" name="servico" class="form-control">
                  <option value="Estrutura Metálica Geral">Estrutura Metálica Geral</option>
                  <option value="Galpão Metálico">Galpão Metálico / Barracão</option>
                  <option value="Mezanino Metálico">Mezanino Metálico</option>
                  <option value="Escada Metálica">Escada Metálica</option>
                  <option value="Plataforma Industrial">Plataforma Industrial</option>
                  <option value="Cobertura Metálica">Cobertura Metálica</option>
                  <option value="Pergolado Metálico">Pergolado Metálico</option>
                  <option value="Fachada em Aço">Fachada em Aço Corte a Laser</option>
                  <option value="Marquise Metálica">Marquise Metálica</option>
                  <option value="Quadra Esportiva">Quadra Esportiva</option>
                  <option value="Portão Basculante">Portão Basculante</option>
                  <option value="Alambrado">Alambrado</option>
                  <option value="Gradil">Gradil de Proteção</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="contato-msg">Detalhes do Projeto (Opcional)</label>
                <textarea id="contato-msg" name="mensagem" class="form-control" placeholder="Descreva brevemente medidas ou características..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">
                <i class="bi bi-arrow-right-circle"></i> Enviar e Continuar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  const html = renderPage({
    title: 'Contato & Localização | DW Estruturas Metálicas Curitiba',
    metaDescription: 'Entre em contato com a DW Estruturas Metálicas. Fábrica no Xaxim, Curitiba/PR. WhatsApp: (41) 99894-1829. Solicite seu orçamento sob medida.',
    canonicalUrl: 'contato.html',
    activeNav: 'contato',
    breadcrumbs: [{ label: 'Contato', url: 'contato.html' }],
    mainContent
  });

  writeHtml('contato.html', html);
}

/* ==========================================================================
   4. PÁGINA POLÍTICA DE PRIVACIDADE (politica-de-privacidade.html)
   ========================================================================== */
function generatePrivacidadePage() {
  const mainContent = `
    <section class="section section-light">
      <div class="container" style="max-width: 800px;">
        <h2 class="section-title">Política de Privacidade</h2>
        <div class="content-body" style="margin-top: 2rem;">
          <p>
            A <strong>DW Estruturas Metálicas</strong> (CNPJ: 34.803.393/0001-93), com sede na Rua Othoniel Taborda Reinhardt, 451 – Xaxim, Curitiba/PR, preza pela transparência e respeito à privacidade dos usuários que visitam este site.
          </p>
          
          <h3>1. Coleta e Uso de Informações</h3>
          <p>
            As informações fornecidas voluntariamente nos formulários deste site (como nome, telefone/WhatsApp, cidade e detalhes do projeto) são utilizadas estritamente para viabilizar o atendimento comercial e a elaboração de orçamentos solicitados pelo usuário.
          </p>
          
          <h3>2. Atendimento via WhatsApp</h3>
          <p>
            Ao utilizar o formulário ou os botões de contato, as informações preenchidas são organizadas para facilitar o início da conversa no aplicativo WhatsApp. Não comercializamos e não repassamos seus dados a terceiros.
          </p>

          <h3>3. Dúvidas e Contato</h3>
          <p>
            Para qualquer esclarecimento referente ao tratamento de informações, entre em contato diretamente com nossa equipe pelo telefone e WhatsApp: <strong>${siteConfig.phoneDisplay}</strong>.
          </p>
        </div>
      </div>
    </section>
  `;

  const html = renderPage({
    title: 'Política de Privacidade | DW Estruturas Metálicas',
    metaDescription: 'Informações sobre privacidade e tratamento de dados de contato para solicitação de orçamentos na DW Estruturas Metálicas.',
    canonicalUrl: 'politica-de-privacidade.html',
    breadcrumbs: [{ label: 'Privacidade', url: 'politica-de-privacidade.html' }],
    mainContent
  });

  writeHtml('politica-de-privacidade.html', html);
}

/* ==========================================================================
   5. PÁGINAS DE SERVIÇOS (12 OFICIAIS + 1 RASCUNHO)
   ========================================================================== */

const servicesData = [
  {
    slug: 'galpao-metalico-curitiba',
    title: 'Galpão Metálico Curitiba | Construção do Zero | DW',
    h1: 'Galpão Metálico Curitiba — Construção do Zero e Sob Medida',
    metaDescription: 'Construção de galpão metálico em Curitiba e Região. Fabricação própria no Xaxim, estrutura robusta do projeto à montagem. Solicite orçamento.',
    primaryKw: 'galpão metálico Curitiba',
    secondaryKws: ['barracão metálico', 'construção de galpão', 'galpão pré-fabricado metálico', 'galpão industrial', 'construtora de galpão'],
    icon: 'bi-building',
    intro: 'A DW projeta, fabrica e instala galpões e barracões metálicos sob medida em Curitiba e Região Metropolitana. Construímos estruturas metálicas do zero para atender demandas industriais, comerciais, logísticas e de armazenamento, unindo precisão fabril e montagem especializada.',
    applications: [
      'Galpões industriais e fábricas para linhas de produção',
      'Barracões comerciais para atacado, varejo e centros de distribuição',
      'Galpões para centros logísticos, armazenagem e estoques',
      'Estruturas para oficinas mecânicas, garagens e concessionárias',
      'Depósitos e galpões para locação com aproveitamento máximo de vão livre'
    ],
    details: `
      <p>A fabricação de um <strong>galpão metálico em Curitiba</strong> exige planejamento técnico criterioso para suportar cargas estruturais, ações de vento e necessidades operacionais. Na DW, todas as tesouras, treliças, pilares e vigamentos são produzidos em nossa fábrica própria no bairro Xaxim.</p>
      <p>Com mais de 6 anos de atuação, acompanhamos o projeto do corte das peças ao acabamento e montagem no terreno, garantindo agilidade na execução e estrutura resistente.</p>
    `,
    faq: [
      { q: 'A DW constrói o galpão metálico do zero?', a: 'Sim. Projetamos, fabricamos as peças em nossa sede no Xaxim e realizamos a montagem completa da estrutura no local da obra.' },
      { q: 'O que influencia o custo de um galpão metálico?', a: 'O valor depende da área total (m²), altura do pé-direito, tipo de cobertura (ex: telha metálica simples ou termoacústica), condições do terreno e acabamentos.' },
      { q: 'Como solicitar orçamento para barracão em Curitiba?', a: 'Basta enviar as medidas do terreno, finalidade do galpão e localização pelo nosso WhatsApp (41) 99894-1829.' }
    ]
  },
  {
    slug: 'mezanino-metalico-curitiba',
    title: 'Mezanino Metálico Curitiba | Fabricação Própria | DW',
    h1: 'Mezanino Metálico Curitiba — Ampliação de Área Útil Sob Medida',
    metaDescription: 'Mezanino metálico em Curitiba para lojas, galpões, estoques e escritórios. Fabricação própria no Xaxim com mais de 6 anos de experiência. Peça orçamento.',
    primaryKw: 'mezanino metálico Curitiba',
    secondaryKws: ['mezanino para loja', 'mezanino industrial', 'mezanino para depósito', 'mezanino com laje steel deck', 'mezanino para academia'],
    icon: 'bi-layers-half',
    photos: ['mezanino-1.jpg', 'mezanino-2.jpg', 'mezanino-3.jpg', 'mezanino-4.jpg'],
    intro: 'O mezanino metálico em Curitiba é a solução mais eficiente para dobrar a área útil de galpões, comércios, lojas e ambientes industriais sem necessidade de reformas civis complexas. A DW fabrica mezaninos sob medida com vigamento reforçado e montagem rápida.',
    applications: [
      'Mezaninos comerciais para lojas de shopping e rua',
      'Mezaninos para escritórios e salas administrativas sobre galpões',
      'Estruturas para armazenagem, porta-paletes e estoques pesados',
      'Mezaninos industriais para áreas de suporte técnico e máquinas',
      'Espaços para academias, estúdios e mezaninos residenciais'
    ],
    details: `
      <p>Fabricado sob medida em nossa fábrica no Xaxim, o <strong>mezanino metálico</strong> oferece excelente capacidade de carga, adaptando-se a pisos de painel wall, madeira, chapa xadrez ou laje steel deck conforme o projeto do cliente.</p>
      <p>Nossa equipe realiza a montagem no local garantindo estabilidade e acabamento que valoriza o seu imóvel comercial ou industrial.</p>
    `,
    faq: [
      { q: 'Como é calculado o orçamento de mezanino metálico?', a: 'O orçamento baseia-se na metragem quadrada, capacidade de carga necessária por m² (para pessoas ou estoque pesado) e tipo de piso.' },
      { q: 'A DW instala mezanino em horário diferenciado?', a: 'Organizamos o cronograma de instalação conforme as necessidades e regras de funcionamento do seu comércio ou galpão.' }
    ]
  },
  {
    slug: 'escada-metalica-curitiba',
    title: 'Escada Metálica Curitiba | Reta, Caracol e Industrial | DW',
    h1: 'Escada Metálica Curitiba — Segurança e Design Sob Medida',
    metaDescription: 'Escadas metálicas sob medida em Curitiba: reta, caracol, industrial e marinheiro. Fabricação própria no Xaxim. Peça seu orçamento pelo WhatsApp.',
    primaryKw: 'escada metálica Curitiba',
    secondaryKws: ['escada de ferro', 'escada caracol metálica', 'escada industrial', 'escada marinheiro', 'escada metálica para mezanino'],
    icon: 'bi-ladder',
    intro: 'Projetamos e fabricamos escadas metálicas sob medida em Curitiba para acesso a mezaninos, galpões, coberturas e ambientes comerciais ou industriais, aliando robustez, ergonomia e acabamento de alto padrão.',
    applications: [
      'Escadas retas e em L para acesso a mezaninos e pisos superiores',
      'Escadas caracol metálicas para otimização de espaço',
      'Escadas industriais para manutenção de máquinas e passarelas',
      'Escadas marinheiro com gaiola de proteção para telhados e caixas d’água',
      'Escadas de ferro para comércios e residências'
    ],
    details: `
      <p>Uma <strong>escada metálica em Curitiba</strong> fabricada pela DW combina corte preciso, degraus estruturados em chapa antiderrapante ou lisa e fixação confiável. Produzida em nossa fábrica no Xaxim, atende desde exigências industriais severas até projetos comerciais que prezam pela estética limpa do metal.</p>
    `,
    faq: [
      { q: 'A escada já vem com pintura e acabamento?', a: 'Sim, a DW realiza o tratamento e acabamento conforme acordado no escopo do projeto.' },
      { q: 'Qual a informação necessária para orçar uma escada?', a: 'A altura total de piso a piso (pé-direito) e o espaço disponível no local para o desenvolvimento dos degraus.' }
    ]
  },
  {
    slug: 'plataforma-metalica-industrial',
    title: 'Plataforma Metálica Industrial Curitiba | Passarelas | DW',
    h1: 'Plataforma Metálica Industrial e Metalurgia Sob Medida',
    metaDescription: 'Plataformas metálicas industriais, passarelas e soluções customizadas em Curitiba e Região. Fabricação própria no Xaxim. Solicite orçamento.',
    primaryKw: 'plataforma metálica industrial',
    secondaryKws: ['plataforma de manutenção', 'passarela metálica', 'metalurgia sob medida Curitiba', 'estrutura metálica para máquinas'],
    icon: 'bi-cpu',
    intro: 'Desenvolvemos plataformas metálicas industriais e passarelas operacionais para suporte de equipamentos, manutenção fabril e circulação segura de colaboradores em Curitiba e Região Metropolitana.',
    applications: [
      'Plataformas elevadas para operação e manutenção de maquinários',
      'Passarelas metálicas para inspeção técnica e travessia industrial',
      'Estruturas de apoio e suporte para tubulações e equipamentos pesados',
      'Metalurgia técnica customizada sob desenho e especificações'
    ],
    details: `
      <p>Ambientes fabris necessitam de <strong>plataformas metálicas industriais</strong> seguras e com alta resistência mecânica. Com fábrica no Xaxim e mais de 6 anos de experiência, a DW executa cada peça conforme as dimensões exatas da sua linha operacional.</p>
    `,
    faq: [
      { q: 'A DW atende indústrias na CIC e em Araucária?', a: 'Sim, atendemos polos industriais em Curitiba (CIC), Araucária, São José dos Pinhais e toda a RMC.' }
    ]
  },
  {
    slug: 'cobertura-metalica-curitiba',
    title: 'Cobertura Metálica Curitiba | Telhados e Treliças | DW',
    h1: 'Cobertura Metálica Curitiba — Estruturas para Telhados e Galpões',
    metaDescription: 'Coberturas metálicas, treliças e estruturas para telhados em Curitiba e Região. Fabricação própria no Xaxim. Solicite seu orçamento.',
    primaryKw: 'cobertura metálica Curitiba',
    secondaryKws: ['cobertura com telha termoacústica', 'estrutura para telhado metálico', 'treliça metálica', 'tesoura metálica'],
    icon: 'bi-shield-shaded',
    intro: 'Fabricamos coberturas metálicas sob medida para indústrias, comércios, condomínios e residências em Curitiba. Estruturas leves, resistentes à corrosão e preparadas para grandes vãos.',
    applications: [
      'Coberturas para galpões, barracões e centros de armazenagem',
      'Estruturas para telhados comerciais e industriais com telha sanduíche',
      'Coberturas para garagens, estacionamentos e áreas de carga',
      'Reformas e substituição de estruturas antigas de telhado por aço'
    ],
    details: `
      <p>A escolha de uma <strong>cobertura metálica em Curitiba</strong> proporciona rapidez de montagem e menor sobrecarga na fundação. Utilizamos perfis estruturais de alta qualidade com fabricação própria em nossa sede no Xaxim.</p>
    `,
    faq: [
      { q: 'Quais tipos de telha podem ser instalados?', a: 'Nossas estruturas são dimensionadas para telhas de aço trapezoidais, telhas termoacústicas (sanduíche) ou outras opções especificadas no projeto.' }
    ]
  },
  {
    slug: 'pergolado-metalico-curitiba',
    title: 'Pergolado Metálico Curitiba | Área Gourmet e Garagem | DW',
    h1: 'Pergolado Metálico Curitiba — Design Contemporâneo e Durabilidade',
    metaDescription: 'Pergolados metálicos sob medida em Curitiba para áreas gourmet, jardins e garagens. Fotos reais de obras. Fabricação própria no Xaxim. Peça orçamento.',
    primaryKw: 'pergolado metálico Curitiba',
    secondaryKws: ['pergolado de ferro', 'pergolado com vidro', 'pergolado com policarbonato', 'pergolado para área gourmet', 'pergolado para garagem'],
    icon: 'bi-grid-3x3',
    photos: ['pergolado-1.jpg', 'pergolado-2.jpg', 'pergolado-5.jpg', 'pergolado-10.jpg'],
    intro: 'O pergolado metálico une estética arquitetônica moderna e resistência contra intempéries. A DW projeta, fabrica e instala pergolados em aço sob medida para residências, comércios e condomínios em Curitiba e Região.',
    applications: [
      'Pergolados para áreas gourmet e espaços de churrasqueira',
      'Pergolados para garagens e coberturas de veículos',
      'Estruturas para jardins, piscinas e áreas de lazer',
      'Pergolados comerciais para restaurantes, cafés e lounges'
    ],
    details: `
      <p>Diferente da madeira, o <strong>pergolado metálico em Curitiba</strong> exige baixa manutenção, não deforma e permite vãos esbeltos e elegantes. Preparado para receber vidro laminado ou placas de policarbonato.</p>
    `,
    faq: [
      { q: 'Qual a vantagem do pergolado em aço em relação à madeira?', a: 'Maior durabilidade, linhas retas modernas, não empena e suporta coberturas de vidro com segurança.' }
    ]
  },
  {
    slug: 'fachada-metalica-corte-a-laser-curitiba',
    title: 'Fachada Metálica Corte a Laser Curitiba | Painéis em Aço | DW',
    h1: 'Fachada Metálica com Corte a Laser em Curitiba',
    metaDescription: 'Fachadas metálicas e painéis decorativos em aço com corte a laser em Curitiba. Fabricação sob medida com acabamento premium. Solicite orçamento.',
    primaryKw: 'fachada metálica corte a laser Curitiba',
    secondaryKws: ['fachada em aço', 'painel decorativo corte a laser', 'chapa perfurada para fachada', 'fachada comercial metálica', 'brise metálico'],
    icon: 'bi-aspect-ratio',
    intro: 'Transforme a identidade visual do seu comércio, escritório ou residência com fachadas metálicas customizadas e painéis decorativos em corte a laser produzidos com precisão pela DW.',
    applications: [
      'Fachadas comerciais para lojas, clínicas e edifícios corporativos',
      'Painéis decorativos vazados e brises de controle solar',
      'Portais de entrada, revestimentos arquitetônicos e letreiros',
      'Divisórias visuais para interiores e áreas externas'
    ],
    details: `
      <p>A <strong>fachada metálica corte a laser Curitiba</strong> agrega valor estético imediato, permitindo desenhos geométricos exclusivos, ventilação e controle térmico com a solidez do aço.</p>
    `,
    faq: [
      { q: 'É possível fazer desenhos e padrões personalizados?', a: 'Sim, os painéis são fabricados conforme o projeto arquitetônico e as dimensões necessárias.' }
    ]
  },
  {
    slug: 'marquise-metalica-curitiba',
    title: 'Marquise Metálica Curitiba | Entradas Comerciais e Residenciais | DW',
    h1: 'Marquise Metálica Curitiba — Proteção Elegante para Entradas',
    metaDescription: 'Marquises metálicas sob medida em Curitiba para portas de entrada residenciais e comerciais. Fabricação no Xaxim. Peça seu orçamento no WhatsApp.',
    primaryKw: 'marquise metálica Curitiba',
    secondaryKws: ['marquise de ferro', 'marquise com vidro', 'marquise com policarbonato', 'marquise para porta de entrada', 'cobertura para entrada'],
    icon: 'bi-door-open',
    intro: 'As marquises metálicas oferecem proteção contra chuva e sol nas entradas de imóveis, unindo leveza estrutural e durabilidade com fabricação sob medida pela DW Estruturas Metálicas.',
    applications: [
      'Marquises para portas de entrada comerciais e vitrines',
      'Marquises residenciais para halls de acesso e garagens',
      'Estruturas de marquise para condomínios e portarias',
      'Coberturas suspensas com tirantes ou consoles de aço'
    ],
    details: `
      <p>Desenvolvemos cada <strong>marquise metálica em Curitiba</strong> com ancoragem segura na alvenaria ou vigas de concreto, preparada para fechamento superior em vidro ou chapas metálicas.</p>
    `,
    faq: [
      { q: 'Como é feita a fixação da marquise?', a: 'A fixação é dimensionada de acordo com a estrutura da parede e o peso do fechamento para garantir estabilidade.' }
    ]
  },
  {
    slug: 'quadra-poliesportiva-coberta-curitiba',
    title: 'Quadra Poliesportiva Coberta Curitiba | Estrutura Metálica | DW',
    h1: 'Quadra Poliesportiva Coberta em Curitiba — Estrutura e Alambrado',
    metaDescription: 'Estrutura metálica para cobertura de quadras esportivas e alambrados em Curitiba e Região. Fabricação própria no Xaxim. Solicite orçamento.',
    primaryKw: 'quadra poliesportiva coberta Curitiba',
    secondaryKws: ['cobertura de quadra', 'construção de quadra de esportes', 'estrutura metálica para quadra', 'quadra de futebol society'],
    icon: 'bi-dribbble',
    intro: 'Executamos estruturas metálicas para cobertura de quadras de esportes, campos society, clubes, escolas e condomínios em Curitiba e Região Metropolitana, integrando pilares, tesouras de grande vão e alambrados.',
    applications: [
      'Cobertura metálica para quadras poliesportivas em escolas e clubes',
      'Estruturas para quadras de tênis, padel e beach tennis',
      'Cercamento com alambrados reforçados para áreas esportivas',
      'Fechamentos laterais e telhados de proteção climática'
    ],
    details: `
      <p>Projetar uma <strong>quadra poliesportiva coberta em Curitiba</strong> exige cálculo apurado para vencer grandes vãos livres sem pilares intermediários. A DW fabrica todos os componentes em sua sede no Xaxim.</p>
    `,
    faq: [
      { q: 'A DW fabrica também o alambrado da quadra?', a: 'Sim, realizamos tanto a estrutura metálica de cobertura quanto o cercamento com mourões e telas de alambrado.' }
    ]
  },
  {
    slug: 'portao-basculante-curitiba',
    title: 'Portão Basculante Curitiba | Fabricação Sob Medida | DW',
    h1: 'Portão Basculante Curitiba — Fabricação Sob Medida e Reforçada',
    metaDescription: 'Portões basculantes sob medida em Curitiba para residências, condomínios e indústrias. Estrutura reforçada e fabricação própria no Xaxim. Peça orçamento.',
    primaryKw: 'portão basculante Curitiba',
    secondaryKws: ['portão basculante automático', 'portão de garagem basculante', 'portão industrial', 'conserto de portão basculante'],
    icon: 'bi-layout-sidebar-inset',
    intro: 'A DW fabrica portões basculantes sob medida em Curitiba com tubos e perfis de aço estrutural de alta resistência, proporcionando segurança, equilíbrio mecânico e durabilidade para garagens e acessos.',
    applications: [
      'Portões basculantes para garagens residenciais',
      'Portões para condomínios residenciais e comerciais',
      'Portões basculantes de grandes dimensões para indústrias e galpões',
      'Portões combinados com porta social embutida'
    ],
    details: `
      <p>O <strong>portão basculante em Curitiba</strong> fabricado pela DW destaca-se pela soldagem contínua, colunas de contrapeso balanceadas e acabamento refinado para abertura suave e segura.</p>
    `,
    faq: [
      { q: 'Vocês fabricam o portão sob medida para o vão da garagem?', a: 'Sim, cada portão é confeccionado exatamente nas medidas do vão do cliente com opções de fechamento cego, tubular ou com detalhes.' }
    ]
  },
  {
    slug: 'alambrado-curitiba',
    title: 'Alambrado Curitiba | Cercamentos para Quadras e Terrenos | DW',
    h1: 'Alambrado Curitiba — Cercamentos Metálicos Sob Medida',
    metaDescription: 'Alambrados em Curitiba para terrenos, quadras esportivas, indústrias e condomínios. Fabricação e instalação com fábrica própria no Xaxim. Peça orçamento.',
    primaryKw: 'alambrado Curitiba',
    secondaryKws: ['alambrado para quadra', 'alambrado para terreno', 'cercamento com alambrado', 'tela de alambrado'],
    icon: 'bi-grid-fill',
    intro: 'Instalamos alambrados de alta resistência em Curitiba e Região Metropolitana para cercamento de terrenos, indústrias, áreas esportivas e propriedades comerciais, com postes metálicos firmes e telas duráveis.',
    applications: [
      'Cercamento de quadras poliesportivas e campos de futebol',
      'Fechamento perimetral de terrenos, chácaras e condomínios',
      'Delimitação de áreas industriais e pátios logísticos',
      'Divisórias internas de proteção e segurança em galpões'
    ],
    details: `
      <p>O <strong>alambrado em Curitiba</strong> executado pela DW utiliza tubos estruturais com fixação sólida e telas com malha adequada à finalidade do espaço, garantindo proteção com excelente custo-benefício.</p>
    `,
    faq: [
      { q: 'O alambrado pode ser instalado em terrenos desnivelados?', a: 'Sim, nossa equipe faz a adequação da estrutura aos desníveis do terreno.' }
    ]
  },
  {
    slug: 'gradil-curitiba',
    title: 'Gradil Curitiba | Gradis de Proteção para Muros e Empresas | DW',
    h1: 'Gradil Curitiba — Proteção, Segurança e Estética Sob Medida',
    metaDescription: 'Gradis metálicos em Curitiba para muros, empresas, condomínios e residências. Fotografias reais de obras. Fabricação própria no Xaxim. Solicite orçamento.',
    primaryKw: 'gradil Curitiba',
    secondaryKws: ['gradil de proteção', 'gradil para muro', 'gradil para condomínio', 'grade de ferro', 'gradil galvanizado'],
    icon: 'bi-border-width',
    photos: ['gradil-1.jpg', 'gradil-2.jpg', 'gradil-3.jpg', 'gradil-6.jpg'],
    intro: 'A DW projeta, fabrica e instala gradis metálicos de proteção em Curitiba para muros, frentes de imóveis, condomínios e perímetros comerciais, unindo máxima segurança e estética sofisticada.',
    applications: [
      'Gradis para muros e fechamentos frontais residenciais',
      'Cercamentos de segurança para condomínios horizontais e verticais',
      'Gradis industriais e comerciais para proteção patrimonial',
      'Grades de proteção e divisórias metálicas para espaços externos'
    ],
    details: `
      <p>Nossos <strong>gradis em Curitiba</strong> são produzidos na fábrica própria do Xaxim com barras e perfis de aço estrutural, solda precisa e pintura protetiva que garante longa vida útil contra intempéries.</p>
    `,
    faq: [
      { q: 'Vocês fabricam o gradil na altura desejada?', a: 'Sim, fabricamos os módulos de gradil sob medida na altura e no espaçamento de barras especificado no projeto.' }
    ]
  },
  // Rascunho / Draft
  {
    slug: 'corrimao-inox-curitiba',
    title: 'Corrimão Inox Curitiba | Guarda-Corpo | Rascunho DW',
    h1: 'Corrimão Inox Curitiba e Guarda-Corpo Metálico (Página em Rascunho)',
    metaDescription: 'Informações sobre corrimão e guarda-corpo metálico em Curitiba. Rascunho sujeito à confirmação de disponibilidade pela DW Estruturas Metálicas.',
    primaryKw: 'corrimão inox Curitiba',
    secondaryKws: ['guarda-corpo metálico', 'corrimão de ferro', 'guarda-corpo inox'],
    icon: 'bi-slash-circle',
    isDraft: true,
    intro: 'Esta página é um rascunho de arquitetura de SEO para a modalidade de corrimão inox e guarda-corpo metálico em Curitiba. A inclusão no catálogo oficial e menu está sujeita à confirmação de atendimento direto pela DW Estruturas Metálicas.',
    applications: [
      'Corrimãos e guarda-corpos para escadas comerciais e residenciais',
      'Guarda-corpos para mezaninos e passarelas industriais',
      'Corrimãos de acessibilidade em aço'
    ],
    details: `
      <p style="background-color: #fff3cd; color: #856404; padding: 1rem; border-radius: 4px; border: 1px solid #ffeeba;">
        <strong>Nota de Rascunho:</strong> Antes de contratar esta modalidade específica, consulte previamente a disponibilidade através do nosso WhatsApp oficial (41) 99894-1829.
      </p>
    `,
    faq: [
      { q: 'Este serviço está disponível?', a: 'Consulte nossa equipe no WhatsApp para verificar disponibilidade e prazos para confecção de corrimão e guarda-corpo.' }
    ]
  }
];

function generateServicePages() {
  servicesData.forEach(s => {
    const mainContent = `
      <section class="section section-light">
        <div class="container">
          <div class="content-layout">
            <div class="content-body">
              <span class="badge-tag"><i class="bi ${s.icon}"></i> FABRICAÇÃO PRÓPRIA NO XAXIM</span>
              <h2 style="margin-top: 0.75rem;">Solução Especializada em ${s.primaryKw}</h2>
              <p class="section-lead">${s.intro}</p>

              ${s.details}

              <h3>Principais Aplicações</h3>
              <ul>
                ${s.applications.map(app => `<li>${app}</li>`).join('')}
              </ul>

              ${s.photos && s.photos.length > 0 ? `
                <h3 style="margin-top: 2.5rem;"><i class="bi bi-camera-fill" style="color: var(--color-accent);"></i> Fotografias Reais desta Modalidade</h3>
                <p style="font-size: 0.92rem; color: var(--text-dark-secondary);">Imagens de estruturas executadas pela equipe da DW:</p>
                <div class="gallery-grid" style="margin-top: 1.5rem;">
                  ${s.photos.map(p => {
                    const dir = s.slug.includes('mezanino') ? 'mezanino' : (s.slug.includes('pergolado') ? 'pergolados' : 'gradil');
                    return `
                      <div class="gallery-item" data-category="${dir}">
                        <img src="assets/images/${dir}/${p}" data-full="assets/images/${dir}/${p}" alt="${s.primaryKw} executado pela DW Estruturas Metálicas" loading="lazy" />
                        <div class="gallery-overlay">
                          <span class="gallery-category-badge">${s.primaryKw}</span>
                          <div class="gallery-caption">
                            <span>Ver em alta resolução</span>
                            <span class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
                          </div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : ''}

              <h3 style="margin-top: 3rem;"><i class="bi bi-question-circle" style="color: var(--color-accent);"></i> Dúvidas sobre ${s.primaryKw}</h3>
              <div class="faq-list" style="margin-top: 1.5rem;">
                ${s.faq.map(item => `
                  <div class="faq-item">
                    <button class="faq-question" aria-expanded="false">
                      <span>${item.q}</span>
                      <i class="bi bi-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                      <p>${item.a}</p>
                    </div>
                  </div>
                `).join('')}
              </div>

              <div style="background-color: var(--color-graphite-100); border-radius: var(--radius-md); padding: 2rem; margin-top: 3.5rem; border-left: 4px solid var(--color-accent);">
                <h4>Termos e pesquisas relacionadas em Curitiba:</h4>
                <div class="neighborhoods-tags" style="margin-top: 0.75rem;">
                  <span class="nh-tag"><strong>${s.primaryKw}</strong></span>
                  ${s.secondaryKws.map(kw => `<span class="nh-tag">${kw}</span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <aside class="sidebar-sticky">
              <div class="sidebar-cta-box">
                <i class="bi bi-whatsapp" style="font-size: 2.5rem; color: #25d366; margin-bottom: 0.75rem; display: block;"></i>
                <h4>Orçamento para ${s.primaryKw}</h4>
                <p>Envie as dimensões e características do seu projeto para a equipe da DW.</p>
                <a href="${getWaLink(`Olá! Gostaria de solicitar um orçamento para ${s.primaryKw}.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
                  <i class="bi bi-whatsapp"></i> Solicitar no WhatsApp
                </a>
                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 1rem;">
                  <i class="bi bi-geo-alt"></i> Fábrica no Xaxim • Curitiba/PR
                </div>
              </div>

              <div class="sidebar-card" style="margin-top: 2rem;">
                <h4>Outros Serviços</h4>
                <nav class="sidebar-nav-links">
                  <a href="galpao-metalico-curitiba.html">Galpões Metálicos <i class="bi bi-chevron-right"></i></a>
                  <a href="mezanino-metalico-curitiba.html">Mezaninos Metálicos <i class="bi bi-chevron-right"></i></a>
                  <a href="escada-metalica-curitiba.html">Escadas Metálicas <i class="bi bi-chevron-right"></i></a>
                  <a href="plataforma-metalica-industrial.html">Plataformas Industriais <i class="bi bi-chevron-right"></i></a>
                  <a href="cobertura-metalica-curitiba.html">Coberturas Metálicas <i class="bi bi-chevron-right"></i></a>
                  <a href="pergolado-metalico-curitiba.html">Pergolados Metálicos <i class="bi bi-chevron-right"></i></a>
                  <a href="fachada-metalica-corte-a-laser-curitiba.html">Fachadas a Laser <i class="bi bi-chevron-right"></i></a>
                  <a href="gradil-curitiba.html">Gradis de Proteção <i class="bi bi-chevron-right"></i></a>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;

    const html = renderPage({
      title: s.title,
      metaDescription: s.metaDescription,
      canonicalUrl: `${s.slug}.html`,
      activeNav: 'servicos',
      breadcrumbs: [
        { label: 'Serviços', url: 'index.html#servicos' },
        { label: s.primaryKw, url: `${s.slug}.html` }
      ],
      isDraft: s.isDraft || false,
      mainContent
    });

    writeHtml(`${s.slug}.html`, html);
  });
}

/* ==========================================================================
   6. PÁGINAS REGIONAIS (SÃO JOSÉ, ARAUCÁRIA, FAZENDA RIO GRANDE)
   ========================================================================== */

const regionsData = [
  {
    slug: 'estrutura-metalica-sao-jose-dos-pinhais',
    city: 'São José dos Pinhais',
    title: 'Estrutura Metálica São José dos Pinhais | Galpões e Mezaninos | DW',
    h1: 'Estrutura Metálica em São José dos Pinhais — Projetos e Montagem Sob Medida',
    metaDescription: 'Estruturas metálicas em São José dos Pinhais: galpões, barracões, mezaninos e portões. Fábrica própria próxima no Xaxim. Solicite orçamento.',
    terms: ['estrutura metálica São José dos Pinhais', 'galpão metálico São José dos Pinhais', 'barracão São José dos Pinhais', 'mezanino São José dos Pinhais', 'portão basculante São José dos Pinhais'],
    intro: 'A DW Estruturas Metálicas atende todo o município de São José dos Pinhais com projetos completos, fabricação e montagem de estruturas em aço sob medida para indústrias, comércios e residências.',
    context: `
      <p>Com forte vocação industrial e logística ao redor da BR-277, BR-376 e região do Aeroporto Afonso Pena, São José dos Pinhais possui alta demanda por <strong>galpões metálicos, mezaninos industriais e barracões</strong> para armazenagem e operação comercial.</p>
      <p>Nossa fábrica própria está estrategicamente situada no bairro Xaxim, em Curitiba, permitindo deslocamento rápido para medições técnicas, entrega ágil de materiais e montagem precisa em São José dos Pinhais.</p>
    `
  },
  {
    slug: 'estrutura-metalica-araucaria',
    title: 'Estrutura Metálica Araucária | Galpão Industrial e Plataformas | DW',
    h1: 'Estrutura Metálica em Araucária — Galpões Industriais e Plataformas',
    metaDescription: 'Estruturas metálicas para polos industriais e comércios em Araucária: galpões, plataformas de manutenção, mezaninos e gradis. Peça orçamento à DW.',
    terms: ['estrutura metálica Araucária', 'galpão industrial Araucária', 'plataforma metálica Araucária', 'mezanino Araucária', 'gradil Araucária'],
    intro: 'Desenvolvemos estruturas metálicas robustas para o polo industrial e comercial de Araucária. Fabricação sob medida com controle rigoroso de qualidade em nossa fábrica no Xaxim, Curitiba.',
    context: `
      <p>Como um dos principais centros industriais e petroquímicos do Paraná, Araucária requer estruturas metálicas com elevado padrão de resistência mecânica, como <strong>plataformas industriais, passarelas de manutenção, galpões de grande porte e gradis reforçados</strong>.</p>
      <p>A DW projeta, fabrica e instala cada estrutura respeitando as exigências técnicas da sua planta fabril ou imóvel comercial em Araucária, com atendimento direto e sem burocracia.</p>
    `
  },
  {
    slug: 'estrutura-metalica-fazenda-rio-grande',
    title: 'Estrutura Metálica Fazenda Rio Grande | Barracões e Mezaninos | DW',
    h1: 'Estrutura Metálica em Fazenda Rio Grande — Barracões e Serralheria Industrial',
    metaDescription: 'Estruturas metálicas em Fazenda Rio Grande: barracões, mezaninos, portões basculantes e gradis. Fábrica própria no Xaxim. Solicite orçamento.',
    terms: ['estrutura metálica Fazenda Rio Grande', 'barracão Fazenda Rio Grande', 'portão basculante Fazenda Rio Grande', 'alambrado Fazenda Rio Grande', 'gradil Fazenda Rio Grande'],
    intro: 'Atendimento especializado em Fazenda Rio Grande para a fabricação e instalação de barracões metálicos, mezaninos para lojas e indústrias, portões e fechamentos de segurança.',
    context: `
      <p>O acelerado crescimento comercial e habitacional de Fazenda Rio Grande gera contínua demanda por <strong>barracões metálicos para comércio, ampliações de lojas com mezaninos e gradis de segurança</strong> para condomínios e empresas.</p>
      <p>A partir de nossa fábrica no Xaxim, Curitiba, garantimos atendimento próximo, fornecendo projetos sob medida, corte preciso e instalação completa no município.</p>
    `
  }
];

function generateRegionPages() {
  regionsData.forEach(r => {
    const mainContent = `
      <section class="section section-light">
        <div class="container">
          <div class="content-layout">
            <div class="content-body">
              <span class="badge-tag"><i class="bi bi-geo-alt-fill"></i> ATENDIMENTO REGIONAL</span>
              <h2 style="margin-top: 0.75rem;">Estruturas Metálicas para ${r.city}</h2>
              <p class="section-lead">${r.intro}</p>

              ${r.context}

              <h3>Serviços Realizados em ${r.city}</h3>
              <ul>
                <li><strong>Galpões e Barracões Metálicos:</strong> Construção do zero para logística, fábricas e comércios locais.</li>
                <li><strong>Mezaninos Metálicos:</strong> Aproveitamento de pé-direito para estoques e escritórios.</li>
                <li><strong>Plataformas & Passarelas:</strong> Estruturas técnicas para manutenção industrial.</li>
                <li><strong>Coberturas e Pergolados:</strong> Soluções arquitetônicas e de proteção contra o tempo.</li>
                <li><strong>Portões Basculantes e Gradis:</strong> Segurança reforçada para entradas residenciais e empresariais.</li>
              </ul>

              <div style="background-color: var(--color-primary-900); color: #ffffff; border-radius: var(--radius-md); padding: 2rem; margin-top: 2.5rem;">
                <h4 style="color: #ffffff;"><i class="bi bi-info-circle-fill" style="color: var(--color-accent);"></i> Base Fabril e Atendimento</h4>
                <p style="color: var(--text-light-secondary); font-size: 0.95rem; margin-bottom: 0;">
                  Nossa sede e oficina de fabricação estão localizadas na <strong>Rua Othoniel Taborda Reinhardt, 451 – Xaxim, Curitiba/PR</strong>. Atendemos ${r.city} com equipe própria para medições, entrega e montagem completa da sua estrutura.
                </p>
              </div>

              <div style="background-color: var(--color-graphite-100); border-radius: var(--radius-md); padding: 1.75rem; margin-top: 2.5rem; border-left: 4px solid var(--color-accent);">
                <h4>Termos e buscas atendidas em ${r.city}:</h4>
                <div class="neighborhoods-tags" style="margin-top: 0.75rem;">
                  ${r.terms.map(t => `<span class="nh-tag"><strong>${t}</strong></span>`).join('')}
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <aside class="sidebar-sticky">
              <div class="sidebar-cta-box">
                <i class="bi bi-whatsapp" style="font-size: 2.5rem; color: #25d366; margin-bottom: 0.75rem; display: block;"></i>
                <h4>Atendimento em ${r.city}</h4>
                <p>Fale diretamente com nossa equipe e solicite um orçamento para sua obra.</p>
                <a href="${getWaLink(`Olá! Tenho uma obra em ${r.city} e gostaria de solicitar um orçamento à DW Estruturas Metálicas.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
                  <i class="bi bi-whatsapp"></i> Solicitar no WhatsApp
                </a>
              </div>

              <div class="sidebar-card" style="margin-top: 2rem;">
                <h4>Outras Regiões Atendidas</h4>
                <nav class="sidebar-nav-links">
                  <a href="index.html#regioes">Curitiba (Todos os Bairros) <i class="bi bi-chevron-right"></i></a>
                  <a href="estrutura-metalica-sao-jose-dos-pinhais.html">São José dos Pinhais <i class="bi bi-chevron-right"></i></a>
                  <a href="estrutura-metalica-araucaria.html">Araucária <i class="bi bi-chevron-right"></i></a>
                  <a href="estrutura-metalica-fazenda-rio-grande.html">Fazenda Rio Grande <i class="bi bi-chevron-right"></i></a>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;

    const html = renderPage({
      title: r.title,
      metaDescription: r.metaDescription,
      canonicalUrl: `${r.slug}.html`,
      activeNav: 'regioes',
      breadcrumbs: [
        { label: 'Regiões', url: 'index.html#regioes' },
        { label: r.city, url: `${r.slug}.html` }
      ],
      mainContent
    });

    writeHtml(`${r.slug}.html`, html);
  });
}

/* ==========================================================================
   7. SITEMAP.XML & ROBOTS.TXT
   ========================================================================== */
function generateSeoFiles() {
  const allUrls = [
    '',
    'obras-realizadas.html',
    'contato.html',
    'politica-de-privacidade.html',
    'galpao-metalico-curitiba.html',
    'mezanino-metalico-curitiba.html',
    'escada-metalica-curitiba.html',
    'plataforma-metalica-industrial.html',
    'cobertura-metalica-curitiba.html',
    'pergolado-metalico-curitiba.html',
    'fachada-metalica-corte-a-laser-curitiba.html',
    'marquise-metalica-curitiba.html',
    'quadra-poliesportiva-coberta-curitiba.html',
    'portao-basculante-curitiba.html',
    'alambrado-curitiba.html',
    'gradil-curitiba.html',
    'estrutura-metalica-sao-jose-dos-pinhais.html',
    'estrutura-metalica-araucaria.html',
    'estrutura-metalica-fazenda-rio-grande.html'
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${siteConfig.baseUrl}/${u}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${u === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${u === '' ? '1.0' : (u.includes('galpao') || u.includes('mezanino') || u.includes('pergolado') || u.includes('gradil') ? '0.9' : '0.8')}</priority>
  </url>`).join('\n')}
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /corrimao-inox-curitiba.html

Sitemap: ${siteConfig.baseUrl}/sitemap.xml
`;

  fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');
  console.log('Generated: sitemap.xml');

  fs.writeFileSync('robots.txt', robotsTxt, 'utf8');
  console.log('Generated: robots.txt');
}

// Execução Principal do Builder
function buildAll() {
  console.log('--- Iniciando geração estática do site DW Estruturas Metálicas ---');
  generateHomePage();
  generateObrasPage();
  generateContatoPage();
  generatePrivacidadePage();
  generateServicePages();
  generateRegionPages();
  generateSeoFiles();
  console.log('--- Construção concluída com sucesso! ---');
}

buildAll();
