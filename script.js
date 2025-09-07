// --- Dados do Cardápio ---
const menuData = {
    "Copos da Felicidade": [
        {
            name: "Dois Amores",
            shortDescription: "Camadas irresistíveis de brigadeiro branco, brigadeiro ao leite e bolo de chocolate.",
            longDescription: "Um dos queridinhos da casa! Camadas cremosas de brigadeiro gourmet feito com chocolate nobre ao leite, brigadeiro branco suave e bolo de chocolate úmido e macio. Um clássico que conquista pela textura e pelo sabor nostálgico. Preparamos sua sobremesa na hora do pedido, garantindo frescor e qualidade em cada camada. Ideal para quem ama chocolate e busca uma combinação equilibrada entre doçura e intensidade. 🧊 Conservar refrigerado e consumir em até 6 dias.",
            price: "27,50",
            image: "https://i.imgur.com/ghn7Opj.jpeg",
            hashtags: ["#copodafelicidade", "#gourmet", "#brigadeiro", "#lichococandy", "#ifood"]
        },
        {
            name: "Copo Truffé",
            shortDescription: "Bolo de chocolate, mousse de Ninho e ganache trufada com toque de conhaque.",
            longDescription: "Bolo de chocolate úmido e macio, mousse aerada de Ninho e uma generosa porção de ganache trufada com chocolate nobre e leve toque de conhaque. Uma sobremesa intensa, cremosa e envolvente — perfeita para quem busca sabor e sofisticação. Montamos sua sobremesa no momento do pedido, com ingredientes frescos e máxima atenção aos detalhes. Conservar refrigerado e consumir em até 6 dias. Atenção: não recomendado para menores de idade ou pessoas com sensibilidade a álcool.",
            price: "24,90",
            image: "https://i.imgur.com/CF6p0ip.jpeg",
            hashtags: ["#truffe", "#copogourmet", "#chocolatedeverdade", "#lichococandy", "#ifood"]
        },
        {
            name: "Copo Pão de Mel",
            shortDescription: "Bolo de especiarias, doce de leite cremoso e ganache meio amarga.",
            longDescription: "Bolo de especiarias fofinho, com notas marcantes de canela, cravo e mel, recheado com doce de leite cremoso caseiro e finalizado com ganache de chocolate nobre meio amargo. Uma sobremesa intensa, aromática e envolvente — perfeita para quem aprecia sabores tradicionais com personalidade. Conservar refrigerado e consumir em até 6 dias. Atenção: não recomendado para pessoas com sensibilidade a mel, canela ou cravo.",
            price: "19,50",
            image: ""https://i.imgur.com/7r2JUIu.jpeg"",
            hashtags: ["#paodemel", "#docenocopo", "#saboresdocampo", "#lichococandy", "#ifood"]
        },
        {
            name: "Copo Cheesecake",
            shortDescription: "Base crocante, creme de cream cheese e geleia artesanal de frutas vermelhas.",
            longDescription: "Base de biscoito preparado com manteiga noisette, creme sedoso de cream cheese e nossa geleia artesanal de frutas vermelhas — feita com morangos, framboesas, mirtilos e amoras frescas. Um doce leve, elegante e equilibrado. Essa sobremesa é montada na hora, garantindo que as frutas e o creme estejam sempre frescos e no ponto certo. Perfeita para quem busca um doce mais delicado, com acidez na medida certa. Conservar refrigerado. Recomendamos o consumo em até 48 horas. As frutas vermelhas, com o tempo, podem manchar o creme, não alterando o sabor, porém mudando a aparência.",
            price: "28,50",
            image: "https://i.imgur.com/UsKqa4q.jpeg",
            hashtags: ["#cheesecake", "#frutasvermelhas", "#docenocopo", "#lichococandy", "#ifood"]
        },
        {
            name: "Bombom de Uva no Copo",
            shortDescription: "Ninho, uvas verdes frescas e ganache de chocolate meio amarga.",
            longDescription: "Brigadeiro gourmet de leite Ninho, generosa camada de uvas verdes selecionadas e finalizado com uma ganache de chocolate nobre meio amargo. Um contraste delicioso entre a doçura do brigadeiro, a acidez da fruta e o toque intenso do chocolate. Sua sobremesa é montada no momento do pedido, para que as frutas cheguem frescas e intactas. Conservar refrigerado. Recomendamos o consumo em até 24 horas. Frutas frescas podem soltar líquido e alterar a textura da sobremesa.",
            price: "22,90",
            image: "https://i.imgur.com/kaB5S4j.jpeg",
            hashtags: ["#surpresadeuva", "#frutasechocolate", "#docenocopo", "#lichococandy", "#ifood"]
        },
        {
            name: "Bombom de Morango no Copo",
            shortDescription: "Brigadeiro de Ninho, morangos frescos e ganache meio amarga.",
            longDescription: "Brigadeiro gourmet de leite Ninho, generosa camada de morangos frescos e finalizado com uma ganache de chocolate nobre meio amarga. Uma sobremesa irresistível para quem ama a união perfeita entre fruta e chocolate. Montamos esse copo artesanalmente, com frutas frescas e ingredientes de qualidade, sempre no momento do pedido. Conservar refrigerado. Recomendamos o consumo em até 24 horas. Morangos frescos tendem a soltar líquido com o tempo, alterando a textura da sobremesa.",
            price: "23,90",
            image: "https://i.imgur.com/yoZLxwI.jpeg",
            hashtags: ["#copodemorango", "#frutasechocolate", "#lichococandy", "#docenocopo", "#ifood"]
        },
{
           name: "Copo Torta de Limão", // 🍋 Novo item
shortDescription: "Massa crocante, creme de limão e chantilly.",
longDescription: "Uma deliciosa sobremesa montada em camadas: base crocante no fundo, creme de limão leve e equilibrado e, para finalizar, chantilly aveludado. Refrescante e irresistível, perfeita para quem busca uma opção cítrica e cremosa.",
price: "17,00",
image: "https://i.imgur.com/hNyfarq.jpeg", // 🔄 Nova imagem
hashtags: ["#tortadelimao", "#copodafelicidade", "#docenocopo", "#lichococandy", "#ifood"]
}
    ],
    "Delícias Individuais": [
        {
            name: "Mousse de Morango",
            shortDescription: "Leve e aerada mousse de morango.",
            longDescription: "Nossa mousse de morango é feita com morangos frescos, resultando em uma textura leve e aerada com um sabor intenso da fruta. Uma sobremesa delicada e refrescante.",
            price: "11,00",
            image: "https://i.imgur.com/JHx9fEc.jpeg",
            hashtags: ["#mousse", "#morango", "#leve", "#sobremesa"]
        },
        {
            name: "Mousse de Maracujá",
            shortDescription: "Mousse de maracujá com toque cítrico.",
            longDescription: "A mousse de maracujá da LiChocoCandy é o equilíbrio perfeito entre o doce e o cítrico. Com uma textura incrivelmente cremosa, é a escolha ideal para quem ama um azedinho refrescante.",
            price: "11,00",
            image: "https://i.imgur.com/QyaBjhC.jpeg",
            hashtags: ["#maracuja", "#citrico", "#refrescante", "#tropical"]
        },
        {
            name: "Mousse de Limão",
            shortDescription: "Mousse de limão com o azedinho perfeito.",
            longDescription: "Uma mousse vibrante de limão, com a acidez na medida certa para limpar o paladar. Leve, refrescante e deliciosa, é uma opção popular para finalizar qualquer refeição.",
            price: "11,00",
            image: "https://i.imgur.com/irlqNA4.jpeg",
            hashtags: ["#limao", "#mousse", "#azedinho", "#citrus"]
        },
        {
            name: "Mousse de Chocolate",
            shortDescription: "Mousse de chocolate rica e aveludada.",
            longDescription: "Para os chocólatras de plantão, nossa mousse de chocolate é densa, cremosa e com um sabor intenso de chocolate. Uma verdadeira indulgência para os amantes de cacau.",
            price: "12,00",
            image: "https://i.imgur.com/e7pUQot.jpeg",
            hashtags: ["#chocolate", "#mousse", "#chocolatudo", "#intenso"]
        },
        {
            name: "Mini Pudim",
            shortDescription: "Pudim de leite condensado individual.",
            longDescription: "Nosso mini pudim de leite condensado é suave, cremoso e com aquela calda de caramelo perfeita. Uma versão individual de um clássico que agrada a todos.",
            price: "10,00",
            image: "https://i.imgur.com/rYHLY8p.jpeg",
            hashtags: ["#pudim", "#leitecondensado", "#caramelo", "#classico"]
        },
        {
            name: "Brigadeiro Gourmet de Pote (150g)",
            shortDescription: "Brigadeiro gourmet cremoso em pote de 150g.",
            longDescription: "Brigadeiro gourmet de pote 150g, feito com chocolate nobre de alta qualidade. Cremoso, sabor intenso e textura perfeita para quem busca o verdadeiro sabor do brigadeiro tradicional em versão sofisticada. Conservar refrigerado. Validade: até 7 dias.",
            price: "12,00",
            image: "https://i.imgur.com/VvxqlnM.jpeg",
            hashtags: ["#brigadeirodepote", "#docesgourmet", "#lichococandy", "#ifood"]
        }
    ],
    "Travessas da Felicidade": [
        {
            name: "Cheesecake de Frutas Vermelhas",
            shortDescription: "Base crocante, creme de cream cheese e geleia artesanal de frutas vermelhas.",
            longDescription: "Base de biscoito com manteiga noisette, creme sedoso de cream cheese e geleia artesanal de frutas vermelhas feita com morangos, framboesas, mirtilos e amoras frescas. Um doce leve, elegante e equilibrado. Montado na hora para garantir frutas e creme sempre frescos. Serve até 5 pessoas. Conservar refrigerado. Validade: até 48 horas. As frutas podem manchar o creme com o tempo, sem alterar o sabor, mas modificando a aparência.",
            price: "102,00",
            image: "https://i.imgur.com/Bc8gNNN.jpeg",
            hashtags: ["#cheesecake", "#frutasvermelhas", "#travessa", "#lichococandy", "#ifood"]
        },
        {
            name: "Pão de Mel na Travessa",
            shortDescription: "Bolo de especiarias com doce de leite e ganache meio amarga.",
            longDescription: "Camadas de bolo de chocolate com especiarias, doce de leite cremoso e ganache de chocolate meio amargo. Uma releitura do clássico pão de mel em formato de travessa — intenso, cremoso e envolvente. Montado no momento do pedido, com ingredientes frescos e massa sempre úmida. Serve até 5 pessoas. Conservar refrigerado. Validade: até 7 dias.",
            price: "68,90",
            image: "https://i.imgur.com/YGOikMZ.jpeg",
            hashtags: ["#paodemel", "#travessa", "#docesartesanais", "#lichococandy", "#ifood"]
        },
        {
            name: "Bombom de Uva na Travessa",
            shortDescription: "Brigadeiro de leite Ninho com uvas verdes frescas e ganache meio amarga.",
            longDescription: "Brigadeiro gourmet de leite Ninho, uvas verdes selecionadas e ganache de chocolate meio amargo. Um contraste delicioso entre a doçura do brigadeiro, a acidez da fruta e a intensidade do chocolate. Montado no momento do pedido para garantir frutas frescas e intactas. Serve até 5 pessoas. Conservar refrigerado. Validade: até 24 horas. Frutas frescas podem soltar líquido e alterar a textura da sobremesa.",
            price: "102,50",
            image: "https://i.imgur.com/ojn1e5C.jpeg",
            hashtags: ["#brigadeirodeninho", "#travessa", "#docesgourmet", "#lichococandy", "#ifood"]
        },
        {
            name: "Bombom de Morango na Travessa",
            shortDescription: "Brigadeiro branco, morangos frescos e ganache ao leite.",
            longDescription: "Camadas de brigadeiro branco suave, morangos frescos selecionados e ganache de chocolate nobre ao leite. Uma sobremesa clássica, com equilíbrio entre cremosidade, acidez da fruta e doçura do chocolate. Montado na hora para garantir morangos frescos e creme no ponto ideal. Serve até 5 pessoas. Conservar refrigerado. Validade: até 48 horas. Frutas frescas podem soltar líquido e alterar a textura da sobremesa.",
            price: "102,50",
            image: "https://i.imgur.com/hDzXb5e.jpeg",
            hashtags: ["#bombomdemorango", "#travessa", "#docesfinos", "#lichococandy", "#ifood"]
        },
        {
            name: "Pavê de Ninho Trufado na Travessa",
            shortDescription: "Bolo de chocolate, mousse de Ninho e ganache trufada com toque de conhaque.",
            longDescription: "Bolo de chocolate úmido e macio, mousse de Ninho aerado e ganache trufada com chocolate nobre e leve toque de conhaque. Uma sobremesa intensa, cremosa e envolvente — ideal para quem busca sabor e sofisticação. Preparo feito na hora, com ingredientes frescos e atenção aos detalhes. Serve até 5 pessoas. Conservar refrigerado. Validade: até 7 dias. Atenção: não recomendado para menores de idade ou pessoas sensíveis ao álcool.",
            price: "80,00",
            image: "https://i.imgur.com/qaXpB87.jpeg",
            hashtags: ["#truffe", "#travessa", "#sobremesagourmet", "#lichococandy", "#ifood"]
        }
    ],
    "Mini Bolos": [
        {
            name: "Chocolate com Vulcão de Brigadeiro",
            shortDescription: "Bolo de chocolate úmido com recheio e cobertura de brigadeiro.",
            longDescription: "Bolo de chocolate úmido e macio, recheado e coberto com brigadeiro gourmet de chocolate ao leite. Perfeito para quem ama chocolate em todas as camadas — massa intensa, recheio cremoso e sabor marcante. Preparo artesanal com ingredientes frescos. Conservar refrigerado. Validade: até 7 dias.",
            price: "11,50",
            image: "https://i.imgur.com/PNNFaK7.jpeg",
            hashtags: ["#bolodechocolate", "#vulcaodebrigadeiro", "#docesartesanais", "#lichococandy", "#ifood"]
        },
        {
            name: "Mini Bolo de Cenoura com Vulcão de Brigadeiro",
            shortDescription: "Bolo de cenoura fofinho, com cobertura de brigadeiro gourmet feito com chocolate ao leite.",
longDescription: "Bolo de chocolate úmido e macio, recheado e coberto com brigadeiro gourmet de chocolate ao leite. Perfeito para quem ama chocolate em todas as camadas — massa intensa, recheio cremoso e sabor marcante. Preparo artesanal com ingredientes frescos. Conservar refrigerado. Validade: até 7 dias.",
            price: "11,90",
            image: "https://i.imgur.com/EoJujeF.jpeg",
            hashtags: ["#bolodecenoura", "#vulcaodebrigadeiro", "#docesartesanais", "#lichococandy", "#ifood"]
        },
        {
            name: "Mini Bolo de Churros",
            shortDescription: "Bolo macio com toque de canela e recheio de doce de leite.",
            longDescription: "Massa macia com toque de canela, coberta com açúcar e recheada com doce de leite caseiro. Um bolo clássico com sabor de infância e textura delicada, finalizado com cobertura crocante e generosa camada de recheio. Preparo artesanal com ingredientes frescos. Conservar refrigerado. Validade: até 7 dias.",
            price: "9,50",
            image: "https://i.imgur.com/M8ZG2ZY.jpeg",
            hashtags: ["#bolodechurros", "#docescaseiros", "#lichococandy", "#ifood"]
        },
        {
            name: "Mini Bolo de Limão com Mousse",
            shortDescription: "Bolo leve com mousse aerado de limão.",
            longDescription: "Bolo leve com toque cítrico, recheado com mousse aerado de limão. Combinação equilibrada entre doçura e acidez, com textura cremosa e sabor refrescante. Preparo artesanal com ingredientes frescos. Conservar refrigerado. Validade: até 7 dias.",
            price: "11,00",
            image: "https://i.imgur.com/JREIiaL.jpeg",
            hashtags: ["#bolodelimao", "#moussedelimao", "#docesrefrescantes", "#lichococandy", "#ifood"]
        },
    ],
    "Bolos de Mesa": [
        {
            name: "Bolo de Cenoura com Vulcão de Brigadeiro Gourmet",
            shortDescription: "Clássico da confeitaria com cobertura generosa de brigadeiro gourmet que escorre como um verdadeiro vulcão.",
            longDescription: "Massa fofinha e levemente adocicada de cenoura, combinada com uma calda de brigadeiro gourmet feita com chocolate nobre. Um clássico irresistível que conquista pelo sabor e pela cremosidade da cobertura, perfeita para qualquer momento do dia.",
            price: "57,50",
            image: "https://i.imgur.com/UOHWRBs.jpeg",
            hashtags: ["#BoloDeCenoura", "#BoloVulcão", "#BoloDeCafé", "#BoloCaseiro", "#FeitoComAmor", "#BoloDeMesa"]
        },
        {
            name: "Bolo de Chocolate com Vulcão de Brigadeiro Gourmet",
            shortDescription: "Massa intensa de chocolate com recheio vulcânico de brigadeiro gourmet.",
            longDescription: "Para os verdadeiros amantes de chocolate: massa úmida e rica em cacau, coberta por uma camada abundante de brigadeiro gourmet cremoso. Um bolo que derrete na boca e entrega indulgência em cada fatia.",
            price: "61,50",
            image: "https://i.imgur.com/kWWPxwg.jpeg",
            hashtags: ["#BoloDeChocolate", "#BoloVulcão", "#BoloDeCafé", "#ChocolateLover", "#BoloRecheado", "#BoloDeMesa"]
        },
        {
            name: "Bolo de Milho",
            shortDescription: "Tradicional bolo de milho cremoso, perfeito para acompanhar um café fresquinho.",
            longDescription: "Feito com milho de verdade, esse bolo traz o sabor típico das receitas da roça. Massa cremosa, levemente adocicada e com textura aveludada. Uma escolha simples, mas cheia de afeto e sabor.",
            price: "51,00",
            image: "https://i.imgur.com/IR2M2Rf.jpeg",
            hashtags: ["#BoloDeMilho", "#BoloCaipira", "#BoloDeCafé", "#ReceitaTradicional", "#BoloDeMesa", "#SaborDaRoça"]
        },
        {
            name: "Bolo de Coco com Laranja",
            shortDescription: "Combinação leve e refrescante com cobertura de leite condensado, suco de laranja e coco.",
            longDescription: "Uma mistura surpreendente de sabores: a acidez suave da laranja com o toque adocicado do coco. A cobertura feita com leite condensado e suco natural traz uma umidade deliciosa e uma explosão de frescor em cada pedaço.",
            price: "41,50",
            image: "https://i.imgur.com/6t2xfQR.jpeg",
            hashtags: ["#BoloDeLaranja", "#BoloComCoco", "#BoloRefrescante", "#BoloCaseiro", "#BoloDeMesa", "#SaborDoVerão"]
        },
        {
            name: "Bolo de Limão com Cobertura Cremosa",
            shortDescription: "Massa suave com cobertura cremosa tipo mousse de limão, leve e refrescante.",
            longDescription: "Bolo macio e delicado com leve toque cítrico, finalizado com uma cobertura de mousse de limão aerado e cremoso. Um equilíbrio perfeito entre o doce e o ácido, ideal para quem busca uma sobremesa leve e elegante.",
            price: "54,50",
            image: "https://i.imgur.com/bxR8vdh.jpeg",
            hashtags: ["#BoloDeLimão", "#BoloCítrico", "#BoloCremoso", "#MousseDeLimão", "#BoloDeCafé", "#BoloDeMesa"]
        }
    ],
    "Bebidas": [
        {
            name: "Coca-Cola 350ml",
            shortDescription: "Refrigerante Coca-Cola lata.",
            longDescription: "A clássica Coca-Cola em lata de 350ml para acompanhar seu doce favorito.",
            price: "7,00",
            image: "https://prezunic.vtexassets.com/arquivos/ids/210693/66db573a62edc14e790f8550.jpg?v=638612475473130000",
            hashtags: ["#cocacola", "#refrigerante", "#bebida", "#classico"]
        },
        {
            name: "Coca-Cola Zero 350ml",
            shortDescription: "Refrigerante Coca-Cola Zero lata.",
            longDescription: "A Coca-Cola Zero em lata de 350ml, perfeita para quem busca sabor sem açúcar.",
            price: "7,00",
            image: "https://brf.file.force.com/servlet/servlet.ImageServer?id=015U600000027LZ&oid=00D410000012TJa&lastMod=1703778994000",
            hashtags: ["#cocacolazero", "#zeroacucar", "#refrigerante"]
        },
        {
            name: "H2O Limão 500ml",
            shortDescription: "Bebida leve de limão.",
            longDescription: "H2O sabor Limão em garrafa de 500ml, uma opção leve e refrescante.",
            price: "6,50",
            image: "https://i.imgur.com/BY9RJEA.jpeg",
            hashtags: ["#h2o", "#limao", "#refrescante", "#bebida"]
        },
        {
            name: "Água Mineral Sem Gás Crystal 500ml",
            shortDescription: "Água mineral natural.",
            longDescription: "Água mineral natural Crystal, 500ml, para hidratar-se a qualquer momento.",
            price: "4,00",
            image: "https://cdn.awsli.com.br/600x450/1091/1091529/produto/177789314/811d554784.jpg",
            hashtags: ["#agua", "#hidratacao", "#crystal"]
        },
        {
            name: "Água Crystal com Gás 500ml",
            shortDescription: "Água mineral com gás.",
            longDescription: "Água mineral Crystal com gás, 500ml, uma opção refrescante e borbulhante.",
            price: "4,50",
            image: "https://cdn.awsli.com.br/446/446822/produto/231082412/shopping---2023-08-28t130631-737-ejrppqure1.jpg",
            hashtags: ["#agua", "#comgas", "#crystal", "#refrescante"]
        }
    ]
};

// --- Mapeamento de Imagens para Categorias ---
const categoryImages = {
    "Copos da Felicidade": "https://i.imgur.com/Bpjve8g.png",
    "Delícias Individuais": "https://i.imgur.com/NiIT5Y4.png",
    "Travessas da Felicidade": "https://i.imgur.com/Lr84JcE.png",
    "Mini Bolos": "https://i.imgur.com/DVe1XhQ.png",
    "Bolos de Mesa": "https://i.imgur.com/t9vfMGB.png", // Imagem de capa para a nova categoria
    "Bebidas": "https://i.imgur.com/YnxNMsG.png",
};

let currentCategory = '';

function manageContentScreens(activeScreenId) {
    const screens = ['categories', 'products', 'product-detail-screen'];
    screens.forEach(id => {
        const screenElement = document.getElementById(id);
        if (screenElement) {
            screenElement.style.display = (id === activeScreenId) ? 'block' : 'none';
        }
    });

    const productsBackButton = document.querySelector('#products .back-button');
    const detailBackButton = document.querySelector('#product-detail-screen .back-button');

    if (activeScreenId === 'categories') {
        if (productsBackButton) productsBackButton.style.display = 'none';
        if (detailBackButton) detailBackButton.style.display = 'none';
    } else if (activeScreenId === 'products') {
        if (productsBackButton) productsBackButton.style.display = 'block';
        if (detailBackButton) detailBackButton.style.display = 'none';
    } else if (activeScreenId === 'product-detail-screen') {
        if (productsBackButton) productsBackButton.style.display = 'none';
        if (detailBackButton) detailBackButton.style.display = 'block';
    }
}

function loadCategories() {
    const categoryGrid = document.getElementById('category-grid');
    categoryGrid.innerHTML = '';

    for (const categoryName in menuData) {
        const categoryCard = document.createElement('div');
        categoryCard.classList.add('category-card');
        categoryCard.style.backgroundImage = `url('${categoryImages[categoryName] || 'https://via.placeholder.com/300x225?text=Sem+Imagem'}')`;

        categoryCard.innerHTML = `
            <h3>${categoryName}</h3>
            <button class="btn btn-primary" onclick="showProducts('${categoryName}')">Ver Mais</button>
        `;
        categoryGrid.appendChild(categoryCard);
    }
    manageContentScreens('categories');
}

function showProducts(category) {
    currentCategory = category;
    document.getElementById('products-category-title').textContent = category;
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = '';

    const products = menuData[category];
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.onclick = () => showProductDetail(category, product.name);

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.shortDescription}</p>
            <span class="product-price">R$ ${product.price}</span>
        `;
        productListDiv.appendChild(productCard);
    });
    manageContentScreens('products');
}

function showProductDetail(category, productName) {
    const product = menuData[category].find(p => p.name === productName);
    if (!product) return;

    const productDetailDiv = document.getElementById('product-detail');
    productDetailDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="description">${product.longDescription}</p>
        <p class="price">R$ ${product.price}</p>
        <div class="hashtags">
            ${product.hashtags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
    `;
    manageContentScreens('product-detail-screen');
}

function showProductsScreenFromDetail() {
    if (currentCategory) {
        showProducts(currentCategory);
    } else {
        loadCategories();
    }
}

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-list').classList.remove('active');
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .hero-content').forEach(element => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('about').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('hero').style.display = 'block';

    loadCategories();
});