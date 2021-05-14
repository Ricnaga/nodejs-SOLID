import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui

    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error(
        "Non existing user are not allowed to turn administrator"
      );
    }

    const userIsAdmin = this.usersRepository.turnAdmin(userExists);
    return userIsAdmin;
  }
}

export { TurnUserAdminUseCase };
