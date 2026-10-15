/* Roteiro: 14 cenas curtas e um encerramento determinado pelas escolhas. */
const scenes = [
  {
    chapter: "Ato 1 · A família", character: "Augusta", role: "Mãe de Adelaide", text: "Diante do espelho, Augusta examinou o rosto com a atenção de quem revê um contrato. — Ainda posso aparecer no baile sem que me confundam com uma tia-avó.",
  },
  {
    chapter: "Ato 1 · A família", character: "Vasconcelos", role: "Marido de Augusta", text: "Vasconcelos fechou o livro de contas. — O baile custa caro, mas não comparecer custa posição. Augusta concordou; a conta, infelizmente, também.",
  },
  {
    chapter: "Ato 1 · A família", character: "Adelaide", role: "Filha de Augusta", text: "— Mãe, Gomes tem sido muito gentil comigo. Gostaria de conversar com ele, se a senhora não transformar isso num anúncio para a cidade inteira.",
  },
  {
    chapter: "Ato 1 · A família", character: "Gomes", role: "Pretendente de Adelaide", text: "Gomes cumprimentou a família com respeito. — Não venho pedir resposta hoje. Quero apenas que Adelaide saiba que a admiro e que desejo conhecê-la melhor.",
  },
  {
    chapter: "Ato 1 · A família", character: "Augusta", role: "Mãe de Adelaide", text: "O convite do baile chegou. Augusta olhou para Adelaide, depois para o espelho. As duas coisas pareciam pedir atenção ao mesmo tempo.",
    question: "O que deve ser prioridade para a família?",
    choices: [
      { label: "Manter a aparência social", moneyDelta: -12, reputationDelta: 1, relationDelta: -1, trustDelta: -1, endingVote: "aparencia", flag: "appearancePriority", consequence: "Augusta escolheu o salão: o nome da família brilhará entre os convidados, embora o caixa sinta a despesa." },
      { label: "Pensar no futuro de Adelaide", moneyDelta: 4, reputationDelta: -1, relationDelta: 1, trustDelta: 1, endingVote: "adelaide", flag: "familyPriority", consequence: "Augusta dispensou parte da toilette e ouviu a filha. Adelaide ganhou espaço; alguns convidados notarão a economia." },
    ],
  },
  {
    chapter: "Ato 2 · O casamento", character: "Vasconcelos", role: "Marido de Augusta", text: "— Gomes tem boa reputação — disse Vasconcelos. — Um casamento conveniente faria bem à família. E talvez às contas.",
  },
  {
    chapter: "Ato 2 · O casamento", character: "Gomes", role: "Pretendente de Adelaide", text: "No jardim, Gomes perguntou a Adelaide o que ela desejava para si. Não falou em dote, sobrenome ou conveniência. Augusta observava de longe; Vasconcelos, da janela, calculava o custo do chá.",
  },
  {
    chapter: "Ato 2 · O casamento", character: "Augusta", role: "Mãe de Adelaide", text: "Augusta ouviu o pedido de Gomes. Sorriu com cortesia, mas demorou a responder. A ideia de ser chamada de sogra já lhe parecia antiga demais.",
    question: "Augusta deve apoiar o casamento?",
    choices: [
      { label: "Sim; receber Gomes para um chá modesto", moneyDelta: -6, reputationDelta: 1, relationDelta: 1, trustDelta: 1, endingVote: "adelaide", flag: "welcomed_gomes", consequence: "Augusta abriu a casa a Gomes. O chá custou seis contos; Adelaide pôde falar por si." },
      { label: "Pedir que esperem; poupar a despesa da recepção", moneyDelta: 5, reputationDelta: 1, relationDelta: -1, trustDelta: -1, endingVote: "aparencia", flag: "delayed_gomes", consequence: "A família poupou a recepção e ganhou tempo. Adelaide, porém, sentiu que decidiram por ela." },
    ],
  },
  {
    chapter: "Ato 2 · O casamento", character: "Carlota", role: "Conhecida da família", text: "Carlota veio fazer uma visita e trouxe notícias do baile. — Não vim repetir um rumor — disse. — A cidade já faz isso sem ajuda. Quero saber se Adelaide está contente. O chá e as flores estavam à vista; também estava a pergunta que ninguém fazia em voz alta.",
    question: "Como Augusta deve receber Carlota?",
    choices: [
      { label: "Servir o melhor chá e sustentar o prestígio da casa", moneyDelta: -9, reputationDelta: 1, relationDelta: -1, trustDelta: -1, endingVote: "aparencia", flag: "grand_visit", consequence: "Carlota elogiou a recepção; Adelaide notou que a mãe preferiu o salão à conversa." },
      { label: "Convidar Carlota a ouvir Adelaide", moneyDelta: -3, reputationDelta: 0, relationDelta: 1, trustDelta: 1, endingVote: "adelaide", flag: "open_visit", consequence: "Carlota ouviu Adelaide. A visita foi modesta, mas a confiança da filha cresceu." },
      { label: "Fazer uma visita breve, sem nova despesa", moneyDelta: 0, reputationDelta: -1, relationDelta: 0, trustDelta: 0, endingVote: "neutro", flag: "brief_visit", consequence: "Augusta encerrou a visita com cortesia e guardou o dinheiro. Carlota saiu sem uma história brilhante para contar." },
    ],
  },
  {
    chapter: "Ato 2 · O casamento", character: "Adelaide", role: "Filha de Augusta", text: "— Todos parecem ter uma opinião sobre meu casamento — disse Adelaide. — Ainda falta alguém perguntar a minha.",
    question: "O que fazer diante da pressão social?",
    choices: [
      { label: "Manter as aparências diante das visitas", moneyDelta: -8, reputationDelta: 1, relationDelta: -1, trustDelta: -1, endingVote: "aparencia", consequence: "A conversa foi encerrada com elegância. O salão aprovou; Adelaide esperou que a mãe mudasse de ideia." },
      { label: "Priorizar a felicidade da filha", moneyDelta: -3, reputationDelta: 0, relationDelta: 1, trustDelta: 1, endingVote: "adelaide", flag: "prioritizedAdelaide", consequence: "Augusta deixou que Adelaide falasse por si. A família gastou menos com a recepção; nem todos os convidados aprovaram." },
    ],
  },
  {
    chapter: "Ato 3 · O segredo", character: "Adelaide", role: "Filha de Augusta", text: "— Mãe, por que a ideia do casamento a incomoda tanto? Não é o futuro de Gomes que parece assustá-la.",
  },
  {
    chapter: "Ato 3 · O segredo", character: "Augusta", role: "A sós com o espelho", text: "Sozinha, Augusta procurou no espelho uma resposta que pudesse dizer em voz alta. A sala ficou em silêncio. O reflexo, como de costume, não ofereceu conselho.", special: "pause",
  },
  {
    chapter: "Ato 3 · O segredo", character: "Augusta", role: "A verdade por trás da vaidade", text: "A filha cresceria, se casaria e talvez tivesse filhos. Augusta não temia apenas perder a companhia de Adelaide: temia que o mundo passasse a chamá-la de avó.",
    revelation: "O verdadeiro temor de Augusta não era perder a filha. Era perder a própria juventude.", special: "reveal",
  },
  {
    chapter: "Ato 3 · O segredo", character: "Adelaide", role: "Filha de Augusta", text: "Augusta baixou os olhos. — Tive medo de envelhecer antes de admitir que o seu futuro não me pertence. Adelaide tomou-lhe a mão: não era uma solução perfeita, mas era uma conversa verdadeira.",
  },
];

const endings = {
  ideal: { title: "Final · A casa sem espelhos", paragraphs: ["Augusta protegeu o futuro de Adelaide sem fazer da família um espetáculo nem deixar o livro de contas à deriva. Gomes foi recebido por quem ele era; Carlota ouviu antes de repetir; Vasconcelos, enfim, viu a família falar à mesma mesa.", "A vaidade de Augusta não desapareceu. Apenas deixou de escolher por todos. O segredo foi dito em voz baixa, e a filha pôde crescer sem que a mãe precisasse fingir não envelhecer."] },
  aparencia: { title: "Final · A casa em vitrine", paragraphs: ["Os convites continuaram a chegar. Augusta preservou o nome da família, e o salão aprovou cada resposta bem calculada. Adelaide, entretanto, aprendeu que sua opinião só era bem-vinda quando combinava com a decoração.", "A casa parecia jovem. A conversa dentro dela, não."] },
  crise: { title: "Final · O livro sem saldo", paragraphs: ["O baile foi lembrado por todos; as contas, por Vasconcelos. Ao abrir o livro, a família encontrou menos dinheiro do que promessas. O prestígio comprado a cada visita não pagou a próxima.", "Adelaide e Augusta tiveram de encarar o assunto que tentavam vestir de seda: o futuro da família não podia depender da aprovação dos salões."] },
  conflito: { title: "Final · A mesa dividida", paragraphs: ["Augusta adiou o casamento para poupar uma recepção, depois ofereceu a Carlota um salão impecável. Adelaide entendeu a contradição antes dos adultos: sua vida servia ora às contas, ora à aparência.", "A família ainda se reunia à mesa, mas cada pessoa falava como se estivesse em outra casa."] },
  interesses: { title: "Final · Um casamento conveniente", paragraphs: ["Vasconcelos ganhou tempo e dinheiro; Augusta ganhou uma noite sem perguntas; Adelaide ganhou silêncio. Todos obtiveram alguma vantagem, que é outra maneira de dizer que ninguém recebeu o que desejava.", "Gomes não foi recusado por falta de qualidades, mas mantido à espera enquanto a família calculava o valor de cada gesto."] },
  secreto: { title: "Final · A avó de papel", paragraphs: ["Augusta organizou a visita, apoiou Gomes e, logo depois, encerrou a conversa para não gastar nem se comprometer. A cidade não soube se a família celebrava um casamento ou adiava uma idade.", "Carlota guardou a história; Adelaide guardou a pergunta. O segredo de Augusta permaneceu entre as duas, não por falta de pistas, mas porque toda resposta parecia custar uma imagem."] },
  adelaide: { title: "Final · A voz de Adelaide", paragraphs: ["Adelaide conseguiu falar de seus desejos, ainda que a família não tenha resolvido todas as contradições. Gomes esperou uma resposta dela, não de uma negociação entre adultos.", "Augusta percebeu que escutar a filha não a tornava menos mãe; apenas tornava mais difícil esconder de si mesma o medo do tempo."] },
};

const endingReasons = {
  ideal: "Você ouviu as pistas sobre dinheiro e intenções, apoiou Adelaide e Gomes, recebeu Carlota sem ostentação e preservou recursos e confiança.",
  aparencia: "A reputação terminou alta, mas as escolhas de salão e adiamento deixaram pouca relação e confiança com Adelaide.",
  crise: "As despesas de aparência e recepção consumiram a maior parte do saldo enquanto as decisões sociais se repetiam.",
  conflito: "Adiar Gomes para economizar e depois gastar para impressionar Carlota deixou Adelaide entre interesses contraditórios.",
  interesses: "O adiamento e a visita breve protegeram o saldo e a posição, mas a relação familiar ficou em segundo plano.",
  secreto: "Você apoiou Gomes, fez uma visita discreta e terminou com equilíbrio entre reputação, relação e confiança após perceber as pistas.",
  adelaide: "A relação e a confiança construídas permitiram que Adelaide expressasse seus desejos, mesmo sem resolver todas as tensões.",
};

const UNLOCKED_ENDINGS_KEY = "augusta-unlocked-endings-v1";
const endingDescriptions = {
  ideal: "Uma conversa honesta aproxima a família sem sacrificar o futuro de Adelaide.",
  aparencia: "Os salões aprovam a família, enquanto a filha sente o peso das convenções.",
  crise: "As despesas sociais cobram o preço das aparências mantidas a qualquer custo.",
  conflito: "Economia e prestígio puxam a família para lados opostos.",
  interesses: "Cada pessoa ganha alguma vantagem, mas ninguém recebe exatamente o que deseja.",
  secreto: "Uma combinação de discrição e contradições deixa o segredo entre mãe e filha.",
  adelaide: "Adelaide encontra espaço para expressar o que deseja, apesar das tensões.",
};

const state = { sceneIndex: 0, reputacao: 1, relacaoAdelaide: 1, confianca: 1, dinheiro: 60, votes: { aparencia: 0, adelaide: 0 }, flags: {}, pistas: {}, decisoes: [], choiceMade: false, ending: null };
const initials = { Augusta: "AU", Adelaide: "AD", Vasconcelos: "VA", Gomes: "GO" };
const characterProfiles = [
  { id: "Augusta", name: "D. Augusta Vasconcelos", role: "Protagonista · mãe de Adelaide", about: "Atenta à aparência e às convenções da sociedade.", clueKey: "augusta", clue: "No espelho, Augusta parece procurar uma resposta sobre o tempo, não sobre Gomes." },
  { id: "Vasconcelos", name: "Vasconcelos", role: "Marido de Augusta", about: "Pondera as despesas e a posição da família.", clueKey: "vasconcelos", clue: "Para ele, uma visita pode custar dinheiro; faltar a ela também pode custar consideração." },
  { id: "Adelaide", name: "Adelaide", role: "Filha de Augusta", about: "Seu futuro e sua voz estão no centro do conflito familiar.", clueKey: "adelaide", clue: "Ela quer ser ouvida antes que o casamento se torne assunto de todos." },
  { id: "Gomes", name: "Gomes", role: "Pretendente de Adelaide", about: "Sua presença põe em movimento as decisões sobre o casamento.", clueKey: "gomes", clue: "Ao conversar com Adelaide, pergunta o que ela deseja; não começa falando de dote." },
  { id: "Carlota", name: "Carlota", role: "Conhecida da família", about: "Uma visita sua aproxima a casa das conversas da cidade.", clueKey: "carlota", clue: "Ela diz que não quer repetir rumores: prefere saber se Adelaide está contente." },
];
const menuScreen = document.getElementById("menu-screen");
const gameScreen = document.getElementById("game-screen");
const aboutModal = document.getElementById("about-modal");
const galleryModal = document.getElementById("gallery-modal");
const charactersPanel = document.getElementById("characters-panel");
const sceneCard = document.getElementById("scene-card");
let previousCharacterFocus = null;
let previousGalleryFocus = null;

function getUnlockedEndings() {
  try {
    const saved = JSON.parse(localStorage.getItem(UNLOCKED_ENDINGS_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((id) => Object.hasOwn(endings, id)) : [];
  } catch { return []; }
}

function unlockEnding(endingId) {
  const unlocked = getUnlockedEndings();
  if (unlocked.includes(endingId)) return;
  try {
    localStorage.setItem(UNLOCKED_ENDINGS_KEY, JSON.stringify([...unlocked, endingId]));
  } catch (error) {
    console.warn("Não foi possível salvar o final desbloqueado neste navegador.", error);
  }
}

/* Início, avanço e atualização visual */
function startGame() {
  state.sceneIndex = 0;
  state.reputacao = 1;
  state.relacaoAdelaide = 1;
  state.confianca = 1;
  state.dinheiro = 60;
  state.votes = { aparencia: 0, adelaide: 0 };
  state.flags = {};
  state.pistas = {};
  state.decisoes = [];
  state.choiceMade = false;
  state.ending = null;
  document.getElementById("skip-known-button").classList.toggle("is-hidden", sessionStorage.getItem("augustaHasFinished") !== "true");
  menuScreen.classList.add("is-hidden");
  gameScreen.classList.remove("is-hidden");
  renderScene();
}

function renderScene() {
  const scene = scenes[state.sceneIndex];
  discoverScene(state.sceneIndex);
  document.getElementById("chapter-name").textContent = scene.chapter;
  document.getElementById("scene-counter").textContent = `Cena ${state.sceneIndex + 1} de ${scenes.length + 1}`;
  updateIndicators();
  sceneCard.className = `scene-card${scene.special === "pause" ? " is-pause" : ""}${scene.special === "reveal" ? " is-reveal" : ""}`;
  sceneCard.innerHTML = `
    <div id="character-portrait" class="character-portrait portrait-${scene.character.toLowerCase()}" aria-hidden="true"><span id="portrait-initials">${initials[scene.character]}</span></div>
    <div class="character-info"><span class="character-kicker">PERSONAGEM</span><h2 id="character-name">${scene.character}</h2><span id="character-role" class="character-role">${scene.role}</span></div>
    <div class="dialogue-rule"><span aria-hidden="true">✦</span></div>
    <p id="dialogue-text" class="dialogue-text">${getSceneText(scene)}</p>
    ${scene.revelation ? `<p id="revelation" class="revelation">“${scene.revelation}”</p>` : ""}
    <div class="choice-area" id="choice-area"></div>
    <div class="consequence is-hidden" id="consequence" aria-live="polite"></div>
    <button id="continue-button" class="button button-primary continue-button">Continuar <span aria-hidden="true">→</span></button>`;

  if (scene.choices) showChoices(scene.choices, scene.question);
  document.getElementById("continue-button").addEventListener("click", advanceScene);
  document.getElementById("skip-known-button").classList.toggle("is-hidden", sessionStorage.getItem("augustaHasFinished") !== "true" || Boolean(scene.choices) || state.sceneIndex >= scenes.length - 1);
}

function updateIndicators() {
  const reputation = "★".repeat(state.reputacao) + "☆".repeat(3 - state.reputacao);
  const relation = "★".repeat(state.relacaoAdelaide) + "☆".repeat(3 - state.relacaoAdelaide);
  const reputationStars = document.getElementById("reputation-stars");
  const adelaideStars = document.getElementById("adelaide-stars");
  const trustStars = document.getElementById("trust-stars");
  document.getElementById("money-balance").textContent = `${state.dinheiro} contos`;
  reputationStars.textContent = reputation;
  adelaideStars.textContent = relation;
  trustStars.textContent = "★".repeat(state.confianca) + "☆".repeat(3 - state.confianca);
  reputationStars.setAttribute("aria-label", `Reputação: ${state.reputacao} de 3 estrelas`);
  adelaideStars.setAttribute("aria-label", `Relação com Adelaide: ${state.relacaoAdelaide} de 3 estrelas`);
  trustStars.setAttribute("aria-label", `Confiança dos demais: ${state.confianca} de 3 estrelas`);
}

/* Escolhas com mudanças pequenas e limitadas a zero–três estrelas */
function showChoices(choices, question) {
  const area = document.getElementById("choice-area");
  area.innerHTML = `<p class="choice-question">${question}</p>${choices.map((choice, index) => `
    <button class="choice-button" data-choice="${index}"><span class="choice-number">${index + 1}</span><span>${choice.label}</span><span class="choice-arrow" aria-hidden="true">↗</span></button>`).join("")}`;
  document.getElementById("continue-button").classList.add("is-hidden");
  area.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => recordChoice(choices[Number(button.dataset.choice)]));
  });
}

function recordChoice(choice) {
  if (state.choiceMade) return;
  state.choiceMade = true;
  const moneyChange = choice.moneyDelta ? alterarDinheiro(choice.moneyDelta) : 0;
  if (choice.reputationDelta) alterarReputacao(choice.reputationDelta);
  if (choice.relationDelta) alterarRelacaoAdelaide(choice.relationDelta);
  if (choice.trustDelta) alterarConfianca(choice.trustDelta);
  if (choice.endingVote === "aparencia" || choice.endingVote === "adelaide") state.votes[choice.endingVote] += 1;
  if (choice.flag) state.flags[choice.flag] = true;
  state.decisoes.push({ pergunta: scenes[state.sceneIndex].question, escolha: choice.label, resultado: choice.consequence, saldo: state.dinheiro });
  document.getElementById("choice-area").innerHTML = "";
  const consequence = document.getElementById("consequence");
  const moneyNote = moneyChange ? ` Saldo: ${moneyChange > 0 ? "+" : "−"}${Math.abs(moneyChange)} contos.` : "";
  consequence.textContent = `${choice.consequence}${moneyNote}`;
  consequence.classList.remove("decision-flash");
  void consequence.offsetWidth;
  consequence.classList.add("decision-flash");
  consequence.classList.remove("is-hidden");
  document.getElementById("continue-button").classList.remove("is-hidden");
}

function alterarReputacao(quantidade) {
  state.reputacao = Math.max(0, Math.min(3, state.reputacao + quantidade));
  updateIndicators();
}

function alterarDinheiro(quantidade) {
  const anterior = state.dinheiro;
  state.dinheiro = Math.max(0, state.dinheiro + quantidade);
  updateIndicators();
  return state.dinheiro - anterior;
}

function alterarRelacaoAdelaide(quantidade) {
  state.relacaoAdelaide = Math.max(0, Math.min(3, state.relacaoAdelaide + quantidade));
  updateIndicators();
}

function alterarConfianca(quantidade) {
  state.confianca = Math.max(0, Math.min(3, state.confianca + quantidade));
  updateIndicators();
}

function advanceScene() {
  discoverScene(state.sceneIndex);
  if (state.sceneIndex < scenes.length - 1) {
    state.sceneIndex += 1;
    state.choiceMade = false;
    renderScene();
  } else {
    state.ending = determineEnding();
    showEnding(state.ending);
  }
}

/* Empates produzem o desfecho irônico */
function determineEnding() {
  const { flags, pistas } = state;
  if (flags.familyPriority && flags.welcomed_gomes && flags.open_visit && flags.prioritizedAdelaide && state.dinheiro >= 45 && state.reputacao >= 1 && state.relacaoAdelaide === 3 && state.confianca === 3 && pistas.vasconcelos && pistas.gomes && pistas.carlota && pistas.adelaide) return "ideal";
  if (flags.appearancePriority && flags.welcomed_gomes && flags.brief_visit && state.reputacao === state.relacaoAdelaide && state.confianca >= 2 && state.dinheiro >= 35 && pistas.gomes && pistas.carlota && pistas.augusta) return "secreto";
  if (state.dinheiro <= 28 && state.votes.aparencia >= 2) return "crise";
  if (flags.delayed_gomes && flags.grand_visit && state.relacaoAdelaide <= 1 && state.confianca <= 1) return "conflito";
  if (flags.delayed_gomes && flags.brief_visit && state.dinheiro >= 40 && state.reputacao >= 2) return "interesses";
  if (state.reputacao >= 3 && state.relacaoAdelaide <= 1 && state.votes.aparencia >= 3) return "aparencia";
  if (state.relacaoAdelaide >= 2 && state.confianca >= 2) return "adelaide";
  return "interesses";
}

function discoverScene(index) {
  const discoveries = {
    1: "vasconcelos", 2: "adelaide", 6: "gomes", 8: "carlota",
    9: "adelaidePressure", 11: "augusta", 12: "secret",
  };
  const clue = discoveries[index];
  if (clue) state.pistas[clue] = true;
}

function getSceneText(scene) {
  if (scene.character === "Vasconcelos" && state.flags.appearancePriority) return "Vasconcelos conferiu o saldo depois dos preparativos. — A família estará bem apresentada — disse. — Só convém que os próximos convites sejam mais econômicos.";
  if (scene.character === "Vasconcelos" && state.flags.familyPriority) return "Vasconcelos viu que Augusta poupou na toilette. — O caixa agradece — disse. Adelaide agradeceu de outro modo: a mãe a escutara.";
  if (scene.character === "Adelaide" && state.flags.grand_visit) return "— Carlota elogiou o chá — disse Adelaide. — Mas eu teria preferido que a senhora perguntasse o que penso, em vez de quanto custou a mesa.";
  if (scene.character === "Adelaide" && state.flags.open_visit) return "— Obrigada por me deixar falar com Carlota — disse Adelaide. — A visita foi modesta; pela primeira vez, não me senti parte da mobília.";
  if (scene.character === "Adelaide" && state.confianca === 0) return "Adelaide respondeu sem elevar a voz: — A senhora pode decidir por mim; só não espere que eu chame isso de confiança.";
  if (scene.character === "Adelaide" && state.flags.delayed_gomes) return "— Ainda espero uma resposta sobre Gomes — disse Adelaide. — O tempo que a senhora ganhou não é necessariamente o tempo de que eu precisava.";
  if (scene.character === "Gomes" && state.confianca >= 3) return "Gomes percebeu a confiança da família. — Não desejo uma promessa apressada; basta que Adelaide possa dizer o que pensa.";
  if (scene.character === "Augusta" && state.dinheiro < 35) return "Augusta contou o que restava no cofre. — A cidade tem boa memória para vestidos novos e péssima para contas — suspirou. A escolha seguinte exigiria cuidado.";
  if (scene.character === "Augusta" && state.flags.delayed_gomes) return "Augusta tornou a pensar no pedido de Gomes. O prazo poupava dinheiro e preservava a aparência; Adelaide continuava à espera de uma resposta.";
  return scene.text;
}

function discoverScene(index) {
  const discoveries = { 1: "vasconcelos", 2: "adelaide", 6: "gomes", 8: "carlota", 9: "adelaidePressure", 11: "augusta", 12: "secret" };
  const clue = discoveries[index];
  if (clue) state.pistas[clue] = true;
}

function showEnding(endingId) {
  const ending = endings[endingId];
  unlockEnding(endingId);
  sessionStorage.setItem("augustaHasFinished", "true");
  document.getElementById("chapter-name").textContent = "Conclusão";
  document.getElementById("scene-counter").textContent = `Cena ${scenes.length + 1} de ${scenes.length + 1}`;
  sceneCard.className = "scene-card is-ending";
  sceneCard.innerHTML = `
    <div class="ending-symbol" aria-hidden="true">✦</div>
    <p class="eyebrow">O desfecho desta história</p>
    <h2 class="ending-title">${ending.title}</h2>
    <div class="ending-copy">${ending.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
    <p class="ending-reason"><strong>Por que este final?</strong> ${endingReasons[endingId]}</p>
    <section class="journey-summary" aria-label="Resumo da partida">
      <h3>Seu percurso</h3>
      <div class="summary-indicators"><span>Saldo final <strong>${state.dinheiro} contos</strong></span><span>Reputação <strong>${"★".repeat(state.reputacao)}${"☆".repeat(3 - state.reputacao)}</strong></span><span>Adelaide <strong>${"★".repeat(state.relacaoAdelaide)}${"☆".repeat(3 - state.relacaoAdelaide)}</strong></span><span>Confiança <strong>${"★".repeat(state.confianca)}${"☆".repeat(3 - state.confianca)}</strong></span></div>
      <ol class="decision-summary">${state.decisoes.map((decision) => `<li><span>${decision.pergunta}</span><strong>${decision.escolha}</strong><small>${decision.resultado} Saldo após a decisão: ${decision.saldo} contos.</small></li>`).join("")}</ol>
    </section>
    <p class="ending-educational">Esta adaptação apresenta elementos do conto de Machado de Assis e acrescenta escolhas interativas para fins educacionais.</p>
    <p class="ending-mark">FIM</p>
    <div class="ending-actions"><button class="button button-primary" data-action="restart">Jogar novamente</button><button class="button button-secondary" data-action="menu">Voltar ao menu</button></div>`;
}

function renderGalleryList() {
  const unlocked = new Set(getUnlockedEndings());
  document.getElementById("gallery-content").innerHTML = Object.entries(endings).map(([id, ending]) => {
    if (!unlocked.has(id)) {
      return `<article class="gallery-entry gallery-locked" aria-label="${ending.title}, bloqueado"><span class="gallery-lock" aria-hidden="true">🔒</span><h3>${ending.title}</h3></article>`;
    }
    return `<article class="gallery-entry"><div><h3>${ending.title}</h3><p>${endingDescriptions[id]}</p></div><button class="button button-secondary gallery-read-button" data-ending-preview="${id}">Ler final <span aria-hidden="true">→</span></button></article>`;
  }).join("");
  document.getElementById("gallery-back").classList.add("is-hidden");
}

function renderGalleryEnding(endingId) {
  const ending = endings[endingId];
  document.getElementById("gallery-content").innerHTML = `<article class="gallery-full-ending"><p class="eyebrow">Final desbloqueado</p><h3>${ending.title}</h3>${ending.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}<p class="gallery-ending-reason"><strong>Por que este final?</strong> ${endingReasons[endingId]}</p><p class="gallery-educational">Esta adaptação apresenta elementos do conto de Machado de Assis e acrescenta escolhas interativas para fins educacionais.</p></article>`;
  document.getElementById("gallery-back").classList.remove("is-hidden");
  document.getElementById("gallery-back").focus();
}

function openGallery() {
  previousGalleryFocus = document.activeElement;
  renderGalleryList();
  galleryModal.classList.remove("is-hidden");
  document.getElementById("close-gallery").focus();
}

function closeGallery() {
  galleryModal.classList.add("is-hidden");
  if (previousGalleryFocus instanceof HTMLElement) previousGalleryFocus.focus();
}

function showMenu() {
  gameScreen.classList.add("is-hidden");
  menuScreen.classList.remove("is-hidden");
  state.ending = null;
}

function closeAbout() {
  aboutModal.classList.add("is-hidden");
  document.getElementById("about-button").focus();
}

function openCharacters() {
  previousCharacterFocus = document.activeElement;
  renderCharacterNotes();
  charactersPanel.classList.remove("is-hidden");
  document.getElementById("close-characters").focus();
}

function closeCharacters() {
  charactersPanel.classList.add("is-hidden");
  if (previousCharacterFocus instanceof HTMLElement) previousCharacterFocus.focus();
}

function renderCharacterNotes() {
  const monograms = { Augusta: "DA", Vasconcelos: "V", Adelaide: "A", Gomes: "G", Carlota: "C" };
  document.getElementById("character-list").innerHTML = characterProfiles.map((profile) => {
    const clue = state.pistas[profile.clueKey]
      ? `<p class="character-clue"><span>Pista anotada</span>${profile.clue}</p>`
      : `<p class="character-locked">Ainda não há uma pista registrada. Continue ouvindo as conversas.</p>`;
    return `<article class="character-note"><span class="note-monogram ${profile.id.toLowerCase()}-note">${monograms[profile.id]}</span><div><h3>${profile.name}</h3><span class="character-note-role">${profile.role}</span><p>${profile.about}</p>${clue}</div></article>`;
  }).join("");
}

function skipKnownScenes() {
  if (sessionStorage.getItem("augustaHasFinished") !== "true") return;
  let target = state.sceneIndex + 1;
  while (target < scenes.length - 1 && !scenes[target].choices && scenes[target].special !== "pause" && scenes[target].special !== "reveal") {
    discoverScene(target);
    target += 1;
  }
  if (target > state.sceneIndex) {
    state.sceneIndex = target;
    state.choiceMade = false;
    renderScene();
  }
}

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("about-button").addEventListener("click", () => {
  aboutModal.classList.remove("is-hidden");
  document.getElementById("close-about").focus();
});
document.getElementById("close-about").addEventListener("click", closeAbout);
document.getElementById("about-done").addEventListener("click", closeAbout);
aboutModal.addEventListener("click", (event) => { if (event.target === aboutModal) closeAbout(); });
document.getElementById("gallery-button").addEventListener("click", openGallery);
document.getElementById("close-gallery").addEventListener("click", closeGallery);
document.getElementById("gallery-menu").addEventListener("click", closeGallery);
document.getElementById("gallery-back").addEventListener("click", () => {
  renderGalleryList();
  document.querySelector(".gallery-read-button")?.focus();
});
document.getElementById("gallery-content").addEventListener("click", (event) => {
  const button = event.target.closest("[data-ending-preview]");
  if (button) renderGalleryEnding(button.dataset.endingPreview);
});
galleryModal.addEventListener("click", (event) => { if (event.target === galleryModal) closeGallery(); });
document.getElementById("characters-button").addEventListener("click", openCharacters);
document.getElementById("close-characters").addEventListener("click", closeCharacters);
document.getElementById("characters-done").addEventListener("click", closeCharacters);
charactersPanel.addEventListener("click", (event) => { if (event.target === charactersPanel) closeCharacters(); });
document.getElementById("skip-known-button").addEventListener("click", skipKnownScenes);
document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "restart") startGame();
  if (action === "menu") showMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !aboutModal.classList.contains("is-hidden")) closeAbout();
  else if (event.key === "Escape" && !galleryModal.classList.contains("is-hidden")) closeGallery();
  else if (event.key === "Escape" && !charactersPanel.classList.contains("is-hidden")) closeCharacters();
});
