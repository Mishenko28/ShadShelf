import { create } from "zustand"

type ComponentStore = {
	isPreview: boolean
	setIsPreview: (isPreview: boolean) => void
}

export const useComponentStore = create<ComponentStore>(set => ({
	isPreview: true,
	setIsPreview: (isPreview: boolean) => set({ isPreview }),
}))
