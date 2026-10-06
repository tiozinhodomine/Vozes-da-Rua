import { useState, type FormEvent,  } from "react";
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
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    phone: "",
    paymentMethod: "",
    valor: "",
    volunteer: "no",
    ong: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();         
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/doacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.phone.replace(/\D/g, ""), // only digits
          forma_pagamento: formData.paymentMethod,
          valor: Number(formData.valor),
          voluntario: formData.volunteer === "yes" ? "sim" : "nao",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao enviar doação");
      }

      setStatus("success");
      setMessage("Doação registrada com sucesso!");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Erro inesperado");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        <input
          type="text"
          name="nome"
          required
          value={formData.nome}
          onChange={handleChange}
        />
      </label>

      <label className={styles.field}>
        Escreva seu email
        <input
          id="email"
          name="email"
          placeholder="digite seu email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="phone" className={styles.field}>
        Escreva seu número de telefone
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(11) 99999-9999"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.sectionTitle}>Forma de pagamento</span>
        <select
          name="paymentMethod"
          required
          value={formData.paymentMethod}
          onChange={handleChange}
        >
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
          name="valor"
          min="1"
          step="0.01"
          placeholder="R$ 0,00"
          required
          value={formData.valor}
          onChange={handleChange}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.sectionTitle}>
          Deseja fazer trabalho voluntário?
        </span>
        <select
          name="volunteer"
          value={formData.volunteer}
          onChange={handleChange}
        >
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </label>

      <label className={styles.field}>
        ONG de interesse
        <select name="ong" value={formData.ong} onChange={handleChange}>
          <option value="">Selecione uma opção</option>
          <option value="ong-1">ONG 1</option>
          <option value="ong-2">ONG 2</option>
          <option value="ong-3">ONG 3</option>
        </select>
      </label>

      <button
        className={styles.submitButton}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando…" : "Enviar"}
      </button>

      {status === "success" && (
        <p style={{ color: "green" }}>{message}</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>{message}</p>
      )}
    </form>
  );
}