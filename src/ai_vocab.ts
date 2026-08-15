// Design reminder: Cognitive Systems Lab — Chinese-first study notes, precise English labels, deep brine structure with circuit-blue signals.
export type AiSectionKey = "A" | "B" | "C" | "D";

export type AiVocabulary = {
  id: string;
  section: AiSectionKey;
  number: number;
  word: string;
  pos: string;
  ipa: string;
  meaning: string;
  definition: string;
  example_hint: string;
};

export const aiVocabulary: AiVocabulary[] = [
  { id: "ai-01", section: "A", number: 1, word: "artificial intelligence", pos: "n.", ipa: "ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns", meaning: "人工智慧", definition: "the theory and development of computer systems able to perform tasks requiring human intelligence", example_hint: "全文核心；常縮寫為 AI" },
  { id: "ai-02", section: "A", number: 2, word: "algorithm", pos: "n.", ipa: "ˈælɡərɪðəm", meaning: "演算法", definition: "a process or set of rules to be followed in calculations or other problem-solving operations", example_hint: "designed a highly powerful algorithm" },
  { id: "ai-03", section: "A", number: 3, word: "neural network", pos: "n.", ipa: "ˈnjʊərəl ˈnetwɜːk", meaning: "類神經網絡", definition: "a computer system modeled on the human brain and nervous system", example_hint: "simulate the complex neural networks of a human brain" },
  { id: "ai-04", section: "A", number: 4, word: "autonomous", pos: "adj.", ipa: "ɔːˈtɒnəməs", meaning: "自主的；自治的", definition: "acting independently or having the freedom to do so", example_hint: "makes the system entirely autonomous（無須人為干預即可決策）" },
  { id: "ai-05", section: "A", number: 5, word: "dataset", pos: "n.", ipa: "ˈdeɪtəset", meaning: "數據集", definition: "a collection of related sets of information", example_hint: "feeding this computer a massive dataset" },
  { id: "ai-06", section: "A", number: 6, word: "machine learning", pos: "n.", ipa: "məˈʃiːn ˈlɜːnɪŋ", meaning: "機器學習", definition: "the use and development of computer systems that are able to learn and adapt without following explicit instructions", example_hint: "AI 分支，強調讓機器自我學習" },
  { id: "ai-07", section: "A", number: 7, word: "deep learning", pos: "n.", ipa: "diːp ˈlɜːnɪŋ", meaning: "深度學習", definition: "a type of machine learning based on artificial neural networks", example_hint: "機器學習的進階版，能處理極複雜的數據" },
  { id: "ai-08", section: "A", number: 8, word: "natural language processing", pos: "n.", ipa: "ˈnætʃrəl ˈlæŋɡwɪdʒ ˈprəʊsesɪŋ", meaning: "自然語言處理", definition: "giving computers the ability to understand human language", example_hint: "托福常見資訊學科詞彙，縮寫為 NLP" },
  { id: "ai-09", section: "A", number: 9, word: "automation", pos: "n.", ipa: "ˌɔːtəˈmeɪʃn", meaning: "自動化", definition: "the use of largely automatic equipment in a system", example_hint: "automation technology develops at a staggering speed" },
  { id: "ai-10", section: "A", number: 10, word: "simulate", pos: "v.", ipa: "ˈsɪmjuleɪt", meaning: "模擬；模仿", definition: "imitate the appearance or character of", example_hint: "simulate complex neural networks" },
  { id: "ai-11", section: "A", number: 11, word: "replicate", pos: "v.", ipa: "ˈreplɪkeɪt", meaning: "複製；重現", definition: "make an exact copy of; reproduce", example_hint: "replicate human behavioral patterns" },
  { id: "ai-12", section: "A", number: 12, word: "breakthrough", pos: "n.", ipa: "ˈbreɪkθruː", meaning: "突破；重大進展", definition: "a sudden, dramatic, and important discovery", example_hint: "unprecedented breakthrough in modern technology" },
  { id: "ai-13", section: "B", number: 13, word: "cognitive", pos: "adj.", ipa: "ˈkɒɡnətɪv", meaning: "認知的", definition: "relating to the mental process of acquiring knowledge", example_hint: "handling many cognitive tasks" },
  { id: "ai-14", section: "B", number: 14, word: "intervention", pos: "n.", ipa: "ˌɪntəˈvenʃn", meaning: "干預；介入", definition: "the action or process of intervening", example_hint: "without any human intervention" },
  { id: "ai-15", section: "B", number: 15, word: "synthetic", pos: "adj.", ipa: "sɪnˈθetɪk", meaning: "合成的；人造的", definition: "made by computer generation, not natural", example_hint: "synthetic voices and fake videos" },
  { id: "ai-16", section: "B", number: 16, word: "authenticate", pos: "v.", ipa: "ɔːˈθentɪkeɪt", meaning: "驗證；證實", definition: "prove or show something to be true or genuine", example_hint: "authenticate whether what we see is real or fake" },
  { id: "ai-17", section: "B", number: 17, word: "veracity", pos: "n.", ipa: "vəˈræsəti", meaning: "真實性；準確性", definition: "conformity to facts; truthfulness", example_hint: "ensuring the absolute veracity of information" },
  { id: "ai-18", section: "B", number: 18, word: "stereotype", pos: "n.", ipa: "ˈsteriətaɪp", meaning: "刻板印象", definition: "a widely held but fixed and oversimplified image", example_hint: "databases contain human stereotypes" },
  { id: "ai-19", section: "B", number: 19, word: "bias", pos: "n.", ipa: "ˈbaɪəs", meaning: "偏見；偏誤", definition: "prejudice in favor of or against one thing", example_hint: "absorb and magnify that bias" },
  { id: "ai-20", section: "B", number: 20, word: "historical data", pos: "n.", ipa: "hɪˈstɒrɪkl ˈdeɪtə", meaning: "歷史數據", definition: "data collected about past events", example_hint: "depends entirely on the historical data it learns from" },
  { id: "ai-21", section: "B", number: 21, word: "execute", pos: "v.", ipa: "ˈeksɪkjuːt", meaning: "執行；實行", definition: "carry out a plan, order, or instruction", example_hint: "execute rigid instructions" },
  { id: "ai-22", section: "B", number: 22, word: "rigid", pos: "adj.", ipa: "ˈrɪdʒɪd", meaning: "死板的；僵硬的", definition: "unable to bend; not adaptable", example_hint: "rigid, pre-programmed instructions" },
  { id: "ai-23", section: "B", number: 23, word: "proficiency", pos: "n.", ipa: "prəˈfɪʃnsi", meaning: "熟練度；精通", definition: "a high degree of competence or skill", example_hint: "reached a high level of proficiency in language" },
  { id: "ai-24", section: "B", number: 24, word: "output", pos: "n./v.", ipa: "ˈaʊtpʊt", meaning: "輸出；產出", definition: "the amount of something produced", example_hint: "AI generates high-quality output" },
  { id: "ai-25", section: "C", number: 25, word: "displace", pos: "v.", ipa: "dɪsˈpleɪs", meaning: "取代；迫使離開", definition: "force someone to leave their usual place or role", example_hint: "displace the traditional workforce" },
  { id: "ai-26", section: "C", number: 26, word: "workforce", pos: "n.", ipa: "ˈwɜːkfɔːs", meaning: "勞動力；全體員工", definition: "the people engaged in or available for work", example_hint: "displacement of the workforce" },
  { id: "ai-27", section: "C", number: 27, word: "disruptive", pos: "adj.", ipa: "dɪsˈrʌptɪv", meaning: "顛覆性的；破壞性的", definition: "causing radical change by means of innovation", example_hint: "disruptive technological wave" },
  { id: "ai-28", section: "C", number: 28, word: "integrate", pos: "v.", ipa: "ˈɪntɪɡreɪt", meaning: "整合；結合", definition: "combine one thing with another to form a whole", example_hint: "seamlessly integrate with intelligent systems" },
  { id: "ai-29", section: "C", number: 29, word: "collaborate", pos: "v.", ipa: "kəˈlæbəreɪt", meaning: "合作；協作", definition: "work jointly on an activity", example_hint: "collaborate with AI systems" },
  { id: "ai-30", section: "C", number: 30, word: "ethical", pos: "adj.", ipa: "ˈeθɪkl", meaning: "倫理的；道德的", definition: "relating to moral principles", example_hint: "ethical responsibility of technological development" },
  { id: "ai-31", section: "C", number: 31, word: "accountability", pos: "n.", ipa: "əˌkaʊntəˈbɪləti", meaning: "問責性；負責任", definition: "the condition of being accountable", example_hint: "establish clear accountability" },
  { id: "ai-32", section: "C", number: 32, word: "regulatory", pos: "adj.", ipa: "ˌreɡjəˈleɪtəri", meaning: "監管的；管理的", definition: "intended to regulate something", example_hint: "transparent regulatory mechanisms" },
  { id: "ai-33", section: "C", number: 33, word: "mitigate", pos: "v.", ipa: "ˈmɪtɪɡeɪt", meaning: "減輕；緩和", definition: "make less severe or serious", example_hint: "mitigate these massive potential risks" },
  { id: "ai-34", section: "C", number: 34, word: "strategic", pos: "adj.", ipa: "strəˈtiːdʒɪk", meaning: "戰略的；策略性的", definition: "relating to the identification of long-term aims", example_hint: "strategic planning" },
  { id: "ai-35", section: "C", number: 35, word: "transparent", pos: "adj.", ipa: "trænsˈpærənt", meaning: "透明的；公開的", definition: "open to public scrutiny", example_hint: "transparent regulatory oversight" },
  { id: "ai-36", section: "C", number: 36, word: "transformation", pos: "n.", ipa: "ˌtrænsfəˈmeɪʃn", meaning: "轉變；轉型", definition: "a thorough or dramatic change", example_hint: "fundamental transformation in the employment structure" },
  { id: "ai-37", section: "D", number: 37, word: "profound", pos: "adj.", ipa: "prəˈfaʊnd", meaning: "深刻的；深奧的", definition: "very great or intense; showing great knowledge", example_hint: "a very profound and core question" },
  { id: "ai-38", section: "D", number: 38, word: "sophisticated", pos: "adj.", ipa: "səˈfɪstɪkeɪtɪd", meaning: "先進的；精密的", definition: "developed to a high degree of complexity", example_hint: "an incredibly sophisticated artificial intelligence system" },
  { id: "ai-39", section: "D", number: 39, word: "overwhelming", pos: "adj.", ipa: "ˌəʊvəˈwelmɪŋ", meaning: "巨大的；壓倒性的", definition: "very great in amount; very strong", example_hint: "overwhelming amount of information" },
  { id: "ai-40", section: "D", number: 40, word: "staggering", pos: "adj.", ipa: "ˈstæɡərɪŋ", meaning: "令人震驚的；巨大的", definition: "deeply shocking; astonishing", example_hint: "develops at a staggering speed" },
  { id: "ai-41", section: "D", number: 41, word: "exclusive", pos: "adj.", ipa: "ɪkˈskluːsɪv", meaning: "專屬的；獨有的", definition: "restricted to the person, group, or area concerned", example_hint: "exclusive to the human brain" },
  { id: "ai-42", section: "D", number: 42, word: "flawless", pos: "adj.", ipa: "ˈflɔːləs", meaning: "完美無瑕的", definition: "without any imperfections or defects", example_hint: "operate with flawless efficiency" },
  { id: "ai-43", section: "D", number: 43, word: "mercilessly", pos: "adv.", ipa: "ˈmɜːsɪləsli", meaning: "無情地", definition: "in a cruel or demanding manner", example_hint: "mercilessly displace traditional roles" },
  { id: "ai-44", section: "D", number: 44, word: "ruthlessly", pos: "adv.", ipa: "ˈruːθləsli", meaning: "毫不留情地", definition: "without pity or compassion for others", example_hint: "ruthlessly absorb and magnify bias" },
  { id: "ai-45", section: "D", number: 45, word: "contemporary", pos: "adj.", ipa: "kənˈtemprəri", meaning: "當代的", definition: "living or occurring at the same time; modern", example_hint: "greatest challenge of contemporary society" },
  { id: "ai-46", section: "D", number: 46, word: "dynamic", pos: "adj.", ipa: "daɪˈnæmɪk", meaning: "動態的", definition: "characterized by constant change or activity", example_hint: "dynamic trends in the stock market" },
  { id: "ai-47", section: "D", number: 47, word: "double-edged sword", pos: "n.", ipa: "ˈdʌbl edʒd sɔːd", meaning: "雙面刃", definition: "a circumstance that has both positive and negative consequences", example_hint: "technology is a double-edged sword" },
  { id: "ai-48", section: "D", number: 48, word: "evaluate", pos: "v.", ipa: "ɪˈvæljueɪt", meaning: "評估", definition: "form an idea of the amount, number, or value of", example_hint: "evaluate asset options" },
];
