---
title: "用 Ollama 在本地跑 AI：Llama 3 安裝與使用完整教學"
description: "手把手教你用 Ollama 在自己的電腦上運行 Llama 3 等大型語言模型，包含安裝步驟、硬體需求、以及 API 整合方法。"
category: "ai"
pubDate: 2026-01-22
image: "https://cdn.design-drifter.com/drifter/6971648699737.webp"
imageAlt: "電腦硬體與 AI 運算概念"
tags: ["AI", "Ollama", "Llama", "本地部署", "教學"]
draft: false
---

## 為什麼要在本地跑 LLM？

使用 ChatGPT 或 Claude 很方便，但有些情況下本地運行更適合：

| 優勢           | 說明                             |
| -------------- | -------------------------------- |
| **隱私**       | 資料完全不出門，適合處理敏感資訊 |
| **離線使用**   | 沒網路也能用                     |
| **零延遲**     | 不用等 API 回應                  |
| **無使用限制** | 不用擔心 token 額度              |
| **可客製化**   | 能微調模型、調整參數             |

Ollama 是目前最簡單的本地 LLM 解決方案，幾個指令就能跑起來。

---

## 硬體需求

本地 LLM 很吃資源，先確認你的電腦夠不夠力：

### 最低配置（跑小模型）

| 組件 | 需求               |
| ---- | ------------------ |
| CPU  | 現代四核心處理器   |
| RAM  | 16GB               |
| GPU  | 可選，但有會快很多 |
| 儲存 | 20GB 可用空間      |

### 建議配置（跑中大型模型）

| 組件 | 需求                        |
| ---- | --------------------------- |
| CPU  | Intel i7 / AMD Ryzen 7 以上 |
| RAM  | 32GB                        |
| GPU  | NVIDIA RTX 3060 12GB 以上   |
| 儲存 | 100GB+ SSD                  |

### 模型大小參考

| 模型          | 參數量 | RAM 需求 | 適合硬體     |
| ------------- | ------ | -------- | ------------ |
| Llama 3.2 1B  | 1B     | 4GB      | 一般電腦     |
| Llama 3.2 3B  | 3B     | 8GB      | 一般電腦     |
| Llama 3.1 8B  | 8B     | 16GB     | 有獨顯的電腦 |
| Llama 3.1 70B | 70B    | 64GB+    | 工作站等級   |

---

## 安裝步驟

### Step 1：下載 Ollama

前往 [ollama.com](https://ollama.com/) 下載對應系統的安裝檔：

- **Windows**：下載 OllamaSetup.exe，雙擊安裝
- **macOS**：下載後拖到 Applications
- **Linux**：執行安裝腳本

```bash
# Linux 安裝指令
curl -fsSL https://ollama.com/install.sh | sh
```

### Step 2：驗證安裝

打開終端機，輸入：

```bash
ollama --version
```

看到版本號就代表安裝成功。

### Step 3：下載並運行模型

一個指令搞定：

```bash
ollama run llama3.2
```

第一次執行會自動下載模型（約 2-4GB），之後就會進入對話模式。

### Step 4：開始對話

```
>>> 你好，請用繁體中文回答
你好！我是 Llama，有什麼我可以幫助你的嗎？

>>> 解釋什麼是遞迴
遞迴是一種程式設計技術，指的是函式在執行過程中呼叫自己...
```

輸入 `/bye` 退出對話。

---

## 常用指令

```bash
# 列出已安裝的模型
ollama list

# 下載模型（不進入對話）
ollama pull llama3.2

# 刪除模型
ollama rm llama3.2

# 查看模型資訊
ollama show llama3.2

# 啟動 API 伺服器
ollama serve
```

---

## 推薦模型

| 模型          | 特色              | 適合用途           |
| ------------- | ----------------- | ------------------ |
| `llama3.2`    | Meta 最新、平衡型 | 一般對話、程式輔助 |
| `codellama`   | 程式碼專用        | 寫 code、debug     |
| `mistral`     | 輕量高效          | 資源有限的電腦     |
| `deepseek-r1` | 推理能力強        | 複雜問題分析       |
| `gemma2`      | Google 開源       | 多語言支援好       |

下載其他模型：

```bash
ollama run codellama
ollama run mistral
ollama run deepseek-r1
```

---

## API 整合

Ollama 預設在 `http://localhost:11434` 提供 REST API，方便整合到其他應用。

### 使用 curl 測試

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "什麼是機器學習？",
  "stream": false
}'
```

### Python 整合

```python
import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[{'role': 'user', 'content': '用一句話解釋 API'}]
)
print(response['message']['content'])
```

### 搭配其他工具

Ollama 的 API 相容 OpenAI 格式，可以直接替換：

- LangChain
- Continue（VS Code 外掛）
- Open WebUI（網頁介面）

---

## 自訂模型（Modelfile）

你可以用 Modelfile 調整模型的行為，類似 Dockerfile 的概念：

```dockerfile
# 建立一個繁中助手
FROM llama3.2

# 設定系統提示詞
SYSTEM 你是一個繁體中文助手，請用台灣用語回答所有問題。

# 調整參數
PARAMETER temperature 0.7
PARAMETER num_ctx 4096
```

建立並使用：

```bash
ollama create my-assistant -f Modelfile
ollama run my-assistant
```

---

## 常見問題 FAQ

### Q1: 沒有顯卡可以跑嗎？

可以，但會慢很多。小模型（1B、3B）用 CPU 跑還算可以，8B 以上建議要有 GPU。

### Q2: Mac 可以用嗎？

可以，Apple Silicon（M1/M2/M3）表現很好，Ollama 會自動利用 Metal 加速。

### Q3: 跟 ChatGPT 比起來如何？

本地模型的能力通常比 GPT-4 弱，但比 GPT-3.5 好。優勢是隱私和無限使用。

### Q4: 會很耗電嗎？

運行時確實比較耗資源，但只有在對話時才會高負載，閒置時影響很小。

### Q5: 可以跑中文模型嗎？

可以，推薦 `qwen2`（阿里通義千問）或 `yi`（零一萬物），中文表現比 Llama 好。

---

## 參考資料

- [Ollama GitHub](https://github.com/ollama/ollama) - 官方文件與模型清單
- [Complete Ollama Tutorial 2026 - DEV](https://dev.to/proflead/complete-ollama-tutorial-2026-llms-via-cli-cloud-python-3m97) - 完整使用教學
- [How to Run Llama 3 Locally - DataCamp](https://www.datacamp.com/tutorial/run-llama-3-locally) - Llama 3 專門教學

---

## 重點整理

- **Ollama 是最簡單的本地 LLM 方案**，一個指令就能跑
- **硬體門檻看模型大小**：小模型一般電腦就能跑，大模型需要好顯卡
- **主要優勢是隱私和無限使用**，適合處理敏感資料
- **API 相容 OpenAI 格式**，容易整合到現有工具
- **推薦從 llama3.2 開始**，之後可以試試 codellama 或 qwen2
