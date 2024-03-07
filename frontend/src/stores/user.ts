import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', () => {
  const users = reactive([])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      const data = await response.json()
      Object.assign(users, data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  fetchUsers()

  return { users }
})
