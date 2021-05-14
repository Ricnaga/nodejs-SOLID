import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const isAdmin = this.usersRepository.findById(user_id);

    if (isAdmin.admin === false) {
      throw new Error("This user is not administrator");
    }

    if (!isAdmin) {
      throw new Error("This user does not exists");
    }

    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };
