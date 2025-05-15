function update() {
    const card = document.getElementById("infoCard");
    const title = document.getElementById("titleText");
    const desc = document.getElementById("descriptionText");

    if (!card || !title || !desc) return;

    const props = WebCC?.Properties ?? {};

    const bgColor = toColor(props.CardColor ?? 4280468723);
    const txtColor = toColor(props.TextColor ?? 4294967295);
    const width = props.Width ?? 300;
    const height = props.Height ?? 180;
    const fontSize = props.FontSize ?? 16;

    const titleText = props.TitleText ?? "Machine Info";
    const descText = props.DescriptionText ?? "This machine is currently running.";

    card.style.backgroundColor = bgColor;
    card.style.color = txtColor;
    card.style.width = width + "px";
    card.style.height = height + "px";
    card.style.fontSize = fontSize + "px";

    title.innerText = titleText;
    desc.innerText = descText;
}

function toColor(num) {
    num >>>= 0;
    const b = num & 0xff;
    const g = (num >>> 8) & 0xff;
    const r = (num >>> 16) & 0xff;
    const a = ((num >>> 24) & 0xff) / 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

window.update = update;
