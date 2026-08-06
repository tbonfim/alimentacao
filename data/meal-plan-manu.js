window.MEAL_PLAN = {
  "defaultDay": "treino",
  "infoStats": [
    {
      "lbl": "Musculação",
      "val": "3× por semana",
      "valSub": "Dias flexíveis"
    },
    {
      "lbl": "Cardio",
      "val": "2× por semana",
      "valSub": "Dias flexíveis"
    },
    {
      "lbl": "Protocolo intestinal",
      "val": "Low-FODMAP",
      "valSub": "SII + intolerância à lactose"
    }
  ],
  "tabs": [
    {
      "id": "treino",
      "icon": "🏋️",
      "label": "TREINO",
      "type": "Musculação ou Cardio"
    },
    {
      "id": "descanso",
      "icon": "😴",
      "label": "DESCANSO",
      "type": "Recuperação"
    }
  ],
  "days": {
    "treino": {
      "id": "treino",
      "header": {
        "theme": "bg-academia",
        "icon": "🏋️",
        "title": "Dia de Treino — Musculação ou Cardio",
        "subtitle": "Mais carboidrato, proteína reforçada pós-treino. Não pule nenhuma refeição."
      },
      "timeline": {
        "title": "Linha do tempo",
        "steps": [
          { "variant": null, "time": "09:00", "label": "Café da manhã" },
          { "variant": "destaque", "time": "−1h treino", "label": "Pré-treino smoothie" },
          { "variant": "jogo", "time": "Treino", "label": "Exercício" },
          { "variant": "destaque", "time": "Pós-treino", "label": "Almoço" },
          { "variant": null, "time": "17:00", "label": "Hora do chá" },
          { "variant": null, "time": "Noite", "label": "Jantar" },
          { "variant": null, "time": "22:00", "label": "Ceia (se fome)" }
        ]
      },
      "meals": [
        {
          "title": "Café da Manhã",
          "theme": "default",
          "badge": null,
          "timing": "09:00 — até 09:30 no máximo",
          "recipesLink": false,
          "items": [
            {
              "name": "1 xícara de chá — sem açúcar",
              "qty": "1 xícara",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">2 ovos mexidos + temperos naturais</span><span class=\"opt\">+ 2 ml de azeite de oliva extra virgem para o preparo</span>",
              "qty": "2 ovos",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"alt\">Aveia em flocos finos OU Pão de Milho sem glúten OU Goma de Tapioca</span>",
              "qty": "30 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">1 fruta low FODMAP</span><span class=\"opt\">Banana maçã ou banana branca · 100g de Abacaxi · 15g de Acerola · Goiaba vermelha ou branca · Laranja baía · 100g de Mamão formosa · 88g de Mirtilo · 1 xícara de Morangos</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            }
          ],
          "note": {
            "text": "<strong>Aveióca — variação:</strong> Adicionar farinha de aveia no ovo e mexer bem. Temperar com ervas a gosto. Levar à frigideira antiaderente e firmar de um lado e do outro. Rechear com banana e canela. Servir em seguida.",
            "variant": "orange"
          }
        },
        {
          "title": "Pré-Treino — Smoothie Proteico",
          "theme": "laranja",
          "badge": null,
          "timing": "1 hora antes do treino",
          "recipesLink": false,
          "items": [
            {
              "name": "<span class=\"hl\">Leite vegetal de castanhas, amêndoas ou macadâmia OU Água</span><span class=\"opt\">Evitar leite de aveia e leite de soja — alto FODMAP. Bater tudo no liquidificador.</span>",
              "qty": "100–150 mL",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"alt\">Whey Protein — sabor baunilha</span>",
              "qty": "20 g (1 dose)",
              "qtyHighlight": true
            },
            {
              "name": "<span class=\"hl\">Frutas vermelhas congeladas</span><span class=\"opt\">Morango, mirtilo, framboesa — todas low FODMAP</span>",
              "qty": "1 xícara de chá",
              "qtyHighlight": false
            }
          ],
          "note": {
            "text": "Bater tudo no liquidificador. O smoothie fornece proteína e carbo rápido para o treino sem sobrecarregar o intestino.",
            "variant": "orange"
          }
        },
        {
          "title": "Almoço — Pós-Treino",
          "theme": "default",
          "badge": "refeição principal",
          "timing": "Logo após o treino",
          "recipesLink": false,
          "items": [
            {
              "name": "<span class=\"alt\">Proteína — escolha uma opção</span><span class=\"opt\">100g de Patinho sem gordura grelhado · 115g de Filé de frango cozido · 140g de Atum fresco · 140g de Salmão sem pele grelhado · 180g de Tilápia</span>",
              "qty": "1 porção",
              "qtyHighlight": true
            },
            {
              "name": "<span class=\"alt\">Carboidrato — escolha uma opção</span><span class=\"opt\">100g de Batata inglesa cozida · 80g de Batata baroa (mandioquinha) cozida · 70g de Quinoa cozida · 70g de Arroz</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Berinjela cozida</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Abobrinha italiana refogada</span><span class=\"opt\">Consumir em porção controlada (50g) — tolerar individualmente</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Cenoura crua ralada</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Alface americana, rúcula ou folhas variadas</span>",
              "qty": "25 g",
              "qtyHighlight": false
            },
            {
              "name": "Azeite de oliva extra virgem",
              "qty": "10 mL (1 col. sopa)",
              "qtyHighlight": false
            }
          ],
          "note": {
            "text": "<strong>Molho para salada:</strong> 1 colher de chá de raspas de gengibre + 2 colheres de sopa de azeite de oliva + sal a gosto + suco de ½ limão. Misturar tudo e regar a salada na hora de consumir.<br>As saladas podem ser variadas de acordo com a preferência e dentro dos alimentos low FODMAP especificados na tabela.",
            "variant": "green"
          }
        },
        {
          "title": "Hora do Chá",
          "theme": "azul",
          "badge": "opcional",
          "timing": "17:00",
          "recipesLink": false,
          "items": [
            {
              "name": "Chá de hortelã — sem açúcar<span class=\"opt\">Digestivo — alivia distensão abdominal após o almoço</span>",
              "qty": "1 xícara",
              "qtyHighlight": false
            }
          ],
          "note": null
        },
        {
          "title": "Jantar / Lanche da Noite",
          "theme": "default",
          "badge": null,
          "timing": "Noite — variar os vegetais",
          "recipesLink": false,
          "items": [
            {
              "name": "<span class=\"alt\">Proteína — escolha uma opção</span><span class=\"opt\">140g de Filé de frango cozido · 120g de Patinho grelhado · 170g de Atum fresco · 170g de Salmão grelhado · 180g de Tilápia</span>",
              "qty": "1 porção maior",
              "qtyHighlight": true
            },
            {
              "name": "<span class=\"alt\">Carboidrato — escolha uma opção</span><span class=\"opt\">70g de Quinoa cozida · 120g de Batata inglesa cozida · 80g de Batata baroa cozida · 70g de Mandioca cozida e picada</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Chuchu cozido</span><span class=\"opt\">Porção pequena — tolerar individualmente</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Folhas verdes variadas</span>",
              "qty": "30 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Cenoura crua ralada, rabanete</span>",
              "qty": "a gosto",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Espinafre refogado</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "Azeite de oliva extra virgem",
              "qty": "10 mL (1 col. sopa)",
              "qtyHighlight": false
            }
          ],
          "note": {
            "text": "<strong>Variação — Panqueca Salgada Recheada:</strong> 11g farelo de aveia + 2 ovos (massa) + frango desfiado/atum/carne moída + temperos (orégano, alecrim, açafrão). Se consumiu ovo no período da tarde, evite a panqueca à noite.",
            "variant": "default"
          }
        },
        {
          "title": "Ceia",
          "theme": "escuro",
          "badge": "dependendo da fome",
          "timing": "22:00",
          "recipesLink": false,
          "items": [
            {
              "name": "<strong>Opção 1 — Smoothie proteico reforçado</strong><span class=\"opt\">100–150mL leite vegetal (castanhas/macadâmia) + 20g whey + frutas vermelhas + 1 banana congelada + 1 col. sopa de psyllium. Bater no liquidificador.</span>",
              "qty": "1 copo",
              "qtyHighlight": false
            },
            {
              "name": "<strong>Opção 2 — Panqueca salgada</strong><span class=\"opt\">Só se NÃO comeu ovo à tarde. 11g farelo de aveia + 2 ovos + frango desfiado/atum/carne moída + temperos.</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            }
          ],
          "note": null
        }
      ]
    },
    "descanso": {
      "id": "descanso",
      "header": {
        "theme": "bg-descanso",
        "icon": "😴",
        "title": "Dia de Descanso",
        "subtitle": "Recuperação ativa. Sem pré-treino. Jantar mais leve, ceia com chá calmante."
      },
      "timeline": {
        "title": "Linha do tempo",
        "steps": [
          { "variant": null, "time": "09:00", "label": "Café da manhã" },
          { "variant": null, "time": "13:00", "label": "Almoço" },
          { "variant": null, "time": "17:00", "label": "Hora do chá" },
          { "variant": null, "time": "19:00", "label": "Jantar" },
          { "variant": null, "time": "21:00", "label": "Ceia" }
        ],
        "warning": "Dia sem treino — sem smoothie pré-treino. Mantenha os horários das refeições para não desregular o intestino. Ceia com chá calmante."
      },
      "meals": [
        {
          "title": "Café da Manhã",
          "theme": "default",
          "badge": null,
          "timing": "09:00 — até 09:30 no máximo",
          "recipesLink": false,
          "items": [
            {
              "name": "1 xícara de chá — sem açúcar",
              "qty": "1 xícara",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">2 ovos mexidos + temperos naturais</span><span class=\"opt\">+ 2 ml de azeite de oliva extra virgem para o preparo</span>",
              "qty": "2 ovos",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"alt\">Aveia em flocos finos OU Pão de Milho sem glúten OU Goma de Tapioca</span>",
              "qty": "30 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">1 fruta low FODMAP</span><span class=\"opt\">Banana maçã ou banana branca · Abacaxi (100g) · Acerola (15g) · Goiaba · Laranja baía · Mamão formosa (100g) · Mirtilo (88g) · Morangos (1 xícara)</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            }
          ],
          "note": {
            "text": "<strong>Aveióca — variação:</strong> Adicionar farinha de aveia no ovo e mexer bem. Temperar com ervas a gosto. Levar à frigideira antiaderente e firmar de um lado e do outro. Rechear com banana e canela. Servir em seguida.",
            "variant": "orange"
          }
        },
        {
          "title": "Almoço",
          "theme": "default",
          "badge": null,
          "timing": "13:00",
          "recipesLink": false,
          "items": [
            {
              "name": "<span class=\"alt\">Proteína — escolha uma opção</span><span class=\"opt\">100g de Patinho grelhado · 115g de Filé de frango · 140g de Atum fresco · 140g de Salmão grelhado · 180g de Tilápia</span>",
              "qty": "1 porção",
              "qtyHighlight": true
            },
            {
              "name": "<span class=\"alt\">Carboidrato — escolha uma opção</span><span class=\"opt\">100g de Batata inglesa cozida · 80g de Batata baroa cozida · 70g de Quinoa · 70g de Arroz</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Berinjela cozida</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Abobrinha italiana refogada</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Cenoura crua ralada</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Alface americana, rúcula ou folhas variadas</span>",
              "qty": "25 g",
              "qtyHighlight": false
            },
            {
              "name": "Azeite de oliva extra virgem",
              "qty": "10 mL",
              "qtyHighlight": false
            }
          ],
          "note": {
            "text": "<strong>Molho para salada:</strong> 1 colher de chá de raspas de gengibre + 2 colheres de sopa de azeite + sal + suco de ½ limão. Regar na hora de consumir.",
            "variant": "green"
          }
        },
        {
          "title": "Hora do Chá",
          "theme": "azul",
          "badge": null,
          "timing": "17:00",
          "recipesLink": false,
          "items": [
            {
              "name": "Chá de hortelã — sem açúcar",
              "qty": "1 xícara",
              "qtyHighlight": false
            }
          ],
          "note": null
        },
        {
          "title": "Jantar / Lanche da Noite",
          "theme": "default",
          "badge": null,
          "timing": "19:00 — variar os vegetais",
          "recipesLink": false,
          "items": [
            {
              "name": "<span class=\"alt\">Proteína — escolha uma opção</span><span class=\"opt\">140g de Filé de frango · 120g de Patinho grelhado · 170g de Atum fresco · 170g de Salmão · 180g de Tilápia</span>",
              "qty": "1 porção",
              "qtyHighlight": true
            },
            {
              "name": "<span class=\"alt\">Carboidrato — escolha uma opção</span><span class=\"opt\">70g de Quinoa · 120g de Batata inglesa · 80g de Batata baroa · 70g de Mandioca cozida e picada</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Chuchu cozido</span><span class=\"opt\">Porção pequena — tolerar individualmente</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Folhas verdes variadas</span>",
              "qty": "30 g",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Cenoura crua ralada, rabanete</span>",
              "qty": "a gosto",
              "qtyHighlight": false
            },
            {
              "name": "<span class=\"hl\">Espinafre refogado</span>",
              "qty": "50 g",
              "qtyHighlight": false
            },
            {
              "name": "Azeite de oliva extra virgem",
              "qty": "10 mL",
              "qtyHighlight": false
            }
          ],
          "note": null
        },
        {
          "title": "Ceia",
          "theme": "azul",
          "badge": null,
          "timing": "21:00",
          "recipesLink": false,
          "items": [
            {
              "name": "<strong>Opção 1 — Chá calmante + fruta + sementes</strong><span class=\"opt\">1 xícara de chá calmante (mulungu, camomila, capim cidreira ou melissa) + kiwi ou 120g de laranja + 15g semente de girassol sem casca OU 20g semente de abóbora descascada</span>",
              "qty": "1 porção",
              "qtyHighlight": false
            },
            {
              "name": "<strong>Opção 2 — Mingau de aveia proteico</strong><span class=\"opt\">150mL leite vegetal (castanhas/macadâmia) + 2 col. sobremesa aveia em flocos + canela em pó + cacau em pó + 20g suplemento proteico. Aquecer mexendo bem.</span>",
              "qty": "1 bowl",
              "qtyHighlight": false
            },
            {
              "name": "<strong>Opção 3 — Smoothie proteico</strong><span class=\"opt\">100–150mL leite vegetal + 20g whey baunilha + frutas vermelhas + 1 banana congelada + 1 col. sopa de psyllium. Bater no liquidificador.</span>",
              "qty": "1 copo",
              "qtyHighlight": false
            }
          ],
          "note": null
        }
      ]
    }
  },
  "guidelines": [
    "<strong>Horários fixos:</strong> o intestino funciona como um relógio — mantenha os horários das refeições mesmo nos dias de descanso. Irregularidade piora os espasmos no SII.",
    "<strong>Hidratação:</strong> 2 a 2,5 litros de água/dia. Beba entre as refeições, não durante — não diluir os sucos digestivos.",
    "<strong>Cebola e alho:</strong> principais gatilhos de FODMAP. Substituir por azeite infusionado com alho (aquecer o azeite com alho e retirar antes de usar) e cebolinha verde (só a parte verde).",
    "<strong>Leite vegetal:</strong> usar sempre leite de castanhas, macadâmia, arroz ou cânhamo. Evitar leite de aveia e de soja — alto FODMAP. Verificar ingredientes (alguns têm adoçantes problemáticos).",
    "<strong>Lactose:</strong> todo laticínio deve ser zero lactose. Whey protein é geralmente bem tolerado mesmo na intolerância — a versão isolada tem &lt;0,1g de lactose por dose.",
    "<strong>Fibra:</strong> aveia em pequenas quantidades (30g/refeição) é tolerada. Psyllium na ceia ajuda o trânsito intestinal sem fermentar. Aumentar fibra gradualmente — não de uma vez.",
    "<strong>Temperos livres (low FODMAP):</strong> sal, pimenta preta, cúrcuma, orégano, alecrim, tomilho, manjericão, açafrão, canela, gengibre, limão, cebolinha verde, coentro, noz-moscada.",
    "<strong>Adoçantes:</strong> usar apenas eritritol, sucralose ou estévia pura. Evitar completamente mel, melado, sorbitol, xilitol, maltitol e néctar de agave — causam fermentação e diarreia.",
    "<strong>Panqueca salgada:</strong> ótima substituição para o jantar, mas se já consumiu ovo no período da tarde, evite à noite para não exagerar na proteína de ovo.",
    "<strong>Ansiedade e intestino:</strong> o eixo intestino-cérebro é real. Estresse piora muito o SII. Priorize 7–8h de sono e gerencie a ansiedade — os chás calmantes da ceia ajudam nisso."
  ],
  "avoidFoods": [
    {
      "title": "Temperos",
      "text": "Alho, alho-poró, cebola, aipo, pimenta verde, pimentão verde, cebolinha com bulbo, pimenta chilli vermelha, semente de cominho"
    },
    {
      "title": "Legumes",
      "text": "Alcachofra, aspargos, brócolis, chicória, couve de Bruxelas, couve-flor, repolho (roxo e verde), quiabo, nabo, salsão, tomate seco"
    },
    {
      "title": "Frutas",
      "text": "Maçã, pera, manga, melancia, cereja, pêssego, ameixa, figo, damasco, caqui, groselha, lichia, romã, tâmaras, uva passa, banana muito madura"
    },
    {
      "title": "Laticínios comuns",
      "text": "Leite integral/semi/desnatado, iogurte comum, requeijão, creme de leite, leite condensado, sorvete convencional, queijo de cabra, kefir"
    },
    {
      "title": "Farinhas e pães",
      "text": "Farinha de trigo, farinha de centeio, farelo de trigo, pão de forma comum, macarrão com trigo, nhoque de trigo, cuscuz, gérmen de trigo"
    },
    {
      "title": "Leguminosas",
      "text": "Feijão (carioca, preto, branco, vermelho), grão-de-bico, lentilha, ervilha, grão de soja. Se usar, usar Digeliv® no cozimento."
    },
    {
      "title": "Adoçantes e doces",
      "text": "Mel, melado, néctar de agave, xarope de milho, sorbitol, xilitol, maltitol, chocolate ao leite, chocolate branco"
    },
    {
      "title": "Oleaginosas c/ restrição",
      "text": "Amêndoas (ok em até 10g), pistache, castanha de caju, avelã — alto FODMAP em quantidades maiores. Preferir: amendoim, castanha do pará, macadâmia, nozes."
    }
  ],
  "substitutions": [
    {
      "group": "g4",
      "title": "Proteínas — 1 porção",
      "rows": [
        { "type": "item", "name": "Patinho grelhado (sem gordura)", "qty": "100 g" },
        { "type": "item", "name": "Filé de frango cozido", "qty": "115 g" },
        { "type": "item", "name": "Atum fresco grelhado", "qty": "140 g" },
        { "type": "item", "name": "Salmão sem pele grelhado", "qty": "140 g" },
        { "type": "item", "name": "Tilápia", "qty": "180 g" },
        { "type": "item", "name": "Ovos (mexidos/omelete)", "qty": "2–3 unidades" }
      ]
    },
    {
      "group": "g3",
      "title": "Carboidrato — Almoço",
      "rows": [
        { "type": "item", "name": "Batata inglesa cozida", "qty": "100 g" },
        { "type": "item", "name": "Batata baroa (mandioquinha)", "qty": "80 g" },
        { "type": "item", "name": "Quinoa cozida", "qty": "70 g" },
        { "type": "item", "name": "Arroz branco/integral", "qty": "70 g" }
      ]
    },
    {
      "group": "g3",
      "title": "Carboidrato — Jantar",
      "rows": [
        { "type": "item", "name": "Quinoa cozida", "qty": "70 g" },
        { "type": "item", "name": "Batata inglesa cozida", "qty": "120 g" },
        { "type": "item", "name": "Batata baroa cozida", "qty": "80 g" },
        { "type": "item", "name": "Mandioca (aipim) cozida", "qty": "70 g" }
      ]
    },
    {
      "group": "g7",
      "title": "Café da manhã — Pão/Carbo",
      "rows": [
        { "type": "item", "name": "Aveia em flocos finos", "qty": "30 g" },
        { "type": "item", "name": "Pão de Milho sem glúten", "qty": "30 g / 1 fatia" },
        { "type": "item", "name": "Goma de Tapioca", "qty": "30 g" }
      ]
    },
    {
      "group": "g5",
      "title": "Frutas — Low FODMAP",
      "rows": [
        { "type": "item", "name": "Banana maçã ou banana branca", "qty": "1 unidade" },
        { "type": "item", "name": "Morangos", "qty": "1 xícara de chá" },
        { "type": "item", "name": "Mirtilo", "qty": "88 g" },
        { "type": "item", "name": "Mamão formosa", "qty": "100 g" },
        { "type": "item", "name": "Abacaxi", "qty": "100 g" },
        { "type": "item", "name": "Goiaba vermelha ou branca", "qty": "1 unidade" },
        { "type": "item", "name": "Laranja baía", "qty": "1 unidade" },
        { "type": "item", "name": "Acerola", "qty": "15 g" },
        { "type": "item", "name": "Kiwi (ceia/descanso)", "qty": "1–2 unidades" }
      ]
    },
    {
      "group": "g8",
      "title": "Leite Vegetal — Low FODMAP",
      "rows": [
        { "type": "intro", "text": "Evitar aveia e soja — alto FODMAP" },
        { "type": "item", "name": "Leite de macadâmia", "qty": "100–150 mL" },
        { "type": "item", "name": "Leite de arroz", "qty": "100–150 mL" },
        { "type": "item", "name": "Leite de cânhamo", "qty": "100–150 mL" },
        { "type": "item", "name": "Leite de castanhas (macadâmia/pará)", "qty": "100–150 mL" },
        { "type": "item", "name": "Água (smoothie)", "qty": "100–150 mL" }
      ]
    },
    {
      "group": "g8",
      "title": "Laticínios — Zero Lactose",
      "rows": [
        { "type": "item", "name": "Queijo minas zero lactose", "qty": "1 fatia (40 g)" },
        { "type": "item", "name": "Queijo mussarela zero lactose", "qty": "1 fatia (20 g)" },
        { "type": "item", "name": "Queijo cottage zero lactose", "qty": "2 col. sopa (35 g)" },
        { "type": "item", "name": "Queijo gorgonzola/brie/camembert", "qty": "20 g" },
        { "type": "item", "name": "Iogurte de leite de coco", "qty": "1 pote (120 g)" },
        { "type": "item", "name": "Iogurte zero lactose", "qty": "1 pote (170 g)" }
      ]
    },
    {
      "group": "g6",
      "title": "Gorduras &amp; Oleaginosas",
      "rows": [
        { "type": "intro", "text": "Low FODMAP — preferir essas" },
        { "type": "item", "name": "Azeite de oliva extra virgem", "qty": "10 mL (1 col. sopa)" },
        { "type": "item", "name": "Pasta de amendoim (s/açúcar)", "qty": "1 col. sob. (20 g)" },
        { "type": "item", "name": "Castanha do pará", "qty": "4 unidades" },
        { "type": "item", "name": "Macadâmia", "qty": "5 unidades" },
        { "type": "item", "name": "Nozes", "qty": "4 metades" },
        { "type": "item", "name": "Amendoim", "qty": "10 unidades" },
        { "type": "item", "name": "Semente de girassol", "qty": "15 g" },
        { "type": "item", "name": "Semente de abóbora", "qty": "20 g" }
      ]
    }
  ],
  "supplements": [
    {
      "name": "Probiótico Complexo + Fibergrum",
      "dose": "1 sachê · Antes de dormir",
      "note": "<em>Composição:</em> Lactobacillus acidophilus 1bi + Bifidobacterium bifidum 1bi + L. bulgaricus 1bi + L. casei 1bi + Bifidumbacterium infantis 2bi + Fibergrum (goma acácia) 5g.<br><strong>30 doses.</strong> Consumir 1 dose antes de dormir."
    },
    {
      "name": "Digeliv®",
      "dose": "1 a 2 sachês · No cozimento",
      "note": "Adicionar 1 a 2 sachês diretamente no cozimento de feijões e leguminosas. Reduz a fermentação e os gases causados pelos oligossacarídeos das leguminosas."
    },
    {
      "name": "Enzimas Digestivas",
      "dose": "1 dose · 2× ao dia — antes do almoço e jantar",
      "note": "<em>Fórmulas no mercado:</em><br>• <strong>ZYMElift® — Essential</strong><br>• <strong>Enzyfor® — Vitafor</strong><br>Contém: amilase, bromelina, lactase, lipase, pancreatina, papaína, pepsina, protease e sais biliares."
    },
    {
      "name": "Proteínas Vegetais",
      "dose": "Conforme necessidade",
      "note": "Alternativa ao Whey em dias de intolerância. Proteína de arroz + ervilha (blend) é a opção mais completa em aminoácidos essenciais e totalmente isenta de lactose e FODMAP."
    }
  ],
  "teas": [
    {
      "name": "Chá para Gases e Distensão Abdominal",
      "sections": [
        {
          "label": "Ingredientes (para 1 litro)",
          "body": "• 3 col. chá de <strong>funcho</strong> — sementes (10g)<br>• 2 col. sobremesa de <strong>gengibre</strong> — rizoma (6g)<br>• 5 col. chá de <strong>hortelã</strong> — folhas (8g)<br>• 1 litro de água"
        },
        {
          "label": "Modo de preparo",
          "body": "Colocar o gengibre em água fria e levar ao fogo. Quando levantar fervura (100°C), aguardar 5–10 minutos. Quando a água atingir 85°C, adicionar o funcho e o hortelã. Deixar em infusão por 5 minutos."
        },
        {
          "label": "Como usar",
          "body": "1 xícara (200mL) após as refeições."
        }
      ],
      "warning": null
    },
    {
      "name": "Blend para Distensão Abdominal",
      "sections": [
        {
          "label": "Ingredientes (blend concentrado)",
          "body": "• 40g de <strong>hortelã</strong> — folhas<br>• 40g de <strong>anis estrelado</strong> — fruto seco<br>• 40g de <strong>funcho</strong> — sementes<br>• 40g de <strong>erva-doce</strong> — sementes<br>• 40g de <strong>camomila</strong> — flores"
        },
        {
          "label": "Modo de preparo",
          "body": "Triturar as ervas no mixer ou liquidificador. Armazenar em vidro fechado, longe da luz e umidade.<br>Para o chá: ferver 1 litro de água a 100°C e desligar. Quando atingir 85°C, adicionar 10 colheres de café do blend e abafar por 5 minutos. Coar e consumir após as refeições."
        }
      ],
      "warning": "Os chás podem ser consumidos mornos ou frios. <strong>Não reaquecer!</strong>"
    }
  ]
};
