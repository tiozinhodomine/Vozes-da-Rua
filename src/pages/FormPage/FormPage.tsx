import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function FormPage() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <form className={styles.form}>
      <button
        className={styles.backButton}
        type="button"
        onClick={() => navigate("/")}
      >
        Voltar
        </button>
      <h1 className={styles.title}>Faça sua doação</h1>

      <label className={styles.field}>
        Escreva o seu nome
        <input type="text" required />
      </label>

      <label className={styles.field}>
        Escreva seu email
        <input
          id="email"
          name="email"
          placeholder="digite seu email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          type="email"
          required
          value={email}
          inputMode="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label htmlFor="phone" className={styles.field}>
        Escreva seu número de telefone
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern={String.raw`\([1-9][0-9]\) 9[0-9]{4}-[0-9]{4}`}
          placeholder="(11) 99999-9999"
          inputMode="tel"
          value={phone}
          onChange={(event) => setPhone(formatPhone(event.target.value))}
          required
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
