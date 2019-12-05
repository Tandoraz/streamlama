export default function debounce(func: () => void, wait: number): () => void {
  let timeout: any;
  return function executedFunction() {
    let context: any = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context);
    }, wait);
  };
}
