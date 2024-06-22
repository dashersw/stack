import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('/api/users')
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        const data = await response.json()
        this.users = data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
  }
})
