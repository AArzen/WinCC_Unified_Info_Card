# Info_Card ![Preview](./assets/Info_Card.png)

**Info_Card** is a responsive and customizable **Custom Web Control** for [WinCC Unified](https://support.industry.siemens.com/cs/document/109784439/), designed to present machine or process-related information in a sleek, animated card format. It includes two sides (front and back) with configurable text and visual properties.

---

## 🚀 Features

- Supports up to **10 text lines and 1 title** per side (front and back)
- Dynamic 3D **flip animation**:
  - On **mouse hover** (for desktop users)
  - On **tap/click** (for touch screens and industrial panels)
- Fully customizable via WinCC Unified properties:
  - Card width & height
  - Font size
  - Text color
  - Background gradient (two colors)
- Based entirely on standard WebCC structure (`updateGraphics.js`, `webcc-init.js`, `style.css`)
- Offline-compatible: **no online requests**, all assets local

---

## ⚠️ Limitations

- ❌ No runtime events (read-only display control)
- ❌ May not fit tightly in minimal CWC containers due to flip effect needing extra space
- 📱 On **touch devices**, the card does **not flip on hover** — instead, users must **tap the card to flip it**
- 🔐 **Free to use**, modify, and distribute — but **reselling is strictly prohibited**

---

## 📁 Project Structure

```
project-root/
│
├── control/
│ ├── index.html
│ ├── css/
│ │ └── style.css
│ └── js/
│ ├── updateGraphics.js
│ ├── webcc.min.js
│ └── webcc-init.js
├── assets/
│ ├── Info_Card.ico
│ ├── Info_Card.png
│ └── Info_Card.svg
├── {57F3DEA5-91FC-4DC7-AF09-530F387DAD29}.zip
└── manifest.json

```

---

## 🧰 WinCC Unified Properties

| Property         | Type     | Description                          |
|------------------|----------|--------------------------------------|
| Front_Title      | string   | Title on the front side              |
| Front_text_1–10  | string   | Text lines 1 to 10 on the front side |
| Back_Title       | string   | Title on the back side               |
| Back_text_1–10   | string   | Text lines 1 to 10 on the back side  |
| CardColor_1      | color    | Top-left gradient color              |
| CardColor_2      | color    | Bottom-right gradient color          |
| TextColor        | color    | Text color                           |
| Width            | number   | Width of the card (in pixels)        |
| Height           | number   | Height of the card (in pixels)       |
| FontSize         | number   | Font size for all text               |

---

## 📦 How to Use in WinCC Unified

To integrate the control into your **TIA Portal WinCC Unified project**, follow these steps:

1. Locate the folder:
   ```
   <ProjectFolder>/UserFiles/CustomControls/
   ```

2. Copy the following file into it:
   ```
   {57F3DEA5-91FC-4DC7-AF09-530F387DAD29}.zip
   ```

3. Open the TIA Portal and the control will be available under **Custom Controls** in the toolbox after refresh.

---

## 🧪 Testing Outside WinCC

You can preview the control by opening `index.html` directly in a browser. While layout and animations will work, dynamic behavior depends on the **WebCC API** and will function fully only within the WinCC Unified runtime.

---

## 🆓 License

This control is provided **free of charge** for personal or professional use.  
✅ You are free to use, copy, and modify it.  
❌ **Reselling or commercial redistribution is prohibited**.

---