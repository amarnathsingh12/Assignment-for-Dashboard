import { create } from "zustand";

export const loaderStore = create((set) => ({
    loadingRoute : null,
    setLoadingRoute : (url) => set({loadingRoute : url}),
    clearLoadingRoute : () => set({loadingRoute : null})
}))