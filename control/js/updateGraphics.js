function update() {
    const frontTitle = document.getElementById("frontTitle")
    const frontText1 = document.getElementById("frontText1")
    const frontText2 = document.getElementById("frontText2")
    const frontText3 = document.getElementById("frontText3")
    const frontText4 = document.getElementById("frontText4")
    const frontText5 = document.getElementById("frontText5")
    const frontText6 = document.getElementById("frontText6")
    const frontText7 = document.getElementById("frontText7")
    const frontText8 = document.getElementById("frontText8")
    const frontText9 = document.getElementById("frontText9")
    const frontText10 = document.getElementById("frontText10")
    const backTitle = document.getElementById("backTitle")
    const backText1 = document.getElementById("backText1")
    const backText2 = document.getElementById("backText2")
    const backText3 = document.getElementById("backText3")
    const backText4 = document.getElementById("backText4")
    const backText5 = document.getElementById("backText5")
    const backText6 = document.getElementById("backText6")
    const backText7 = document.getElementById("backText7")
    const backText8 = document.getElementById("backText8")
    const backText9 = document.getElementById("backText9")
    const backText10 = document.getElementById("backText10")

    const card = document.getElementById("infoCard");
    const container = document.getElementById("cardContainer");

    if (!card || !container) return;

    const props = WebCC?.Properties ?? {};

    // Read visual parameters from WinCC Unified properties
    const bgColor1 = toColor(props.CardColor_1 ?? 4287130174);
    const bgColor2 = toColor(props.CardColor_2 ?? 4291408653);
    const txtColor = toColor(props.TextColor ?? 4294967295);
    const width = props.Width ?? 300;
    const height = props.Height ?? 300;
    const fontSize = props.FontSize ?? 16;

    const frontTitle_Content = props.Front_Title ?? "Machine info";
    const frontText1_Content = props.Front_text_1 ?? "Machine data";
    const frontText2_Content = props.Front_text_2 ?? "Text";
    const frontText3_Content = props.Front_text_3 ?? "Text";
    const frontText4_Content = props.Front_text_4 ?? "Text";
    const frontText5_Content = props.Front_text_5 ?? "Text";
    const frontText6_Content = props.Front_text_6 ?? "Text";
    const frontText7_Content = props.Front_text_7 ?? "Text";
    const frontText8_Content = props.Front_text_8 ?? "Text";
    const frontText9_Content = props.Front_text_9 ?? "Text";
    const frontText10_Content = props.Front_text_10 ?? "Text";
    const backTitle_Content = props.Back_Title ?? "Program info";
    const backText1_Content = props.Back_text_1 ?? "Program data";
    const backText2_Content = props.Back_text_2 ?? "Text";
    const backText3_Content = props.Back_text_3 ?? "Text";
    const backText4_Content = props.Back_text_4 ?? "Text";
    const backText5_Content = props.Back_text_5 ?? "Text";
    const backText6_Content = props.Back_text_6 ?? "Text";
    const backText7_Content = props.Back_text_7 ?? "Text";
    const backText8_Content = props.Back_text_8 ?? "Text";
    const backText9_Content = props.Back_text_9 ?? "Text";
    const backText10_Content = props.Back_text_10 ?? "Text";

    // Apply CSS variables (used in style.css)
    document.documentElement.style.setProperty('--card-color1', bgColor1);
    document.documentElement.style.setProperty('--card-color2', bgColor2);
    document.documentElement.style.setProperty('--text-color', txtColor);
    document.documentElement.style.setProperty('--card-width', width + "px");
    document.documentElement.style.setProperty('--card-height', height + "px");
    document.documentElement.style.setProperty('--font-size', fontSize + "px");

    // Update content
    frontTitle.innerText = frontTitle_Content;
    frontText1.innerText = frontText1_Content;
    frontText2.innerText = frontText2_Content;
    frontText3.innerText = frontText3_Content;
    frontText4.innerText = frontText4_Content;
    frontText5.innerText = frontText5_Content;
    frontText6.innerText = frontText6_Content;
    frontText7.innerText = frontText7_Content;
    frontText8.innerText = frontText8_Content;
    frontText9.innerText = frontText9_Content;
    frontText10.innerText = frontText10_Content;

    backTitle.innerText = backTitle_Content;
    backText1.innerText = backText1_Content;
    backText2.innerText = backText2_Content;
    backText3.innerText = backText3_Content;
    backText4.innerText = backText4_Content;
    backText5.innerText = backText5_Content;
    backText6.innerText = backText6_Content;
    backText7.innerText = backText7_Content;
    backText8.innerText = backText8_Content;
    backText9.innerText = backText9_Content;
    backText10.innerText = backText10_Content;

    // --- Add touch/click flip support ---
    // Remove previous listener (cloneNode hack to avoid duplicate listeners)
    const newContainer = container.cloneNode(true);
    container.parentNode.replaceChild(newContainer, container);

    // Re-link new elements after cloning
    const newCard = newContainer.querySelector("#infoCard");

    // Attach click event for touch interaction
    if (newCard) {
        newContainer.addEventListener("click", () => {
            newCard.classList.toggle("flipped");
        });
    }
}

// Converts 32-bit WinCC Unified color to rgba
function toColor(num) {
    num >>>= 0;
    const b = num & 0xff;
    const g = (num >>> 8) & 0xff;
    const r = (num >>> 16) & 0xff;
    const a = ((num >>> 24) & 0xff) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

window.update = update;
