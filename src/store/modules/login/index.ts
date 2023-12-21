import { defineStore } from "pinia";
import type { UserState } from "./types";

const useLoginStore = defineStore("user", {
  state: (): UserState => ({
    id: "",
    username: "",
    nickname: ""
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    }
  },

  actions: {
    // 用户登录
    // async login(req: LoginReq) {
    //   try {
    //     const res = await userLogin(req);
    //     setToken(res.data.access_token);
    //   } catch (err) {
    //     clearToken();
    //     throw err;
    //   }
    // }
  }
});

export default useLoginStore;
