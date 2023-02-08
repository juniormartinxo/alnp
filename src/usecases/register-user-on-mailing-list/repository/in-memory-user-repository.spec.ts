import { InMemoryUserRepository } from '../in-memory-user-repository'
import { UserDataInterface } from '../user-data.interface'

describe('In memory user repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserDataInterface[] = []
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findUserByEmail('john_doe@app.com')

    expect(user).toBeNull()
  })

  it('should return user if user it is found in the repository', async () => {
    const user: UserDataInterface = {
      name: 'John Doe',
      email: 'john_doe@app.com',
    }
    const users: UserDataInterface[] = []
    const sut = new InMemoryUserRepository(users)
    await sut.create(user)
    const findUser = await sut.findUserByEmail('john_doe@app.com')

    expect(findUser.name).toEqual(user.name)
  })

  it('should return all users in the repository', async () => {
    const users: UserDataInterface[] = [
      {
        name: 'John Doe',
        email: 'john_doe@app.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane_doe@app.com',
      },
    ]

    const sut = new InMemoryUserRepository(users)
    const returnedUsers = await sut.findAllUsers()

    expect(returnedUsers).toEqual(users)
    expect(returnedUsers.length).toBe(2)
  })
})
