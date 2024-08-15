import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contato: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      mensagem: '',
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('Nome é obrigatório'),
      email: Yup.string().email('Email inválido').required('Email é obrigatório'),
      mensagem: Yup.string().required('Mensagem é obrigatória'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nome}
        />
        {formik.errors.nome ? <div>{formik.errors.nome}</div> : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          onChange={formik.handleChange}
          value={formik.values.mensagem}
        />
        {formik.errors.mensagem ? <div>{formik.errors.mensagem}</div> : null}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contato;
