---
title: "Anthropic 連環外洩事件完整報告：七天內兩次，Claude Code 源碼與 Mythos 新模型同時曝光"
description: "2026 年 3 月 26 日至 31 日，Anthropic 在短短七天內發生兩起重大資安事件：內部未發布的 Mythos 模型細節遭到洩露，緊接著 Claude Code v2.1.88 的 51 萬行源碼透過 npm 打包錯誤公開流傳。本文整理完整事件經過、外洩內容、潛在風險與 Anthropic 的官方回應。"
category: "ai"
pubDate: 2026-04-02
image: "https://cdn.design-drifter.com/drifter/69cdc63e4a78e.webp"
imageAlt: "程式碼與鎖頭圖示，象徵 Anthropic 源碼外洩的資安事件"
tags:
  [
    "AI",
    "Anthropic",
    "Claude",
    "Claude Code",
    "資安",
    "源碼外洩",
    "Mythos",
    "2026",
  ]
draft: false
---

## 七天，兩次外洩

3 月 26 日，Anthropic 的內容管理系統配置錯誤，讓外界得以存取近 3,000 份未發布的內部文件，包括代號「Mythos」（又稱 Capybara）的新一代模型規格。

五天後，3 月 31 日，更大的事情發生了。

Claude Code v2.1.88 的 npm 套件因為打包失誤，將原本只應存在於私有伺服器的 JavaScript 源映射檔案（source map）一起打包進去。任何在那個時間窗口安裝或更新 Claude Code 的人，都可以直接取得整個代碼庫的源碼。

五十一萬行，七天之內，兩次。

這是 2026 年目前為止最受矚目的 AI 資安事件。

---

## 第一起：Mythos 模型外洩（3 月 26 日）

### 誰發現的？

LayerX Security 的安全研究員 Roy Paz 和劍橋大學的 Alexandre Pauwels，在例行掃描中發現 Anthropic 的內容管理系統有一個配置錯誤，導致內部預備發布的資產可公開存取。

### 外洩了什麼？

- 近 3,000 個與 Anthropic 部落格相關的未發布資產
- 描述 Mythos/Capybara 模型的草稿部落格文章
- 模型規格與開發架構文件

### Mythos 模型的關鍵細節

外洩文件顯示，Mythos 是 Anthropic 內部標記為「步驟性變化（step change）」的新一代模型，定位在 Claude Opus 4.6 之上：

- 在軟體開發、學術推理和網路安全測試的得分大幅領先現有旗艦模型
- 被形容為「Anthropic 迄今建造的最強模型」
- **尚未準備好公開發布**——原因是成本仍過高

文件中也包含了一段特別值得注意的警告：Mythos 在網路安全領域的能力「可能顯著加劇網路安全風險」，因為它能夠快速發現和利用軟體漏洞，可能加速 AI 輔助攻擊的軍備競賽。

### Anthropic 的回應

Anthropic 確認了 Mythos 模型的存在，表示這是真實正在測試的模型，並說明「這是人為錯誤造成的 CMS 配置問題，不涉及核心系統存取」。官方未透露 Mythos 的預計發布時程。

---

## 第二起：Claude Code 源碼外洩（3 月 31 日）

### 事件起點

最早在 X（原 Twitter）揭露這件事的是 Fuzzland 區塊鏈安全公司的聯合創辦人兼實習生 Chaofan Shou。他在 3 月 31 日發現，Claude Code v2.1.88 的 npm 套件中包含了一個 59.8 MB 的 JavaScript 源映射檔案（`cli.js.map`），這個檔案指向 Anthropic 在 Cloudflare R2 存儲桶中的一個公開可存取的 zip 壓縮包。

換句話說：源碼沒有被「駭入」，是 Anthropic 自己不小心放出去的。

### 外洩規模

| 項目         | 數字                            |
| ------------ | ------------------------------- |
| 版本         | @anthropic-ai/claude-code v2.1.88 |
| 代碼總量     | 約 512,000 行                   |
| 檔案數量     | 1,900 個 TypeScript 檔案        |
| 代碼庫大小   | 約 57 MB                        |
| 源映射檔案   | 59.8 MB（cli.js.map）           |
| 暴露時間窗口 | 2026-03-31 00:21–03:29 UTC      |

### 外洩了什麼？

**已確認外洩的內容：**

- Claude Code 的「代理人工具（agentic harness）」源碼——也就是指示 AI 如何使用工具、協調多步驟任務的核心軟體層
- 多代理工作流程的實作細節
- 系統提示（system prompts）
- 工具整合邏輯
- 數十個功能旗標（feature flags），涉及尚未公開發布的功能，包括：
  - Claude 審查自身上一次 session 完成工作的能力
  - 「持久助手」背景運行模式
  - 允許從手機或其他瀏覽器控制 Claude 的遠端模式

**未外洩的內容（Anthropic 確認）：**

- 客戶資料
- 認證憑證
- 模型權重
- 用戶個人資料

### 傳播速度

源碼被發現後，數小時內 GitHub 上出現多個鏡像儲存庫。部分儲存庫在 Anthropic 的 DMCA 下架通知送達之前，已累積了數萬個 Star。

---

## 最被低估的風險：npm 供應鏈攻擊

這裡有一個細節，技術背景的使用者需要特別注意。

在同一個時間窗口（2026-03-31 00:21–03:29 UTC），npm 上出現了 `axios` 的惡意版本（1.14.1 或 0.30.4），其中包含一個惡意依賴套件 `plain-crypto-js`，內藏跨平台遠端存取木馬（RAT）。

這兩個事件的時間點高度重疊。目前尚未確認兩者有直接關聯，但如果你在那個時間窗口安裝或更新過 Claude Code，建議：

1. 檢查 `package-lock.json`、`yarn.lock` 或 `bun.lockb`，確認是否包含上述惡意版本
2. 若有發現，應將整台主機視為已被入侵，輪換所有金鑰，並執行乾淨的作業系統重裝

---

## 這不是第一次

Anthropic 在 2025 年 2 月就曾發生過類似事件——Claude Code 早期版本因源映射檔案未清除，導致部分源碼暴露。當時 Anthropic 從 npm 移除了該版本並刪除了源映射。

一年後，同樣的問題再次發生，規模更大。

---

## Anthropic 的官方立場

Anthropic 確認這是「由人為錯誤引起的發布打包問題，不是安全漏洞」，並強調「沒有敏感的客戶資料或認證資訊涉及其中」。

官方同時推薦用戶改用 Native Installer 安裝 Claude Code：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

這個安裝方式使用獨立的二進位檔案，不依賴 npm 依賴鏈，可以避免 npm 生態系統的供應鏈風險。

---

## 這件事的真正影響是什麼？

### 競爭層面

外洩的 agentic harness 源碼讓競爭對手得以了解 Claude Code 的核心架構和工具協調邏輯。這些資訊對 OpenAI、Google 和各家新創公司都有潛在的參考價值，理論上可以幫助他們縮短開發自家 AI 編程工具的時間。

### 開源社群

部分開發者已經在討論是否能基於外洩的代碼開發開源版本的 Claude Code 類工具。雖然這在法律上仍屬灰色地帶，但技術可行性已經存在。

### 未發布功能的曝光

外洩的功能旗標中，「從手機控制 Claude」和「持久助手背景模式」是兩個特別受關注的功能。社群的反應基本是正面的——這些功能如果正式上線，會大幅提升 Claude Code 的實用性。某種程度上，這次外洩意外地成了一次功能預告。

### Anthropic 的 IPO 時機

Fortune 的報導指出，這兩起外洩事件的時機非常不巧——Anthropic 正在 IPO 進程中，外洩的 Mythos 規格文件讓外界得以評估公司的技術儲備，但同時兩起人為失誤也讓投資人對公司的內部流程管理產生疑慮。

---

## FAQ

### Q1：我的 Claude Code 有受影響嗎？

受影響的版本是 v2.1.88，暴露時間窗口為 2026-03-31 00:21–03:29 UTC（台灣時間 08:21–11:29）。如果你在這個時間窗口安裝或更新，建議檢查 lock 檔案確認 axios 版本是否安全。

### Q2：Anthropic 說沒有用戶資料外洩，可以相信嗎？

目前沒有獨立安全研究員聲稱找到客戶資料。外洩的源碼本身也不包含資料庫連線或認證憑證的硬編碼資訊。就目前的證據來看，Anthropic 的說法是可信的。

### Q3：Mythos 模型什麼時候會正式發布？

Anthropic 沒有透露時程。外洩文件顯示目前因成本過高而未準備發布，但這個狀況通常隨著工程優化會在 6–18 個月內改變。

### Q4：npm 的供應鏈問題是這次外洩造成的嗎？

兩者時間窗口重疊，但目前沒有直接關聯的證據。惡意的 axios 版本可能是獨立的攻擊行動，只是時間點巧合。建議獨立處理兩個問題：確認 axios 版本安全，以及確認 Claude Code 已更新到最新版。

### Q5：改用 Native Installer 就安全了嗎？

Native Installer 確實繞開了 npm 依賴鏈，降低了供應鏈攻擊的風險。但它不能解決源碼已被外洩這個事實——外洩的代碼已在社群流傳，這個影響是不可逆的。

---

## 參考資料

- [Anthropic leaks part of Claude Code's internal source code — CNBC](https://www.cnbc.com/2026/03/31/anthropic-leak-claude-code-internal-source.html)
- [Anthropic leaked its own Claude source code — Axios](https://www.axios.com/2026/03/31/anthropic-leaked-source-code-ai)
- [Claude Code Source Leaked via npm Packaging Error — The Hacker News](https://thehackernews.com/2026/04/claude-code-tleaked-via-npm-packaging.html)
- [Anthropic accidentally exposes Claude Code source code — The Register](https://www.theregister.com/2026/03/31/anthropic_claude_code_source_code/)
- [Exclusive: Anthropic 'Mythos' AI model revealed in data leak — Fortune](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/)
- [Anthropic Accidentally Releases Source Code for Claude AI Agent — Bloomberg](https://www.bloomberg.com/news/articles/2026-04-01/anthropic-accidentally-releases-source-code-for-claude-ai-agent)

---

## 重點整理

1. **七天內兩起事件**：3 月 26 日 Mythos 模型文件外洩，3 月 31 日 Claude Code v2.1.88 源碼因 npm 打包錯誤公開，兩者均為人為失誤
2. **外洩規模**：51.2 萬行 TypeScript 源碼，包含 agentic harness 核心架構、系統提示、多代理工作流程，以及數十個未發布功能旗標
3. **沒有用戶資料外洩**：Anthropic 確認，無客戶資料、認證憑證或模型權重涉及——但這不能消除競爭情報洩露的影響
4. **供應鏈攻擊風險需獨立處理**：同時間窗口出現的惡意 axios 版本是獨立威脅，在事發時間前後更新過 Claude Code 的用戶應立即檢查 lock 檔案
5. **Mythos 是比 Opus 4.6 更強的新模型**，因成本過高尚未發布，其網路安全能力的潛在風險已引起安全研究社群關注
6. **官方建議改用 Native Installer**：`curl -fsSL https://claude.ai/install.sh | bash`，避免 npm 依賴鏈風險
