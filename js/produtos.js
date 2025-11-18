const produtos = [
    {id:1,nome:"Growth Whey Protein Concentrado",categoria:"whey",preco:129.90,img:"https://www.gsuplementos.com.br/upload/produto/imagem/dose-whey-protein-concentrado-30gr-growth-supplements-6.webp",descricao:"Whey protein concentrado para ganho de massa muscular."},
    {id:2,nome:"Max Titanium Whey 100%",categoria:"whey",preco:139.50,img:"https://lojamaxtitanium.vtexassets.com/arquivos/ids/158984/100_-Pure-Whey---Pistache-com-Chocolate-Branco--002-.png?v=638863072041670000",descricao:"Proteína de alta qualidade para resultados rápidos."},
    {id:3,nome:"Integralmedica Super Whey",categoria:"whey",preco:119.00,img:"https://images.tcdn.com.br/img/img_prod/698210/super_whey_100_pure_refil_907g_integralmedica_1081_1_20190527120628.png",descricao:"Whey para recuperação e crescimento muscular."},
    {id:4,nome:"Optimum Nutrition Gold Standard Whey",categoria:"whey",preco:189.90,img:"https://acdn-us.mitiendanube.com/stores/001/354/536/products/hrtgsbver1-e065532776fce1a23116795133255652-640-0.webp",descricao:"O whey mais premiado do mundo."},
    {id:5,nome:"Dux Nutrition Whey Concentrado",categoria:"whey",preco:122.99,img:"https://paguemenos.vtexassets.com/arquivos/ids/822675/whey-protein-concentrado-sabor-chocolate-pote-450g-principal.png?v=638457631526930000",descricao:"Proteína concentrada para desempenho superior."},
    {id:6,nome:"Darkness Ultra Whey",categoria:"whey",preco:115.00,img:"https://img.irroba.com.br/filters:fill(transparent):quality(80)/msksuple/catalog/suplementos-alimentares/darkness/darkness-carnibol-proteina-ultra-concentrada-da-carne-bovina-900g-baunilha.png",descricao:"Whey forte e intenso para atletas."},
    {id:7,nome:"Probiótica 100% Pure Whey",categoria:"whey",preco:129.00,img:"https://www.bhlfitness.com.br/wp-content/uploads/100-Pure-Whey-900g-baunilha-ptobiotica.png",descricao:"Whey puro com excelente custo benefício."},
    {id:8,nome:"Atlhetica Best Whey",categoria:"whey",preco:117.99,img:"https://tfbrnp.vtexassets.com/arquivos/ids/164730/0-BEST-WHEY-ORIGINAL-900G.png?v=638627827139400000",descricao:"Blend de proteínas saboroso e funcional."},
    {id:9,nome:"Black Skull Whey 3W",categoria:"whey",preco:134.90,img:"https://blackskullusa.vtexassets.com/arquivos/ids/157252/119_07010132-NA-4_01.png?v=638833406254630000",descricao:"Mistura 3W: isolado, hidrolisado e concentrado."},
    {id:10,nome:"Universal Whey Pro",categoria:"whey",preco:149.00,img:"https://www.bbassets.com/media/uploads/p/xl/40269830_1-universal-nutrition-ultra-whey-pro-protein-powder-chocolate-ice-cream-provides-energy.jpg",descricao:"Whey importado para máxima performance."},

    {id:11,nome:"Creatina Monohidratada Growth",categoria:"creatina",preco:89.90,img:"https://www.gsuplementos.com.br/upload/produto/layout/72/produto1-mono-250-v4.webp",descricao:"Creatina monohidratada para força e explosão."},
    {id:12,nome:"Creatine Universal Nutrition",categoria:"creatina",preco:109.00,img:"https://crnutrition.com.br/wp-content/uploads/2023/01/Creatina-300g.png",descricao:"Creatina importada com alta pureza."},
    {id:13,nome:"Dux Creatine",categoria:"creatina",preco:92.50,img:"https://images.tcdn.com.br/img/img_prod/1282785/creatina_monohidratada_300g_dux_nutrition_61_1_91a440ed89a470042504f6316dd3b1c3.png",descricao:"Creatina micronizada rápida absorção."},
    {id:14,nome:"Integralmedica Creatine Hardcore",categoria:"creatina",preco:95.70,img:"https://brupharma.com.br/wp-content/uploads/2024/09/creatina-IM-300g.png",descricao:"Creatina para treinos pesados."},
    {id:15,nome:"Max Titanium Creatine",categoria:"creatina",preco:97.00,img:"https://lojamaxtitanium.vtexassets.com/arquivos/ids/157977/Creatina-Creapure-250g.png?v=638470625756800000",descricao:"Creatina 100% pura."},
    {id:16,nome:"Integralmédica Creatina Creapure",categoria:"creatina",preco:129.99,img:"https://images.tcdn.com.br/img/img_prod/920697/creatina_hardcore_300g_integralmedica_177_1_152c4849ff021504fe5b8fe66dc76ff8.png",descricao:"Creatina alemã Creapure."},
    {id:17,nome:"Black Skull Creatine Turbo",categoria:"creatina",preco:105.00,img:"https://d3mhu901409m9r.cloudfront.net/Custom/Content/Products/65/55/65557_creatine-turbo-blackskull-stand-up-pouch-sem-sabor-300-g-p615907_l1_638530886110604789.webp",descricao:"Creatina com maior solubilidade."},
    {id:18,nome:"Optimum Nutrition Micronized Creatine",categoria:"creatina",preco:139.00,img:"https://www.optimumnutrition.com/cdn/shop/files/on-1160419_Image_01.png?v=1762178899&width=1000",descricao:"Creatina premium micronizada."},
    {id:19,nome:"Probiótica Creatina",categoria:"creatina",preco:98.60,img:"https://dy9wbek4ml5tx.cloudfront.net/Custom/Content/Products/20/40/2040_crea-pura-monohidratada-300g-probiotica-625_z1_637991964089049633.webp",descricao:"Creatina com ótima absorção."},
    {id:20,nome:"Soldiers Nutrition Creatina",categoria:"creatina",preco:89.00,img:"https://cdn.awsli.com.br/2465/2465782/produto/251631774/a922067d-e268-4bbc-b0d1-8209d585219b-8undzy9xpr.png",descricao:"Creatina para força máxima."},

    {id:21,nome:"C4 Original Cellucor",categoria:"pretreino",preco:149.00,img:"https://www.bodyenergyclub.com/cdn/shop/files/Canada-C4-Original-FJR30_Front_Image_Hires.png?v=1760189816",descricao:"Pré-treino mais famoso do mundo."},
    {id:22,nome:"Hórus Pré-Treino Atlhetica",categoria:"pretreino",preco:129.90,img:"https://lojamaxtitanium.vtexassets.com/arquivos/ids/155851/Horus_FrutasVermelhas_300g.png?v=638794602000200000",descricao:"Energia e foco extremo."},
    {id:23,nome:"Psychotic Insane Labz",categoria:"pretreino",preco:179.99,img:"https://www.vitaminasbrasil.com/upload/produto/imagem/b_cc3a98aa99621141567a3d287021506d.webp",descricao:"Pré-treino insano para atletas avançados."},
    {id:24,nome:"Beta Pump Darkness",categoria:"pretreino",preco:110.70,img:"https://darkness.vtexassets.com/assets/vtex.file-manager-graphql/images/1c93b991-ca76-42da-bd0b-78f40ffa7dc5___0b293342acfef443ce623bedff896914.png",descricao:"Pump máximo e força bruta."},
    {id:25,nome:"Venom Pré-Treino",categoria:"pretreino",preco:98.50,img:"https://darklabsuplementos.com.br/cdn/shop/files/04_7.png?v=1753101552&width=1946",descricao:"Explosão e foco durante o treino."},
    {id:26,nome:"Max Titanium Pré Workout",categoria:"pretreino",preco:119.90,img:"https://lojamaxtitanium.vtexassets.com/arquivos/ids/157998/Egide-Ramon-Dino---Abacaxi-com-Hortela---300g.png?v=638484412281200000",descricao:"Mais energia e disposição."},
    {id:27,nome:"Dux Pré-Treino",categoria:"pretreino",preco:112.00,img:"https://paguemenos.vtexassets.com/arquivos/ids/825106/pre-workout-dux-original-sabor-frutas-vermelhas-300g-principal.png?v=638465331434000000",descricao:"Blend equilibrado para performance."},
    {id:28,nome:"Black Skull Bone Crusher",categoria:"pretreino",preco:129.00,img:"https://muffatosupermercados.vtexassets.com/arquivos/ids/407438/7898708733992.png?v=638839760616100000",descricao:"Pré-treino clássico e potente."},
    {id:29,nome:"Integralmedica Pré-Treino",categoria:"pretreino",preco:103.99,img:"https://www.madrugaosuplementos.com.br/wp-content/uploads/2025/07/15348235604-e78a7379a90b6c3c97b972fafee6593d.png",descricao:"Foco e resistência."},
    {id:30,nome:"Probiótica Pre Workout",categoria:"pretreino",preco:95.00,img:"https://supleylab.vtexassets.com/arquivos/ids/156878/BetaPro-LaranjaLimao--2-.png?v=637898015641830000p",descricao:"Pré-treino acessível e eficiente."},

    {id:31,nome:"BCAA 2400 Black Skull",categoria:"bcaa",preco:65.00,img:"https://blackskullusa.vtexassets.com/arquivos/ids/160367/bcaa-4.1.1-_Limao-280g.png.png?v=638842227395600000",descricao:"BCAA para recuperação muscular."},
    {id:32,nome:"Dux BCAA Powder",categoria:"bcaa",preco:75.40,img:"https://cdn.awsli.com.br/300x300/2384/2384218/produto/336667790/produtos--17--colux5mf9e.png",descricao:"BCAA em pó de rápida absorção."},
    {id:33,nome:"Integralmedica BCAA 2:1:1",categoria:"bcaa",preco:82.00,img:"https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/informasuplementos/media/uploads/produtos/foto/mdwpqkav/file.png",descricao:"Aminoácidos essenciais para hipertrofia."},
    {id:34,nome:"Max Titanium BCAA 2400",categoria:"bcaa",preco:69.50,img:"https://cdn.dooca.store/2383/products/n5x0021vwwumbcyvxdy2ajq42tttpppl2a0m.png?v=1641916944&webp=0",descricao:"BCAA de boa qualidade."},
    {id:35,nome:"Universal BCAA Stack",categoria:"bcaa",preco:97.00,img:"https://crnutrition.com.br/wp-content/uploads/2023/01/BCAA-Lima-Limao-Universal-Nutrition-300x300.png",descricao:"BCAA importado premium."},
    {id:36,nome:"Probiótica BCAA Fix",categoria:"bcaa",preco:72.80,img:"https://lojanutrifit.com.br/wp-content/uploads/2020/04/bcaa-2400-120-tabletes.png",descricao:"Recuperação mais rápida."},
    {id:37,nome:"Growth BCAA 2:1:1",categoria:"bcaa",preco:63.90,img:"https://www.gsuplementos.com.br/upload/produto/layout/16/mockup-v2.webp",descricao:"BCAA puro 2:1:1."},
    {id:38,nome:"Atlhetica BCAA",categoria:"bcaa",preco:62.50,img:"https://tfbrnp.vtexassets.com/arquivos/ids/163790/BCAA-2-1-1-120-CAPS.png?v=638374579437700000",descricao:"BCAA para treinos diários."},
    {id:39,nome:"Red Iron BCAA",categoria:"bcaa",preco:70.00,img:"https://gainsx.in/wp-content/uploads/2023/07/bcaa22another1-600x600.webp",descricao:"BCAA para recuperação pós-treino."},
    {id:40,nome:"Soldiers BCAA",categoria:"bcaa",preco:59.90,img:"https://cdn.awsli.com.br/2500x2500/2465/2465782/produto/245990617/design-sem-nome-21-kuxz5kjlec.png",descricao:"Aminoácidos essenciais para força."},

    {id:41,nome:"Glutamina Integralmédica",categoria:"glutamina",preco:89.00,img:"https://dmvfarma.vtexassets.com/arquivos/ids/299748/d9cdaa87-33ae-47ef-9d43-1cbd230e0192.jpg?v=638974317115370000",descricao:"Glutamina para sistema imune."},
    {id:42,nome:"Growth Glutamina",categoria:"glutamina",preco:79.90,img:"https://img.irroba.com.br/fit-in/250x250/filters:fill(transparent):quality(80)/msksuple/catalog/suplementos-alimentares/black-skull/black-skull-thermo-flame-360mg-60caps.png",descricao:"Glutamina pura para recuperação."},
    {id:43,nome:"Max Titanium Glutamina",categoria:"glutamina",preco:88.40,img:"https://io.convertiez.com.br/m/drogaven/shop/products/images/3916/large/l-g-glutamina-max-titanium-300g_8348.png",descricao:"Ajuda na imunidade e músculos."},
    {id:44,nome:"Dux Glutamina",categoria:"glutamina",preco:75.00,img:"https://drogariaiguatemi.com.br/pub/media/catalog/product/cache/225de1d9d5f144318e65b3b08dd3b8e1/7/8/7898641070970_1.png",descricao:"Glutamina premium para atletas."},
    {id:45,nome:"Probiótica Glutamina",categoria:"glutamina",preco:72.90,img:"https://superrissul.vtexassets.com/arquivos/ids/942248/Suplemento-Alimentar-Probitica-Glutamina-Pote-120g.png?v=638972484753430000",descricao:"Glutamina para treinos intensos."},
    {id:46,nome:"Vitafor Glutamax",categoria:"glutamina",preco:99.99,img:"https://images.tcdn.com.br/img/img_prod/1080788/glutamax_300g_vitafor_373_1_c083ab8d0c1bd136fb5a060f906a2e41.png",descricao:"Glutamina de alta pureza."},
    {id:47,nome:"Essential Nutrition Glutamine",categoria:"glutamina",preco:139.90,img:"https://viverbemnutricao.com.br/wp-content/uploads/2022/04/glutamina-lata-rgb.png",descricao:"Glutamina importada premium."},
    {id:48,nome:"Black Skull Glutamine Turbo",categoria:"glutamina",preco:92.50,img:"https://www.vitaminasbrasil.com/upload/produto/imagem/6d2e520be224abd7c446396a62eb8fb0.webp",descricao:"Ação rápida e eficiente."},
    {id:49,nome:"Atlhetica Glutamine",categoria:"glutamina",preco:78.00,img:"https://tfbrnp.vtexassets.com/arquivos/ids/163724/GLUTAMINE-MICRONIZED-300G.png?v=638373931916430000",descricao:"Ajuda na recuperação muscular."},
    {id:50,nome:"Probiotica Glutamine Powder",categoria:"glutamina",preco:74.99,img:"https://static.wixstatic.com/media/41abae_cebc7cd3d0a54528b42333365cd745ef~mv2.png/v1/fit/w_500,h_500,q_90/file.png",descricao:"Glutamina pura em pó."},

    {id:51,nome:"Kimera Thermogenic",categoria:"termogenico",preco:89.99,img:"https://cdn.awsli.com.br/400x400/2503/2503151/produto/275759869/kimera-thermo-60-comps-c9025ce6-rjbi92isy1.png",descricao:"Termogênico potente para cutting."},
    {id:52,nome:"Thermo Abdomen Black Skull",categoria:"termogenico",preco:79.90,img:"https://img.irroba.com.br/fit-in/250x250/filters:fill(transparent):quality(80)/msksuple/catalog/suplementos-alimentares/black-skull/black-skull-thermo-flame-360mg-60caps.png",descricao:"Auxilia na definição abdominal."},
    {id:53,nome:"Darkness Thermo Flame",categoria:"termogenico",preco:99.70,img:"https://img.irroba.com.br/filters:fill(transparent):quality(80)/msksuple/catalog/suplementos-alimentares/darkness/darkness-oxydrol-120caps.png",descricao:"Acelera o metabolismo."},
    {id:54,nome:"Max Titanium Termo",categoria:"termogenico",preco:72.90,img:"https://lojanutrifit.com.br/wp-content/uploads/2020/02/2-hot-200g-max-titanium.png",descricao:"Termogênico para foco e energia."},
    {id:55,nome:"Integralmedica Thermo Hardcore",categoria:"termogenico",preco:83.50,img:"https://cdn.awsli.com.br/800x800/2498/2498910/produto/185761818/therma-pro-hardcore-90-capsulas-integralmedica-abf7b951.png",descricao:"Ideal para definição."},
    {id:56,nome:"Dux Thermogenic",categoria:"termogenico",preco:76.40,img:"https://cdn.awsli.com.br/2500x2500/968/968066/produto/58315173/supercut-dux-ctqgya86x4.png",descricao:"Termogênico premium."},
    {id:57,nome:"Probiotica Thermo Cuts",categoria:"termogenico",preco:69.90,img:"https://quamtrax.com/cdn/shop/files/thermo-cuts-815824.png?v=1747072754",descricao:"Energia e foco prolongados."},
    {id:58,nome:"Players Thermogenic",categoria:"termogenico",preco:62.50,img:"https://cdn.awsli.com.br/800x800/869/869420/produto/214385200/probiotica2016-pro-thermogenic-120caps_1_-cck6nhl79e.png",descricao:"Perda de gordura e energia."},
    {id:59,nome:"X6 Thermo",categoria:"termogenico",preco:88.00,img:"https://acdn-us.mitiendanube.com/stores/583/512/products/x6the-fc345e1f6a99c65bf317274476157901-1024-1024.webp",descricao:"Termogênico avançado."},
    {id:60,nome:"BodyAction Thermo Shape",categoria:"termogenico",preco:75.90,img:"https://img.irroba.com.br/fit-in/250x250/filters:fill(transparent):quality(80)/msksuple/catalog/suplementos-alimentares/body-action/bodyaction-thermo-abdomen-termogenico-60caps.png",descricao:"Queima de gordura rápida."},

    {id:61,nome:"Centrum",categoria:"multivitaminas",preco:45.00,img:"https://dmvfarma.vtexassets.com/arquivos/ids/298613/83ba6c00-f36b-4482-9c27-ee4c933a98ce.jpg?v=638974220953370000",descricao:"Multivitamínico completo."},
    {id:62,nome:"Lavitan A-Z",categoria:"multivitaminas",preco:39.90,img:"https://dmvfarma.vtexassets.com/arquivos/ids/292350/c8a8c114-77f1-458e-9562-3a026d9c9430.jpg?v=638969266548230000",descricao:"Vitaminas essenciais."},
    {id:63,nome:"Vitafor Multi-Vit",categoria:"multivitaminas",preco:55.90,img:"https://cdn.awsli.com.br/800x800/2455/2455876/produto/303779923/mega-8_0000_610735-800-auto_70cc0753-5dcd-4a57-b6db-cce0e85fad30_800x-hu0fhzuxug.png",descricao:"Vitaminas premium."},
    {id:64,nome:"Dux Multivitamínico",categoria:"multivitaminas",preco:52.00,img:"https://d1fcuu5do6alz2.cloudfront.net/Custom/Content/Products/99/64/996448_multivitaminico-dux-nutrition-12720_m1_637552896144721081.webp",descricao:"Completo para saúde."},
    {id:65,nome:"Growth Multivitamínico",categoria:"multivitaminas",preco:49.90,img:"https://www.gsuplementos.com.br/upload/produto/layout/107/produto-principal-v3.webp",descricao:"Fórmula completa."},
    {id:66,nome:"Max Titanium Multi",categoria:"multivitaminas",preco:57.99,img:"https://www.madrugaosuplementos.com.br/wp-content/uploads/2025/07/15349105563-946cbb713c69efdd76b559f043145527.png",descricao:"25 vitaminas essenciais."},
    {id:67,nome:"Essential Nutrition Daily One",categoria:"multivitaminas",preco:89.90,img:"https://acdn-us.mitiendanube.com/stores/001/021/802/products/multivitaminico-f813740af323a6a03417346100507369-480-0.webp",descricao:"Multivitamínico importado."},
    {id:68,nome:"Equaliv A-Z",categoria:"multivitaminas",preco:72.30,img:"https://cdn.awsli.com.br/600x450/2690/2690192/produto/247877241/image-removebg-preview---2024-01-12t103736-026-rqvsokagez.png",descricao:"Vitaminas de alta qualidade."},
    {id:69,nome:"Black Skull Vitamin Pack",categoria:"multivitaminas",preco:78.90,img:"https://blackskullusa.vtexassets.com/arquivos/ids/160359/120tabletes-01.png.png?v=638839509710600000",descricao:"Vitaminas para atletas."},
    {id:70,nome:"Optimum Nutrition Opti-Men",categoria:"multivitaminas",preco:129.50,img:"https://www.vitaminasbrasil.com/upload/produto/imagem/b_d980e8701862b46b3f0893af566479c4.webp",descricao:"Multivitamínico importado de alta qualidade."},

    {id:71,nome:"Vitamina C Growth",categoria:"antioxidantes",preco:24.90,img:"https://www.gsuplementos.com.br/upload/produto/layout/1439/vitamina-c-1000mg-growth-supplements-v2.webp",descricao:"Vitamina C para imunidade."},
    {id:72,nome:"Dux Vitamin C",categoria:"antioxidantes",preco:22.90,img:"https://images.tcdn.com.br/img/img_prod/996597/90_vitamina_c_quali_c_dux_7059_1_f8e08e37b11631d87b8b7b531fce661f.png",descricao:"Vitamina C pura."},
    {id:73,nome:"Essential Nutrition Immunité",categoria:"antioxidantes",preco:49.90,img:"https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/immuno-golden/mobile/immuno-golden.png",descricao:"Blend antioxidante."},
    {id:74,nome:"Equaliv Vitamina E",categoria:"antioxidantes",preco:35.90,img:"https://equaliv.vtexassets.com/arquivos/ids/159596-800-800?v=638846339903530000&width=800&height=800&aspect=true",descricao:"Vitamina E para saúde."},
    {id:75,nome:"Integralmedica Vitamin C",categoria:"antioxidantes",preco:28.90,img:"https://images.tcdn.com.br/img/img_prod/996597/vitamina_c_60_caps_integralmedica_9291_1_4da88723c1e98f2364007b76e5359577.png",descricao:"Vitamina C essencial."},

    {id:76,nome:"Bold Bar",categoria:"snacks",preco:7.50,img:"https://www.boldsnacks.com.br/cdn/shop/files/bold-brownie-crispies.png?v=1757955526&width=750",descricao:"Barra proteica prática."},
    {id:77,nome:"Max Titanium Protein Crisp",categoria:"snacks",preco:8.90,img:"https://lojamaxtitanium.vtexassets.com/arquivos/ids/157964/PowerProteinCrisp-44g-Cookies.png?v=638794615797270000",descricao:"Crocante e proteica."},
    {id:78,nome:"Dux Protein Bar",categoria:"snacks",preco:9.50,img:"https://images.tcdn.com.br/img/img_prod/1176430/barra_dux_protein_bar_60g_choc_branco_e_frutas_vermelhas_23185_1_1afcc5836767b8e18f396a738bb77440.png",descricao:"Barra saborosa e nutritiva."},
    {id:79,nome:"Integralmedica Bar",categoria:"snacks",preco:7.80,img:"https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/gsn/media/uploads/produtos/foto/snmiqtku/proteincrispcookies.png",descricao:"Barra proteica ideal para o dia."},
    {id:80,nome:"Barra Whey Grego",categoria:"snacks",preco:8.49,img:"https://images.tcdn.com.br/img/img_prod/1305881/nutrata_whey_grego_havanna_40g_display_c_12_barras_brownie_de_chocolate_565_2_aae534721369c520fae45aae4bf58dc3.png",descricao:"Sabor grego proteico."},
    {id:81,nome:"Doces Fit Power One",categoria:"snacks",preco:6.90,img:"https://www.emporioamazonervas.com.br/wp-content/uploads/2022/12/Pacoca-Zero-Acucar-1-unidade-de-18g-Power-One.png",descricao:"Doces fitness ricos em proteínas."},
    {id:82,nome:"Combo Cookies Proteicos",categoria:"snacks",preco:9.99,img:"https://cdn.awsli.com.br/600x450/650/650873/produto/313626074/5ee7cd1c182ab2aa413741efd91113f1-1y003m0e5h.jpg",descricao:"Cookies proteicos deliciosos."},
    {id:83,nome:"Bendita Snacks Proteicos",categoria:"snacks",preco:6.90,img:"https://images.tcdn.com.br/img/img_prod/1303953/equaliv_barra_body_protein_chocolate_40g_153_1_4c6628c20a97e4be871dc56356d17ce2.png",descricao:"Snacks leves e proteicos."},
    {id:84,nome:"Nutry Protein Bar",categoria:"snacks",preco:5.90,img:"https://nutry.com.br/wp-content/uploads/2024/09/7891331850388-1000x1000-1.png",descricao:"Barra proteica econômica."},
    {id:85,nome:"Whey Bar Black Skull",categoria:"snacks",preco:8.50,img:"https://dmvfarma.vtexassets.com/arquivos/ids/299756/d52132bc-816b-4d07-b492-3e81d33b2ea4.jpg?v=638974317265400000",descricao:"Barra proteica forte."},

    {id:86,nome:"Ômega 3 Vitafor",categoria:"omega",preco:49.90,img:"https://drogariasp.vteximg.com.br/arquivos/ids/1154727-1000-1000/869228---Omega-3-Vitafor-Omegafor-Plus-60-Capsulas_0000_0.png?v=638621918494400000",descricao:"Ômega 3 de alta pureza."},
    {id:87,nome:"Growth Ômega 3",categoria:"omega",preco:39.90,img:"https://www.gsuplementos.com.br/upload/produto/layout/1396/dha-oleo-peixe-60caps-growth-supplements-v2.webp",descricao:"Ômega para saúde cardiovascular."},
    {id:88,nome:"Essential Nutrition Super Ômega 3",categoria:"omega",preco:79.90,img:"https://essentialnutrition-upload-files.s3.us-east-1.amazonaws.com/site-nutrition/produtos/dha-tg/DHA_TG_pote_180_capsulas.png",descricao:"Ômega importado premium."},
    {id:89,nome:"Dux Ômega",categoria:"omega",preco:44.90,img:"https://img.irroba.com.br/filters:fill(transparent):quality(80)/msksuple/catalog/suplementos-alimentares/dux-nutrition-lab/dux-nutrition-lab-fish-oil-omega-epa-660mg-dha-440mg-120caps.png",descricao:"Ômega purificado."},
    {id:90,nome:"Equaliv Ômega 3 Ultra",categoria:"omega",preco:59.90,img:"https://drogariasp.vteximg.com.br/arquivos/ids/1154685-1000-1000/868787---Suplemento-Alimentar-Omega-3-Equaliv-Ultra-60-Capsulas-Gel_0000_Layer-1.png?v=638621905197770000",descricao:"Ômega 3 de alta qualidade."},

    {id:91,nome:"Mass 17500 Integralmedica",categoria:"hipercaloricos",preco:119.90,img:"https://drogal.vtexassets.com/arquivos/ids/193875/58226.png?v=638394705098830000",descricao:"Hipercalórico para ganho de peso."},
    {id:92,nome:"Hipercalórico Growth",categoria:"hipercaloricos",preco:109.90,img:"https://www.gsuplementos.com.br/upload/produto/layout/82/mockup-v3.webp",descricao:"Hipercalórico para energia."},
    {id:93,nome:"Max Titanium Hipercalórico",categoria:"hipercaloricos",preco:124.90,img:"https://drogal.vtexassets.com/arquivos/ids/193865-800-auto?v=638394699968300000&width=800&height=auto&aspect=true",descricao:"Hipercalórico potente."},
    {id:94,nome:"Black Skull Caveira Mass",categoria:"hipercaloricos",preco:139.90,img:"https://acdn-us.mitiendanube.com/stores/003/080/023/products/157209-800-auto1-c8f1a61c10fb06de4c16838380961918-480-0.png",descricao:"Máximo ganho de massa."},
    {id:95,nome:"Probiotica Mass Gain",categoria:"hipercaloricos",preco:115.90,img:"https://acdn-us.mitiendanube.com/stores/002/078/630/products/massa-nitro-probi_tica1-aae048b4f491dfecea16521120587891-480-0.png",descricao:"Hipercalórico forte."},

    {id:96,nome:"Essential Nutrition Vegan Protein",categoria:"veganos",preco:149.90,img:"https://redeciadasaude.cdn.magazord.com.br/img/2025/03/produto/2892/2o3rtytn-removebg-preview.png?ims=600x600",descricao:"Proteína vegana premium."},
    {id:97,nome:"Dux Vegan",categoria:"veganos",preco:119.99,img:"https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/MP309454/3afae784-2844-4820-8bb5-add050323b61-dux-human-health-fresh-vegan-cacau-suplemento-alimentar-em-po-520g.png",descricao:"Blend vegano completo."},
    {id:98,nome:"Growth Vegan",categoria:"veganos",preco:109.50,img:"https://www.gsuplementos.com.br/upload/produto/layout/29/blendvegan-1kg-growth-supplements-v3.webp",descricao:"Proteína vegetal pura."},
    {id:99,nome:"Nutrify Plant Protein",categoria:"veganos",preco:129.40,img:"https://nutrifysaude.vtexassets.com/arquivos/ids/158159/FOTO_VEGANPRO_CACAU_450_DESK.png?v=638507781064130000",descricao:"Proteína vegetal de alta pureza."},
    {id:100,nome:"Sunwarrior Warrior Blend",categoria:"veganos",preco:149.70,img:"https://sunwarrior.com/cdn/shop/files/USA-WarriorBlend4-750g-Unf-ThreeQuarter-Opt_a3c6c493-82c7-4d1c-82e1-a24ea3ff59a1.png?v=1694474922",descricao:"Proteína vegana importada."}
];

// -------------------------------------
// RENDERIZAR PRODUTOS
// -------------------------------------
function renderizarProdutos(lista) {
    const area = document.getElementById("listaProdutos");
    if (!area) return;

    area.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = "card-brutal";

        card.innerHTML = `
            <div class="card-img">
                <img src="${p.img}" alt="${escapeHtml(p.nome)}" loading="lazy">
            </div>

            <div class="card-nome">${escapeHtml(p.nome)}</div>
            <div class="card-preco">R$ ${p.preco.toFixed(2)}</div>

            <button class="btn-add-brutal" data-id="${p.id}">
                Adicionar ao Carrinho
            </button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            adicionarAoCarrinho(p.id);
        });

        area.appendChild(card);
    });
}



// -------------------------------------
// FILTROS (AGORA FUNCIONANDO)
// -------------------------------------
function aplicarFiltros() {

    const busca = document.getElementById("buscar").value.toLowerCase();
    const categoria = document.getElementById("filtro-categoria").value;
    const ordenar = document.getElementById("ordenar").value;

    let lista = [...produtos];

    // BUSCA
    if (busca.trim() !== "") {
        lista = lista.filter(p =>
            p.nome.toLowerCase().includes(busca)
        );
    }

    // CATEGORIA
    if (categoria !== "todos") {
        lista = lista.filter(p => p.categoria === categoria);
    }

    // ORDENAR
    switch (ordenar) {
        case "menor":
            lista.sort((a, b) => a.preco - b.preco);
            break;
        case "maior":
            lista.sort((a, b) => b.preco - a.preco);
            break;
        case "az":
            lista.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case "za":
            lista.sort((a, b) => b.nome.localeCompare(a.nome));
            break;
    }

    renderizarProdutos(lista);
}



// -------------------------------------
// EVENTOS
// -------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtos);
});

document.getElementById("buscar")?.addEventListener("input", aplicarFiltros);
document.getElementById("filtro-categoria")?.addEventListener("change", aplicarFiltros);
document.getElementById("ordenar")?.addEventListener("change", aplicarFiltros);



// -------------------------------------
// UTILIDADES
// -------------------------------------
function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}



// -------------------------------------
// CARRINHO (mínimo)
// -------------------------------------
function adicionarAoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(id);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado!");
}