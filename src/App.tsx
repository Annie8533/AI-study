// Cognitive Library design reminder: independent AI STUDY brand; Chinese-first learning flow; Swiss indexing with signal-cyan feedback.
import { useEffect, useMemo, useRef, useState } from "react";
import { aiVocabulary, type AiSectionKey, type AiVocabulary } from "./ai_vocab";

type FilterKey = "ALL" | AiSectionKey;

const sections: { key: FilterKey; label: string; english: string; hint: string }[] = [
  { key: "ALL", label: "全部索引", english: "All words", hint: "48 words" },
  { key: "A", label: "資料與基礎", english: "Dataset & core", hint: "01–12" },
  { key: "B", label: "認知與判讀", english: "Cognition", hint: "13–24" },
  { key: "C", label: "協作與治理", english: "Automation", hint: "25–36" },
  { key: "D", label: "進階與觀點", english: "Perspective", hint: "37–48" },
];

function Icon({ name }: { name: "sound" | "arrow" | "check" | "search" | "flip" }) {
  const paths = {
    sound: <><path d="M4 10v4h3l4 3V7l-4 3H4Z" /><path d="M14 9.5a4 4 0 0 1 0 5" /><path d="M16.7 7a7 7 0 0 1 0 10" /></>,
    arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>,
    flip: <><path d="M7 7h9a3 3 0 0 1 3 3v3" /><path d="m16 16 3-3 3 3" /><path d="M17 17H8a3 3 0 0 1-3-3v-3" /><path d="m8 8-3 3-3-3" /></>,
  };
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function speakWord(word: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.78;
  utterance.pitch = 0.98;
  window.speechSynthesis.speak(utterance);
}

export default function App() {
  const [filter, setFilter] = useState<FilterKey>("ALL");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState("ai-01");
  const [flipped, setFlipped] = useState(false);
  const [learned, setLearned] = useState<Set<string>>(new Set());
  const [speaking, setSpeaking] = useState(false);
  const labRef = useRef<HTMLElement>(null);

  const words = useMemo(() => aiVocabulary.filter((item) => {
    const matchedSection = filter === "ALL" || item.section === filter;
    const needle = query.trim().toLowerCase();
    const matchedSearch = !needle || [item.word, item.meaning, item.definition, item.example_hint].join(" ").toLowerCase().includes(needle);
    return matchedSection && matchedSearch;
  }), [filter, query]);

  const active: AiVocabulary = words.find((item) => item.id === activeId) ?? words[0] ?? aiVocabulary[0];
  const activeIndex = words.findIndex((item) => item.id === active.id);
  const percentage = Math.round((learned.size / aiVocabulary.length) * 100);

  useEffect(() => {
    if (!words.some((item) => item.id === activeId)) {
      setActiveId(words[0]?.id ?? "ai-01");
      setFlipped(false);
    }
  }, [activeId, words]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement)?.tagName === "INPUT") return;
      if (event.key === " " || event.key === "Enter") { event.preventDefault(); setFlipped((value) => !value); }
      if (event.key === "ArrowRight" && words.length) setActiveId(words[(activeIndex + 1) % words.length].id);
      if (event.key === "ArrowLeft" && words.length) setActiveId(words[(activeIndex - 1 + words.length) % words.length].id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, words]);

  const selectWord = (id: string) => { setActiveId(id); setFlipped(false); };
  const move = (direction: 1 | -1) => { if (words.length) selectWord(words[(activeIndex + direction + words.length) % words.length].id); };
  const markLearned = () => setLearned((current) => {
    const next = new Set(current);
    next.has(active.id) ? next.delete(active.id) : next.add(active.id);
    return next;
  });
  const speak = () => { setSpeaking(true); speakWord(active.word); window.setTimeout(() => setSpeaking(false), 900); };
  const openLab = () => labRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="AI STUDY 首頁">
          <span className="brand-mark"><i /><i /><i /></span>
          <span><b>AI STUDY</b><small>VOCABULARY LAB</small></span>
        </a>
        <div className="topbar-meta"><span className="live-dot" />INTERACTIVE VOCABULARY <em>48 WORDS</em></div>
      </header>

      <div className="layout" id="top">
        <aside className="side-index" aria-label="學習索引">
          <div className="index-head"><span>LEARNING INDEX</span><h2>學習索引</h2></div>
          <button className="route active" onClick={openLab}><b>01</b><span>核心詞彙庫<small>Flip · listen · speak</small></span><Icon name="arrow" /></button>
          <button className="route" onClick={() => document.getElementById("method")?.scrollIntoView({ behavior: "smooth" })}><b>02</b><span>使用方法<small>一張一張練習</small></span><Icon name="arrow" /></button>
          <div className="sidebar-progress"><div><span>已熟悉</span><b>{learned.size} / 48</b></div><div className="progress-track"><i style={{ width: `${percentage}%` }} /></div><small>你的學習紀錄會留在此頁面中</small></div>
          <p className="sidebar-note">點選單字卡，翻到中文確認理解；再聽一次英文發音。</p>
        </aside>

        <section className="content">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">ARTIFICIAL INTELLIGENCE / ENGLISH</p>
              <h1 id="hero-title">AI 英文<br /><span>單字閃卡與發音</span></h1>
              <p className="hero-lead">Learn the key words. Flip, listen, and speak.</p>
              <p className="hero-cn">從資料、認知到倫理與治理，把 AI 核心詞彙變成可以理解、可以開口說的英文。</p>
              <div className="hero-actions"><button className="primary-button" onClick={openLab}>進入單字實驗室 <Icon name="arrow" /></button><button className="sound-intro" onClick={() => speakWord("artificial intelligence")}><span><Icon name="sound" /></span>先聽一個詞</button></div>
            </div>
            <div className="signal-window" aria-label="AI 單字學習訊號圖">
              <div className="signal-label">AI / WORD LAB</div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="node node-a" /><div className="node node-b" /><div className="node node-c" /><div className="signal-word">think<br /><i>in words.</i></div><div className="signal-foot">DATA → LANGUAGE → IDEAS</div>
            </div>
          </section>

          <section className="method-strip" id="method"><b>HOW TO USE</b><span><i>1</i>看英文單字</span><span><i>2</i>翻面確認中文</span><span><i>3</i>聽音後跟讀</span><span><i>4</i>標記已熟悉</span></section>

          <section className="lab" ref={labRef} aria-labelledby="lab-title">
            <div className="section-heading"><div><p className="eyebrow">01 / VOCABULARY LAB</p><h2 id="lab-title">AI 單字實驗室</h2><p>先閱讀英文，點卡片翻到中文。每個單字都可以直接播放。</p></div><div className="learned-badge"><b>{percentage}%</b><span>已熟悉</span></div></div>
            <div className="filter-row" role="tablist" aria-label="單字分類">{sections.map((item) => <button key={item.key} className={filter === item.key ? "filter active" : "filter"} onClick={() => setFilter(item.key)}><b>{item.label}</b><small>{item.english} · {item.hint}</small></button>)}</div>
            <div className="lab-grid">
              <section className="card-station" aria-label="目前單字卡">
                <div className="station-meta"><span>WORD {String(active.number).padStart(2, "0")} OF 48</span><span>{sections.find((item) => item.key === active.section)?.english.toUpperCase()}</span></div>
                <button className={`flashcard ${flipped ? "is-flipped" : ""}`} onClick={() => setFlipped((value) => !value)} aria-label="翻轉單字卡">
                  <span className="flashcard-inner">
                    <span className="card-face card-front"><span className="card-corner">ENGLISH</span><span className="word-block"><b>{active.word}</b><em>{active.pos} · /{active.ipa}/</em></span><span className="card-prompt"><Icon name="flip" />點擊卡片查看中文</span></span>
                    <span className="card-face card-back"><span className="card-corner">中文理解</span><span className="meaning">{active.meaning}</span><span className="example"><b>使用提示</b>{active.example_hint}</span><span className="card-prompt"><Icon name="flip" />點擊回到英文</span></span>
                  </span>
                </button>
                <div className="card-controls"><button className="nav-button" onClick={() => move(-1)} aria-label="上一個單字">←</button><button className={`listen-button ${speaking ? "speaking" : ""}`} onClick={speak}><Icon name="sound" />聽英文發音</button><button className={learned.has(active.id) ? "known-button is-known" : "known-button"} onClick={markLearned}><Icon name="check" />{learned.has(active.id) ? "已標記熟悉" : "標記已熟悉"}</button><button className="nav-button" onClick={() => move(1)} aria-label="下一個單字">→</button></div>
                <p className="keyboard-tip">鍵盤：空白鍵／Enter 翻卡 · ← → 切換單字</p>
              </section>
              <aside className="word-index" aria-label="詞彙清單">
                <label className="search-box"><Icon name="search" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋英文或中文" /></label>
                <div className="list-head"><b>詞彙索引</b><span>{words.length} results</span></div>
                <div className="word-list">{words.map((item) => <button key={item.id} onClick={() => selectWord(item.id)} className={item.id === active.id ? "word-row current" : "word-row"}><span>{String(item.number).padStart(2, "0")}</span><div><b>{item.word}</b><small>{item.meaning}</small></div>{learned.has(item.id) && <Icon name="check" />}</button>)}{words.length === 0 && <p className="empty">沒有符合的單字，請換一個搜尋字。</p>}</div>
              </aside>
            </div>
          </section>

          <section className="practice-notes"><div><p className="eyebrow">SPEAKING NOTE</p><h2>聽見，然後說出來。</h2></div><p>聽完後先跟讀單字，再說出你自己的短句。<br /><em>Listen once. Repeat once. Use it once.</em></p></section>
        </section>
      </div>
    </main>
  );
}
