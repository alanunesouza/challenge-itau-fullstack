# Notepad de descobertas


### preparacao de ambiente:

clone o projeto:

```
git clone git@github.com:alanunesouza/challenge-itau-fullstack.git
```

instale o node, yarn, react e o [docker](https://docs.docker.com/install/) em sua máquina. Em seguida, rode os comandos abaixo em seu terminal:

```
docker run --name mongodiscovery -p 27017:27017 -d -t mongo
```

```
docker run --name discovery -e POSTGRESS_PASSWORD=docker -p 5432:5432 -d postgres
```

instale o [postbird](https://electronjs.org/apps/postbird) (interface de acesso ao banco postgres). Após instalado, configure a conexão ao banco conforme imagem abaixo e clique em "connect" ou "conectar":

<img src="/layouts/postbird.png" alt="Postbird"/>

crie um database chamado "discovery"

<img src="/layouts/postbird_2.png" alt="Postbird"/>

<img src="/layouts/postbird_3.png" alt="Postbird"/>

Com isso, você já tem o ambiente preparado para a aplicacao.

### rodar o projeto

na pasta clonada, rode em seu terminal:

```
cd api && yarn && yarn dev
```

abra uma nova aba de terminal, e rode:

```
cd web && yarn && yarn start
```

### observacao

renomeie o arquivo .env.example para .env

### layouts

Tela principal - web
<img src="/layouts/layout_1.png" alt="Layout 2"/>

Tela para adicionar descoberta - web
<img src="/layouts/layout_2.png" alt="Layout 1"/>

Tela principal - mobile
<img src="/layouts/layout_mob_1.png" alt="Layout 2"/>

Tela para adicionar descoberta - mobile
<img src="/layouts/layout_mob_2.png" alt="Layout 1"/>
