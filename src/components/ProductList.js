//Reatc
import React, { useState, useEffect } from 'react';

//Axios para as requisições
import axios from 'axios';

//Styles
import styles from './ProductList.module.css';

//Images
import Product1 from '../assets/product1.jpg';
import Product2 from '../assets/product2.jpg';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product4.jpg';
import Product5 from '../assets/product5.jpg';
import Product6 from '../assets/product6.jpg';
import Product7 from '../assets/product7.jpg';
import Product8 from '../assets/product8.jpg';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  const [details, setDetails] = useState(false);
  const [detailsId, setDetailsId] = useState('');

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState('');

  const handleDetails = (id) => {
    if (!details) {
      setDetails(true);
      setDetailsId(id);
    } else {
      setDetails(false);
      setDetailsId('');
    }
  };

  function handleDelete(id) {
    if (window.confirm('Tem certeza?')) {
      axios.delete(`http://localhost:3333/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    }
  }

  const showEditForm = (id) => {
    if (!edit) {
      setEditId(id);
      setEdit(true);
    } else {
      setEdit(false);
      setEditId('');
    }
  };

  const handleEdit = async (e, id) => {
    e.preventDefault();
    const codigo = e.target.codigo.value;
    const descricao = e.target.descricao.value;
    const preco = e.target.preco.value;

    const post = {
      codigo: codigo,
      descricao: descricao,
      preco: preco,
    };

    await axios
      .put(`http://localhost:3333/products/${id}`, post)
      .then((response) => {
        console.log('Atualizado com sucesso!');
        setEdit(false);
        setEditId('');
      })
      .catch((err) => console.log('Falha ao atualizar o produto' + err));

    alert('Editado com sucesso!');
  };

  //Armazena os produtos que vem do banco em 'products'
  useEffect(() => {
    axios
      .get('http://localhost:3333/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log('Falhou no GET dos produtos' + err));
  }, products);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div className={styles.card} key={product._id}>
          <img src={Product7} alt={product.descricao} />
          <div className={styles.cardContent}>
            {(edit && editId === product._id && (
              <form
                onSubmit={(e) => handleEdit(e, product._id)}
                className={styles.form}
              >
                <input
                  type="text"
                  name="codigo"
                  defaultValue={product.codigo}
                />
                <input type="text" name="preco" defaultValue={product.preco} />
                <input
                  type="text"
                  name="descricao"
                  defaultValue={product.descricao}
                />
                <button>Salvar</button>
              </form>
            )) || (
              <div>
                <p>Código: {product.codigo}</p>
                <p>Descrição: {product.descricao}</p>
                {details && detailsId === product._id && (
                  <div>
                    <p>Preço: R${product.preco}</p>
                    <p>Data: {product.data_cadastro}</p>
                  </div>
                )}
              </div>
            )}
            <div className={styles.buttons}>
              <button onClick={() => showEditForm(product._id)}>
                {(edit && editId === product._id && 'Cancelar') || 'Editar'}
              </button>
              <button onClick={() => handleDelete(product._id)}>Excluir</button>
              <button onClick={() => handleDetails(product._id)}>
                Detalhes
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
