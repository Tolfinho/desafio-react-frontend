import React, { useState, useEffect } from 'react';

//Styles
import styles from './Home.module.css';

//Components
import ProductList from '../ProductList';
import axios from 'axios';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    const codigo = e.target.codigo.value;
    const descricao = e.target.descricao.value;
    const preco = e.target.preco.value;
    const timeElapsed = Date.now();
    let data = new Date(timeElapsed);
    data = data.toLocaleDateString();

    const post = {
      codigo: codigo,
      descricao: descricao,
      preco: preco,
      data_cadastro: data,
    };

    axios
      .post('http://localhost:3333/products', post)
      .then((response) => {
        console.log('Novo produto criado com sucesso!!');
      })
      .catch((err) =>
        console.log('Não foi possível cadastrar o novo produto\n' + err)
      );
  };

  const handleForm = () => {
    const form = document.getElementById('formContainer');
    if (form.style.display === 'flex') {
      form.style.display = 'none';
      setShow(false);
    } else {
      form.style.display = 'flex';
      setShow(true);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <h1>Todos os produtos</h1>
            <button onClick={handleForm} className={styles.newProduct}>
              {(!show && 'Novo Produto') || 'Fechar'}
            </button>
          </div>
          <div>
            <p>Filtrar por</p>
            <select name="filter" id="filter">
              <option value="1">Mais recentes</option>
              <option value="1">Mais relevantes</option>
              <option value="1">Mais avaliados</option>
              <option value="1">Mais vendidos</option>
            </select>
          </div>
        </div>
        <div className={styles.formContainer} id="formContainer">
          <form onSubmit={handleCreate}>
            <input
              type="text"
              name="codigo"
              placeholder="Código do produto"
              required
            />
            <input
              type="text"
              name="descricao"
              placeholder="Descição do produto"
              required
            />
            <input
              type="text"
              name="preco"
              placeholder="Preço do produto (Ex.: 189,99)"
              required
            />
            <input type="hidden" name="data" value="20/02/2022" />
            <button>Criar</button>
          </form>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
