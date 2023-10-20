import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Leite',
      email: 'gabriel@gmail.com',
      idade: 18,
      peso: 80,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
