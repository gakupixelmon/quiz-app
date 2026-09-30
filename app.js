const CATEGORY_TREE = [
  {
    id: 'world-heritage',
    label: '世界遺産',
    icon: '◇',
    description: '人類共通の宝物をめぐる問題',
    children: [
      {
        id: 'japan',
        label: '日本',
        icon: '〒',
        description: '日本各地の世界遺産',
        children: [
          {
            id: 'jomon',
            label: '北海道・北東北の縄文遺跡群',
            icon: '土',
            description: '1万年以上にわたる縄文文化の遺跡群',
            children: [],
          },
        ],
      },
    ],
  },
];

const DEFAULT_QUESTIONS = [
  {
    id: 'jomon-001', categoryId: 'jomon',
    prompt: '北海道・北東北の縄文遺跡群は、北海道、青森県、岩手県、そしてもう一つどの県にまたがる遺跡群でしょう？',
    answer: '秋田県', answerHiragana: 'あきたけん', acceptedAnswers: ['秋田', '秋田県'], acceptedAnswersHiragana: ['あきた'],
    explanation: '構成資産は北海道・青森県・岩手県・秋田県の17遺跡です。', source: '文化庁 世界遺産オンライン',
  },
  {
    id: 'jomon-002', categoryId: 'jomon',
    prompt: '北海道・北東北の縄文遺跡群が、世界文化遺産に登録されたのは西暦何年でしょう？',
    answer: '2021年', answerHiragana: 'にせんにじゅういちねん', acceptedAnswers: ['2021', '2021年'], acceptedAnswersHiragana: ['にせんにじゅういち'],
    explanation: '2021年7月、ユネスコ世界遺産委員会で登録されました。', source: '文化庁 世界遺産オンライン',
  },
  {
    id: 'jomon-003', categoryId: 'jomon',
    prompt: '青森県にある、国内最大級の縄文集落跡として知られる三内丸山遺跡は、何時代の遺跡でしょう？',
    answer: '縄文時代', answerHiragana: 'じょうもんじだい', acceptedAnswers: ['縄文', '縄文時代'], acceptedAnswersHiragana: ['じょうもん'],
    explanation: '三内丸山遺跡は、約5900〜4200年前の縄文時代の大規模集落跡です。', source: '青森県 三内丸山遺跡センター',
  },
  {
    id: 'jomon-004', categoryId: 'jomon',
    prompt: '三内丸山遺跡で発見された、6本の柱の跡から復元された大型の建物を何と呼ぶでしょう？',
    answer: '大型掘立柱建物', answerHiragana: 'おおがたほったてばしらたてもの', acceptedAnswers: ['大型掘立柱建物', '大型掘立柱建物跡'], acceptedAnswersHiragana: ['おおがたほったてばしらたてものあと'],
    explanation: '直径約1メートルの柱を使った、長さ約32メートルの建物です。', source: '青森県 三内丸山遺跡センター',
  },
  {
    id: 'jomon-005', categoryId: 'jomon',
    prompt: '青森県の大湯環状列石を構成する二つの環状列石のうち、万座遺跡ともう一つは何遺跡でしょう？',
    answer: '野中堂遺跡', answerHiragana: 'のなかどういせき', acceptedAnswers: ['野中堂', '野中堂遺跡'], acceptedAnswersHiragana: ['のなかどう'],
    explanation: '大湯環状列石は、万座環状列石と野中堂環状列石からなります。', source: '鹿角市 大湯環状列石',
  },
  {
    id: 'jomon-006', categoryId: 'jomon',
    prompt: '岩手県の御所野遺跡で見つかった、地面を掘りくぼめて建てる縄文時代の住居を何というでしょう？',
    answer: '竪穴建物', answerHiragana: 'たてあなたてもの', acceptedAnswers: ['竪穴建物', '竪穴住居'], acceptedAnswersHiragana: ['たてあなじゅうきょ'],
    explanation: '御所野遺跡では、焼失した竪穴建物の跡が良好な状態で残っています。', source: '一戸町 御所野縄文博物館',
  },
  {
    id: 'jomon-007', categoryId: 'jomon',
    prompt: '北海道の垣ノ島遺跡で見つかった、足の形が押しつけられた土製品を何と呼ぶでしょう？',
    answer: '足形付土版', answerHiragana: 'あしがたつきどばん', acceptedAnswers: ['足形付土版', '足形土版'], acceptedAnswersHiragana: ['あしがたどばん'],
    explanation: '子どもの足形をつけたと考えられる土版で、当時の習俗を伝えます。', source: '函館市教育委員会',
  },
  {
    id: 'jomon-008', categoryId: 'jomon',
    prompt: '北海道のキウス周堤墓群に見られる、土を円形に盛り上げて墓域を囲んだ遺構を何というでしょう？',
    answer: '周堤墓', answerHiragana: 'しゅうていぼ', acceptedAnswers: ['周堤墓', 'しゅうていぼ'],
    explanation: '大規模な土木工事によってつくられた、縄文時代後期の集団墓です。', source: '千歳市 キウス周堤墓群',
  },
  {
    id: 'jomon-009', categoryId: 'jomon',
    prompt: '青森県の大平山元I遺跡から出土した、約1万6500年前のものとされる遺物は何でしょう？',
    answer: '土器', answerHiragana: 'どき', acceptedAnswers: ['土器', '無文土器'], acceptedAnswersHiragana: ['むもんどき'],
    explanation: '出土した土器片は、土器の使用開始時期を考える重要な資料です。', source: '外ヶ浜町 大平山元I遺跡',
  },
  {
    id: 'jomon-010', categoryId: 'jomon',
    prompt: '青森県の亀ヶ岡石器時代遺跡から出土した、目の部分が特徴的な土偶を何と呼ぶでしょう？',
    answer: '遮光器土偶', answerHiragana: 'しゃこうきどぐう', acceptedAnswers: ['遮光器土偶', 'しゃこうきどぐう'],
    explanation: '大きく表現された目が、遮光器に似ていることから名づけられました。', source: 'つがる市教育委員会',
  },
  {
    id: 'jomon-011', categoryId: 'jomon',
    prompt: '北海道・北東北の縄文遺跡群を構成する世界遺産の構成資産は、全部で何遺跡でしょう？',
    answer: '17遺跡', answerHiragana: 'じゅうなないせき', acceptedAnswers: ['17', '17遺跡', '十七遺跡'], acceptedAnswersHiragana: ['じゅうなな'],
    explanation: '北海道・北東北4道県に所在する17遺跡で構成されています。', source: '文化庁 世界遺産オンライン',
  },
  {
    id: 'jomon-012', categoryId: 'jomon',
    prompt: '北海道・北東北の縄文遺跡群が示す、狩猟・採集・漁労を基盤とした文化は、一般に何文化と呼ばれるでしょう？',
    answer: '縄文文化', answerHiragana: 'じょうもんぶんか', acceptedAnswers: ['縄文', '縄文文化'], acceptedAnswersHiragana: ['じょうもん'],
    explanation: '定住しながら自然資源を持続的に利用した文化の姿を伝えています。', source: '文化庁 世界遺産オンライン',
  },
  {
    id: 'jomon-013', categoryId: 'jomon',
    prompt: '秋田県の伊勢堂岱遺跡で確認されている、石を環状に配置した遺構は全部でいくつでしょう？',
    answer: '4つ', answerHiragana: 'よっつ', acceptedAnswers: ['4', '4つ', '四つ'], acceptedAnswersHiragana: ['よん'],
    explanation: '伊勢堂岱遺跡では、国内で唯一、4つの環状列石が同じ場所で確認されています。', source: '北秋田市 伊勢堂岱縄文館',
  },
  {
    id: 'jomon-014', categoryId: 'jomon',
    prompt: '北海道の北黄金貝塚などに見られる、貝殻や動物の骨などが堆積した遺構を何というでしょう？',
    answer: '貝塚', answerHiragana: 'かいづか', acceptedAnswers: ['貝塚', 'かいづか'],
    explanation: '貝塚は、当時の食生活や自然環境を知ることができる重要な遺跡です。', source: '伊達市 北黄金貝塚情報センター',
  },
  {
    id: 'jomon-015', categoryId: 'jomon',
    prompt: '縄文時代の人々が、土器や木製品などに塗っていたことでも知られる天然の樹液は何でしょう？',
    answer: '漆', answerHiragana: 'うるし', acceptedAnswers: ['漆', 'うるし'],
    explanation: '北海道・北東北の遺跡からは、漆を使った装飾品や容器が見つかっています。', source: '文化庁 世界遺産オンライン',
  },
];

const STORAGE_KEY = 'hayaooshi-custom-questions-v1';
const NAME_KEY = 'hayaooshi-player-name-v1';
const PREPARE_DELAY_MS = 1200;
const SKIP_DELAY_MS = 8000;
const SKIP_RESULT_DELAY_MS = 3500;
const app = document.querySelector('#app');
const modalRoot = document.querySelector('#modalRoot');
const connectionText = document.querySelector('#connectionText');
const toast = document.querySelector('#toast');

let questionBank = [...DEFAULT_QUESTIONS, ...loadCustomQuestions()];
let selectedCategoryId = 'jomon';
let view = 'home';
let expanded = new Set(['world-heritage', 'japan']);
let game = null;
let revealTimer = null;
let prepareTimer = null;
let skipTimer = null;
let skipCountdownTimer = null;
let skipAdvanceTimer = null;
let toastTimer = null;
let session = null;

function loadCustomQuestions() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored.filter(isValidQuestion) : [];
  } catch {
    return [];
  }
}

function saveCustomQuestions() {
  const custom = questionBank.filter((question) => question.custom);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
}

function isValidQuestion(question) {
  return Boolean(
    question && typeof question.id === 'string' && typeof question.categoryId === 'string' &&
    typeof question.prompt === 'string' && question.prompt.trim() &&
    typeof question.answer === 'string' && question.answer.trim() &&
    isHiragana(question.answerHiragana || (isHiragana(question.answer) ? question.answer : '')) &&
    getCategory(question.categoryId),
  );
}

function isHiragana(value) {
  return /^[ぁ-ゖー]+$/u.test(String(value || '').trim());
}

function getCategory(id, nodes = CATEGORY_TREE) {
  for (const node of nodes) {
    if (node.id === id) return node;
    const found = getCategory(id, node.children || []);
    if (found) return found;
  }
  return null;
}

function getCategoryPath(id, nodes = CATEGORY_TREE, path = []) {
  for (const node of nodes) {
    const nextPath = [...path, node];
    if (node.id === id) return nextPath;
    const found = getCategoryPath(id, node.children || [], nextPath);
    if (found) return found;
  }
  return [];
}

function flattenCategories(nodes = CATEGORY_TREE) {
  return nodes.flatMap((node) => [node, ...flattenCategories(node.children || [])]);
}

function questionsForCategory(categoryId) {
  const descendants = new Set();
  const collect = (id) => {
    const category = getCategory(id);
    if (!category) return;
    descendants.add(category.id);
    (category.children || []).forEach((child) => collect(child.id));
  };
  collect(categoryId);
  return questionBank.filter((question) => descendants.has(question.categoryId));
}

function getQuestionCount(categoryId) {
  return questionsForCategory(categoryId).length;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[character]));
}

function shuffle(items) {
  const output = [...items];
  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

function getName() {
  return localStorage.getItem(NAME_KEY) || 'プレイヤー';
}

function saveName(name) {
  const trimmed = name.trim().slice(0, 16) || 'プレイヤー';
  localStorage.setItem(NAME_KEY, trimmed);
  return trimmed;
}

function selectedCategory() {
  return getCategory(selectedCategoryId) || CATEGORY_TREE[0];
}

function setConnection(status, label) {
  connectionText.textContent = label;
  connectionText.parentElement.classList.toggle('online', status === 'online');
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function render() {
  if (view === 'home') app.innerHTML = renderHome();
  if (view === 'lobby') app.innerHTML = renderLobby();
  if (view === 'game') app.innerHTML = renderGame();
}

function renderHome() {
  const category = selectedCategory();
  const count = getQuestionCount(category.id);
  return `
    <section class="hero">
      <div>
        <span class="eyebrow">private quiz room / 01</span>
        <h1>答えが見えたら、<br /><em>いちばんに。</em></h1>
        <p>問題文が一文字ずつ開いていく、みんはや風の早押しクイズ。<br />カテゴリを選んで、ひとりでも、みんなでも遊べます。</p>
      </div>
      <aside class="hero-note">
        <strong>今日のテーマ</strong>
        北海道・北東北の<br />縄文遺跡群
      </aside>
    </section>

    <section aria-labelledby="categoryTitle">
      <div class="section-heading">
        <div>
          <span class="eyebrow">choose a shelf</span>
          <h2 id="categoryTitle">カテゴリを選ぶ</h2>
        </div>
        <p>階層の途中からでもスタートできます</p>
      </div>
      <div class="category-layout">
        <div class="category-tree">${CATEGORY_TREE.map((node) => renderCategoryNode(node)).join('')}</div>
        <aside class="selection-card">
          <span class="mini-label">selected category</span>
          <h3>${escapeHtml(category.label)}</h3>
          <p>${escapeHtml(category.description || 'このカテゴリ以下の問題が出題されます。')}</p>
          <div class="stat"><span>出題できる問題</span><strong>${count} 問</strong></div>
          <div class="stat"><span>出題方法</span><strong>ランダム</strong></div>
          <div class="button-stack" style="margin-top: 18px">
            <button class="primary-button wide" data-action="start-solo">ひとりで開始</button>
            <button class="secondary-button wide" data-action="open-lobby">オンライン対戦へ</button>
          </div>
        </aside>
      </div>
    </section>

    <section class="modes" aria-labelledby="modeTitle">
      <div class="section-heading">
        <div><span class="eyebrow">two ways to play</span><h2 id="modeTitle">遊び方</h2></div>
      </div>
      <div class="mode-grid">
        <button class="mode-card" data-action="start-solo"><span class="mode-number">01 / SOLO</span><h3>ひとりで練習</h3><p>自分のペースで問題を読み、答えを確認します。</p></button>
        <button class="mode-card" data-action="open-lobby"><span class="mode-number">02 / ROOM</span><h3>オンライン対戦</h3><p>部屋を作って、ルームコードを身内に共有します。</p></button>
        <button class="mode-card" data-action="manage"><span class="mode-number">03 / LIBRARY</span><h3>問題を追加</h3><p>問題追加フォームやJSON入出力で、いつでも拡張できます。</p></button>
      </div>
    </section>
  `;
}

function renderCategoryNode(node, depth = 0) {
  const hasChildren = (node.children || []).length > 0;
  const isOpen = expanded.has(node.id);
  const selected = node.id === selectedCategoryId;
  return `
    <div class="category-node">
      <div class="category-row ${selected ? 'selected' : ''}" style="padding-left: ${10 + depth * 6}px">
        <button class="expand ${hasChildren ? '' : 'hidden'}" data-action="toggle-category" data-category-id="${node.id}" aria-label="展開・折りたたみ">${isOpen ? '⌄' : '›'}</button>
        <span class="category-icon">${escapeHtml(node.icon || '・')}</span>
        <button data-action="select-category" data-category-id="${node.id}">${escapeHtml(node.label)}</button>
        <span class="category-meta">${getQuestionCount(node.id)}問</span>
        <button class="category-action" data-action="start-category" data-category-id="${node.id}">このカテゴリで開始</button>
      </div>
      ${hasChildren && isOpen ? `<div class="children">${node.children.map((child) => renderCategoryNode(child, depth + 1)).join('')}</div>` : ''}
    </div>
  `;
}

function renderLobby() {
  const category = selectedCategory();
  const isHost = session?.role === 'host';
  const isGuest = session?.role === 'guest';
  const roomCode = session?.roomCode || '接続準備中…';
  const guestName = session?.guestName || '参加者を待っています';
  return `
    <div class="screen-heading">
      <button class="back-link" data-action="go-home">← カテゴリ選択へ戻る</button>
      <span class="eyebrow">online room / lobby</span>
      <h1>みんなで早押し</h1>
      <p>${isGuest ? 'ホストが選んだカテゴリで対戦します。' : '部屋を作って、ルームコードを身内に共有しましょう。'}</p>
    </div>
    <div class="lobby-grid">
      <section class="lobby-card">
        <h2>部屋を作る</h2>
        <p>あなたが出題者になり、問題の進行と正誤判定を担当します。</p>
        <label class="field-label" for="hostName">プレイヤー名</label>
        <input class="text-input" id="hostName" maxlength="16" value="${escapeHtml(getName())}" placeholder="なまえ" ${isHost ? 'disabled' : ''} />
        ${isHost ? `
          <div class="room-code"><div><small>このコードを共有</small><strong>${escapeHtml(roomCode)}</strong></div><button class="copy-button" data-action="copy-code">コピー</button></div>
          <p class="hint">同じコードを入力した人が、この部屋に参加できます。別の端末とはインターネット経由で接続されます。</p>
          <div class="player-list"><h3>参加者</h3>${renderPlayer('host', getName(), 'ホスト')} ${session?.connection ? renderPlayer('guest', guestName, '接続済み') : ''}</div>
          <button class="primary-button wide" data-action="start-online" ${session?.connection ? '' : 'disabled'}>${session?.connection ? `${escapeHtml(category.label)}で対戦開始` : '参加者を待っています'}</button>
        ` : `
          <button class="primary-button wide" data-action="create-room">部屋を作る</button>
          <span class="hint">PeerJSの無料シグナリングを使います。アカウント登録は不要です。</span>
        `}
      </section>
      <section class="lobby-card">
        <h2>部屋に参加する</h2>
        <p>ホストから受け取ったルームコードを入力してください。</p>
        ${isGuest ? `<label class="field-label" for="guestName">プレイヤー名</label><input class="text-input" id="guestName" maxlength="16" value="${escapeHtml(getName())}" placeholder="なまえ" disabled /><div class="player-list"><h3>参加中</h3>${renderPlayer('guest', getName(), '参加中')}<p class="online-status">ホストがゲームを開始するまで待っています。</p></div><button class="ghost-button wide" data-action="leave-room">退出する</button>` : `<form id="joinForm"><label class="field-label" for="guestName">プレイヤー名</label><input class="text-input" id="guestName" maxlength="16" value="${escapeHtml(getName())}" placeholder="なまえ" /><label class="field-label" for="roomCodeInput">ルームコード</label><input class="text-input code-input" id="roomCodeInput" maxlength="80" value="" placeholder="ホストから受け取ったコード" /><button class="secondary-button wide" type="submit">コードで参加する</button></form>`}
      </section>
    </div>
  `;
}

function renderPlayer(type, name, status) {
  const initial = escapeHtml((name || '?').slice(0, 1).toUpperCase());
  return `<div class="player"><span class="player-avatar">${initial}</span><span>${escapeHtml(name)}</span><span class="player-status">${escapeHtml(status)}</span></div>`;
}

function renderGame() {
  if (!game?.current) return '<div class="empty-state">問題を準備しています…</div>';
  const category = getCategory(game.categoryId) || selectedCategory();
  const playerId = currentPlayerId();
  const isWinner = game.winner === playerId;
  const isHost = session?.role === 'host' || game.mode === 'solo';
  const status = game.status;
  const answerPanel = renderAnswerPanel(isWinner, isHost);
  return `
    <div class="game-header">
      <div class="crumb"><button class="back-link" data-action="go-home">← 終了</button><span>　/　${escapeHtml(category.label)}</span></div>
      <div class="score-pill"><span>${game.mode === 'online' ? 'SCORE' : 'SOLO SCORE'}</span><strong>${game.scores[playerId] || 0}</strong></div>
    </div>
    <div class="game-layout">
      <section class="quiz-card">
        <div class="quiz-meta"><span>ROUND ${String(game.round || 1).padStart(2, '0')}</span><span class="live-badge"><i></i><span id="questionStatus">${escapeHtml(statusLabel())}</span></span></div>
        <div class="question-area">
          <span class="question-label">QUESTION / ${game.mode === 'online' ? 'LIVE MATCH' : 'PRACTICE'}</span>
          <div class="question-text" id="questionText">${renderQuestionText()}${game.status === 'preparing' ? '' : '<span class="cursor"></span>'}</div>
          <p class="question-source" id="questionSource">出典：${escapeHtml(game.current.source || '登録なし')}</p>
          <div class="skip-notice ${game.status === 'open' ? '' : 'hidden'}" id="skipNotice">残り <strong id="skipSeconds">${game.skipRemaining ?? 8}</strong> 秒でスキップ</div>
        </div>
        <div class="quiz-actions">
          <button class="buzz-button" id="buzzButton" data-action="buzz" ${buzzDisabled() ? 'disabled' : ''}>${buzzLabel()}</button>
          ${status === 'answering' && isWinner ? '' : status === 'finished' ? `<button class="secondary-button reveal-button" data-action="next-round">${isHost ? '次の問題へ' : 'ホストを待つ'}</button>` : ''}
        </div>
        <div class="answer-panel" id="answerPanel">${answerPanel}</div>
      </section>
      <aside>
        <div class="side-panel"><h3>このラウンド</h3><div class="round-list">${renderRoundList()}</div></div>
        <div class="side-panel"><h3>${game.mode === 'online' ? 'オンライン対戦' : 'ひとりで練習'}</h3><p class="online-status">${onlineStatusText()}</p>${game.mode === 'online' ? `<div class="player-list">${renderPlayer('host', game.playerNames.host || 'ホスト', game.winner === 'host' ? '回答中' : '参加中')}${game.playerNames.guest ? renderPlayer('guest', game.playerNames.guest, game.winner === 'guest' ? '回答中' : '参加中') : ''}</div>` : ''}</div>
      </aside>
    </div>
  `;
}

function renderQuestionText() {
  if (game.status === 'preparing') return `<span class="question-intro">第${String(game.round || 1).padStart(2, '0')}問</span>`;
  return escapeHtml((game.current.prompt || '').slice(0, game.revealed || 0));
}

function renderRoundList() {
  const total = Math.min(5, Math.max(3, game.queue?.length || 3));
  return Array.from({ length: total }, (_, index) => {
    const roundNumber = (game.round || 1) + index;
    const className = index === 0 ? 'current' : '';
    return `<div class="round-item ${className}"><i></i><span>ROUND ${String(roundNumber).padStart(2, '0')}</span>${index === 0 ? '<span style="margin-left:auto">NOW</span>' : ''}</div>`;
  }).join('');
}

function renderAnswerPanel(isWinner, isHost) {
  if (game.status === 'answering' || game.status === 'checking') {
    if (isWinner) {
      return `<form class="answer-form" id="answerForm"><input class="text-input" id="answerInput" autocomplete="off" inputmode="hiragana" lang="ja" pattern="[ぁ-ゖー]+" placeholder="ひらがなで入力" ${game.status === 'checking' ? 'disabled' : ''} required /><button class="primary-button" type="submit" ${game.status === 'checking' ? 'disabled' : ''}>回答</button></form><span class="hint">ひらがなのみ・Enterでも送信できます</span>`;
    }
    return `<p class="online-status">${escapeHtml(winnerName())}さんが回答を考えています…</p>`;
  }
  if (game.status === 'finished') {
    const correct = game.answerResult?.correct;
    const resultText = correct ? `正解！ ${escapeHtml(winnerName())}さんに1ポイント` : game.answerResult?.skipped ? '時間切れ。答えを表示しています。' : '時間切れです';
    const nextHint = game.answerResult?.skipped ? '<br /><span>3.5秒後に次の問題へ自動移行します。</span>' : '';
    return `<div class="answer-result ${correct ? 'success' : 'error'}">${resultText}${nextHint}<br /><strong>答え：${escapeHtml(game.current.answer || '—')}</strong>${game.current.explanation ? `<br /><span>${escapeHtml(game.current.explanation)}</span>` : ''}</div>`;
  }
  if (game.answerResult?.wrong) return `<p class="online-status">${escapeHtml(game.answerResult.input || '')} は不正解。続きをどうぞ。</p>`;
  return `<p class="online-status">${statusHint()}${game.mode === 'solo' ? '　スペースキーでも押せます。' : ''}</p>`;
}

function statusHint() {
  if (game.status === 'preparing') return `第${game.round}問。まもなく問題文が開きます。`;
  if (game.status === 'revealing') return '問題文が開いています。';
  if (game.status === 'open') return `全文表示からあと${game.skipRemaining ?? 8}秒。すぐボタンを押してください。`;
  if (game.status === 'buzzing') return '判定を待っています…';
  return '次の問題を待っています。';
}

function winnerName() {
  return game.playerNames?.[game.winner] || 'プレイヤー';
}

function currentPlayerId() {
  if (game?.mode === 'solo') return 'solo';
  return session?.role === 'guest' ? 'guest' : 'host';
}

function statusLabel() {
  if (!game) return '';
  if (game.status === 'preparing') return 'GET READY';
  if (game.status === 'revealing') return '問題文 OPENING';
  if (game.status === 'open') return `BUZZ NOW · ${game.skipRemaining ?? 8}秒`;
  if (game.status === 'buzzing') return 'CONNECTING';
  if (game.status === 'answering' || game.status === 'checking') return `${winnerName()} IS ANSWERING`;
  if (game.status === 'finished') return 'ANSWER REVEALED';
  return 'WAITING';
}

function onlineStatusText() {
  if (!game || game.mode === 'solo') return '自分のペースで問題文を開いていきます。';
  if (game.status === 'answering' || game.status === 'checking') return `${winnerName()}さんが回答中です。`;
  if (game.status === 'finished') return 'このラウンドの答えが出ました。';
  return 'ホストの画面と問題文がリアルタイムに同期しています。';
}

function buzzDisabled() {
  return !game || !['revealing', 'open'].includes(game.status);
}

function buzzLabel() {
  if (game.status === 'preparing') return '問題文を待っています…';
  if (game.status === 'answering' || game.status === 'checking') return game.winner === currentPlayerId() ? '回答入力中…' : `${winnerName()}さんが回答中`;
  if (game.status === 'finished') return 'ラウンド終了';
  if (game.status === 'buzzing') return '判定中…';
  return 'わかった！　早押し';
}

function startSoloGame() {
  stopRevealTimer();
  const questions = questionsForCategory(selectedCategoryId);
  if (!questions.length) {
    showToast('このカテゴリにはまだ問題がありません。');
    return;
  }
  game = {
    mode: 'solo', categoryId: selectedCategoryId, queue: shuffle(questions), queueIndex: 0,
    round: 0, scores: { solo: 0 }, playerNames: { solo: getName() }, current: null,
  };
  view = 'game';
  startSoloRound();
}

function startSoloRound() {
  stopRevealTimer();
  const next = nextQuestion();
  if (!next) return;
  game.current = next;
  game.round += 1;
  game.revealed = 0;
  game.skipRemaining = 0;
  game.status = 'preparing';
  game.winner = null;
  game.answerResult = null;
  render();
  startRevealAfterPause();
}

function nextQuestion() {
  if (!game.queue.length || game.queueIndex >= game.queue.length) {
    game.queue = shuffle(questionsForCategory(game.categoryId));
    game.queueIndex = 0;
  }
  const question = game.queue[game.queueIndex];
  game.queueIndex += 1;
  return question;
}

function startRevealTimer() {
  stopRevealInterval();
  revealTimer = setInterval(() => {
    if (!game || game.status !== 'revealing') return;
    game.revealed = Math.min(game.current.prompt.length, game.revealed + 1);
    updateQuestionUI();
    if (game.revealed >= game.current.prompt.length) {
      stopRevealInterval();
      game.status = 'open';
      game.skipRemaining = 8;
      updateQuestionUI();
      if (game.mode === 'online' && session?.role === 'host') broadcastState();
      startSkipTimer();
    } else if (game.mode === 'online' && session?.role === 'host') {
      broadcastState();
    }
  }, 115);
}

function startRevealAfterPause() {
  if (!game) return;
  if (prepareTimer) clearTimeout(prepareTimer);
  prepareTimer = setTimeout(() => {
    prepareTimer = null;
    if (!game || game.status !== 'preparing') return;
    game.status = 'revealing';
    updateQuestionUI();
    if (game.mode === 'online' && session?.role === 'host') broadcastState();
    startRevealTimer();
  }, PREPARE_DELAY_MS);
}

function startSkipTimer() {
  if (!game || game.status !== 'open') return;
  if (skipTimer) clearTimeout(skipTimer);
  if (skipCountdownTimer) clearInterval(skipCountdownTimer);
  game.skipRemaining = 8;
  updateQuestionUI();
  skipCountdownTimer = setInterval(() => {
    if (!game || game.status !== 'open') return;
    game.skipRemaining = Math.max(0, (game.skipRemaining || 1) - 1);
    updateQuestionUI();
    if (game.mode === 'online' && session?.role === 'host') broadcastState();
  }, 1000);
  skipTimer = setTimeout(() => {
    skipTimer = null;
    if (skipCountdownTimer) clearInterval(skipCountdownTimer);
    skipCountdownTimer = null;
    skipCurrentQuestion();
  }, SKIP_DELAY_MS);
}

function skipCurrentQuestion() {
  if (!game || game.status !== 'open') return;
  stopRevealTimer();
  game.skipRemaining = 0;
  game.status = 'finished';
  game.winner = null;
  game.answerResult = { correct: false, skipped: true };
  if (game.mode === 'online' && session?.role === 'host') broadcastState();
  showToast('時間切れです。答えを表示して次の問題へ進みます。');
  render();
  skipAdvanceTimer = setTimeout(() => {
    skipAdvanceTimer = null;
    if (!game || game.status !== 'finished' || !game.answerResult?.skipped) return;
    if (game.mode === 'solo') startSoloRound();
    if (game.mode === 'online' && session?.role === 'host') startOnlineRound();
  }, SKIP_RESULT_DELAY_MS);
}

function stopRevealTimer() {
  stopRevealInterval();
  if (prepareTimer) clearTimeout(prepareTimer);
  prepareTimer = null;
  if (skipTimer) clearTimeout(skipTimer);
  skipTimer = null;
  if (skipCountdownTimer) clearInterval(skipCountdownTimer);
  skipCountdownTimer = null;
  if (skipAdvanceTimer) clearTimeout(skipAdvanceTimer);
  skipAdvanceTimer = null;
}

function stopRevealInterval() {
  if (revealTimer) clearInterval(revealTimer);
  revealTimer = null;
}

function updateQuestionUI() {
  if (view !== 'game' || !game?.current) return;
  const questionText = document.querySelector('#questionText');
  const questionStatus = document.querySelector('#questionStatus');
  const buzzButton = document.querySelector('#buzzButton');
  const skipNotice = document.querySelector('#skipNotice');
  const skipSeconds = document.querySelector('#skipSeconds');
  if (questionText) questionText.innerHTML = `${renderQuestionText()}${game.status === 'preparing' ? '' : '<span class="cursor"></span>'}`;
  if (questionStatus) questionStatus.textContent = statusLabel();
  if (skipNotice) skipNotice.classList.toggle('hidden', game.status !== 'open');
  if (skipSeconds) skipSeconds.textContent = String(game.skipRemaining ?? 8);
  if (buzzButton) {
    buzzButton.disabled = buzzDisabled();
    buzzButton.textContent = buzzLabel();
  }
}

function handleBuzz() {
  if (!game || buzzDisabled()) return;
  if (game.mode === 'solo') {
    stopRevealTimer();
    game.status = 'answering';
    game.winner = 'solo';
    render();
    focusAnswerInput();
    return;
  }
  if (session?.role === 'host') {
    handleHostBuzz('host');
  } else if (session?.connection?.open) {
    game.status = 'buzzing';
    updateQuestionUI();
    send({ type: 'buzz' });
  } else {
    showToast('オンライン接続がありません。');
  }
}

function handleHostBuzz(playerId) {
  if (!game || !['revealing', 'open'].includes(game.status)) return;
  stopRevealTimer();
  game.status = 'answering';
  game.winner = playerId;
  game.answerResult = null;
  broadcastState();
  render();
  if (playerId === 'host') focusAnswerInput();
}

function handleAnswerSubmit(answer) {
  const trimmedAnswer = answer.trim();
  if (!game || !game.current || game.winner !== currentPlayerId() || !trimmedAnswer) return;
  if (!isHiragana(trimmedAnswer)) {
    showToast('解答はひらがなで入力してください。');
    focusAnswerInput();
    return;
  }
  if (game.mode === 'solo' || session?.role === 'host') {
    evaluateAnswer(currentPlayerId(), trimmedAnswer);
  } else if (session?.connection?.open) {
    game.status = 'checking';
    render();
    send({ type: 'answer', answer: trimmedAnswer });
  }
}

function evaluateAnswer(playerId, answer) {
  const correct = [game.current.answerHiragana, ...(game.current.acceptedAnswersHiragana || [])]
    .filter(Boolean)
    .some((target) => normalizeAnswer(target) === normalizeAnswer(answer));
  if (correct) {
    game.scores[playerId] = (game.scores[playerId] || 0) + 1;
    game.answerResult = { correct: true, input: answer };
    game.status = 'finished';
    stopRevealTimer();
  } else {
    game.answerResult = { wrong: true, input: answer };
    game.winner = null;
    game.status = 'revealing';
  }
  if (game.mode === 'online') broadcastState();
  render();
  if (!correct) {
    setTimeout(() => {
      if (game?.status === 'revealing' && game?.current) startRevealTimer();
    }, 900);
  }
}

function normalizeAnswer(value) {
  return String(value || '').toLowerCase().replace(/[\s　、。,.!?！？「」『』（）()［］\[\]・]/g, '');
}

function focusAnswerInput() {
  setTimeout(() => document.querySelector('#answerInput')?.focus(), 40);
}

// ---------- Online room (PeerJS / WebRTC) ----------

function createRoom() {
  if (!window.Peer) {
    showToast('オンライン機能の読み込みに失敗しました。ページを再読み込みしてください。');
    return;
  }
  const name = saveName(document.querySelector('#hostName')?.value || getName());
  cleanupSession();
  session = { role: 'host', peer: null, connection: null, roomCode: '', guestName: '', categoryId: selectedCategoryId, name };
  setConnection('online', '部屋を作成中…');
  render();
  const peer = new window.Peer();
  session.peer = peer;
  peer.on('open', (id) => {
    if (!session) return;
    session.roomCode = id;
    setConnection('online', 'オンライン待機中');
    render();
  });
  peer.on('connection', (connection) => {
    if (session.connection) {
      connection.close();
      showToast('この部屋は2人までです。');
      return;
    }
    session.connection = connection;
    wireConnection(connection);
  });
  peer.on('error', (error) => {
    console.warn('PeerJS error', error);
    showToast(peerErrorMessage(error));
    setConnection('local', 'ローカルモード');
  });
}

function joinRoom() {
  if (!window.Peer) {
    showToast('オンライン機能の読み込みに失敗しました。ページを再読み込みしてください。');
    return;
  }
  const code = (document.querySelector('#roomCodeInput')?.value || '').trim();
  if (!code) {
    showToast('ルームコードを入力してください。');
    return;
  }
  const name = saveName(document.querySelector('#guestName')?.value || getName());
  cleanupSession();
  session = { role: 'guest', peer: null, connection: null, roomCode: code, hostName: 'ホスト', categoryId: selectedCategoryId, name };
  setConnection('online', '接続中…');
  render();
  const peer = new window.Peer();
  session.peer = peer;
  peer.on('open', () => {
    if (!session) return;
    const connection = peer.connect(code, { reliable: true });
    session.connection = connection;
    wireConnection(connection);
  });
  peer.on('error', (error) => {
    console.warn('PeerJS error', error);
    showToast(peerErrorMessage(error));
    setConnection('local', 'ローカルモード');
  });
}

function wireConnection(connection) {
  connection.on('open', () => {
    if (!session) return;
    setConnection('online', 'オンライン接続中');
    if (session.role === 'guest') send({ type: 'hello', name: session.name });
    if (session.role === 'host') sendLobby();
    render();
  });
  connection.on('data', handleNetworkMessage);
  connection.on('close', () => {
    if (!session) return;
    session.connection = null;
    setConnection('online', '相手が退出しました');
    if (view === 'lobby') render();
    showToast('相手との接続が終了しました。');
  });
  connection.on('error', () => showToast('オンライン接続でエラーが発生しました。'));
}

function send(data) {
  if (session?.connection?.open) session.connection.send(data);
}

function broadcastState() {
  if (session?.role !== 'host' || !game) return;
  send({
    type: 'game-state',
    categoryId: game.categoryId,
    round: game.round,
    revealed: game.revealed,
    skipRemaining: game.skipRemaining || 0,
    status: game.status,
    winner: game.winner,
    scores: game.scores,
    playerNames: game.playerNames,
    answerResult: game.answerResult,
    question: { id: game.current.id, prompt: game.current.prompt, source: game.current.source, answer: game.current.answer, explanation: game.current.explanation },
  });
}

function sendLobby() {
  if (!session || session.role !== 'host') return;
  send({ type: 'lobby', categoryId: session.categoryId, hostName: session.name, guestName: session.guestName || '' });
}

function handleNetworkMessage(message) {
  if (!message || !session) return;
  if (message.type === 'hello' && session.role === 'host') {
    session.guestName = String(message.name || '参加者').slice(0, 16);
    sendLobby();
    render();
    return;
  }
  if (message.type === 'lobby' && session.role === 'guest') {
    session.hostName = message.hostName || 'ホスト';
    session.categoryId = message.categoryId || 'jomon';
    selectedCategoryId = session.categoryId;
    setConnection('online', 'オンライン接続中');
    render();
    return;
  }
  if (message.type === 'buzz' && session.role === 'host') {
    handleHostBuzz('guest');
    return;
  }
  if (message.type === 'answer' && session.role === 'host' && game?.status === 'answering' && game.winner === 'guest') {
    const answer = String(message.answer || '').trim();
    if (!isHiragana(answer)) {
      send({ type: 'answer-invalid' });
      return;
    }
    evaluateAnswer('guest', answer);
    return;
  }
  if (message.type === 'answer-invalid' && session.role === 'guest' && game?.status === 'checking') {
    game.status = 'answering';
    render();
    focusAnswerInput();
    return;
  }
  if (message.type === 'game-state' && session.role === 'guest') {
    applyRemoteGameState(message);
  }
}

function applyRemoteGameState(message) {
  const isNewRound = game?.current?.id !== message.question?.id;
  if (!game || isNewRound) {
    game = {
      mode: 'online', categoryId: message.categoryId, queue: [], round: message.round,
      queueIndex: 0, scores: message.scores || { host: 0, guest: 0 }, playerNames: message.playerNames || {},
      current: message.question, revealed: message.revealed || 0, skipRemaining: message.skipRemaining || 0, status: message.status,
      winner: message.winner, answerResult: message.answerResult,
    };
    view = 'game';
    stopRevealTimer();
    render();
    return;
  }
  game.categoryId = message.categoryId;
  game.round = message.round;
  game.revealed = message.revealed;
  game.skipRemaining = message.skipRemaining || 0;
  game.status = message.status;
  game.winner = message.winner;
  game.scores = message.scores || game.scores;
  game.playerNames = message.playerNames || game.playerNames;
  game.answerResult = message.answerResult;
  if (view !== 'game') view = 'game';
  if (['answering', 'checking', 'finished'].includes(game.status) || game.status === 'revealing' && game.answerResult?.wrong) render();
  else updateQuestionUI();
}

function peerErrorMessage(error) {
  if (error?.type === 'peer-unavailable') return 'そのルームコードが見つかりません。';
  if (error?.type === 'network') return 'ネットワークに接続できません。';
  return 'オンライン接続を開始できませんでした。';
}

function cleanupSession(destroyPeer = true) {
  stopRevealTimer();
  if (!session) return;
  try { session.connection?.close(); } catch { /* noop */ }
  if (destroyPeer) {
    try { session.peer?.destroy(); } catch { /* noop */ }
  }
  session = null;
  setConnection('local', 'ローカルモード');
}

function leaveRoom() {
  cleanupSession();
  game = null;
  view = 'home';
  render();
}

function copyRoomCode() {
  if (!session?.roomCode) return;
  const copyPromise = navigator.clipboard?.writeText(session.roomCode);
  if (copyPromise?.then) copyPromise.then(() => showToast('ルームコードをコピーしました。')).catch(() => showToast(`ルームコード：${session.roomCode}`));
  else showToast(`ルームコード：${session.roomCode}`);
}

// ---------- Question management ----------

function openManageModal() {
  const options = flattenCategories().map((category) => `<option value="${category.id}" ${category.id === selectedCategoryId ? 'selected' : ''}>${escapeHtml(getCategoryPath(category.id).map((item) => item.label).join(' / '))}</option>`).join('');
  modalRoot.innerHTML = `
    <div class="modal-backdrop" data-modal-close>
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="manageTitle">
        <div class="modal-header"><div><h2 id="manageTitle">問題を管理する</h2><p>追加した問題は、このブラウザに保存されます。</p></div><button class="close-button" data-action="close-modal" aria-label="閉じる">×</button></div>
        <form id="addQuestionForm">
          <div class="form-grid">
            <div class="full"><label class="field-label" for="questionCategory">カテゴリ</label><select class="select-input" id="questionCategory">${options}</select></div>
            <div class="full"><label class="field-label" for="questionPrompt">問題文</label><textarea class="text-area" id="questionPrompt" placeholder="例：この遺跡がある都道府県は？" required></textarea></div>
            <div><label class="field-label" for="questionAnswer">答え</label><input class="text-input" id="questionAnswer" placeholder="例：青森県" required /></div>
            <div><label class="field-label" for="questionAnswerHiragana">答え（ひらがな）</label><input class="text-input" id="questionAnswerHiragana" pattern="[ぁ-ゖー]+" inputmode="hiragana" placeholder="例：あおもりけん" required /></div>
            <div class="full"><label class="field-label" for="questionSource">出典（任意）</label><input class="text-input" id="questionSource" placeholder="例：公式サイト" /></div>
            <div class="full"><label class="field-label" for="questionExplanation">解説（任意）</label><textarea class="text-area" id="questionExplanation" placeholder="正解後に表示される一言解説"></textarea></div>
          </div>
          <button class="primary-button wide" type="submit" style="margin-top: 16px">この問題を追加</button>
        </form>
        <div class="modal-divider"></div>
        <div class="section-heading"><div><span class="eyebrow">backup & share</span><h2 style="font-size:16px">問題データの入出力</h2></div></div>
        <p class="hint">JSONは家族や友人と共有できます。読み込んだ問題は追加扱いになり、初期問題は消えません。</p>
        <div class="import-export"><button class="secondary-button" data-action="export-questions">JSONを書き出す</button><label class="file-label">JSONを読み込む<input type="file" id="importQuestions" accept="application/json,.json" /></label></div>
        <p class="manage-count">現在 ${questionBank.length} 問（初期 ${DEFAULT_QUESTIONS.length} 問 + 追加 ${questionBank.length - DEFAULT_QUESTIONS.length} 問）</p>
      </section>
    </div>
  `;
}

function addQuestion(form) {
  const question = {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    categoryId: document.querySelector('#questionCategory').value,
    prompt: document.querySelector('#questionPrompt').value.trim(),
    answer: document.querySelector('#questionAnswer').value.trim(),
    answerHiragana: document.querySelector('#questionAnswerHiragana').value.trim(),
    source: document.querySelector('#questionSource').value.trim(),
    explanation: document.querySelector('#questionExplanation').value.trim(),
    custom: true,
  };
  if (!isValidQuestion(question)) {
    showToast('問題文と答えを入力してください。');
    return;
  }
  questionBank.push(question);
  saveCustomQuestions();
  form.reset();
  showToast('問題を追加しました。');
  openManageModal();
}

function exportQuestions() {
  const data = JSON.stringify(questionBank, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `hayaooshi-questions-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('問題データを書き出しました。');
}

function importQuestions(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = Array.isArray(parsed) ? parsed : parsed.questions;
      const valid = Array.isArray(incoming) ? incoming.filter(isValidQuestion).map((question) => ({ ...question, id: `import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, custom: true })) : [];
      if (!valid.length) throw new Error('no valid questions');
      questionBank.push(...valid);
      saveCustomQuestions();
      showToast(`${valid.length}問を読み込みました。`);
      openManageModal();
    } catch {
      showToast('JSONの形式を確認してください。');
    }
  };
  reader.readAsText(file);
}

// ---------- Event wiring ----------

app.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action === 'select-category') {
    selectedCategoryId = button.dataset.categoryId;
    render();
  }
  if (action === 'toggle-category') {
    const id = button.dataset.categoryId;
    if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
    render();
  }
  if (action === 'start-category') {
    selectedCategoryId = button.dataset.categoryId;
    startSoloGame();
  }
  if (action === 'start-solo') startSoloGame();
  if (action === 'open-lobby') { view = 'lobby'; render(); }
  if (action === 'create-room') createRoom();
  if (action === 'join-room') joinRoom();
  if (action === 'start-online') startOnlineGame();
  if (action === 'leave-room') leaveRoom();
  if (action === 'copy-code') copyRoomCode();
  if (action === 'buzz') handleBuzz();
  if (action === 'next-round') {
    if (game?.mode === 'solo') startSoloRound();
    else if (session?.role === 'host') startOnlineRound();
    else showToast('ホストが次の問題を開始します。');
  }
  if (action === 'go-home') leaveRoom();
  if (action === 'manage') openManageModal();
  if (action === 'export-questions') exportQuestions();
  if (action === 'close-modal') modalRoot.innerHTML = '';
});

app.addEventListener('submit', (event) => {
  event.preventDefault();
  if (event.target.id === 'joinForm') joinRoom();
  if (event.target.id === 'answerForm') handleAnswerSubmit(document.querySelector('#answerInput')?.value || '');
});

modalRoot.addEventListener('click', (event) => {
  if (event.target.matches('[data-modal-close]')) modalRoot.innerHTML = '';
  const button = event.target.closest('[data-action]');
  if (!button) return;
  if (button.dataset.action === 'close-modal') modalRoot.innerHTML = '';
  if (button.dataset.action === 'export-questions') exportQuestions();
});

modalRoot.addEventListener('submit', (event) => {
  if (event.target.id !== 'addQuestionForm') return;
  event.preventDefault();
  addQuestion(event.target);
});

modalRoot.addEventListener('change', (event) => {
  if (event.target.id === 'importQuestions' && event.target.files[0]) importQuestions(event.target.files[0]);
});

document.querySelector('#homeButton').addEventListener('click', () => leaveRoom());
document.querySelector('#manageButton').addEventListener('click', () => openManageModal());

document.addEventListener('keydown', (event) => {
  if (event.code !== 'Space' || view !== 'game' || ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
  event.preventDefault();
  handleBuzz();
});

window.addEventListener('beforeunload', () => cleanupSession());

function startOnlineGame() {
  if (!session || session.role !== 'host' || !session.connection) {
    showToast('参加者が接続してから開始してください。');
    return;
  }
  const questions = questionsForCategory(session.categoryId);
  if (!questions.length) {
    showToast('このカテゴリにはまだ問題がありません。');
    return;
  }
  selectedCategoryId = session.categoryId;
  game = {
    mode: 'online', categoryId: session.categoryId, queue: shuffle(questions), queueIndex: 0,
    round: 0, scores: { host: 0, guest: 0 }, playerNames: { host: session.name, guest: session.guestName }, current: null,
  };
  view = 'game';
  startOnlineRound();
}

function startOnlineRound() {
  if (!game || session?.role !== 'host') return;
  stopRevealTimer();
  const next = nextQuestion();
  if (!next) return;
  game.current = next;
  game.round += 1;
  game.revealed = 0;
  game.skipRemaining = 0;
  game.status = 'preparing';
  game.winner = null;
  game.answerResult = null;
  render();
  broadcastState();
  startRevealAfterPause();
}

render();
