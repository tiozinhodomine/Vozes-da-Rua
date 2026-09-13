export function Form() {
  return (
    <form>

      <label >
        Escreva o seu Nome
        <input type="text" />
      </label>

      <label >
        Escreva o seu Email
        <input type="email" />
      </label>


      <label >
        Escreva seu numero de telefone
        <input type="tel" />
      </label>

      <label >
        <p>Opções para Doação</p>
        <label htmlFor="payment-method">Forma de Pagamento</label>
        <select name="payment-method" id="payment-method">
          <option >Selecione uma opção</option>
          <option value="credit-card">Cartão de Crédito</option>
          <option value="debit-card">Cartão de Débito</option>
          <option value="bank-transfer">Pix</option>
        </select>
      </label>
      <label >
        <p>Quantia da Doação</p>
        <input type="number" placeholder="R$ 0,00" />
      </label>
      <button type="submit">Enviar</button>
      <label >
        <p>Deseja fazer trabalho voluntário?</p>
        <select name="Yes/No" id="">
          <option value="Yes">Sim</option>
          <option value="No">Não</option>
        </select>
        <select name="ONG" id="ONG">
          <option >Selecione uma opção</option>
          <option value="ong-1">ONG 1</option>
          <option value="ong-2">ONG 2</option>
          <option value="ong-3">ONG 3</option>
        </select>


      </label>
    </form>
  )

}

