export default function gerarSenha() {

    let senha: string = '';
    let caracteres: string = '@lasdfIUYEOMN1234567890%&*Mnbv';
    let tamanhoSenha: number = 8;

    for(let index = 0; index <tamanhoSenha; index++) {
        senha = senha + caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    console.log(senha);
    return senha
}