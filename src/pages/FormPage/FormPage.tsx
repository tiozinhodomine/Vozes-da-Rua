import styles from "./style.module.css";

export function FormPage() {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Faça sua doação</h1>

      <label className={styles.field}>
        Escreva o seu nome
        <input type="text" required />
      </label>

      <label className={styles.field}>
        Escreva o seu e-mail
        <input type="email" required />
      </label>

      <label className={styles.field}>
        Escreva seu número de telefone
        <input
          autoComplete="tel"
          type="tel"
          placeholder="(11) 99999-9999"
          pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
          title="Formato esperado: (11) 99999-9999"
        />
      </label>

      <label className={styles.field}>
        <span className={styles.sectionTitle}>Forma de pagamento</span>
        <select name="payment-method" required>
          <option value="">Selecione uma opção</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
          <option value="bank-transfer">Pix</option>
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.sectionTitle}>Quantia da doação</span>
        <input
          type="number"
          min="1"
          step="0.01"
          placeholder="R$ 0,00"
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.sectionTitle}>
          Deseja fazer trabalho voluntário?
        </span>
        <select name="volunteer">
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </label>

      <label className={styles.field}>
        ONG de interesse
        <select name="ong">
          <option value="">Selecione uma opção</option>
          <option value="ong-1">ONG 1</option>
          <option value="ong-2">ONG 2</option>
          <option value="ong-3">ONG 3</option>
        </select>
      </label>

      <button className={styles.submitButton} type="submit">
        Enviar
      </button>
    </form>
  );
}
