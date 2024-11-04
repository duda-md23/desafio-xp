# Função para determinar o nível do herói com base no XP
def classificar_nivel_heroi(xp):
    if xp < 1000:
        return "Ferro"
    elif 1001 <= xp <= 2000:
        return "Bronze"
    elif 2001 <= xp <= 5000:
        return "Prata"
    elif 5001 <= xp <= 7000:
        return "Ouro"
    elif 7001 <= xp <= 8000:
        return "Platina"
    elif 8001 <= xp <= 9000:
        return "Ascendente"
    elif 9001 <= xp <= 10000:
        return "Imortal"
    else:
        return "Radiante"

# Função principal do programa
def main():
    # Solicita ao usuário o nome do herói
    nome_heroi = input("Digite o nome do herói: ")

    # Solicita ao usuário a quantidade de XP e converte para número inteiro
    try:
        xp_heroi = int(input("Digite o valor de experiência (XP) do herói: "))
    except ValueError:
        print("Por favor, insira um valor numérico para o XP.")
        return

    # Determina o nível do herói
    nivel_heroi = classificar_nivel_heroi(xp_heroi)

    # Exibe a mensagem final
    print(f"O Herói de nome {nome_heroi} está no nível de {nivel_heroi}")

# Executa o programa
if __name__ == "__main__":
    main()

