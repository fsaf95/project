import ClipboardJS from "clipboard";
import {showToast} from "vant";

export function useClipboard(selector: string) {
    const clipboard = new ClipboardJS(selector);
    clipboard.on('success', () => showToast('复制成功'));
    clipboard.on('error', () => showToast('复制失败'));

    return {
        copyToClipboard: (text: string) => navigator.clipboard.writeText(text)
    }
}


