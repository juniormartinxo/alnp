import { InMemoryUserRepository } from '../in-memory-user-repository'
import { UserDataInterface } from '../user-data.interface'

describe('In memory user repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserDataInterface[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('john_doe@app.com')

    expect(user).toBeNull()
  })
})
