import { onMounted, onUnmounted } from "vue";
export default function useParallax(element) {
    let x = 0;
    let y = 0;

    function render() {
        if (!element.value) return;
        element.value.style.transform = `translate(${x}px,${y}px)`;
        requestAnimationFrame(render);
    }

    function mouseTrack(event) {
        x = ~~((window.innerWidth / 2 - event.clientX) / 20) * -1;
        y = ~~((window.innerHeight / 2 - event.clientY) / 20) * -1;
    }

    onMounted(() => {
        window.addEventListener("mousemove", mouseTrack);
        requestAnimationFrame(render);
    });

    onUnmounted(() => {
        window.removeEventListener("mousemove", mouseTrack);
    });
}
