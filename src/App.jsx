import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import minhaImagem from'./assets/senai.png'; 

function App() {
  return (
    <>
      <div className="header">
         <div className="container-logo">
          <img src={minhaImagem} alt="Logo SENAI" className="logo-senai" />
        </div>
        <nav className="links">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#mercado">Mercado</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </nav>
      </div>

      <div className="titulo">
        <h1>Transforme ideias em sistemas.</h1>
        <h2>Desenvolva soluções, aprenda novas tecnologias e construa seu futuro na área de TI.</h2>
      </div>

      <div className="body-01">
        <h2>O que é <span>Desenvolvimento de Sistemas?</span></h2>
        <h4>O desenvolvimento de sistemas é o processo de criar, testar e manter softwares e aplicativos para resolver problemas e automatizar tarefas através da tecnologia. Ele transforma uma necessidade humana ou de uma empresa em uma solução digital funcional.</h4>
      </div>
      <div className='cards'>
        <div class="card">
        <span class="card-badge">OBJETIVO</span>
        <h2 class="card-title">Do zero ao código: construa o seu futuro na tecnologia.</h2>
        <p class="card-text">Nosso objetivo é <strong>transformar você em um desenvolvedor completo</strong>. Te guiamos do absoluto zero até a criação de softwares e aplicativos reais.</p>
    </div>

    <div class="card">
        <span class="card-badge">METODOLOGIA</span>
        <h2 class="card-title">A teoria que você precisa com a prática que o mercado exige.</h2>
        <p class="card-text">Chega de aulas cansativas. Aqui você aprende lógica e as linguagens mais usadas criando <strong>projetos práticos para o seu portfólio</strong>.</p>
    </div>

    <div class="card">
        <span class="card-badge">MERCADO</span>
        <h2 class="card-title">Conquiste as habilidades para criar as soluções de amanhã.</h2>
        <p class="card-text">O mercado tech busca quem resolve problemas. Preparamos você para conquistar as <strong>vagas mais disputadas e bem pagas do setor</strong>.</p>
    </div>

        </div>
  
    </>
  );
}

export default App;
