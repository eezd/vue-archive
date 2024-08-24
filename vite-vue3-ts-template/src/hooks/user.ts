import { Ref, ref } from 'vue'

export interface IUseUser {
  loading: Ref<boolean>
  setLoading: (value: boolean) => void
  toggle: () => void
}

export default function useUser(initValue = false): IUseUser {
  const loading = ref(initValue)
  const setLoading = (value: boolean): void => {
    loading.value = value
  }
  const toggle = (): void => {
    loading.value = !loading.value
  }

  return {
    loading,
    setLoading,
    toggle,
  }
}
