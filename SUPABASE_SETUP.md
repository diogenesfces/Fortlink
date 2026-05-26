# Guia de Configuração - Supabase

## Pré-requisitos
- Conta no [Supabase](https://supabase.com) criada
- Projeto Supabase já criado

## Passos para Conexão

### 1. **Crie as tabelas no Supabase**
   - Acesse seu projeto Supabase
   - Vá para **SQL Editor**
   - Cole o conteúdo do arquivo `supabase.sql`
   - Execute o SQL

### 2. **Obtenha suas credenciais**
   - No dashboard do Supabase, clique em **Settings** (canto inferior esquerdo)
   - Selecione a aba **API**
   - Copie:
     - **Project URL** → `SUPABASE_URL`
     - **anon public** (chave pública) → `SUPABASE_ANON_KEY`

### 3. **Configure o projeto**
   - Abra o arquivo `script.js`
   - Localize as primeiras linhas:
   ```javascript
   const SUPABASE_URL = "COLE_AQUI_A_URL_DO_SUPABASE";
   const SUPABASE_ANON_KEY = "COLE_AQUI_A_CHAVE_ANON_PUBLIC";
   ```
   - Substitua pelos valores copiados:
   ```javascript
   const SUPABASE_URL = "https://seu-projeto.supabase.co";
   const SUPABASE_ANON_KEY = "sua_chave_anon_aqui";
   ```

### 4. **Teste a Conexão**
   - Abra a página `contato.html` no navegador
   - Preencha o formulário de contato
   - Clique em "Salvar contato"
   - Você deverá ver a mensagem "Contato salvo com sucesso."
   - Verifique no Supabase se o registro apareceu na tabela `contatos`

## Observações
- A chave **anon** permite apenas inserções públicas (read + insert)
- A tabela `contatos` está configurada com Row Level Security (RLS)
- O formulário também integra WhatsApp para você entrar em contato direto

## Troubleshooting

### "Configure SUPABASE_URL..."
- Verifique se preencheu corretamente as variáveis em `script.js`

### "Não foi possível salvar agora..."
- Verifique se as credenciais estão corretas
- Abra o **Console do Navegador** (F12) para ver erros detalhados
- Confirme que o SQL foi executado e a tabela `contatos` existe
