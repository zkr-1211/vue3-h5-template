import { showLoadingToast, closeToast } from 'vant';

let loadingCount = 0; // 记录当前正在请求的数量
export function startLoading() {
  if (loadingCount === 0) {
    showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: 'Loading...'
    });
  }
  loadingCount++;
}

export function stopLoading() {
  loadingCount--;
  if (loadingCount === 0) {
    closeToast();
  }
}
