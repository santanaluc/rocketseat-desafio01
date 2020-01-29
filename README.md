<h1>Desafio 1</h1>
<p>
Nesse desafio vamos contruir uma aplicação que aceita a entrada de um campo do usuário por um formulário e o redireciona para a página correta baseado em sua idade.
</p>

<h3>Configure uma aplicação utilizando ExpressJS, Nunjucks, EditorConfig e ESLint.</h3>

<h2>Rotas</h2>
<p>/: Rota inicial que renderiza uma página com um formulário com um único campo age que representa a idade do usuário;
/check: Rota chamada pelo formulário da página inicial via método POST que checa se a idade do usuário é maior que 18 e o redireciona para a rota /major, caso contrário o redireciona para a rota /minor (Lembre de enviar a idade como Query Param no redirecionamento);
/major: Rota que renderiza uma página com o texto: Você é maior de idade e possui x anos, onde x deve ser o valor informado no input do formulário;
/minor: Rota que renderiza uma página com o texto: Você é menor de idade e possui x anos, onde x deve ser o valor informado no input do formulário;</p>

<h1>Middlewares</h1>
<p>
Deve haver um middleware que é chamado nas rotas /major e /minor e checa se a informação de idade não está presente nos Query Params. Se essa informação não existir deve redirecionar o usuário para a página inicial com o formulário, caso contrário o middleware deve apenas continuar com o fluxo normal.
</p>
