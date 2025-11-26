// Dados dos Produtos/Sites (Fusion Concept)
const solucoes = [
    {
        id: 1,
        categoria: "institucional",
        titulo: "Corporate Prime",
        descricao: "Site institucional robusto. Arquitetura sólida para empresas que precisam passar confiança e autoridade imediata.",
        imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        categoria: "ecommerce",
        titulo: "Neon Shop Sales",
        descricao: "Loja virtual de alta performance. Otimizada para conversão, com visual impactante e checkout seguro.",
        imagem: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        categoria: "sistema",
        titulo: "Dashboard Pro",
        descricao: "Painel administrativo com análise de dados em tempo real. Big Data e gráficos para gestão do seu negócio.",
        imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        categoria: "institucional",
        titulo: "Landing Page Turbo",
        descricao: "Página única focada em vendas. Design agressivo e copywriting estratégico para capturar leads.",
        imagem: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        categoria: "ecommerce",
        titulo: "Marketplace Hub",
        descricao: "Plataforma multi-vendedor escalável. Construída com a mesma tecnologia de gigantes do mercado.",
        imagem: "https://images.unsplash.com/photo-1472851294608-415522f96315?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Função para renderizar
function carregarProdutos(filtro = 'todos') {
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    const itensFiltrados = filtro === 'todos' 
        ? solucoes 
        : solucoes.filter(item => item.categoria === filtro);

    itensFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('produto-card');

        card.innerHTML = `
            <div class="produto-img" style="background-image: url('${produto.imagem}')">
                <div class="produto-overlay"></div>
            </div>
            <div class="produto-info">
                <h3>${produto.titulo}</h3>
                <p>${produto.descricao}</p>
                <a href="#" class="btn-card" onclick="encomendar('${produto.titulo}')">SOLICITAR DEMO</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Controle dos botões de filtro
function filtrar(categoria) {
    // Atualiza visual dos botões
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtra os itens
    carregarProdutos(categoria);
}

function encomendar(nome) {
    alert(`Excelente escolha! Vamos iniciar o projeto do "${nome}" agora mesmo.`);
}

// Inicialização
window.onload = () => {
    carregarProdutos();
    console.log("Sistema KreaWeb: Online e Operante.");
};