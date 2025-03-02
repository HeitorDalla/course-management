"use strict";
 
const cursos = ['HTML', 'CSS', 'JAVASCRIPT'];
let indice = 0;

const cursosAdicionados = document.querySelector("#cursosAdicionados");

// Função para ver se o campo esta vazio
function isEmpty (value) {
    return value === '';
}

// Função para criar os elementos dentro do Array 'cursos' dinamicamente
function criarElementos(nomeCurso) {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("class", "novoCurso");
    novoElemento.innerHTML = nomeCurso;

    // Adicionando o evento de clique para selecionar
    novoElemento.addEventListener("click", (evento) => {
        const todosCursos = [...document.querySelectorAll(".novoCurso")];
        todosCursos.forEach((curso) => {
            curso.classList.remove('selecionado');
        })
        evento.target.classList.toggle('selecionado');
    });

    return novoElemento;
};

// Chamada para a função que criar elementos
cursos.forEach((curso) => {
    const novoCurso = criarElementos(curso);
    cursosAdicionados.appendChild(novoCurso);
    indice ++;
});

// Adicionando curso
const adicionarAntes = document.querySelector(".adicionarAntes");
adicionarAntes.addEventListener("click", () => {
    const nomeInput = document.querySelector("#nomeCurso");
    const nomeInputValue = nomeInput.value.trim();

    const todosCursos = [...document.querySelectorAll(".novoCurso")];
    let cursoExistente = false;

    todosCursos.forEach((curso) => {
        if (nomeInputValue.toUpperCase() === curso.innerHTML.toUpperCase()) {
            cursoExistente = true;
        }
    });

    if (!(isEmpty(nomeInputValue))) {
        if (cursoExistente) {
            alert("ERRO! O curso ja existe! Digite outro curso!");
        } else {
            const novoElementoCriado = criarElementos(nomeInputValue);
            cursosAdicionados.appendChild(novoElementoCriado);
            nomeInput.value = '';
        }
    } else {
        alert("ERRO! O campo esta vazio! Digite o nome do curso!");
    }
});

// Remover selecionado
const removerSelecionado = document.querySelector(".removerSelecionado");
removerSelecionado.addEventListener("click", () => {
    const cursoSelecionado = document.querySelector(".novoCurso.selecionado");
    if (cursoSelecionado) {
        cursosAdicionados.removeChild(cursoSelecionado);
    } else {
        alert("ERRO! Nenhum curso foi selecionado!");
    }
});

// Mostrar curso selecionado
const mostrarSelecionado = document.querySelector(".cursoSelecionado");
mostrarSelecionado.addEventListener("click", (evento) => {
    const cursoSelecionado = document.querySelector(".novoCurso.selecionado");
    if (cursoSelecionado) {
        alert(`O curso ${cursoSelecionado.textContent} foi selecionado!`);
    } else {
        alert(`ERRO! Nenhum curso foi selecionado!`);
    }
});