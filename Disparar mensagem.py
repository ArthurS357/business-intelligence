import json
import xml.etree.ElementTree as ET

# Definindo as fontes de anúncio

class FonteAnuncio:
    def obter_anuncio(self):
        raise NotImplementedError("Método 'obter_anuncio' deve ser implementado pela classe concreta")

class BancoDadosFonte(FonteAnuncio):
    def obter_anuncio(self):
        return {"titulo": "Promoção Imperdível", "mensagem": "Desconto de 50%! Não perca!"}

class JSONFonte(FonteAnuncio):
    def obter_anuncio(self):
        anuncio_json = '{"titulo": "Promoção Imperdível", "mensagem": "Desconto de 50%! Não perca!"}'
        return json.loads(anuncio_json)

class XMLFonte(FonteAnuncio):
    def obter_anuncio(self):
        anuncio_xml = """<anuncio><titulo>Promoção Imperdível</titulo><mensagem>Desconto de 50%! Não perca!</mensagem></anuncio>"""
        root = ET.fromstring(anuncio_xml)
        return {"titulo": root.find('titulo').text, "mensagem": root.find('mensagem').text}

class TextoFonte(FonteAnuncio):
    def obter_anuncio(self):
        return {"titulo": "Promoção Imperdível", "mensagem": "Desconto de 50%! Não perca!"}

# Definindo os destinos de anúncio

class DestinoAnuncio:
    def enviar_anuncio(self, anuncio):
        raise NotImplementedError("Método 'enviar_anuncio' deve ser implementado pela classe concreta")

class WhatsAppDestino(DestinoAnuncio):
    def enviar_anuncio(self, anuncio):
        print(f"Enviando anúncio para WhatsApp: {anuncio['titulo']} - {anuncio['mensagem']}")

class SMSDestino(DestinoAnuncio):
    def enviar_anuncio(self, anuncio):
        print(f"Enviando SMS: {anuncio['titulo']} - {anuncio['mensagem']}")

class FacebookDestino(DestinoAnuncio):
    def enviar_anuncio(self, anuncio):
        print(f"Enviando anúncio para Facebook: {anuncio['titulo']} - {anuncio['mensagem']}")

# Classe de orquestração

class AnuncioHandler:
    def __init__(self, fonte: FonteAnuncio, destino: DestinoAnuncio):
        self.fonte = fonte
        self.destino = destino

    def processar_anuncio(self):
        anuncio = self.fonte.obter_anuncio()
        print("\nAnúncio:")
        print(f"Título: {anuncio['titulo']}")
        print(f"Mensagem: {anuncio['mensagem']}\n")
        self.destino.enviar_anuncio(anuncio)

# Factory para criar fontes e destinos

class AnuncioFactory:
    @staticmethod
    def criar_fonte(tipo_fonte: str) -> FonteAnuncio:
        if tipo_fonte == "banco":
            return BancoDadosFonte()
        elif tipo_fonte == "json":
            return JSONFonte()
        elif tipo_fonte == "xml":
            return XMLFonte()
        elif tipo_fonte == "texto":
            return TextoFonte()
        else:
            raise ValueError(f"Fonte desconhecida: {tipo_fonte}")

    @staticmethod
    def criar_destino(tipo_destino: str) -> DestinoAnuncio:
        if tipo_destino == "whatsapp":
            return WhatsAppDestino()
        elif tipo_destino == "sms":
            return SMSDestino()
        elif tipo_destino == "facebook":
            return FacebookDestino()
        else:
            raise ValueError(f"Destino desconhecido: {tipo_destino}")

# Função para editar o anúncio

def editar_anuncio(anuncio):
    print("\nVocê pode editar o anúncio completo!")
    novo_titulo = input(f"Digite o novo título do anúncio (Atual: {anuncio['titulo']}): ")
    nova_mensagem = input(f"Digite a nova mensagem do anúncio (Atual: {anuncio['mensagem']}): ")

    # Atualizando o anúncio com os novos valores, se fornecidos
    if novo_titulo.strip():  # Verifica se o novo título não está vazio
        anuncio["titulo"] = novo_titulo
    if nova_mensagem.strip():  # Verifica se a nova mensagem não está vazia
        anuncio["mensagem"] = nova_mensagem

# Função principal

def main():
    print("Escolha a fonte do anúncio:")
    print("1. Banco de Dados")
    print("2. JSON")
    print("3. XML")
    print("4. Texto")
    escolha_fonte = input("Digite o número correspondente à fonte (1-4): ")

    if escolha_fonte == '1':
        fonte = AnuncioFactory.criar_fonte("banco")
    elif escolha_fonte == '2':
        fonte = AnuncioFactory.criar_fonte("json")
    elif escolha_fonte == '3':
        fonte = AnuncioFactory.criar_fonte("xml")
    elif escolha_fonte == '4':
        fonte = AnuncioFactory.criar_fonte("texto")
    else:
        print("Opção inválida. Usando a fonte padrão (Texto).")
        fonte = AnuncioFactory.criar_fonte("texto")

    print("Escolha o destino do anúncio:")
    print("1. WhatsApp")
    print("2. SMS")
    print("3. Facebook")
    escolha_destino = input("Digite o número correspondente ao destino (1-3): ")

    if escolha_destino == '1':
        destino = AnuncioFactory.criar_destino("whatsapp")
    elif escolha_destino == '2':
        destino = AnuncioFactory.criar_destino("sms")
    elif escolha_destino == '3':
        destino = AnuncioFactory.criar_destino("facebook")
    else:
        print("Opção inválida. Usando o destino padrão (WhatsApp).")
        destino = AnuncioFactory.criar_destino("whatsapp")

    # Criando o handler
    handler = AnuncioHandler(fonte, destino)

    # Obter e editar o anúncio
    anuncio = fonte.obter_anuncio()
    editar_anuncio(anuncio)

    # Processar o envio do anúncio
    handler.processar_anuncio()

if __name__ == "__main__":
    main()