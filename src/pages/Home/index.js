import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

// import { Container } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_detalhe1.jpg?ts=1562855980?ims=280x280"
          alt="tenis"
        />
        <strong>Tnis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_detalhe1.jpg?ts=1562855980?ims=280x280"
          alt="tenis"
        />
        <strong>Tnis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_detalhe1.jpg?ts=1562855980?ims=280x280"
          alt="tenis"
        />
        <strong>Tnis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_detalhe1.jpg?ts=1562855980?ims=280x280"
          alt="tenis"
        />
        <strong>Tnis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_detalhe1.jpg?ts=1562855980?ims=280x280"
          alt="tenis"
        />
        <strong>Tnis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-under-armour-charged-carbon-masculino/93/B78-4580-793/B78-4580-793_detalhe1.jpg?ts=1562855980?ims=280x280"
          alt="tenis"
        />
        <strong>Tnis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
