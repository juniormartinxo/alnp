import { UserRepository } from './ports/user.repository'
import { UserDataInterface } from './user-data.interface'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserDataInterface[]

  constructor(private users: UserDataInterface[]) {
    this.repository = users
  }

  async create(user: UserDataInterface): Promise<void> {
    const exists = await this.exists(user)

    if (!exists) {
      this.repository.push(user)
    } else {
      throw new Error('User already exists')
    }
  }

  async findUserByEmail(email: string): Promise<UserDataInterface> {
    const user = this.users.find(user => user.email === email)

    if (user === undefined) {
      return null
    }

    return user
  }

  async findAllUsers(): Promise<UserDataInterface[]> {
    return this.repository
  }

  async exists(user: UserDataInterface): Promise<boolean> {
    if ((await this.findUserByEmail(user.email)) === null) {
      return false
    }

    return true
  }

  async save(userData: UserDataInterface): Promise<void> {
    this.users.push(userData)
  }
}
