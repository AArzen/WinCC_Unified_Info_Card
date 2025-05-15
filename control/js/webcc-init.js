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
            TitleText: "Machine Info",
            DescriptionText: "This machine is currently running.",
            CardColor: 4280468723,
            TextColor: 4294967295,
            Width: 300,
            Height: 180,
            FontSize: 16
        }
    }
);

document.addEventListener("DOMContentLoaded", () => {
    update();
});
