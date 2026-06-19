import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  cabecalho: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloCabecalho: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rolagemConteudo: {
    flex: 1,
  },
  containerTela: {
    padding: 20,
  },
  separador: {
    height: 2,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  secaoDestaque: {
    backgroundColor: '#DBEAFE',
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  tituloDestaque: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  subtituloDestaque: {
    fontSize: 16,
    color: '#3B82F6',
    textAlign: 'center',
  },
  paragrafo: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 20,
  },
  containerEstatisticas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  caixaEstatistica: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '45%',
  },
  numeroEstatistica: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  rotuloEstatistica: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },
  botaoAcao: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoAcao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15,
  },
  cartao: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
    elevation: 1,
  },
  tituloCartao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
  },
  textoCartao: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  itemTema: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  anoTema: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6B7280',
    marginBottom: 4,
  },
  textoTema: {
    fontSize: 16,
    color: '#1F2937',
  },
  areaTexto: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    minHeight: 200,
    marginBottom: 10,
  },
  contagemCaracteres: {
    textAlign: 'right',
    color: '#6B7280',
    marginBottom: 20,
  }
});

export default estilos;