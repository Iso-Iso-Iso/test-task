import { onMounted } from "vue";
export default function useCircleText(textHtmlElement, deg = 5) {
    function init() {
        const text = textHtmlElement.value.innerHTML
            .split("")
            .map((e, i) => {
                return `<span class="circle-latter" style="transform:rotate(${
                    e == "r" ? deg * i + 3 : deg * i
                }deg)">${e}</span>`;
            })
            .join("");
        textHtmlElement.value.innerHTML = text;
    }

    onMounted(init);
}
