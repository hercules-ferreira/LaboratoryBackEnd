// import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'
import prismaClient from '../../prisma';

interface UserRequest{
  name: string;
  cpf: string;
  email: string;
  password: string;

}

class CreateUserService{
  async execute({ name,  cpf, email, password }: UserRequest){

    // verificar se ele enviou um email
    if(!email){
      throw new Error("Email incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const UserAlreadyExists = await prismaClient.user.findFirst({
    
      where:{
      email: email 
  }})
 
      if(UserAlreadyExists){
      throw new Error ('User already exists!')
  }

     //verificar se esse CPF ja está cadastrado na plataforma
     
     const cpfAlreadyExists = await prismaClient.user.findFirst({
    
      where:{
          cpf: cpf
  }})
 
      if(cpfAlreadyExists){
      throw new Error ('number CPF already exists!')
  }  
 
 

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        name: name,
        cpf: cpf,    
        email: email,
        password: passwordHash,
      },
      select:{
        id: true,
        name: true,
        cpf: true,     
        email: true,
      }
    })


    return user;
  }
}

export { CreateUserService }