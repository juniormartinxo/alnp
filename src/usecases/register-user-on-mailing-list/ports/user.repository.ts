import { UserDataInterface } from '../user-data.interface'

export interface UserRepository {
  create(user: UserDataInterface): Promise<void>
  findUserByEmail(email: string): Promise<UserDataInterface>
  findAllUsers(): Promise<UserDataInterface[]>
  exists(user: UserDataInterface): Promise<boolean>
}
