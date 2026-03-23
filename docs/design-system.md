# デザインシステム ガイド

> トーン・配色・タイポグラフィの選定ガイド。
> brief.md と合わせて使用してください。

---

## カラーパレット テンプレート

### 信頼・権威型（士業、金融、BtoB）

```css
:root {
  --color-primary: #1a2744;      /* ダークネイビー */
  --color-secondary: #2c3e5a;    /* ミディアムネイビー */
  --color-accent: #c4a265;       /* ゴールド */
  --color-cta: #2ecc71;          /* グリーンCTA */
  --color-text: #ffffff;         /* 白文字（ダーク背景上） */
  --color-text-sub: #a0aec0;    /* サブテキスト */
  --color-bg: #0f1923;          /* 背景 */
  --color-badge-bg: rgba(255,255,255,0.1); /* バッジ背景 */
}
```

### 安心・寄り添い型（医療、相談、保険）

```css
:root {
  --color-primary: #2b5797;      /* トラストブルー */
  --color-secondary: #f5f7fa;    /* ライトグレー背景 */
  --color-accent: #e67e22;       /* オレンジアクセント */
  --color-cta: #e74c3c;          /* 赤CTA */
  --color-text: #1a1a2e;         /* ダーク文字 */
  --color-text-sub: #666666;    /* サブテキスト */
  --color-bg: #ffffff;          /* 白背景 */
  --color-badge-bg: #f0f4f8;   /* バッジ背景 */
}
```

### ポップ・親しみ型（EC、美容、若年層向け）

```css
:root {
  --color-primary: #e8344e;      /* ビビッドレッド/ピンク */
  --color-secondary: #fff5f5;    /* ライトピンク背景 */
  --color-accent: #ff6b6b;       /* コーラルアクセント */
  --color-cta: #e8344e;          /* 赤CTA */
  --color-text: #2d2d2d;         /* ダーク文字 */
  --color-text-sub: #888888;    /* サブテキスト */
  --color-bg: #ffffff;          /* 白背景 */
  --color-badge-bg: #fff0f0;   /* バッジ背景 */
}
```

### 高級・洗練型（ブランド、ホテル、ハイエンド）

```css
:root {
  --color-primary: #1a1a1a;      /* ほぼ黒 */
  --color-secondary: #333333;    /* ダークグレー */
  --color-accent: #d4af37;       /* ゴールド */
  --color-cta: #d4af37;          /* ゴールドCTA */
  --color-text: #ffffff;         /* 白文字 */
  --color-text-sub: #999999;    /* サブテキスト */
  --color-bg: #0a0a0a;          /* 黒背景 */
  --color-badge-bg: rgba(255,255,255,0.05); /* バッジ背景 */
}
```

### コーラル・温もり型（ヘルスケア、ママ向け、ライフスタイル）

```css
:root {
  /* --- Basic Color（グレースケール） --- */
  --color-black: #1d1d1d;         /* テキスト・見出し */
  --color-gray-dark: #646464;     /* サブテキスト */
  --color-gray: #b4b4b4;          /* ボーダー・区切り線 */
  --color-gray-light: #d8d8d8;    /* 薄い区切り線 */
  --color-gray-bg: #f3f5f6;       /* セクション背景 */
  --color-white: #ffffff;         /* メイン背景 */

  /* --- Primary Color（コーラル系4段階） --- */
  --color-primary: #ff6450;       /* メインアクション・CTA */
  --color-primary-light: #ff8373; /* ホバー・アクティブ状態 */
  --color-primary-pale: #ffc0b9;  /* バッジ背景・タグ */
  --color-primary-bg: #ffefed;    /* セクション背景・ハイライト */

  /* --- 用途別エイリアス --- */
  --color-cta: #ff6450;           /* CTAボタン */
  --color-text: #1d1d1d;          /* 本文テキスト */
  --color-text-sub: #646464;      /* サブテキスト */
  --color-bg: #ffffff;            /* 背景 */
  --color-accent: #ff6450;        /* アクセントカラー */
  --color-badge-bg: #ffefed;      /* バッジ背景 */
  --color-badge-border: #ffc0b9;  /* バッジボーダー */
}
```

**使い方のポイント**
- **CTA**：`#ff6450`（白背景上で最も目を引くコーラル）
- **見出しの強調ワード**：`#ff6450` で部分カラー変更
- **バッジ/タグ背景**：`#ffefed`（淡いピンク）+ `#ffc0b9`ボーダー
- **蛍光マーカー下線**：`#ffc0b9` を60%透過で
- **ホバー**：`#ff6450` → `#ff8373` に変化

**配色のコツ**
- 白背景 × コーラルアクセント × ダークグレーテキストの3軸
- コーラルは温かみがあるが「安っぽく」なりがち → グレースケールの階調で品格を保つ
- `#1d1d1d`（ほぼ黒）の見出しと`#646464`のサブテキストで読みやすさを確保
- 写真の暖かい色味（肌色、木目、食品）と相性が良い

### 緊急・行動喚起型（セール、期間限定）

```css
:root {
  --color-primary: #cc0000;      /* 強い赤 */
  --color-secondary: #fff3cd;    /* 警告イエロー背景 */
  --color-accent: #ff6600;       /* オレンジ */
  --color-cta: #cc0000;          /* 赤CTA */
  --color-text: #1a1a1a;         /* 黒文字 */
  --color-text-sub: #555555;    /* サブテキスト */
  --color-bg: #ffffff;          /* 白背景 */
  --color-badge-bg: #fff3cd;   /* 黄色バッジ背景 */
}
```

---

## タイポグラフィ設定

### 信頼・権威型
```css
--font-heading: 'Noto Sans JP', sans-serif;  /* 太ゴシック */
--font-body: 'Noto Sans JP', sans-serif;
--font-accent: 'BIZ UDGothic', sans-serif;   /* 角ばった印象 */
--heading-weight: 900;
```

### 安心・寄り添い型
```css
--font-heading: 'Noto Sans JP', sans-serif;  /* ゴシック */
--font-body: 'Noto Sans JP', sans-serif;
--font-accent: 'Noto Serif JP', serif;        /* 感情的な部分に明朝 */
--heading-weight: 700;
```

### ポップ・親しみ型
```css
--font-heading: 'Zen Maru Gothic', sans-serif; /* 丸ゴシック */
--font-body: 'Zen Maru Gothic', sans-serif;
--font-accent: 'M PLUS Rounded 1c', sans-serif;
--heading-weight: 700;
```

### 高級・洗練型
```css
--font-heading: 'Shippori Mincho', serif;     /* 明朝体 */
--font-body: 'Noto Serif JP', serif;
--font-accent: 'Cormorant Garamond', serif;   /* 英字セリフ */
--heading-weight: 400;  /* 細めで上品に */
```

### コーラル・温もり型
```css
--font-heading: 'Noto Sans JP', sans-serif;   /* すっきりゴシック */
--font-body: 'Noto Sans JP', sans-serif;
--font-accent: 'Zen Maru Gothic', sans-serif; /* 柔らかい部分に丸ゴシック */
--heading-weight: 700;  /* 太すぎず読みやすく */
```

**ポイント**
- 見出しは700（Boldだが900ほど力強くない＝温かみと読みやすさの両立）
- サブコピーや寄り添い系テキストに`Zen Maru Gothic`を使うと柔らかさが出る
- コーラルの色味と丸ゴシックの相性が良い

---

## フォントサイズ基準（モバイル）

| 役割 | サイズ | 用途 |
|------|--------|------|
| メインコピー | 32〜48px | 最も目立つキャッチコピー |
| 強調ワード | 56〜80px | コピー内の特大キーワード |
| サブコピー | 14〜18px | メインを補足する文 |
| バッジテキスト | 12〜14px | 信頼バッジ内のテキスト |
| CTA | 16〜20px | ボタンテキスト |
| ナビ/ロゴ | 12〜14px | ヘッダー要素 |

**鉄則：メインコピー内でサイズ差をつける**
```
「完済」← 64px
「まで」← 64px
「徹底」← 40px
「サポート！」← 40px（色を変える）
```

---

## 文字装飾テクニック CSS

### 蛍光マーカー風下線
```css
.marker-yellow {
  background: linear-gradient(transparent 60%, #fff44f 60%);
  display: inline;
}
```

### 部分カラー変更
```css
.text-accent {
  color: var(--color-accent);
  font-weight: 900;
}
```

### 吹き出しバッジ
```css
.tag-badge {
  display: inline-block;
  padding: 6px 16px;
  border: 2px solid currentColor;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
}
```

### 縁取り文字（写真上で使用）
```css
.text-outline {
  -webkit-text-stroke: 2px #fff;
  color: transparent;
  font-size: 72px;
  font-weight: 900;
}
```

### リボン風CTA
```css
.ribbon-cta {
  position: relative;
  background: #e74c3c;
  color: #fff;
  padding: 12px 40px;
  font-size: 18px;
  font-weight: 700;
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
}
```

### 点線下線
```css
.dotted-underline {
  border-bottom: 3px dotted var(--color-accent);
  padding-bottom: 2px;
}
```

---

## フォントサイズ基準（PC / 960px以上）

| 役割 | サイズ | 用途 |
|------|--------|------|
| メインコピー | 56〜80px | 最も目立つキャッチコピー |
| 強調ワード | 80〜140px | コピー内の特大キーワード |
| サブコピー | 16〜22px | メインを補足する文 |
| バッジテキスト | 14〜16px | 信頼バッジ内のテキスト |
| CTA | 18〜24px | ボタンテキスト |
| ナビ/ロゴ | 14〜16px | ヘッダー要素 |

**レスポンシブフォントサイズの実装**
```css
/* clamp()で自動調整 */
.hero-copy__huge {
  font-size: clamp(48px, 12vw, 140px);
}
.hero-copy__mid {
  font-size: clamp(28px, 7vw, 80px);
}
.hero-sub {
  font-size: clamp(14px, 2.5vw, 20px);
}
```

---

## スペーシングシステム

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
}
```

| 用途 | トークン | 値 |
|------|---------|-----|
| テキスト間の微小余白 | `--space-xs` | 4px |
| バッジ内のパディング | `--space-sm` ~ `--space-md` | 8〜16px |
| セクション内の要素間 | `--space-lg` ~ `--space-xl` | 24〜32px |
| FV内の大きなブロック間 | `--space-2xl` ~ `--space-3xl` | 48〜64px |
| セクション間 | `--space-4xl` | 96px |

**鉄則：日本のLPは余白を詰める**
- 海外LPの感覚で `padding: 80px` を入れると間延びする
- FV内の要素間は `16px〜32px` が基本
- 「詰めすぎ？」と思うくらいでちょうどいい

---

## シャドウ / エレベーション

```css
:root {
  /* カード・バッジ用 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  /* 人物写真・CTAボタン用 */
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.15);
  /* フローティング要素用 */
  --shadow-lg: 0 12px 48px rgba(0, 0, 0, 0.25);
  /* ダーク背景上の要素用 */
  --shadow-dark: 0 8px 32px rgba(0, 0, 0, 0.5);
  /* CTAボタンの光彩（アクセントカラーに合わせて変更） */
  --shadow-glow: 0 4px 24px rgba(232, 52, 78, 0.4);
}
```

| レベル | 用途 | いつ使う |
|--------|------|---------|
| `--shadow-sm` | バッジ、タグ | 軽く浮かせたい要素 |
| `--shadow-md` | 人物写真、CTA | 主要な要素 |
| `--shadow-lg` | フローティングCTA | 強く浮かせたい要素 |
| `--shadow-dark` | ダーク背景上の写真 | 背景が暗いとき |
| `--shadow-glow` | CTAボタン | CTA色に合わせた光彩 |

---

## ボーダーラディウス

```css
:root {
  --radius-sm: 4px;    /* バッジ、タグ */
  --radius-md: 8px;    /* カード、写真 */
  --radius-lg: 12px;   /* 大きめカード、CTA */
  --radius-xl: 20px;   /* 丸みの強い要素 */
  --radius-full: 100px; /* 完全な角丸（ピル型ボタン） */
  --radius-circle: 50%; /* 円形 */
}
```

**鉄則：1つのFV内でradiusは2種類まで**
- 例：CTAとバッジは `--radius-lg`、写真は `--radius-md`
- 3種類以上混在すると雑に見える

---

## グラデーションパターン

### ダーク系（権威・信頼型）
```css
/* 紺→黒 */
background: linear-gradient(180deg, #1a2744 0%, #0f1923 100%);
/* 斜めグラデ */
background: linear-gradient(135deg, #132038 0%, #1a2d4d 100%);
```

### ライト系（安心・寄り添い型）
```css
/* 白→淡いブルー */
background: linear-gradient(180deg, #ffffff 0%, #f0f4f8 100%);
/* 白→淡いピンク */
background: linear-gradient(180deg, #ffffff 0%, #fff5f5 100%);
```

### 写真オーバーレイ用
```css
/* 下からフェード（テキスト読みやすくする） */
background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%);
/* 左からフェード */
background: linear-gradient(90deg, rgba(0,0,0,0.6) 0%, transparent 50%);
```

### アクセント系
```css
/* CTA用グラデーション */
background: linear-gradient(180deg, #e04a30 0%, #c23a22 100%);
/* ゴールド系 */
background: linear-gradient(135deg, #c4a265 0%, #e2c97e 50%, #c4a265 100%);
```

---

## 縦書きテキスト

```css
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;     /* 英数字は横のまま */
  letter-spacing: 0.15em;      /* 縦書き時は字間を広めに */
  line-height: 1.8;            /* 行間（＝横の列間）も広めに */
}

/* 縦書きの中で数字だけ横にする */
.vertical-text .tcy {
  text-combine-upright: all;
}
```

**使いどころ**
- パターンG/Hで必須
- 高級・和風テイストのパターンA/Dでも有効
- モバイルでは画面幅が狭いので、縦書きは2行以内に抑える
