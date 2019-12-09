## Notepad de descobertas

In the project directory, you can run:

### preparacao de ambiente:

clone o projeto:

```
git clone git@github.com:alanunesouza/challenge-itau-fullstack.git
```

instale o node, yarn, react e principalmente o [docker](https://docs.docker.com/install/) em sua máquina. Em seguida, rode os comandos abaixo em seu terminal:

```
docker run --name mongodiscovery -p 27017:27017 -d -t mongo
```

```
docker run --name discovery -e POSTGRESS_PASSWORD=docker -p 5432:5432 -d postgres
```

### rodar o projeto

na pasta clonada, rode em seu terminal:

```
cd api && yarn && PORT=3333 yarn start
```

abra uma nova aba de terminal, e rode:

```
cd web && yarn && yarn start
```

### observacao

renomeie o arquivo .env.example para .env

### layouts

<img src="/layouts/layout_1.png" alt="Layout 1"/>
<img src="/layouts/layout_2.png" alt="Layout 2"/>
