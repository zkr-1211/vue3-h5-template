export const storage = {
  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item;
  },

  /**
   *
   * @param key
   * @param value
   * @param maxAge 相对缓存时间，单位s，默认1day，转换为expires(绝对时间)存储，传null不过期
   */
  setItem(key: string, value: string) {
    this.removeItem(key);
    // const expires = maxAge && Date.now() + maxAge * 1000;
    localStorage.setItem(key, value);
  },

  removeItem(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  }
};
