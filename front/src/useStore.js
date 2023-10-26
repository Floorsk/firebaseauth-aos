import { create } from 'zustand'

const useStore = create((set) => ({
    userId: '',
    isLogged: false,
    signIn: (id) => set((state) => ({ isLogged: true, userId: id})),
}))

export default useStore