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
    </form>
  )

}

