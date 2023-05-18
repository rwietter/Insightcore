# Base de dados anonimizados

| Field                  | Description                                           | Data Type      |
| ---------------------- | ----------------------------------------------------- | -------------- |
| COD_IBGE               | Código IBGE do Município                              | String - Null  |
| MUNICIPIO              | Nome do Município                                     | String - Null  |
| COD_REGIAO_COVID       | Código da região de saúde COVID                       | String - Null  |
| REGIAO_COVID           | Nome da regição de saúde COVID                        | String - Null  |
| SEXO                   | Sexo                                                  | String - Null  |
| FAIXAETARIA            | Faixa Etária                                          | String - Null  |
| CRITERIO               | Tipo de teste                                         | String - Null  |
| DATA_CONFIRMACAO       | Data de confirmação                                   | Date - Null    |
| DATA_SINTOMAS          | Data de início dos sintomas                           | Date - Null    |
| DATA_INCLUSAO          | Data de inclusão no dashboard do RS                   | Date - Null    |
| DATA_EVOLUCAO          | Data da evolução                                      | Date - Null    |
| EVOLUCAO               | Descrição da evolução                                 | String - Null  |
| HOSPITALIZADO          | Paciente foi hospitalizado                            | Boolean - Null |
| FEBRE                  | Sintomas de febre                                     | Boolean - Null |
| TOSSE                  | Sintomas de tosse                                     | Boolean - Null |
| GARGANTA               | Sintomas de dor de garganta                           | Boolean - Null |
| DISPNEIA               | Sintomas de dor de dispnéia/falta de ar               | Boolean - Null |
| OUTROS                 | Outros sintomas                                       | Boolean - Null |
| CONDICOES              | Alguma condição de saúde que necessite atenção        | String - Null  |
| GESTANTE               | Paciente é gestante                                   | Boolean - Null |
| DATA_INCLUSAO_OBITO    | Data de inclusão da informação de óbito               | Date - Null    |
| DATA_EVOLUCAO_ESTIMADA | Data da evolução estimada (casos não hospitalizados)  | Date - Null    |
| RACA_COR               | Raça/Cor                                              | String - Null  |
| PROFISSIONAL_SAUDE     | Profissional de Saúde                                 | Boolean - Null |
| BAIRRO                 | Bairro (apenas municípios com mais de 100.000 hab)    | String - Null  |
| SRAG                   | Paciente apresentou síndrome respiratória aguda grave | Boolean - Null |
| PAIS_NASCIMENTO        | País de Nascimento                                    | String - Null  |
| PES_PRIV_LIBERDADE     | Pessoa Privada de Liberdade                           | Boolean - Null |

## Referências

- [Painel Coronavírus RS](https://ti.saude.rs.gov.br/covid19/api)
