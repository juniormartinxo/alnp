import { UserRepository } from './ports/user.repository'
import { UserDataInterface } from './user-data.interface'

export class InMemoryUserRepository implements UserRepository {
  constructor(private users: UserDataInterface[]) {}

  create(user: UserDataInterface): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findUserByEmail(email: string): Promise<UserDataInterface> {
    return null //throw new Error('Method not implemented.')
  }

  findAllUsers(): Promise<UserDataInterface[]> {
    throw new Error('Method not implemented.')
  }

  exists(user: UserDataInterface): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  async save(userData: UserDataInterface): Promise<void> {
    this.users.push(userData)
  }
}
