WebCC.start(
    function (ok) {
        if (ok) {
            console.log("✅ WebCC connected");
            update();
            WebCC.onPropertyChanged.subscribe(update);
        } else {
            console.error("❌ WebCC connection failed");
        }
    },
    {
        methods: {},
        events: [],
        properties: {
            Front_Title: "Machine Info",
            Front_text_1: "Machine data",
            Front_text_2: "",
            Front_text_3: "",
            Front_text_4: "",
            Front_text_5: "",
            Front_text_6: "",
            Front_text_7: "",
            Front_text_8: "",
            Front_text_9: "",
            Front_text_10: "",
            Back_Title: "Program Info",
            Back_text_1: "Program data",
            Back_text_2: "",
            Back_text_3: "",
            Back_text_4: "",
            Back_text_5: "",
            Back_text_6: "",
            Back_text_7: "",
            Back_text_8: "",
            Back_text_9: "",
            Back_text_10: "",
            CardColor_1: 4287130174,
            CardColor_2: 4291408653,
            TextColor: 4294967295,
            Width: 300,
            Height: 300,
            FontSize: 16
        }
    }
);

document.addEventListener("DOMContentLoaded", () => {
    update();
});
