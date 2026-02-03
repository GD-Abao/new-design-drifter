---
title: "Grok 3 完整解析：xAI 最強模型的 Think Mode、Big Brain 與 DeepSearch 實測"
description: "Elon Musk 的 xAI 推出 Grok 3，號稱在數學、科學、編程基準測試中超越 ChatGPT 與 DeepSeek。本文深入解析 Grok 3 的核心功能、實際表現與適用場景。"
category: "ai"
pubDate: 2026-02-03
image: "https://cdn.design-drifter.com/drifter/69813ec1520d7.webp"
imageAlt: "AI 聊天機器人與神經網絡概念圖"
tags: ["AI", "Grok 3", "xAI", "Elon Musk", "ChatGPT", "大型語言模型"]
draft: false
---

## xAI 的野心之作：Grok 3

2025 年 2 月，Elon Musk 的 AI 公司 xAI 正式發布 Grok 3。這不只是一次版本更新，而是動用了 10 倍於前代的運算資源、集結 100,000 張 NVIDIA H100 GPU 打造的超級電腦 Colossus 訓練出的成果。

根據 xAI 官方數據，Grok 3 在數學、科學、編程等基準測試中，領先 ChatGPT o1、DeepSeek-R1、Gemini 2.0 至少 10 分以上。但這些數字背後的實際體驗如何？本文帶你完整了解。

---

## Grok 3 的三大核心功能

### 1. Think Mode（思考模式）

Think Mode 是 Grok 3 最重要的新功能之一。啟用後，模型不會直接給出答案，而是：

- 將問題拆解成多個步驟
- 評估不同的解決方案
- 在輸出最終結果前進行自我修正

**適用場景：**

- 複雜的數學證明
- 多步驟編程問題
- 邏輯推理與策略規劃

**實測感受：**
Think Mode 確實讓回答品質提升明顯，特別是在需要多步推理的問題上。缺點是回應時間變長，簡單問題不建議開啟。

### 2. Big Brain Mode（大腦模式）

Big Brain Mode 是 Grok 3 的高效能設定，會分配更多運算資源來處理複雜任務。

**特點：**

- 處理時間更長，但準確度更高
- 回答更深入、更詳細
- 適合需要高精度的專業場景

**適用場景：**

- 科學研究分析
- 多層次 AI 任務
- 需要深度洞察的商業決策

### 3. DeepSearch（深度搜尋）

DeepSearch 是 xAI 內建的即時搜尋工具。不同於傳統 LLM 依賴訓練時的靜態資料，Grok 3 可以：

- 即時瀏覽網頁
- 驗證資訊來源
- 綜合最新資訊後再生成回答

**獨特優勢：**
由於 xAI 與 X（前 Twitter）的緊密整合，Grok 3 能即時存取社群媒體動態，特別適合：

- 即時輿情分析
- 新聞摘要
- 趨勢追蹤

---

## 基準測試表現

### 官方數據

| 測試項目             | Grok 3 | ChatGPT o1 | DeepSeek-R1 | Gemini 2.0 |
| -------------------- | ------ | ---------- | ----------- | ---------- |
| AIME（數學競賽）     | 領先   | -          | -           | -          |
| GPQA（研究生科學）   | 領先   | -          | -           | -          |
| MMLU-Pro（通用知識） | 領先   | -          | -           | -          |
| Chatbot Arena Elo    | 1402   | ~1350      | ~1340       | ~1330      |

xAI 宣稱 Grok 3 在數學、科學、編程三大領域的基準測試中，至少領先競爭對手 10 分以上。

### 需要注意的地方

**SimpleQA 測試仍有差距：**

- Grok 3 Beta：43.6%
- Gemini 2.0 Pro：44.3%

這表示在「直接問答」類型的任務上，Grok 3 還有進步空間。複雜推理強，但簡單問題的回答品質並非絕對領先。

**與 OpenAI o3 的差距：**
儘管 Grok 3 表現亮眼，但在部分基準測試中仍落後於 OpenAI 的 o3 模型。xAI 目前正在測試 Grok 4，預計將進一步縮小差距。

---

## 技術規格

| 項目           | 規格                             |
| -------------- | -------------------------------- |
| Context Window | 最高 200 萬 tokens               |
| 處理能力       | 1.5 petaflops                    |
| 訓練硬體       | 100,000 張 NVIDIA H100 GPU       |
| 訓練時間       | Colossus 超級電腦 122 天完成建置 |
| 能源效率       | 比前代降低 30% 能耗              |

### API 定價

| 方案         | 價格                 |
| ------------ | -------------------- |
| 輸入 tokens  | \$3 / 百萬 tokens    |
| 輸出 tokens  | \$15 / 百萬 tokens   |
| 基礎方案起價 | \$0.20 / 百萬 tokens |

相較於 OpenAI 和 Anthropic，Grok 3 的 API 定價具有競爭力，特別是在大量使用的場景下。

---

## 實際應用場景

### 1. 開發者與工程師

Grok 3 的編程能力在基準測試中表現優異。結合 Think Mode，它能：

- 逐步解釋程式碼邏輯
- 找出潛在的 bug
- 提供多種實作方案比較

### 2. 研究人員

Big Brain Mode 加上 200 萬 tokens 的超大 context window，讓 Grok 3 能處理長篇論文和複雜研究資料。

### 3. 內容創作者與行銷人員

DeepSearch 的即時資訊能力，加上 X 平台的整合，讓 Grok 3 成為追蹤趨勢、分析輿情的利器。

### 4. 企業決策者

需要快速綜合大量資訊做決策時，Grok 3 的深度分析能力可以提供有價值的參考。

---

## 與競爭對手的比較

| 特性         | Grok 3         | ChatGPT (o1) | Claude 3.5  | Gemini 2.0     |
| ------------ | -------------- | ------------ | ----------- | -------------- |
| 即時網路存取 | ✓（含 X 平台） | ✓（需外掛）  | ✗           | ✓              |
| 最大 Context | 200 萬 tokens  | 128K tokens  | 200K tokens | 200 萬 tokens  |
| 推理模式     | Think Mode     | 內建         | 無專屬模式  | 無專屬模式     |
| 高效能模式   | Big Brain      | 無           | 無          | 無             |
| 社群整合     | X 平台原生     | 無           | 無          | YouTube/Google |

**Grok 3 的獨特優勢：**

- X 平台的即時資料整合
- Think Mode 和 Big Brain Mode 的雙模式設計
- 超大 context window（200 萬 tokens）

**競爭對手的優勢：**

- ChatGPT 的生態系更成熟
- Claude 在長文寫作和安全性上有優勢
- Gemini 與 Google 服務深度整合

---

## 使用限制與注意事項

### 免費版限制

Grok 3 提供免費使用，但有以下限制：

- 每日查詢次數有上限
- 部分進階功能（如 Big Brain Mode）僅限付費用戶

### 資料隱私考量

由於 Grok 與 X 平台的整合，使用時需注意：

- 對話內容可能被用於模型訓練
- 企業敏感資料建議使用 API 並簽訂資料處理協議

### 偏見與準確性

和所有 LLM 一樣，Grok 3 的回答可能帶有偏見或錯誤。重要決策仍需人工驗證。

---

## FAQ

### Q1：Grok 3 真的比 ChatGPT 強嗎？

在數學、科學、編程的基準測試中，Grok 3 確實領先。但「強」的定義取決於使用場景。日常對話和創意寫作，ChatGPT 的體驗可能更好；技術問題和即時資訊，Grok 3 有優勢。

### Q2：免費版夠用嗎？

一般個人使用足夠。但如果需要 Big Brain Mode、更高的每日額度，或 API 存取，就需要付費。

### Q3：Grok 3 支援中文嗎？

支援，但目前英文表現最佳。中文回答品質持續改善中。

### Q4：DeepSearch 和一般搜尋引擎有什麼不同？

DeepSearch 不只是搜尋，而是「搜尋 + 理解 + 綜合」。它會驗證多個來源、整合資訊後給出結構化答案，而非只是列出連結。

### Q5：Grok 4 什麼時候推出？

目前 Grok 4 已進入早期測試階段，據報其基準測試成績領先 OpenAI o3 和 Gemini 2.5 Pro。正式發布時間未定。

---

## 參考資料

- [xAI 官方公告 - Grok 3 Beta: The Age of Reasoning Agents](https://x.ai/news/grok-3) - 官方功能說明與基準測試數據
- [Tom's Hardware - Grok 3 基準測試分析](https://www.tomshardware.com/tech-industry/artificial-intelligence/elon-musks-grok-3-is-now-available-beats-chatgpt-in-some-benchmarks-llm-took-10x-more-compute-to-train-versus-grok-2) - 獨立測試與硬體規格分析
- [Helicone - Grok 3 Technical Review](https://www.helicone.ai/blog/grok-3-benchmark-comparison) - 技術細節與競品比較
- [DataCamp - Grok 3 Features & Comparison](https://www.datacamp.com/blog/grok-3) - 功能介紹與使用教學

---

## 重點整理

1. **Grok 3 是 xAI 的重大突破**，使用 10 倍運算資源訓練，在數學、科學、編程基準測試中領先競爭對手
2. **三大核心功能**：Think Mode（多步推理）、Big Brain Mode（高效能）、DeepSearch（即時搜尋）
3. **200 萬 tokens context window** 是目前業界最大之一，適合處理長文檔
4. **X 平台整合**是獨特優勢，即時輿情分析和趨勢追蹤特別強
5. **SimpleQA 等簡單問答仍有進步空間**，複雜推理強但基礎問答非絕對領先
6. **選擇建議**：需要即時資訊和技術分析選 Grok 3；重視生態系和穩定性選 ChatGPT；注重安全和長文寫作選 Claude
