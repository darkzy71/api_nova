clear
echo 'COMO HOSPEDAR NO BITBUCKET


VOCÊ DEVERA TER EM MÃOS, TODAS AS 
INFORMAÇÕES LISTADAS ABAIXO

1º LINK DO REPOSITÓRIO

2º USUÁRIO DA CONTA

3º TOKEN

PRESSIONE ENTER PARA PROSSEGUIR'
read next
echo 'Digite o caminho completo da pasta do seu projeto'
echo
read CCP
cd $CCP
rm -rf .git
git init
clear
echo 'Digite o nome da pasta do bot, caso a pasta esteja em
download escreva assim Download/PastaDoBot

Obs: Caso a pasta do bot esteja em MAIÚSCULO digite o 
nome da pasta do bot em MAIÚSCULO'
echo
read NOMEDAPASTA
git config --global --add safe.directory /storage/emulated/0/$NOMEDAPASTA
echo 'Digite seu email'
echo
read EMAIL
git config --global user.email "$EMAIL"
echo 'Digite seu nome'
echo
read MNOME
git config --global user.name "$MNOME"
git add .
echo 'Digite um comentário do commit'
echo
read CCO
git commit -m "$CCO"
git branch -M main
clear
echo 'Digite ou cole o link do seu Repositório'
echo
read NOMEGIT
git remote add origin $NOMEGIT
clear
echo 'No próximo comando, ele vai pedir o Username, é só você digitar o nome de usuário, que foi utilizado para criar a conta

Logo em seguida ele vai pedir o Password,
É SÓ VOCÊ COLAR O TOKEN E DAR ENTER

Obs: Não se preocupe na hora de você colar o Token, ele ficara invisível

Pressione enter para Prosseguir'
echo
read next
git push -u origin main
echo 'Upload Concluído

Pressione enter para Finalizar'
read next