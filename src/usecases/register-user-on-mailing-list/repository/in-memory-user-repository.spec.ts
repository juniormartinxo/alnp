import { InMemoryUserRepository } from '../in-memory-user-repository'
import { UserDataInterface } from '../user-data.interface'

describe('In memory user repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserDataInterface[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('john_doe@app.com')

    expect(user).toBeNull()
  })

  it('should return user if user it is found in the repository', async () => {
    const user: UserDataInterface = {
      name: 'John Doe',
      email: 'john_doe@app.com',
    }
    const users: UserDataInterface[] = []
    const userRepo = new InMemoryUserRepository(users)
    await userRepo.create(user)
    const findUser = await userRepo.findUserByEmail('john_doe@app.com')

    expect(findUser.name).toEqual(user.name)
  })
})
